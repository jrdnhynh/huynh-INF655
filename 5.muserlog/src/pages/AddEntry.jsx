import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"
import Navbar from "../components/Navbar"
import LogForm from "../components/LogForm"

function AddEntry() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // this gets called when LogForm submits valid data
  const handleSubmit = async (formData) => {
    setLoading(true)
    try {
      // save the entry to firestore under the logged in user's uid
      await addDoc(collection(db, "logs"), {
        ...formData,
        uid: user.uid,
        createdAt: serverTimestamp(),
      })
      setSuccess(true)
      // send them back to the dashboard after 1.5 seconds
      setTimeout(() => navigate("/dashboard"), 1500)
    } catch (err) {
      console.error("Error saving entry:", err)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-plum text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-gold text-2xl font-bold mb-2">Log New Entry</h2>
        <p className="text-lavender text-sm mb-8">
          Document what you're listening to
        </p>

        {/* success message shown after saving */}
        {success && (
          <div className="bg-aqua/20 text-aqua text-sm p-3 rounded-lg mb-6">
            Entry saved! Taking you back to your log...
          </div>
        )}

        {loading ? (
          <p className="text-lavender">Saving...</p>
        ) : (
          <LogForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}

export default AddEntry