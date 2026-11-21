# AniTrack — Anime Tracking Application

> **Replication of UI Design (`59037b4e-6b22-476b-98d5-0a7ef0964f02.png`) & Full Implementation of IEEE 830 SRS Document**

AniTrack is a modern anime discovery and episode tracking web application. It allows anime fans to explore titles, manage their personal watchlist across statuses (*Watching, Completed, Plan to Watch, Dropped*), update episode progress, and view live statistics.

---

## 🚀 Quick Start (Running the App)

You can launch and use AniTrack in multiple convenient ways:

### Option 1: Direct Browser Launch (Zero Setup)
Simply double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox):
```bash
# Double-click index.html or open via command line:
start index.html
```

### Option 2: One-Click Windows Batch Runner
Double-click `run_app.bat` to start the local Node.js server and open the app at `http://localhost:3000`.

### Option 3: Node.js Server
```bash
node server.js
# Open http://localhost:3000
```

### Option 4: Python Built-In Server
```bash
python server.py
# Or: python -m http.server 3000
# Open http://localhost:3000
```

---

## 🎨 Strict UI Design Replication Highlights

Every element from the UI design (`59037b4e-6b22-476b-98d5-0a7ef0964f02.png`) has been replicated:

1. **Color Palette & Glassmorphism**:
   - Deep Midnight Space Background: `#090810`
   - Dark Translucent Glass Cards: `#131124` / `#16112c` with borders `rgba(139, 92, 246, 0.15)`
   - Primary Royal Purple Accents: `#7c3aed`, `#8b5cf6`, `#a78bfa`
2. **Left Sidebar**:
   - **AniTrack Logo**: Signature purple cloud mascot with skull/anime face and subtitle `"Track • Discover • Enjoy"`.
   - **Navigation Items**:
     - `Home`: Active state with vibrant purple pill background and crisp white icon.
     - `Explore Anime`: Search / compass icon.
     - `My Watchlist`: Bookmark ribbon icon with live item count badge.
     - `My Progress`: Bar chart analytics icon.
     - `Profile`: User avatar silhouette icon.
     - `Settings`: Gear / cog preferences icon.
   - **Go Premium Promo Card**: Golden crown icon (`👑`), `"Unlock more features and track like a pro!"`, and purple `"Upgrade Now"` button.
   - **Atmospheric Artwork**: Silhouette of Japanese Torii gate under glowing moon with sakura blossoms.
3. **Header**:
   - Rounded pill search bar with magnifying glass: `"Search anime... (e.g. One Piece)"`.
   - Live search autocomplete dropdown with instant filtering.
   - Notification bell with glowing red alert badge.
   - User profile avatar circle with green online presence indicator.
4. **Hero Banner**:
   - Deep purple anime cloud nebula background.
   - Pill badge: `"YOUR ANIME UNIVERSE"`.
   - High-impact typography: `"Track every"` (white) and `"episode."` (purple gradient).
   - Subtitle: `"Discover anime. Build your watchlist. Keep your story going."`.
   - Dual action buttons: `[▶ Explore Anime]` and `[🔖 My Watchlist]`.
   - 4 carousel indicator dots (first active white pill).
   - High-resolution Monkey D. Luffy reaching hand out with straw hat and the Thousand Sunny ship.
5. **Quick Stats Bar (3 Cards)**:
   - **Watching Card**: Purple circle with play icon, value **12**, ninja silhouette.
   - **Completed Card**: Teal circle with checkmark icon, value **48**, swordsman silhouette.
   - **Episodes Card**: Amber circle with star icon, value **620**, pagoda silhouette.
6. **Continue Watching Section**:
   - Section header with vertical purple accent bar and `"View all ->"` link.
   - **Demon Slayer Card**: Tanjiro Kamado art, `"Episode 12 / 26"`, purple progress bar at **46%**, circular play button.
   - **Jujutsu Kaisen Card**: Yuji Itadori art, `"Episode 8 / 24"`, purple progress bar at **33%**, circular play button.
   - **Anime Forever Panel**: Deep violet vertical panel with Japanese calligraphy `"アニメは永遠に"` (*Anime Forever*) with katana samurai silhouette under glowing moon.
