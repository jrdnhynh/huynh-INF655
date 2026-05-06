import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function Landing() {
  return (
    <div className="min-h-screen bg-plum text-white">
      <Navbar />

      {/* hero section */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-gold text-5xl font-bold mb-4">
          Your Music Journey, Documented
        </h1>
        <p className="text-lavender text-lg mb-10 max-w-xl mx-auto">
          Muserlog is your personal space to log, rate, and review the music
          you love — like Letterboxd, but for music.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/signup"
            className="bg-aqua text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-mauve text-lavender font-bold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* features section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-mauve rounded-2xl p-6">
            <p className="text-gold text-2xl mb-3">★</p>
            <h3 className="text-white font-bold mb-2">Rate & Review</h3>
            <p className="text-lavender text-sm">
              Give star ratings and write your thoughts on every album or song.
            </p>
          </div>

          <div className="bg-mauve rounded-2xl p-6">
            <p className="text-aqua text-2xl mb-3">♪</p>
            <h3 className="text-white font-bold mb-2">Log Your Listens</h3>
            <p className="text-lavender text-sm">
              Keep track of everything you've heard with detailed entry fields.
            </p>
          </div>

          <div className="bg-mauve rounded-2xl p-6">
            <p className="text-coral text-2xl mb-3">↗</p>
            <h3 className="text-white font-bold mb-2">Track Your Taste</h3>
            <p className="text-lavender text-sm">
              Watch your music log grow and rediscover albums you've loved.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing