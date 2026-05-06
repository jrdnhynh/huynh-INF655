# Muserlog

**Student:** Jordan Huynh  
**Course:** INF655 — Front-End Web Development II  

---

## Project Description

Muserlog is a web-based social platform for music enthusiasts to log, rate, and
review music they've been listening to. Think of it like Letterboxd, but for music.
Users can create an account, log albums and songs with detailed fields, give star
ratings, write reviews, and track their listening history over time.

---

## Main Features

- User authentication (sign up, log in, log out) via Firebase Auth
- Add music entries with title, artist, genre, year, favorite track, date listened, rating, and review
- Real-time dashboard that displays all your logged entries
- Search and filter your log by title or artist
- Delete entries from your log
- Profile page with stats like total logged, average rating, and top genre
- Protected routes — dashboard, add entry, and profile require login
- Responsive design using Tailwind CSS

---

## Technologies Used

- React (Vite)
- React Router DOM
- Firebase Authentication
- Firebase Firestore
- Tailwind CSS

---

## React Concepts Used

- Functional components and JSX
- Props to pass data between components (AlbumCard, RatingStars, LogForm, SearchBar)
- useState for form inputs, search query, loading states, and star rating
- useEffect to fetch Firestore data on component mount
- useContext via a custom AuthContext to share user state across the app
- Conditional rendering for loading states, empty states, and auth-based UI
- List rendering with .map() to display log entries as AlbumCard components
- React Router for navigation between pages and protected routes
- Controlled inputs for all form fields

---

## Challenges Faced

The biggest challenge was getting the Firestore real-time listener to work correctly with the composite index. I kept seeing "Loading your log..." with no data showing up and had to track down a Firebase error in the console that had a link to auto-create the index — once I clicked that it all clicked into place. Setting up protected routes so people couldn't access the dashboard without logging in was also tricky to wrap
my head around at first.

---

## What I Learned

I got a lot more comfortable with how Firebase connects to React, especially how useEffect and onSnapshot work together to keep the UI in sync with the database without having to refresh. I also learned how useContext actually saves you from having to pass props through every single component, which made the auth stuff
way cleaner than I expected.

---

## Future Improvements

- Music discovery page showing trending entries from other users
- Ability to edit existing log entries
- Spotify API integration to auto-fill album details
- List creation feature for mood-based or "best of" collections
- Social features like following friends and seeing their logs