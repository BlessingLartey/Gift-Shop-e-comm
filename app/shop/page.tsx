import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { ProductSearch } from "@/components/product-search"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-gray-600">Discover our complete collection of curated gift packages</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <ProductFilters />
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <ProductSearch />
            </div>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-lg" />
                  ))}
                </div>
              }
            >
              <ProductGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}
