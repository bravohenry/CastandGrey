import { useState } from 'react'
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FilterBar 组件 - 过滤和排序栏
 * 用于 Shop 页面的产品筛选
 */
export function FilterBar({ filters, activeFilters, onFilterChange, onClearAll, sortOptions, activeSort, onSortChange }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white border-b border-stone-200 sticky top-20 z-40">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
            {Object.keys(activeFilters).length > 0 && (
              <span className="bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
                {Object.keys(activeFilters).length}
              </span>
            )}
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-3 flex-1">
            {filters.map((filter) => (
              <FilterDropdown
                key={filter.id}
                filter={filter}
                activeValue={activeFilters[filter.id]}
                onChange={(value) => onFilterChange(filter.id, value)}
              />
            ))}
          </div>

          {/* Active Filters Display */}
          {Object.keys(activeFilters).length > 0 && (
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-stone-600">Active:</span>
              {Object.entries(activeFilters).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => onFilterChange(key, null)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors"
                >
                  {value}
                  <X size={14} />
                </button>
              ))}
              <button
                onClick={onClearAll}
                className="text-sm text-red-600 hover:text-red-700 ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-stone-600 whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort"
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {filters.map((filter) => (
                  <div key={filter.id}>
                    <label className="block text-sm font-semibold text-stone-900 mb-2">
                      {filter.label}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {filter.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => onFilterChange(filter.id, option.value)}
                          className={`
                            px-3 py-2 rounded-md text-sm transition-colors
                            ${activeFilters[filter.id] === option.value
                              ? 'bg-green-600 text-white'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex gap-2 pt-4">
                  <button
                    onClick={onClearAll}
                    className="flex-1 px-4 py-2 border border-stone-300 rounded-md text-stone-700 hover:bg-stone-50"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/**
 * FilterDropdown 组件 - 单个过滤器下拉菜单
 */
function FilterDropdown({ filter, activeValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 border rounded-md transition-colors
          ${activeValue
            ? 'border-green-600 bg-green-50 text-green-900'
            : 'border-stone-300 hover:bg-stone-50 text-stone-700'
          }
        `}
      >
        {activeValue || filter.label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-200 rounded-lg shadow-xl z-20 overflow-hidden"
            >
              <div className="max-h-80 overflow-y-auto p-2">
                {filter.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onChange(option.value)
                      setIsOpen(false)
                    }}
                    className={`
                      w-full text-left px-3 py-2 rounded-md transition-colors
                      ${activeValue === option.value
                        ? 'bg-green-100 text-green-900'
                        : 'hover:bg-stone-50 text-stone-700'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

