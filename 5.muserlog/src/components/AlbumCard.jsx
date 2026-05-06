import RatingStars from "./RatingStars"

// AlbumCard shows a single music log entry
// it takes the entry data and an onDelete function as props
function AlbumCard({ entry, onDelete }) {
  return (
    <div className="bg-mauve rounded-2xl p-5 flex flex-col gap-3">

      {/* top row — title and delete button */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{entry.title}</h3>
          <p className="text-aqua text-sm">{entry.artist}</p>
        </div>
        {onDelete && (
          <button
            onClick={() => onDelete(entry.id)}
            className="text-coral text-xs hover:opacity-70 transition shrink-0"
          >
            Remove
          </button>
        )}
      </div>

      {/* genre, year, date listened */}
      <div className="flex gap-3 flex-wrap">
        {entry.genre && (
          <span className="bg-plum text-lavender text-xs px-3 py-1 rounded-full">
            {entry.genre}
          </span>
        )}
        {entry.year && (
          <span className="bg-plum text-lavender text-xs px-3 py-1 rounded-full">
            {entry.year}
          </span>
        )}
        {entry.dateListened && (
          <span className="bg-plum text-lavender text-xs px-3 py-1 rounded-full">
            {entry.dateListened}
          </span>
        )}
      </div>

      {/* star rating — readOnly so clicking does nothing */}
      <RatingStars rating={entry.rating} onChange={() => {}} readOnly />

      {/* review text if they wrote one */}
      {entry.review && (
        <p className="text-lavender text-sm leading-relaxed border-t border-plum pt-3">
          "{entry.review}"
        </p>
      )}
    </div>
  )
}

export default AlbumCard