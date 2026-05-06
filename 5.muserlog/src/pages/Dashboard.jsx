import { useState, useEffect } from "react"
import { collection, query, where, orderBy, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"
import Navbar from "../components/Navbar"
import AlbumCard from "../components/AlbumCard"
import SearchBar from "../components/SearchBar"

function Dashboard() {
  const { user } = useAuth()
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // query firestore for logs belonging to the logged in user, newest first
    const q = query(
      collection(db, "logs"),
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc")
    )

    // onSnapshot listens in real time so the list updates instantly
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setLogs(entries)
      setLoading(false)
    })

    // cleanup the listener when the component unmounts
    return unsubscribe
  }, [user.uid])

  // delete a log entry from firestore
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "logs", id))
  }

  // filter logs by title or artist based on the search query
  const filteredLogs = logs.filter((entry) => {
    const q = searchQuery.toLowerCase()
    return (
      entry.title?.toLowerCase().includes(q) ||
      entry.artist?.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen bg-plum text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-gold text-2xl font-bold">My Music Log</h2>
            <p className="text-lavender text-sm mt-1">
              {logs.length} {logs.length === 1 ? "entry" : "entries"} logged
            </p>
          </div>
        </div>

        {/* search bar */}
        <div className="mb-6">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>

        {/* loading state */}
        {loading && (
          <p className="text-lavender text-sm">Loading your log...</p>
        )}

        {/* empty state when no logs at all */}
        {!loading && logs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lavender text-lg mb-2">No entries yet</p>
            <p className="text-lavender/50 text-sm">
              Start logging music you've been listening to
            </p>
          </div>
        )}

        {/* empty state when search finds nothing */}
        {!loading && logs.length > 0 && filteredLogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lavender text-lg mb-2">No results found</p>
            <p className="text-lavender/50 text-sm">
              Try searching for a different title or artist
            </p>
          </div>
        )}

        {/* log entries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredLogs.map((entry) => (
            <AlbumCard
              key={entry.id}
              entry={entry}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard