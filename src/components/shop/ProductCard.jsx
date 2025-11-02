import { Link } from 'react-router-dom'
import { Card, CardImage, CardContent, CardTitle, CardPrice, CardDescription } from '../../design-system'

/**
 * ProductCard Component - Product card for shop grid
 */
export const ProductCard = ({ product }) => {
  if (!product) return null

  return (
    <Link to={`/products/${product.handle}`} className="block">
      <Card variant="product" padding="none" className="h-full">
        <CardImage
          src={product.images?.[0]}
          alt={product.name}
          className="h-64 bg-[#848484]"
        />
        <CardContent className="p-5">
          <div className="flex flex-wrap gap-2 mb-2">
            {product.badges?.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#FFFEF6] text-[#459361] text-xs font-bold rounded"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {badge}
              </span>
            ))}
          </div>
          <CardTitle variant="product">{product.name}</CardTitle>
          <CardPrice variant="product">${product.price.toFixed(2)} USD</CardPrice>
          {product.description && (
            <CardDescription variant="product" className="mt-2">
              {product.description}
            </CardDescription>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

