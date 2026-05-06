import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/dashboard")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-plum flex items-center justify-center">
      <div className="bg-mauve p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-gold text-3xl font-bold mb-2">Muserlog</h1>
        <h2 className="text-lavender text-lg mb-6">Sign in to your account</h2>

        {error && (
          <p className="bg-coral/20 text-coral text-sm p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-lavender text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-plum text-white p-3 rounded-lg border border-mauve focus:outline-none focus:border-aqua"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-lavender text-sm mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-plum text-white p-3 rounded-lg border border-mauve focus:outline-none focus:border-aqua"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="bg-aqua text-white font-bold py-3 rounded-lg hover:opacity-90 transition mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-lavender text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-aqua hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login