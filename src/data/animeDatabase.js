export const INITIAL_ANIME_DATABASE = [
  {
    id: 'one-piece',
    title: 'One Piece',
    japaneseTitle: 'ワンピース',
    rating: 9.0,
    score: 9.0,
    totalEpisodes: 1080,
    image: '/assets/pop_one_piece.png',
    banner: '/assets/hero_banner.png',
    status: 'Currently Airing',
    genres: ['Action', 'Adventure', 'Fantasy', 'Comedy'],
    studio: 'Toei Animation',
    year: 1999,
    synopsis: 'Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who will never give up until he has claimed the greatest treasure on Earth: the Legendary One Piece!'
  },
  {
    id: 'naruto-shippuden',
    title: 'Naruto Shippuden',
    japaneseTitle: 'NARUTO -ナルト- 疾風伝',
    rating: 8.9,
    score: 8.9,
    totalEpisodes: 500,
    image: '/assets/pop_naruto.png',
    banner: '/assets/hero_banner.png',
    status: 'Finished Airing',
    genres: ['Action', 'Adventure', 'Martial Arts', 'Shounen'],
    studio: 'Studio Pierrot',
    year: 2007,
    synopsis: 'It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of rogue elite ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.'
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    japaneseTitle: '鬼滅の刃',
    rating: 8.8,
    score: 8.8,
    totalEpisodes: 26,
    image: '/assets/pop_demon_slayer.png',
    banner: '/assets/cw_demon_slayer.png',
    status: 'Finished Airing',
    genres: ['Action', 'Dark Fantasy', 'Historical', 'Supernatural'],
    studio: 'ufotable',
    year: 2019,
    synopsis: 'Ever since the death of his father, the burden of supporting the family has fallen upon Tanjiro Kamado. One day, after returning home from selling charcoal, he finds his family slaughtered and his sister Nezuko turned into a demon. Tanjiro embarks on a dangerous quest to find a cure and avenge his loved ones.'
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    japaneseTitle: '呪術廻戦',
    rating: 8.9,
    score: 8.9,
    totalEpisodes: 24,
    image: '/assets/pop_jujutsu_kaisen.png',
    banner: '/assets/cw_jujutsu_kaisen.png',
    status: 'Finished Airing',
    genres: ['Action', 'Dark Fantasy', 'Supernatural', 'Shounen'],
    studio: 'MAPPA',
    year: 2020,
    synopsis: 'Idly indulging in supernatural activities with the Occult Club, high schooler Yuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle takes a turn for the strange when he unwittingly swallows a cursed finger talisman belonging to the demon Ryomen Sukuna.'
  },
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    japaneseTitle: '進撃の巨人',
    rating: 9.1,
    score: 9.1,
    totalEpisodes: 87,
    image: '/assets/pop_aot.png',
    banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Drama', 'Mystery', 'Military'],
    studio: 'WIT Studio / MAPPA',
    year: 2013,
    synopsis: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. Eren Yeager vows to cleanse the earth of every single Titan after witnessing the tragedy that befalls his hometown.'
  },
  {
    id: 'spy-x-family',
    title: 'Spy x Family',
    japaneseTitle: 'スパイファミリー',
    rating: 8.7,
    score: 8.7,
    totalEpisodes: 25,
    image: '/assets/pop_spy_family.png',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Comedy', 'Spy', 'Slice of Life'],
    studio: 'WIT Studio / CloverWorks',
    year: 2022,
    synopsis: 'World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as the loving husband and father, he will infiltrate an elite school to get close to a high-profile politician. What he does not know is that his wife is an assassin and his adopted daughter has telepathic abilities!'
  },
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    japaneseTitle: 'チェンソーマン',
    rating: 8.6,
    score: 8.6,
    totalEpisodes: 12,
    image: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Supernatural', 'Dark Fantasy'],
    studio: 'MAPPA',
    year: 2022,
    synopsis: 'Denji is a young man living in extreme poverty, slashing away at his debts from deceased father by working as a devil hunter with Pochita, the Chainsaw Devil. After a betrayal leaves Denji for dead, Pochita merges with him, giving him devil chainsaw powers.'
  },
  {
    id: 'solo-leveling',
    title: 'Solo Leveling',
    japaneseTitle: '俺だけレベルアップな件',
    rating: 8.5,
    score: 8.5,
    totalEpisodes: 12,
    image: 'https://cdn.myanimelist.net/images/anime/1897/140224.jpg',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    status: 'Currently Airing',
    genres: ['Action', 'Adventure', 'Fantasy'],
    studio: 'A-1 Pictures',
    year: 2024,
    synopsis: 'In a world where hunters must battle deadly monsters to protect humanity, Sung Jinwoo, known as the weakest hunter of all mankind, is fatally wounded in a high-rank dungeon. Before dying, a mysterious quest window appears, granting him the unique ability to level up infinitely.'
  },
  {
    id: 'bleach-tybw',
    title: 'Bleach: Thousand-Year Blood War',
    japaneseTitle: 'BLEACH 千年血戦篇',
    rating: 9.0,
    score: 9.0,
    totalEpisodes: 39,
    image: 'https://cdn.myanimelist.net/images/anime/1908/135406.jpg',
    banner: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80',
    status: 'Currently Airing',
    genres: ['Action', 'Adventure', 'Supernatural', 'Shounen'],
    studio: 'Studio Pierrot',
    year: 2022,
    synopsis: 'The Soul Society is suddenly attacked by the Wandenreich, an empire of Quincies led by Yhwach, declaring war against the Soul Reapers. Substitute Soul Reaper Ichigo Kurosaki enters the fray with his allies to save the realms.'
  },
  {
    id: 'frieren',
    title: "Frieren: Beyond Journey's End",
    japaneseTitle: '葬送のフリーレン',
    rating: 9.3,
    score: 9.3,
    totalEpisodes: 28,
    image: 'https://cdn.myanimelist.net/images/anime/1015/138075.jpg',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    studio: 'Madhouse',
    year: 2023,
    synopsis: 'The demon king has been defeated, and the victorious hero party returns home before disbanding. The four—mage Frieren, hero Himmel, priest Heiter, and warrior Eisen—reminisce over their 10-year journey as the moment to say goodbye arrives.'
  },
  {
    id: 'death-note',
    title: 'Death Note',
    japaneseTitle: 'デスノート',
    rating: 9.0,
    score: 9.0,
    totalEpisodes: 37,
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Mystery', 'Psychological', 'Supernatural', 'Thriller'],
    studio: 'Madhouse',
    year: 2006,
    synopsis: 'A high school prodigy named Light Yagami stumbles upon a notebook dropped by a Shinigami god of death. Anyone whose name is written in the notebook dies. A battle of wits begins with the master detective L.'
  },
  {
    id: 'fmab',
    title: 'Fullmetal Alchemist: Brotherhood',
    japaneseTitle: '鋼の錬金術師 FULLMETAL ALCHEMIST',
    rating: 9.1,
    score: 9.1,
    totalEpisodes: 64,
    image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    studio: 'Bones',
    year: 2009,
    synopsis: 'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in catastrophic conditions. They search for the Philosopher’s Stone to restore their bodies.'
  },
  {
    id: 'hunter-x-hunter',
    title: 'Hunter x Hunter',
    japaneseTitle: 'ハンター×ハンター',
    rating: 9.0,
    score: 9.0,
    totalEpisodes: 148,
    image: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    banner: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Adventure', 'Fantasy'],
    studio: 'Madhouse',
    year: 2011,
    synopsis: 'Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With friends Killua, Kurapika, and Leorio, he embarks on an unforgettable journey to find his father.'
  },
  {
    id: 'vinland-saga',
    title: 'Vinland Saga',
    japaneseTitle: 'ヴィンランド・サガ',
    rating: 8.8,
    score: 8.8,
    totalEpisodes: 48,
    image: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Adventure', 'Drama', 'Historical'],
    studio: 'WIT Studio / MAPPA',
    year: 2019,
    synopsis: 'Young Thorfinn grew up listening to the stories of old sailors who had traveled the ocean and reached the place of legend, Vinland. Raised by Vikings who killed his father, he seeks revenge.'
  },
  {
    id: 'cyberpunk-edgerunners',
    title: 'Cyberpunk: Edgerunners',
    japaneseTitle: 'サイバーパンク エッジランナーズ',
    rating: 8.6,
    score: 8.6,
    totalEpisodes: 10,
    image: 'https://cdn.myanimelist.net/images/anime/1816/123507.jpg',
    banner: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80',
    status: 'Finished Airing',
    genres: ['Action', 'Sci-Fi'],
    studio: 'Trigger',
    year: 2022,
    synopsis: 'A street kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an edgerunner: a mercenary outlaw also known as a cyberpunk.'
  }
];

