import { useState } from "react"

// RatingStars lets the user click to set a 1-5 star rating
// it takes a rating value and an onChange function as props
function RatingStars({ rating, onChange, readOnly = false }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => !readOnly && onChange(star)}
          onMouseEnter={() => !readOnly && setHovered(star)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          className={`text-2xl transition ${readOnly ? "cursor-default" : "cursor-pointer"}`}
        >
          {/* show filled star if hovering or already rated */}
          {star <= (hovered || rating) ? "★" : "☆"}
        </button>
      ))}
    </div>
  )
}

export default RatingStars