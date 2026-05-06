import { useState } from "react"
import RatingStars from "./RatingStars"

// LogForm is the controlled form for adding a new music entry
// it takes an onSubmit function as a prop from the AddEntry page
function LogForm({ onSubmit }) {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState("")
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [favoriteTrack, setFavoriteTrack] = useState("")
  const [dateListened, setDateListened] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // basic validation — title, artist, and rating are required
    if (!title.trim()) return setError("Title is required.")
    if (!artist.trim()) return setError("Artist is required.")
    if (rating === 0) return setError("Please select a star rating.")

    // pass the data up to the AddEntry page
    onSubmit({ title, artist, genre, year, rating, review, favoriteTrack, dateListened })
  }

  // reusable input style so we dont repeat classes everywhere
  const inputClass = "w-full bg-plum text-white placeholder-lavender/50 p-3 rounded-lg border border-mauve focus:outline-none focus:border-aqua text-sm"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* error message */}
      {error && (
        <p className="bg-coral/20 text-coral text-sm p-3 rounded-lg">
          {error}
        </p>
      )}

      {/* title and artist side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-lavender text-sm mb-1 block">Album / Song Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Currents"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-lavender text-sm mb-1 block">Artist *</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="e.g. Tame Impala"
            className={inputClass}
          />
        </div>
      </div>

      {/* genre and year side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-lavender text-sm mb-1 block">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g. Psychedelic Pop"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-lavender text-sm mb-1 block">Release Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2015"
            min="1900"
            max="2099"
            className={inputClass}
          />
        </div>
      </div>

      {/* favorite track and date listened side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-lavender text-sm mb-1 block">Favorite Track</label>
          <input
            type="text"
            value={favoriteTrack}
            onChange={(e) => setFavoriteTrack(e.target.value)}
            placeholder="e.g. The Less I Know The Better"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-lavender text-sm mb-1 block">Date Listened</label>
          <input
            type="date"
            value={dateListened}
            onChange={(e) => setDateListened(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* star rating */}
      <div>
        <label className="text-lavender text-sm mb-2 block">Your Rating *</label>
        <RatingStars rating={rating} onChange={setRating} />
      </div>

      {/* review text area */}
      <div>
        <label className="text-lavender text-sm mb-1 block">Your Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="What did you think? How did it make you feel?"
          rows={4}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="bg-aqua text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
      >
        Log Entry
      </button>
    </form>
  )
}

export default LogForm