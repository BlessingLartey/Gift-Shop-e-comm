"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, X, ArrowLeft } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

const mockWishlistItems = [
  {
    id: "1",
    name: "Pearls Collection",
    description: "Elegant pearl jewelry and accessories for special occasions",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    isPopular: true,
  },
  {
    id: "2",
    name: "Forever With You",
    description: "Romantic gift set designed to celebrate lasting love and commitment",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    isPopular: true,
  },
  {
    id: "3",
    name: "Delali Special",
    description: "Handcrafted artisanal items with cultural significance",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    isPopular: false,
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems)
  const { addItem } = useCart()
  const { toast } = useToast()

  const removeFromWishlist = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  const addToCart = (item: (typeof mockWishlistItems)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist and come back to them later.</p>
          <Button asChild className="bg-pink-600 hover:bg-pink-700">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved for later
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  {item.isPopular && <Badge className="absolute top-2 left-2 bg-pink-600">Popular</Badge>}
                  {!item.inStock && <Badge className="absolute top-2 right-2 bg-red-600">Out of Stock</Badge>}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-pink-600">${item.price}</span>
                    {!item.inStock && <span className="text-sm text-red-600">Out of Stock</span>}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className="flex-1 bg-pink-600 hover:bg-pink-700"
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/products/${item.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
