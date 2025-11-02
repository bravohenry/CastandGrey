import { ProductCard } from './ProductCard'

/**
 * ProductGrid Component - Grid layout for products
 */
export const ProductGrid = ({ products = [] }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p
          className="text-lg text-[rgba(69,147,97,0.75)]"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          No products found.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

