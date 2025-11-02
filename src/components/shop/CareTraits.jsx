import { Droplet, Sun, Sprout, Heart } from 'lucide-react'

/**
 * CareTraits Component - Display plant care traits (light, water, soil, pet-safe)
 */
export const CareTraits = ({ traits }) => {
  if (!traits) return null

  return (
    <div className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg p-6">
      <h3
        className="text-lg font-bold text-[#459361] mb-4"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        Care Information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <Sun className="text-[#459361] mt-1 flex-shrink-0" size={20} />
          <div>
            <p
              className="text-sm font-bold text-[#111111] mb-1"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Light
            </p>
            <p
              className="text-sm text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {traits.light}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Droplet className="text-[#459361] mt-1 flex-shrink-0" size={20} />
          <div>
            <p
              className="text-sm font-bold text-[#111111] mb-1"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Water
            </p>
            <p
              className="text-sm text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {traits.water}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Sprout className="text-[#459361] mt-1 flex-shrink-0" size={20} />
          <div>
            <p
              className="text-sm font-bold text-[#111111] mb-1"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Soil
            </p>
            <p
              className="text-sm text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {traits.soil}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Heart className="text-[#459361] mt-1 flex-shrink-0" size={20} />
          <div>
            <p
              className="text-sm font-bold text-[#111111] mb-1"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Pet-Safe
            </p>
            <p
              className="text-sm text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {traits.petSafe ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

