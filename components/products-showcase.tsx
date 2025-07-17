"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  isPopular?: boolean
}

export function ProductsShowcase() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Mock products data
    const mockProducts = [
      {
        id: "1",
        name: "Colas Delight",
        description: "A refreshing collection of premium cola-themed treats and accessories",
        price: 49.99,
        image: "images/cola1.jpg",
        isPopular: true,
      },
      {
        id: "2",
        name: "Shine and Light",
        description: "Illuminating gift set with candles, lights, and sparkling accessories",
        price: 79.99,
        image: "images/lights.jpg",
        isPopular: true,
      },
      {
        id: "3",
        name: "Beauty Essentials",
        description: "Luxurious beauty and skincare collection for the modern woman",
        price: 129.99,
        image: "images/beauty.jpg",
        isPopular: true,
      },
      {
        id: "4",
        name: "Bright n Gel",
        description: "Vibrant gel-based products for a colorful and fun experience",
        price: 39.99,
        image: "images/gel.jpg",
      },
      {
        id: "5",
        name: "Pearls Collection",
        description: "Elegant pearl jewelry and accessories for special occasions",
        price: 199.99,
        image: "images/pearl.jpg",
        isPopular: true,
      },
      {
        id: "6",
        name: "Delali Special",
        description: "Handcrafted artisanal items with cultural significance",
        price: 89.99,
        image: "images/craft.jpg",
      },
      {
        id: "7",
        name: "Pinkies Paradise",
        description: "Pink-themed collection perfect for those who love all things rosy",
        price: 59.99,
        image: "images/pink.jpg",
      },
      {
        id: "8",
        name: "Forever With You",
        description: "Romantic gift set designed to celebrate lasting love and commitment",
        price: 149.99,
        image: "images/forever.jpg",
        isPopular: true,
      },
    ]
    setProducts(mockProducts)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ready-To-Pick Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular gift collections, carefully curated for every occasion and relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isPopular && <Badge className="absolute top-2 left-2 bg-pink-600">Popular</Badge>}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-600">${product.price}</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/products/${product.id}`}>Shop Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
