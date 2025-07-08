import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Palette, Heart, Truck } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Shop with us */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="/images/hero-shop.jpg"
                alt="Gift collection"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-8 w-8 text-pink-600" />
                <h2 className="text-3xl font-bold text-gray-900">Shop with us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Explore our carefully curated collection of premium gift packages. Each item is selected with love and
                attention to detail, ensuring your gift creates a lasting impression and brings joy to your loved ones.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                <Link href="/shop">Browse Collection</Link>
              </Button>
            </div>
          </div>

          {/* Customize a gift */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="/images/hero-customize.jpg"
                alt="Custom gift creation"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <Palette className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Customize a gift</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Create something truly unique with our personalization service. Add custom messages, choose specific
                items, and design a gift package that perfectly reflects your relationship and the occasion you're
                celebrating.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/customize">Start Customizing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-gray-600">Every package is assembled with care and attention to detail</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <Truck className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure shipping to ensure timely arrival</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <Palette className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">Personalize every aspect to make it uniquely yours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
