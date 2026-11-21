import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { INITIAL_ANIME_DATABASE, INITIAL_WATCHLIST, INITIAL_USER } from '../data/animeDatabase';
import confetti from 'canvas-confetti';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // 1. User state with localStorage persistence (FR1, FR11)
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('anitrack_user');
      return savedUser ? JSON.parse(savedUser) : INITIAL_USER;
    } catch (e) {
      return INITIAL_USER;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('anitrack_jwt_token') || 'mock_jwt_header.payload.signature_xyz789';
  });

  // 2. Master Anime Database
  const [animeDatabase, setAnimeDatabase] = useState(() => {
    try {
      const saved = localStorage.getItem('anitrack_anime_db');
      return saved ? JSON.parse(saved) : INITIAL_ANIME_DATABASE;
    } catch (e) {
      return INITIAL_ANIME_DATABASE;
    }
  });

  // 3. User's Watchlist (FR5, FR6, FR7, FR8, FR9, FR10)
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem('anitrack_watchlist');
      return saved ? JSON.parse(saved) : INITIAL_WATCHLIST;
    } catch (e) {
      return INITIAL_WATCHLIST;
    }
  });

  // 4. UI States
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'explore' | 'watchlist' | 'progress' | 'profile' | 'settings'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // 5. Notifications state
  const [notifications, setNotifications] = useState([
    {
      id: 'notif_1',
      title: 'Welcome to AniTrack! 🌟',
      message: 'Track every episode and discover new anime worlds.',
      time: 'Just now',
      read: false
    },
    {
      id: 'notif_2',
      title: 'Demon Slayer Progress',
      message: 'You are on Episode 12 of 26. Keep going!',
      time: '2 hours ago',
      read: false
    },
    {
      id: 'notif_3',
      title: 'New Episode Available!',
      message: 'One Piece Episode 1081 is now available to track.',
      time: '1 day ago',
      read: true
    }
  ]);

  // Persist states
  useEffect(() => {
    if (user) {
      localStorage.setItem('anitrack_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('anitrack_user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('anitrack_jwt_token', token);
    } else {
      localStorage.removeItem('anitrack_jwt_token');
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem('anitrack_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem('anitrack_anime_db', JSON.stringify(animeDatabase));
  }, [animeDatabase]);

  // Toast helper
  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage((current) => (current?.id ? null : current));
    }, 3500);
  };

  // Add notification
  const addNotification = (title, message) => {
    setNotifications((prev) => [
      {
        id: `notif_${Date.now()}`,
        title,
        message,
        time: 'Just now',
        read: false
      },
      ...prev
    ]);
  };

  // 6. Real-time Computed Stats (FR8)
  const stats = useMemo(() => {
    const watchingList = watchlist.filter((item) => item.status === 'Watching');
    const completedList = watchlist.filter((item) => item.status === 'Completed');
    const planToWatchList = watchlist.filter((item) => item.status === 'Plan to Watch');
    const droppedList = watchlist.filter((item) => item.status === 'Dropped');

    const totalEpisodesWatched = watchlist.reduce((acc, item) => {
      return acc + (Number(item.episodesWatched) || 0);
    }, 0);

    return {
      watchingCount: watchingList.length,
      completedCount: completedList.length,
      planToWatchCount: planToWatchList.length,
      droppedCount: droppedList.length,
      totalEpisodes: totalEpisodesWatched,
      totalWatchlistCount: watchlist.length
    };
  }, [watchlist]);

  // Helper to find anime metadata from database or mock entry
  const getAnimeInfo = (animeId, mockFallback = {}) => {
    const found = animeDatabase.find((a) => a.id === animeId);
    if (found) return found;

    return {
      id: animeId,
      title: mockFallback.mockTitle || 'Unknown Anime',
      japaneseTitle: 'アニメ',
      rating: 8.5,
      score: 8.5,
      totalEpisodes: mockFallback.mockTotal || 24,
      image: mockFallback.mockImage || '/assets/pop_one_piece.png',
      banner: '/assets/hero_banner.png',
      status: 'Finished Airing',
      genres: mockFallback.mockGenres || ['Action', 'Fantasy'],
      studio: 'Animation Studio',
      synopsis: 'An exciting anime series tracked in your personal AniTrack watchlist.'
    };
  };

  // 7. Update watched episodes (FR6, FR10)
  const updateEpisodesWatched = (animeId, newCount) => {
    const target = watchlist.find((w) => w.animeId === animeId);
    const anime = getAnimeInfo(animeId, target);
    const maxEp = anime.totalEpisodes || 1000;
    const clamped = Math.max(0, Math.min(newCount, maxEp));

    // FR10: Automatically mark anime as Completed when watched episodes equal total episodes
    let newStatus = target?.status || 'Watching';
    let autoCompleted = false;

    if (clamped >= maxEp && maxEp > 0 && newStatus !== 'Completed') {
      newStatus = 'Completed';
      autoCompleted = true;
    } else if (clamped < maxEp && newStatus === 'Completed' && newCount < target.episodesWatched) {
      newStatus = 'Watching';
    }

    setWatchlist((prev) => {
      const exists = prev.some((w) => w.animeId === animeId);
      if (exists) {
        return prev.map((item) => {
          if (item.animeId === animeId) {
            return {
              ...item,
              episodesWatched: clamped,
              status: newStatus,
              updatedAt: new Date().toISOString()
            };
          }
          return item;
        });
      } else {
        return [
          {
            animeId,
            status: newStatus,
            episodesWatched: clamped,
            score: null,
            notes: '',
            updatedAt: new Date().toISOString()
          },
          ...prev
        ];
      }
    });

    if (autoCompleted) {
      // Fire confetti celebrate!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      showToast(`🎉 Completed "${anime.title}"! Congratulations!`, 'success');
      addNotification('Anime Completed! 🏆', `You completed all ${maxEp} episodes of ${anime.title}!`);
    } else {
      showToast(`Updated "${anime.title}" to episode ${clamped}/${maxEp}`, 'info');
    }
  };

  // Quick increment episode
  const incrementEpisode = (animeId) => {
    const item = watchlist.find((w) => w.animeId === animeId);
    const current = item ? Number(item.episodesWatched) || 0 : 0;
    updateEpisodesWatched(animeId, current + 1);
  };

  // Quick decrement episode
  const decrementEpisode = (animeId) => {
    const item = watchlist.find((w) => w.animeId === animeId);
    const current = item ? Number(item.episodesWatched) || 0 : 0;
    updateEpisodesWatched(animeId, Math.max(0, current - 1));
  };

  // 8. Add or change anime watchlist status (FR5, FR9)
  const setWatchlistEntry = (animeId, newStatus, currentWatched = null, userScore = null, userNotes = '') => {
    const anime = getAnimeInfo(animeId);
    const maxEp = anime.totalEpisodes || 24;

    setWatchlist((prev) => {
      const existing = prev.find((w) => w.animeId === animeId);
      let watched = currentWatched !== null ? currentWatched : existing?.episodesWatched || 0;

      if (newStatus === 'Completed') {
        watched = maxEp;
      }

      if (existing) {
        return prev.map((w) =>
          w.animeId === animeId
            ? {
                ...w,
                status: newStatus,
                episodesWatched: watched,
                score: userScore !== null ? userScore : w.score,
                notes: userNotes !== undefined ? userNotes : w.notes,
                updatedAt: new Date().toISOString()
              }
            : w
        );
      } else {
        return [
          {
            animeId,
            status: newStatus,
            episodesWatched: watched,
            score: userScore,
            notes: userNotes,
            updatedAt: new Date().toISOString()
          },
          ...prev
        ];
      }
    });

    showToast(`Added "${anime.title}" to ${newStatus}`, 'success');
    addNotification('Watchlist Updated', `"${anime.title}" marked as ${newStatus}`);
  };

  // 9. Remove entry from watchlist (FR9)
  const removeFromWatchlist = (animeId) => {
    const anime = getAnimeInfo(animeId);
    setWatchlist((prev) => prev.filter((w) => w.animeId !== animeId));
    showToast(`Removed "${anime.title}" from your watchlist`, 'info');
  };

  // 10. Authentication Handlers (FR1, FR11)
  const login = (username, password) => {
    // Simulated JWT token generation
    const mockToken = `jwt.${btoa(username)}.${Date.now()}`;
    const loggedInUser = {
      id: `usr_${Date.now()}`,
      username: username || 'OtakuFan',
      displayName: username || 'OtakuFan',
      email: `${username.toLowerCase()}@anitrack.io`,
      avatar: '/assets/avatar.png',
      isPremium: false,
      joinedDate: 'November 2026',
      bio: 'Anime tracker enthusiast!'
    };
    setUser(loggedInUser);
    setToken(mockToken);
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${loggedInUser.displayName}!`, 'success');
  };

  const register = (username, email, password) => {
    const mockToken = `jwt.${btoa(username)}.${Date.now()}`;
    const newUser = {
      id: `usr_${Date.now()}`,
      username: username,
      displayName: username,
      email: email,
      avatar: '/assets/avatar.png',
      isPremium: false,
      joinedDate: 'November 2026',
      bio: 'Ready to track my anime journey.'
    };
    setUser(newUser);
    setToken(mockToken);
    setIsAuthModalOpen(false);
    showToast(`Account created! Welcome to AniTrack, ${username}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('anitrack_jwt_token');
    showToast('You have been logged out.', 'info');
  };

  const upgradeToPremium = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setUser((prev) => ({ ...prev, isPremium: true }));
    setIsPremiumModalOpen(false);
    showToast('🎉 You are now an AniTrack PRO member!', 'success');
    addNotification('Pro Unlocked! 👑', 'Thank you for upgrading to AniTrack Pro!');
  };

  // Reset to initial screenshot demo state
  const resetToDemoData = () => {
    setWatchlist(INITIAL_WATCHLIST);
    setUser(INITIAL_USER);
    setAnimeDatabase(INITIAL_ANIME_DATABASE);
    showToast('Reset data to match official screenshot values!', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        watchlist,
        animeDatabase,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        selectedAnime,
        setSelectedAnime,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        isPremiumModalOpen,
        setIsPremiumModalOpen,
        isNotificationsOpen,
        setIsNotificationsOpen,
        notifications,
        toastMessage,
        showToast,
        addNotification,
        stats,
        getAnimeInfo,
        updateEpisodesWatched,
        incrementEpisode,
        decrementEpisode,
        setWatchlistEntry,
        removeFromWatchlist,
        login,
        register,
        logout,
        upgradeToPremium,
        resetToDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
