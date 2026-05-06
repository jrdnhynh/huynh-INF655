import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <nav className="bg-mauve px-8 py-4 flex items-center justify-between">
      <Link to="/dashboard" className="text-gold font-bold text-xl tracking-wide">
        Muserlog
      </Link>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <Link to="/dashboard" className="text-lavender hover:text-white transition text-sm">
              My Log
            </Link>
            <Link to="/add" className="text-lavender hover:text-white transition text-sm">
              + Add Entry
            </Link>
            <Link to="/profile" className="text-lavender hover:text-white transition text-sm">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-coral text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-lavender hover:text-white transition text-sm">
              Sign In
            </Link>
            <Link to="/signup" className="bg-aqua text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar