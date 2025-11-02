import { useState } from 'react'
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../design-system'

/**
 * FilterBar 组件 - 过滤和排序栏
 * 日本美学：极简、克制、精致
 * 完全使用设计系统
 */
export function FilterBar({ filters, activeFilters, onFilterChange, onClearAll, sortOptions, activeSort, onSortChange }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-[#FFFEF6] border-b-2 border-[#459361] sticky top-20 z-40">
      <div className="px-[50px] lg:px-[246px] py-6">
        <div className="flex items-center justify-between gap-6">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden"
          >
            <Button variant="secondary" size="sm">
              <span className="flex items-center gap-2">
                <SlidersHorizontal size={16} />
                FILTERS
                {Object.keys(activeFilters).length > 0 && (
                  <span className="ml-1">({Object.keys(activeFilters).length})</span>
                )}
              </span>
            </Button>
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
            <div className="hidden lg:flex items-center gap-3">
              <span 
                className="text-[11px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Active:
              </span>
              {Object.entries(activeFilters).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => onFilterChange(key, null)}
                  className="flex items-center gap-2 px-3 py-1 bg-[#459361] text-[#FFFEF6] rounded-[42px] text-[11px] font-bold uppercase tracking-[0.7px] hover:opacity-80 transition-opacity border-2 border-[#FFFEF6]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {value}
                  <X size={12} strokeWidth={3} />
                </button>
              ))}
              <button
                onClick={onClearAll}
                className="text-[11px] leading-[18px] tracking-[0.7px] text-[#E85C41] hover:opacity-80 ml-2 font-bold uppercase"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Clear All
              </button>
            </div>
          )}

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label 
              htmlFor="sort" 
              className="text-[11px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] whitespace-nowrap font-bold uppercase"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Sort By:
            </label>
            <select
              id="sort"
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 bg-white border border-[#ABB0B2] rounded-[3px] text-[14px] leading-[16px] transition-all duration-200 focus:outline-none focus:border-[#459361] focus:ring-1 focus:ring-[#459361]"
              style={{ fontFamily: 'Helvetica, sans-serif' }}
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

                  <div className="flex gap-3 pt-4">
                    <div className="flex-1">
                      <Button variant="secondary" size="default" onClick={onClearAll} className="w-full">
                        CLEAR ALL
                      </Button>
                    </div>
                    <div className="flex-1">
                      <Button variant="primary" size="default" onClick={() => setMobileFiltersOpen(false)} className="w-full">
                        APPLY
                      </Button>
                    </div>
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
          flex items-center gap-2 px-4 py-2 border-2 rounded-[42px] transition-all font-bold uppercase tracking-[0.6px] text-[13.6px]
          ${activeValue
            ? 'border-[#459361] bg-[#459361] text-[#FFFEF6]'
            : 'border-[#459361] bg-[#FFFEF6] text-[rgba(69,147,97,0.75)] hover:shadow-[2px_2px_0px_#848484]'
          }
        `}
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {activeValue || filter.label}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
                className="absolute top-full left-0 mt-2 w-56 bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] shadow-[0px_6px_0px_#848484] z-20 overflow-hidden"
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
                        w-full text-left px-3 py-2 rounded-md transition-colors text-[13px] font-bold tracking-[0.6px]
                        ${activeValue === option.value
                          ? 'bg-[rgba(69,147,97,0.1)] text-[#459361]'
                          : 'hover:bg-[rgba(69,147,97,0.05)] text-[rgba(69,147,97,0.75)]'
                        }
                      `}
                      style={{ fontFamily: 'Archivo, sans-serif' }}
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