7. **Popular Anime Row**:
   - Section header with vertical purple accent bar and `"View all ->"` link.
   - 6 Featured Anime Cards with dark translucent star rating badges:
     1. **One Piece** — `★ 9.0`
     2. **Naruto Shippuden** — `★ 8.9`
     3. **Demon Slayer** — `★ 8.8`
     4. **Jujutsu Kaisen** — `★ 8.9`
     5. **Attack on Titan** — `★ 9.1`
     6. **Spy x Family** — `★ 8.7`

---

## 📋 SRS IEEE 830 Compliance Matrix

| Requirement | Description | Implementation in AniTrack |
|---|---|---|
| **FR1** | Secure User Registration and Login | Sign In & Register modal with simulated JWT token, persistent user profile, guest mode, and switch accounts. |
| **FR2** | Home Page with Hero, Stats, Continue Watching | Full homepage containing hero banner, live 3 stats cards, continue watching cards, and popular anime row. |
| **FR3** | Browse & Search Anime by Title and Genre | Real-time debounced global search + dedicated Explore page with genre filters (Action, Shounen, Dark Fantasy, etc.) and sorting. |
| **FR4** | Anime Details Modal | Click any anime to view high-res banner, title, studio, year, score, genre tags, full synopsis, and episode controls. |
| **FR5** | Add Anime to Watchlist with Status | Add anime with statuses: `Watching`, `Completed`, `Plan to Watch`, `Dropped`. |
| **FR6** | Update Watched Episodes | `+` and `-` episode steppers, quick play button on Continue Watching cards, and direct input. |
| **FR7** | Continue Watching Section | Live reactive section displaying all anime with status `Watching` with calculated percentage bars. |
| **FR8** | Dynamic Compute Statistics | Real-time recalculation of Watching count, Completed count, and Total Episodes watched across the application. |
| **FR9** | Edit or Remove Watchlist Entries | Update status, adjust episodes, or delete entries directly from the Watchlist tab. |
| **FR10** | Auto-Complete on Final Episode | When watched episodes equal total episodes, status automatically changes to `Completed` with celebratory confetti! |
| **FR11** | User Logout | User profile menu provides instant log out and session clearing. |

---

## 📁 Project Structure

```
anime/
├── assets/                          # Pixel-perfect extracted design assets
│   ├── logo.png                     # AniTrack cloud skull logo
│   ├── avatar.png                   # User profile avatar
│   ├── hero_banner.png              # Full hero banner artwork
│   ├── hero_luffy.png               # Luffy and Thousand Sunny cutout
│   ├── cw_demon_slayer.png          # Demon Slayer Continue Watching art
│   ├── cw_jujutsu_kaisen.png        # Jujutsu Kaisen Continue Watching art
│   ├── anime_forever.png            # Anime Forever samurai artwork
│   ├── sidebar_torii.png            # Torii gate silhouette artwork
│   ├── pop_one_piece.png            # Popular anime poster
│   ├── pop_naruto.png               # Popular anime poster
│   ├── pop_demon_slayer.png         # Popular anime poster
│   ├── pop_jujutsu_kaisen.png       # Popular anime poster
│   ├── pop_aot.png                  # Popular anime poster
│   └── pop_spy_family.png           # Popular anime poster
├── index.html                       # Standalone interactive React application
├── server.js                        # Node.js ES Module REST API server & static host
├── server.py                        # Python HTTP server runner
├── run_app.bat                      # 1-Click Windows launch script
├── package.json                     # Node.js project metadata & dependencies
├── tailwind.config.js               # Tailwind CSS theme configuration
└── README.md                        # Documentation & verification guide
```