// Initial user watchlist configured to match the UI Design exactly:
// Watching = 12, Completed = 48, Episodes = 620
export const INITIAL_WATCHLIST = [
  // 1. Demon Slayer (Watching, 12 / 26 => 46%)
  {
    animeId: 'demon-slayer',
    status: 'Watching',
    episodesWatched: 12,
    score: 9,
    notes: 'Tanjiro water breathing animation is phenomenal.',
    updatedAt: '2026-11-20T10:00:00Z'
  },
  // 2. Jujutsu Kaisen (Watching, 8 / 24 => 33%)
  {
    animeId: 'jujutsu-kaisen',
    status: 'Watching',
    episodesWatched: 8,
    score: 9,
    notes: 'Gojo Satoru is the coolest sensei.',
    updatedAt: '2026-11-20T08:30:00Z'
  },
  // 3. One Piece (Watching)
  {
    animeId: 'one-piece',
    status: 'Watching',
    episodesWatched: 120,
    score: 10,
    notes: 'Wano arc was peak fiction.',
    updatedAt: '2026-11-19T14:20:00Z'
  },
  // 4. Chainsaw Man (Watching)
  {
    animeId: 'chainsaw-man',
    status: 'Watching',
    episodesWatched: 6,
    score: 8,
    notes: 'Pochita is precious.',
    updatedAt: '2026-11-18T18:00:00Z'
  },
  // 5. Solo Leveling (Watching)
  {
    animeId: 'solo-leveling',
    status: 'Watching',
    episodesWatched: 6,
    score: 9,
    notes: 'Arise!',
    updatedAt: '2026-11-17T20:00:00Z'
  },
  // 6. Bleach TYBW (Watching)
  {
    animeId: 'bleach-tybw',
    status: 'Watching',
    episodesWatched: 14,
    score: 9,
    notes: 'Bankai reveals are crazy.',
    updatedAt: '2026-11-16T12:00:00Z'
  },
  // 7. Frieren (Watching)
  {
    animeId: 'frieren',
    status: 'Watching',
    episodesWatched: 16,
    score: 10,
    notes: 'Absolute masterpiece of storytelling.',
    updatedAt: '2026-11-15T15:00:00Z'
  },
  // 8. Spy x Family (Watching)
  {
    animeId: 'spy-x-family',
    status: 'Watching',
    episodesWatched: 18,
    score: 9,
    notes: 'Anya waku waku!',
    updatedAt: '2026-11-14T11:00:00Z'
  },
  // 9. Vinland Saga (Watching)
  {
    animeId: 'vinland-saga',
    status: 'Watching',
    episodesWatched: 20,
    score: 9,
    notes: 'I have no enemies.',
    updatedAt: '2026-11-13T09:00:00Z'
  },
  // 10. Extra Watching anime to match 12 total Watching
  {
    animeId: 'w-item-10',
    mockTitle: 'My Hero Academia',
    mockTotal: 138,
    mockImage: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    mockGenres: ['Action', 'School', 'Super Power'],
    status: 'Watching',
    episodesWatched: 25,
    score: 8,
    notes: 'Plus Ultra!',
    updatedAt: '2026-11-12T16:00:00Z'
  },
  {
    animeId: 'w-item-11',
    mockTitle: 'Haikyuu!!',
    mockTotal: 85,
    mockImage: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg',
    mockGenres: ['Sports', 'School', 'Comedy'],
    status: 'Watching',
    episodesWatched: 35,
    score: 9,
    notes: 'The fly boys!',
    updatedAt: '2026-11-11T13:00:00Z'
  },
  {
    animeId: 'w-item-12',
    mockTitle: 'Mob Psycho 100',
    mockTotal: 37,
    mockImage: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg',
    mockGenres: ['Action', 'Comedy', 'Supernatural'],
    status: 'Watching',
    episodesWatched: 20,
    score: 9,
    notes: 'Reigen Arataka masterclass.',
    updatedAt: '2026-11-10T10:00:00Z'
  },

  // Completed Section: Exactly 48 completed animes to match UI screenshot (Completed: 48)
  // Let's seed completed animes with realistic episode counts so the total sum is 620!
  // Let's compute: 12 + 8 + 120 + 6 + 6 + 14 + 16 + 18 + 20 + 25 + 35 + 20 = 300 episodes from Watching
  // 620 - 300 = 320 episodes across completed titles
  {
    animeId: 'attack-on-titan',
    status: 'Completed',
    episodesWatched: 87,
    score: 10,
    notes: 'Shinzo wo Sasageyo! What an ending.',
    updatedAt: '2026-10-01T12:00:00Z'
  },
  {
    animeId: 'death-note',
    status: 'Completed',
    episodesWatched: 37,
    score: 9,
    notes: 'I will take a potato chip... and eat it!',
    updatedAt: '2026-09-15T12:00:00Z'
  },
  {
    animeId: 'fmab',
    status: 'Completed',
    episodesWatched: 64,
    score: 10,
    notes: 'Equivalent exchange.',
    updatedAt: '2026-08-20T12:00:00Z'
  },
  {
    animeId: 'cyberpunk-edgerunners',
    status: 'Completed',
    episodesWatched: 10,
    score: 9,
    notes: 'I really want to stay at your house.',
    updatedAt: '2026-07-10T12:00:00Z'
  },
  // Generate remaining completed records to ensure Completed count == 48 and total episodes == 620
  ...Array.from({ length: 44 }, (_, i) => {
    // 320 - (87 + 37 + 64 + 10 = 198) = 122 episodes remaining distributed over 44 short films/OVAs/mini-series
    const epCount = i < 34 ? 3 : 2; // (34 * 3) + (10 * 2) = 102 + 20 = 122 episodes!
    const names = [
      'Cowboy Bebop Movie', 'Spirited Away', 'Princess Mononoke', 'Your Name', 'Weathering With You',
      'A Silent Voice', 'Akira', 'Ghost in the Shell', 'Perfect Blue', 'The Boy and the Heron',
      'Suzume', '5 Centimeters Per Second', 'Garden of Words', 'Wolf Children', 'Paprika',
      'The Girl Who Leapt Through Time', 'Redline', 'Summer Wars', 'Promare', 'Tokyo Godfathers',
      'Millennium Actress', 'I Want to Eat Your Pancreas', 'Steins;Gate: The Movie', 'K-On! Movie',
      'Madoka Magica: Rebellion', 'Grave of the Fireflies', 'Howl\'s Moving Castle', 'Castle in the Sky',
      'Ponyo', 'Nausicaä', 'The Wind Rises', 'When Marnie Was There', 'Violet Evergarden: The Movie',
      'Demon Slayer: Mugen Train', 'Jujutsu Kaisen 0', 'Fate/stay night: Heaven\'s Feel I',
      'Fate/stay night: Heaven\'s Feel II', 'Fate/stay night: Heaven\'s Feel III', 'Kizumonogatari I',
      'Kizumonogatari II', 'Kizumonogatari III', 'One Piece Film: Red', 'Dragon Ball Super: Broly',
      'Stand by Me Doraemon'
    ];
    return {
      animeId: `completed-item-${i + 1}`,
      mockTitle: names[i] || `Anime Special ${i + 1}`,
      mockTotal: epCount,
      mockImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80',
      mockGenres: ['Animation', 'Drama', 'Fantasy'],
      status: 'Completed',
      episodesWatched: epCount,
      score: 8 + (i % 3),
      notes: 'Excellent watch, masterpiece animation.',
      updatedAt: `2026-0${1 + (i % 8)}-10T12:00:00Z`
    };
  })
];

export const INITIAL_USER = {
  id: 'usr_001',
  username: 'Harish',
  displayName: 'Harish',
  email: 'harish@anitrack.io',
  avatar: '/assets/avatar.png',
  isPremium: false,
  joinedDate: 'November 2024',
  bio: 'Anime enthusiast & story lover. Tracking my journey through the anime universe!'
};
