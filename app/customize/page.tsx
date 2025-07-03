"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, Gift, Sparkles, Plus, X } from "lucide-react"

const giftCategories = [
  { id: "beauty", name: "Beauty & Skincare", price: 25 },
  { id: "jewelry", name: "Jewelry & Accessories", price: 45 },
  { id: "home", name: "Home Decor", price: 35 },
  { id: "treats", name: "Gourmet Treats", price: 20 },
  { id: "wellness", name: "Wellness & Spa", price: 40 },
  { id: "tech", name: "Tech Accessories", price: 30 },
]

const occasions = [
  "Birthday",
  "Anniversary",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Graduation",
  "Wedding",
  "Thank You",
  "Just Because",
]

export default function CustomizePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [occasion, setOccasion] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [personalMessage, setPersonalMessage] = useState("")
  const [budget, setBudget] = useState("")
  const [customItems, setCustomItems] = useState<string[]>([])
  const [newCustomItem, setNewCustomItem] = useState("")

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const addCustomItem = () => {
    if (newCustomItem.trim()) {
      setCustomItems([...customItems, newCustomItem.trim()])
      setNewCustomItem("")
    }
  }

  const removeCustomItem = (index: number) => {
    setCustomItems(customItems.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    const categoryTotal = selectedCategories.reduce((total, categoryId) => {
      const category = giftCategories.find((cat) => cat.id === categoryId)
      return total + (category?.price || 0)
    }, 0)
    const customItemsTotal = customItems.length * 15 // $15 per custom item
    return categoryTotal + customItemsTotal + 10 // $10 base customization fee
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      selectedCategories,
      occasion,
      recipientName,
      personalMessage,
      budget,
      customItems,
      total: calculateTotal(),
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-pink-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Customize Your Perfect Gift</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create a one-of-a-kind gift package tailored specifically for your loved one. Every detail matters when it
              comes to showing you care.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recipient Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 text-pink-600 mr-2" />
                      Recipient Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="recipientName">Recipient's Name</Label>
                      <Input
                        id="recipientName"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Enter the recipient's name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="occasion">Occasion</Label>
                      <Select value={occasion} onValueChange={setOccasion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          {occasions.map((occ) => (
                            <SelectItem key={occ} value={occ.toLowerCase()}>
                              {occ}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50-100">$50 - $100</SelectItem>
                          <SelectItem value="100-200">$100 - $200</SelectItem>
                          <SelectItem value="200-300">$200 - $300</SelectItem>
                          <SelectItem value="300+">$300+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Gift Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                      Choose Gift Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {giftCategories.map((category) => (
                        <div
                          key={category.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedCategories.includes(category.id)
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleCategoryToggle(category.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{category.name}</h3>
                              <p className="text-sm text-gray-600">Starting at ${category.price}</p>
                            </div>
                            <Checkbox checked={selectedCategories.includes(category.id)} readOnly />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Custom Items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Custom Items</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={newCustomItem}
                        onChange={(e) => setNewCustomItem(e.target.value)}
                        placeholder="Add a specific item you'd like included"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCustomItem())}
                      />
                      <Button type="button" onClick={addCustomItem} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {customItems.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {customItems.map((item, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            {item}
                            <button type="button" onClick={() => removeCustomItem(index)} className="ml-1">
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Personal Message */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      placeholder="Write a heartfelt message to include with the gift..."
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Gift Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Selected Categories:</h4>
                      {selectedCategories.length > 0 ? (
                        <div className="space-y-1">
                          {selectedCategories.map((categoryId) => {
                            const category = giftCategories.find((cat) => cat.id === categoryId)
                            return (
                              <div key={categoryId} className="flex justify-between text-sm">
                                <span>{category?.name}</span>
                                <span>${category?.price}</span>
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No categories selected</p>
                      )}
                    </div>

                    {customItems.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Custom Items:</h4>
                        <div className="space-y-1">
                          {customItems.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="truncate">{item}</span>
                              <span>$15</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Customization Fee:</span>
                        <span>$10</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-pink-600">${calculateTotal()}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" size="lg">
                      Create Custom Gift
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
