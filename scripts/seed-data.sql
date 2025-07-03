-- Seed data for Safe Haven e-commerce

-- Insert categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Beauty & Skincare', 'beauty', 'Luxurious beauty and skincare products', '/placeholder.svg?height=200&width=200'),
('Home & Lifestyle', 'home', 'Beautiful items for your home and lifestyle', '/placeholder.svg?height=200&width=200'),
('Jewelry & Accessories', 'jewelry', 'Elegant jewelry and fashion accessories', '/placeholder.svg?height=200&width=200'),
('Romance & Love', 'romance', 'Perfect gifts for romantic occasions', '/placeholder.svg?height=200&width=200'),
('Beverages & Treats', 'beverages', 'Delicious beverages and sweet treats', '/placeholder.svg?height=200&width=200'),
('Arts & Crafts', 'crafts', 'Handcrafted and artisanal items', '/placeholder.svg?height=200&width=200');

-- Insert products
INSERT INTO products (name, slug, description, price, image_url, category_id, is_popular, in_stock, stock_quantity, rating, review_count) VALUES
('Colas Delight', 'colas-delight', 'A refreshing collection of premium cola-themed treats and accessories', 49.99, '/placeholder.svg?height=300&width=300', 5, TRUE, TRUE, 50, 4.8, 124),
('Shine and Light', 'shine-and-light', 'Illuminating gift set with candles, lights, and sparkling accessories', 79.99, '/placeholder.svg?height=300&width=300', 2, TRUE, TRUE, 30, 4.9, 89),
('Beauty Essentials', 'beauty-essentials', 'Luxurious beauty and skincare collection for the modern woman', 129.99, '/placeholder.svg?height=300&width=300', 1, TRUE, TRUE, 25, 4.7, 156),
('Bright n Gel', 'bright-n-gel', 'Vibrant gel-based products for a colorful and fun experience', 39.99, '/placeholder.svg?height=300&width=300', 1, FALSE, TRUE, 40, 4.6, 73),
('Pearls Collection', 'pearls-collection', 'Elegant pearl jewelry and accessories for special occasions', 199.99, '/placeholder.svg?height=300&width=300', 3, TRUE, TRUE, 15, 4.9, 201),
('Delali Special', 'delali-special', 'Handcrafted artisanal items with cultural significance', 89.99, '/placeholder.svg?height=300&width=300', 6, FALSE, TRUE, 20, 4.8, 67),
('Pinkies Paradise', 'pinkies-paradise', 'Pink-themed collection perfect for those who love all things rosy', 59.99, '/placeholder.svg?height=300&width=300', 2, FALSE, TRUE, 35, 4.5, 92),
('Forever With You', 'forever-with-you', 'Romantic gift set designed to celebrate lasting love and commitment', 149.99, '/placeholder.svg?height=300&width=300', 4, TRUE, TRUE, 18, 4.9, 178),
('Selsy Fine', 'selsy-fine', 'Premium fine collection with attention to every detail', 119.99, '/placeholder.svg?height=300&width=300', 1, FALSE, TRUE, 22, 4.7, 95),
('Mikes Angel', 'mikes-angel', 'Heavenly collection inspired by angelic beauty', 94.99, '/placeholder.svg?height=300&width=300', 4, FALSE, TRUE, 28, 4.6, 112),
('Fine Wine Collection', 'fine-wine', 'Sophisticated wine-themed gift set for connoisseurs', 179.99, '/placeholder.svg?height=300&width=300', 5, TRUE, TRUE, 12, 4.8, 143),
('All in One', 'all-in-one', 'Complete gift package with something for everyone', 159.99, '/placeholder.svg?height=300&width=300', 2, FALSE, TRUE, 16, 4.7, 87);

-- Insert sample users (for testing)
INSERT INTO users (email, password_hash, name, avatar_url) VALUES
('john@example.com', '$2b$10$example_hash', 'John Doe', '/placeholder.svg?height=40&width=40'),
('jane@example.com', '$2b$10$example_hash', 'Jane Smith', '/placeholder.svg?height=40&width=40'),
('mike@example.com', '$2b$10$example_hash', 'Mike Johnson', '/placeholder.svg?height=40&width=40');

-- Insert sample reviews
INSERT INTO reviews (user_id, product_id, rating, comment) VALUES
(1, 1, 5, 'Amazing product! Exceeded my expectations.'),
(2, 1, 5, 'Perfect gift for my friend. She loved it!'),
(3, 2, 5, 'Beautiful packaging and high quality items.'),
(1, 3, 4, 'Great beauty collection, though a bit pricey.'),
(2, 5, 5, 'The pearl jewelry is absolutely stunning!');
