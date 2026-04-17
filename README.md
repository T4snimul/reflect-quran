# ReflectQuran - A Minimal Quran Reflection Web App

ReflectQuran is a modern, minimal web application inspired by apps like ThinkQuran. The goal is to create a clean and distraction-free platform for reading the Quran, exploring translations, listening to recitations, and writing personal reflections.

The focus is on simplicity, performance, and a thoughtful user experience rather than feature overload.

## Teck Stack

- **Frontend:** React (with vite)
- **Styling:** TailwindCSS
- **State Management:** React ContextAPI (Zustand Later)
- **Backend (Phase 2):** Firebase or Supabase

## Data Sources

- [Quran.com API](https://api-docs.quran.foundation/docs/quickstart/)
- [AlQuran Cloud API](https://alquran.cloud/api)

**Focus:**

- Surah and Ayah data
- Multiple Translations
- Audio Recitations

## Core Features (MVP)

###### Surah Listing

- [ ] Display all 114 Surah
- [ ] Basic metadata (name, number, type)

###### Ayah View

- [ ] Arabic text
- [ ] Translation
- [ ] Clean reading layout

###### Navigation

- [ ] Simple routing between surah list and detail pages

## Advanced Features (Phase 2)

- [ ] Audio playback for each Ayah
- [ ] Bookmarking system
- [ ] Dark/light mode toggle
- [ ] Smooth scrolling + reading progress

## Reflection System (Phase 3)

- [ ] Add personal notes per Ayah
- [ ] Save reflections (requires backend)
- [ ] Highlight or tag Ayahs

## Project Structure

```
src/
├── components/
│ ├── Ayah.jsx
│ ├── SurahCard.jsx
│ └── AudioPlayer.jsx
│
├── pages/
│ ├── SurahList.jsx
│ └── SurahDetail.jsx
│
├── services/
│ └── api.js
│
├── context/
│ └── AppContext.jsx
│
└── App.jsx
```

## Development Approach

- [ ] Build incrementally (feature by feature)
- [ ] Focus on working UI before optimization
- [ ] Keep components reusable and clean
- [ ] Avoid over-engineering early

## Development Approach

- [ ] Build incrementally (feature by feature)
- [ ] Focus on working UI before optimization
- [ ] Keep components reusable and clean
- [ ] Avoid over-engineering early

## Expected Outcome

A fully functional MVP that allows users to:

- [ ] Browse Surahs
- [ ] Read Quran text with translations
- [ ] Experience a clean, modern UI

Future iterations will expand into personalization and reflection features.

## Notes

This project is intended as both:

- A learning exercise for modern frontend development
- A foundation for a production-level spiritual app
