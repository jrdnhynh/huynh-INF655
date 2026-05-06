import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "../components/Navbar"
import AlbumCard from "../components/AlbumCard"

function Profile() {
  const { user } = useAuth()
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch the user's logs for the profile stats
    const q = query(
      collection(db, "logs"),
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc")
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setLogs(entries)
      setLoading(false)
    })

    return unsubscribe
  }, [user.uid])

  // calculate average rating across all entries
  const avgRating = logs.length
    ? (logs.reduce((sum, e) => sum + (e.rating || 0), 0) / logs.length).toFixed(1)
    : "—"

  // find the most logged genre
  const genreCounts = logs.reduce((acc, e) => {
    if (e.genre) acc[e.genre] = (acc[e.genre] || 0) + 1
    return acc
  }, {})
  const topGenre = Object.keys(genreCounts).sort(
    (a, b) => genreCounts[b] - genreCounts[a]
  )[0] || "—"

  return (
    <div className="min-h-screen bg-plum text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* profile header */}
        <div className="bg-mauve rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-6">
            {/* avatar circle with first letter of email */}
            <div className="w-16 h-16 rounded-full bg-aqua flex items-center justify-center text-white text-2xl font-bold shrink-0">
              {user.email[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">{user.email}</h2>
              <p className="text-lavender text-sm mt-1">Muserlog member</p>
            </div>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-plum rounded-xl p-4 text-center">
              <p className="text-gold text-2xl font-bold">{logs.length}</p>
              <p className="text-lavender text-xs mt-1">Total Logged</p>
            </div>
            <div className="bg-plum rounded-xl p-4 text-center">
              <p className="text-gold text-2xl font-bold">{avgRating}</p>
              <p className="text-lavender text-xs mt-1">Avg Rating</p>
            </div>
            <div className="bg-plum rounded-xl p-4 text-center">
              <p className="text-gold text-2xl font-bold truncate">{topGenre}</p>
              <p className="text-lavender text-xs mt-1">Top Genre</p>
            </div>
          </div>
        </div>

        {/* recent entries */}
        <h3 className="text-gold font-bold text-lg mb-4">Recent Entries</h3>

        {loading && <p className="text-lavender text-sm">Loading...</p>}

        {!loading && logs.length === 0 && (
          <p className="text-lavender text-sm">No entries logged yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* only show the 4 most recent on the profile page */}
          {logs.slice(0, 4).map((entry) => (
            <AlbumCard key={entry.id} entry={entry} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Profile