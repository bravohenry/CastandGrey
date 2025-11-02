import { Link } from 'react-router-dom'
import { Button } from '../../design-system'

/**
 * CTAButton Component - Call-to-action button row
 * Used for final CTAs on pages
 */
export const CTAButton = ({ items = [] }) => {
  if (items.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center py-12">
      {items.map((item, index) => (
        <Link key={index} to={item.link || '#'}>
          <Button variant={item.variant || 'primary'} size="lg">
            {item.text}
          </Button>
        </Link>
      ))}
    </div>
  )
}

