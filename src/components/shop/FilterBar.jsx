/**
 * FilterBar Component - Filter and sort bar for shop
 */
export const FilterBar = ({ filters = {}, onFilterChange, onSortChange }) => {
  return (
    <div className="bg-[#FFFEF6] border-b-2 border-[#459361] py-4 mb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <span
            className="text-sm font-bold text-[#459361]"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Filter:
          </span>
          <button
            onClick={() => onFilterChange?.('bestSellers')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              filters.bestSellers
                ? 'bg-[#459361] text-[#FFFEF6]'
                : 'bg-[#FFFEF6] text-[#459361] border-2 border-[#459361]'
            }`}
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Best Sellers
          </button>
          <button
            onClick={() => onFilterChange?.('petSafe')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              filters.petSafe
                ? 'bg-[#459361] text-[#FFFEF6]'
                : 'bg-[#FFFEF6] text-[#459361] border-2 border-[#459361]'
            }`}
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Pet-Safe
          </button>
          <button
            onClick={() => onFilterChange?.('lowMaintenance')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              filters.lowMaintenance
                ? 'bg-[#459361] text-[#FFFEF6]'
                : 'bg-[#FFFEF6] text-[#459361] border-2 border-[#459361]'
            }`}
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Low-maintenance
          </button>
          <div className="ml-auto">
            <select
              onChange={(e) => onSortChange?.(e.target.value)}
              className="px-4 py-2 border-2 border-[#459361] rounded-full text-sm font-bold text-[#459361] bg-[#FFFEF6] focus:outline-none"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

