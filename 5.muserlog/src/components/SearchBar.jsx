// SearchBar takes a query string and a setQuery function as props
// the parent component handles the actual filtering
function SearchBar({ query, setQuery }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lavender text-sm">
        ⌕
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or artist..."
        className="w-full bg-mauve text-white placeholder-lavender/50 pl-8 pr-4 py-3 rounded-lg border border-mauve focus:outline-none focus:border-aqua text-sm"
      />
      {/* show a clear button if there's something typed */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-lavender hover:text-white transition text-sm"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar