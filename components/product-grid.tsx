"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  isPopular?: boolean
  inStock: boolean
  rating: number
  reviewCount: number
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    // Mock products data
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Colas Delight",
        description: "A refreshing collection of premium cola-themed treats and accessories",
        price: 49.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "beverages",
        isPopular: true,
        inStock: true,
        rating: 4.8,
        reviewCount: 124,
      },
      {
        id: "2",
        name: "Shine and Light",
        description: "Illuminating gift set with candles, lights, and sparkling accessories",
        price: 79.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "home",
        isPopular: true,
        inStock: true,
        rating: 4.9,
        reviewCount: 89,
      },
      {
        id: "3",
        name: "Beauty Essentials",
        description: "Luxurious beauty and skincare collection for the modern woman",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "beauty",
        isPopular: true,
        inStock: true,
        rating: 4.7,
        reviewCount: 156,
      },
      {
        id: "4",
        name: "Bright n Gel",
        description: "Vibrant gel-based products for a colorful and fun experience",
        price: 39.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "beauty",
        inStock: true,
        rating: 4.6,
        reviewCount: 73,
      },
      {
        id: "5",
        name: "Pearls Collection",
        description: "Elegant pearl jewelry and accessories for special occasions",
        price: 199.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "jewelry",
        isPopular: true,
        inStock: true,
        rating: 4.9,
        reviewCount: 201,
      },
      {
        id: "6",
        name: "Delali Special",
        description: "Handcrafted artisanal items with cultural significance",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "crafts",
        inStock: true,
        rating: 4.8,
        reviewCount: 67,
      },
      {
        id: "7",
        name: "Pinkies Paradise",
        description: "Pink-themed collection perfect for those who love all things rosy",
        price: 59.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "lifestyle",
        inStock: true,
        rating: 4.5,
        reviewCount: 92,
      },
      {
        id: "8",
        name: "Forever With You",
        description: "Romantic gift set designed to celebrate lasting love and commitment",
        price: 149.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "romance",
        isPopular: true,
        inStock: true,
        rating: 4.9,
        reviewCount: 178,
      },
    ]

    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 500)
  }, [])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-96 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.isPopular && <Badge className="absolute top-2 left-2 bg-pink-600">Popular</Badge>}
            {!product.inStock && <Badge className="absolute top-2 right-2 bg-red-600">Out of Stock</Badge>}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.reviewCount})</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-pink-600">${product.price}</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/products/${product.id}`}>View</Link>
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="bg-pink-600 hover:bg-pink-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
