"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

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
  images: string[]
  features: string[]
  specifications: { [key: string]: string }
}

const mockProducts: { [key: string]: Product } = {
  "1": {
    id: "1",
    name: "Colas Delight",
    description:
      "A refreshing collection of premium cola-themed treats and accessories that brings back nostalgic memories while creating new ones. This carefully curated package includes artisanal cola-flavored candies, vintage-style cola bottles, and themed accessories.",
    price: 49.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "beverages",
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Premium artisanal cola-flavored treats",
      "Vintage-style collectible bottles",
      "Themed accessories and memorabilia",
      "Beautiful gift packaging included",
      "Perfect for cola enthusiasts",
    ],
    specifications: {
      "Package Weight": "2.5 lbs",
      Dimensions: '12" x 8" x 4"',
      "Shelf Life": "12 months",
      Origin: "Handcrafted in USA",
      Allergens: "May contain nuts",
    },
  },
  "2": {
    id: "2",
    name: "Shine and Light",
    description:
      "An illuminating gift set featuring premium candles, LED lights, and sparkling accessories designed to brighten any space and mood. Perfect for creating ambiance and adding warmth to any environment.",
    price: 79.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "home",
    isPopular: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Premium scented candles",
      "LED string lights",
      "Sparkling decorative accessories",
      "Multiple lighting options",
      "Creates perfect ambiance",
    ],
    specifications: {
      "Package Weight": "3.2 lbs",
      Dimensions: '14" x 10" x 6"',
      "Battery Life": "50+ hours",
      "Candle Burn Time": "40+ hours",
      Material: "Premium wax and LED",
    },
  },
  "3": {
    id: "3",
    name: "Beauty Essentials",
    description:
      "A luxurious beauty and skincare collection featuring premium products for the modern woman. This comprehensive set includes skincare essentials, makeup must-haves, and beauty tools for a complete pampering experience.",
    price: 129.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "beauty",
    isPopular: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Premium skincare products",
      "Professional makeup essentials",
      "Beauty tools and accessories",
      "Suitable for all skin types",
      "Cruelty-free products",
    ],
    specifications: {
      "Package Weight": "2.8 lbs",
      Dimensions: '16" x 12" x 4"',
      "Skin Type": "All skin types",
      "Cruelty-Free": "Yes",
      Expiration: "24 months",
    },
  },
}

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading product data
    const foundProduct = mockProducts[productId]
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [productId])

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      }
      toast({
        title: "Added to cart!",
        description: `${quantity} x ${product.name} added to your cart.`,
      })
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                {product.isPopular && <Badge className="absolute top-4 left-4 bg-pink-600">Popular</Badge>}
                {!product.inStock && <Badge className="absolute top-4 right-4 bg-red-600">Out of Stock</Badge>}
              </div>
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-pink-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="border-t border-b py-6">
                <div className="text-3xl font-bold text-pink-600 mb-4">${product.price}</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-pink-600 hover:bg-pink-700"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-gray-500">On orders over $50</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Satisfaction Guarantee</div>
                  <div className="text-xs text-gray-500">100% guaranteed</div>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Easy Returns</div>
                  <div className="text-xs text-gray-500">30-day returns</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-900">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
                      <p className="text-gray-600">Reviews feature coming soon!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="shipping" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Shipping Information</h3>
                        <p className="text-gray-600">
                          Free standard shipping on orders over $50. Express shipping available for $9.99. Most orders
                          ship within 1-2 business days.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                        <p className="text-gray-600">
                          We offer a 30-day return policy for all items in original condition. Return shipping is free
                          for defective items.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
