import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Thoughtful Gift Giving: A Complete Guide",
    excerpt:
      "Discover the secrets to choosing gifts that truly resonate with your loved ones and create lasting memories.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Gift Guides",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "10 Unique Valentine's Day Gift Ideas That Go Beyond Flowers",
    excerpt:
      "Move beyond traditional gifts and surprise your partner with these creative and meaningful Valentine's Day presents.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Occasions",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "How to Create the Perfect Custom Gift Package",
    excerpt: "Learn the step-by-step process of designing a personalized gift that perfectly captures your sentiment.",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    category: "Customization",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Sustainable Gift Wrapping Ideas That Look Amazing",
    excerpt: "Eco-friendly wrapping solutions that are both beautiful and environmentally conscious.",
    author: "David Kim",
    date: "2024-01-05",
    category: "Sustainability",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "The Psychology Behind Gift Giving: Why We Love to Give",
    excerpt: "Explore the emotional and psychological benefits of giving gifts and how it strengthens relationships.",
    author: "Dr. Lisa Thompson",
    date: "2024-01-03",
    category: "Psychology",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Last-Minute Gift Ideas That Don't Look Last-Minute",
    excerpt: "Quick but thoughtful gift solutions for when you're short on time but not on love.",
    author: "James Wilson",
    date: "2024-01-01",
    category: "Quick Tips",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "3 min read",
  },
]

const categories = ["All", "Gift Guides", "Occasions", "Customization", "Sustainability", "Psychology", "Quick Tips"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gift Giving Insights & Tips</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover expert advice, creative ideas, and heartwarming stories about the art of gift giving. Learn how
              to make every gift meaningful and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-pink-600 hover:bg-pink-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-pink-600">Featured</Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-3">
                      {blogPosts[0].category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{blogPosts[0].author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                        <Link href={`/blog/${blogPosts[0].id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{post.category}</Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-pink-600 font-medium">{post.readTime}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Gift Idea</h2>
            <p className="text-pink-100 mb-8">
              Subscribe to our newsletter for weekly gift inspiration, exclusive tips, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-pink-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
