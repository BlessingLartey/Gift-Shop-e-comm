import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Truck, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-800">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Safe Haven</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that every gift tells a story, and every story deserves to be special. Founded with love and
              passion, Safe Haven creates meaningful connections through thoughtfully curated gifts that touch hearts
              and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're driven by the belief that thoughtful gifting can strengthen relationships and bring joy to both
                the giver and receiver.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
                  <p className="text-gray-600">
                    Every package is carefully assembled with attention to detail and genuine care for the recipient.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                  <p className="text-gray-600">
                    We source only the finest products from trusted suppliers to ensure exceptional quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Sparkles className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personalized Touch</h3>
                  <p className="text-gray-600">
                    Each gift can be customized to reflect the unique relationship between giver and receiver.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Safe Haven was born from a simple observation: in our fast-paced world, meaningful gift-giving had
                    become increasingly difficult. We saw people struggling to find gifts that truly expressed their
                    feelings and showed how much they cared.
                  </p>
                  <p>
                    Founded in 2020 by a team of passionate gift enthusiasts, we set out to change that. We wanted to
                    create a place where anyone could find or create the perfect gift - one that would make both the
                    giver and receiver feel special.
                  </p>
                  <p>
                    Today, we've helped thousands of customers create memorable moments through our carefully curated
                    collections and personalized gift services. Every package that leaves our facility carries with it
                    our commitment to quality, care, and the belief that gifts should be more than just objects - they
                    should be expressions of love.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our team at work"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Safe Haven?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We go above and beyond to ensure your gift-giving experience is exceptional from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Expert Curation</h3>
                <p className="text-sm text-gray-600">Our team carefully selects each item for quality and appeal</p>
              </div>

              <div className="text-center">
                <Truck className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                <p className="text-sm text-gray-600">Quick and secure delivery to ensure timely arrival</p>
              </div>

              <div className="text-center">
                <Shield className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-gray-600">100% satisfaction guarantee on all our products</p>
              </div>

              <div className="text-center">
                <Heart className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Personal Touch</h3>
                <p className="text-sm text-gray-600">Customization options to make every gift unique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Safe Haven by the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-pink-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-pink-100">Gift Collections</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-pink-100">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-pink-100">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
