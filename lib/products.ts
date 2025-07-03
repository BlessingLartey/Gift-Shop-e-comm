export interface Product {
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

// Mock data - replace with actual database queries
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

interface GetProductsOptions {
  category?: string
  search?: string
  minPrice?: number
  maxPrice?: number
  limit?: number
}

export async function getProducts(options: GetProductsOptions = {}): Promise<Product[]> {
  // Simulate database query delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredProducts = [...mockProducts]

  if (options.category) {
    filteredProducts = filteredProducts.filter((p) => p.category === options.category)
  }

  if (options.search) {
    const searchLower = options.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower),
    )
  }

  if (options.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price >= options.minPrice!)
  }

  if (options.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price <= options.maxPrice!)
  }

  if (options.limit) {
    filteredProducts = filteredProducts.slice(0, options.limit)
  }

  return filteredProducts
}

export async function getProduct(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.find((p) => p.id === id) || null
}
