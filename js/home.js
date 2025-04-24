const productsData  = [
  {
    "id": "1",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/moisturizer.jpg",
    "name": "Hydrating Facial Moisturizer",
    "rating": {
      "stars": 4.7,
      "count": 120
    },
    "priceCents": 2000,
    "category": "Beauty & Personal Care",
    "subCategory": "Skincare",
    "keywords": [
      "moisturizer",
      "hydration",
      "skincare",
      "beauty"
    ],
    "description": "This Hydrating Facial Moisturizer is expertly formulated to deeply nourish and hydrate your skin, providing lasting moisture and a smooth, radiant complexion. Ideal for daily use."
  },
  {
    "id": "2",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/shampoo.jpg",
    "name": "Anti-Dandruff Shampoo",
    "rating": {
      "stars": 4.5,
      "count": 85
    },
    "priceCents": 1500,
    "category": "Beauty & Personal Care",
    "subCategory": "Hair Care",
    "keywords": [
      "shampoo",
      "hair care",
      "anti-dandruff",
      "cleanse"
    ],
    "description": "Our Anti-Dandruff Shampoo effectively combats flakes and itchiness, promoting a healthy scalp. Infused with soothing ingredients, it cleanses your hair without stripping natural oils."
  },
  {
    "id": "3",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/foundation.jpg",
    "name": "Matte Liquid Foundation",
    "rating": {
      "stars": 4.6,
      "count": 98
    },
    "priceCents": 2200,
    "category": "Beauty & Personal Care",
    "subCategory": "Makeup",
    "keywords": [
      "foundation",
      "makeup",
      "beauty",
      "matte"
    ],
    "description": "This Matte Liquid Foundation offers a flawless finish with long-lasting wear. Lightweight and breathable, it blends seamlessly into the skin, providing even coverage and a natural look."
  },
  {
    "id": "4",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/perfume.jpg",
    "name": "Eau de Parfum - Floral Scent",
    "rating": {
      "stars": 4.8,
      "count": 160
    },
    "priceCents": 3500,
    "category": "Beauty & Personal Care",
    "subCategory": "Fragrances",
    "keywords": [
      "perfume",
      "fragrance",
      "scent",
      "floral"
    ],
    "description": "Experience the essence of blooming florals with our Eau de Parfum. This captivating scent envelops you in elegance, making it perfect for any occasion, leaving a lasting impression."
  },
  {
    "id": "5",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/shaving-kit.jpg",
    "name": "Men's Shaving Kit",
    "rating": {
      "stars": 4.4,
      "count": 70
    },
    "priceCents": 1800,
    "category": "Beauty & Personal Care",
    "subCategory": "Grooming",
    "keywords": [
      "shaving kit",
      "grooming",
      "men",
      "razor"
    ],
    "description": "This Men's Shaving Kit includes everything needed for a close, comfortable shave. Featuring a premium razor and soothing gel, it ensures a smooth experience with every use."
  },
  {
    "id": "6",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/body-wash.jpg",
    "name": "Nourishing Body Wash",
    "rating": {
      "stars": 4.7,
      "count": 140
    },
    "priceCents": 1300,
    "category": "Beauty & Personal Care",
    "subCategory": "Bath & Body",
    "keywords": [
      "body wash",
      "bath",
      "care",
      "nourishing"
    ],
    "description": "Our Nourishing Body Wash gently cleanses while replenishing moisture, leaving your skin feeling soft and revitalized. Infused with natural ingredients for a refreshing bathing experience."
  },
  {
    "id": "7",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/nail-polish.jpg",
    "name": "Glossy Nail Polish",
    "rating": {
      "stars": 4.5,
      "count": 65
    },
    "priceCents": 800,
    "category": "Beauty & Personal Care",
    "subCategory": "Nail Care",
    "keywords": [
      "nail polish",
      "nail care",
      "beauty",
      "glossy"
    ],
    "description": "Achieve stunning nails with our Glossy Nail Polish. This vibrant formula provides high shine and long-lasting wear, perfect for expressing your personal style with every application."
  },
  {
    "id": "8",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/conditioner.jpg",
    "name": "Moisturizing Conditioner",
    "rating": {
      "stars": 4.6,
      "count": 110
    },
    "priceCents": 1700,
    "category": "Beauty & Personal Care",
    "subCategory": "Hair Care",
    "keywords": [
      "conditioner",
      "hair care",
      "moisturizing",
      "smooth"
    ],
    "description": "Our Moisturizing Conditioner deeply hydrates and detangles hair, leaving it soft, shiny, and manageable. Perfect for all hair types, it helps restore natural moisture balance."
  },
  {
    "id": "9",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/razor.jpg",
    "name": "Triple Blade Razor",
    "rating": {
      "stars": 4.3,
      "count": 55
    },
    "priceCents": 1000,
    "category": "Beauty & Personal Care",
    "subCategory": "Men's Grooming Products",
    "keywords": [
      "razor",
      "grooming",
      "men",
      "shaving"
    ],
    "description": "The Triple Blade Razor delivers an exceptionally close shave with minimal irritation. Its ergonomic design provides comfort and control, making it a must-have for every grooming routine."
  },
  {
    "id": "10",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/vitamin-supplement.jpg",
    "name": "Vitamin C Supplement",
    "rating": {
      "stars": 4.7,
      "count": 200
    },
    "priceCents": 3000,
    "category": "Beauty & Personal Care",
    "subCategory": "Health & Wellness Products",
    "keywords": [
      "vitamin c",
      "supplement",
      "wellness",
      "health"
    ],
    "description": "Boost your health with our Vitamin C Supplement. Designed to support immune function and overall wellness, these easy-to-take tablets provide essential nutrients for your daily needs."
  },
  {
    "id": "11",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/wireless-headphones.jpg",
    "name": "Wireless Bluetooth Headphones",
    "rating": {
      "stars": 4.7,
      "count": 230
    },
    "priceCents": 7999,
    "category": "Electronics & Gadgets",
    "subCategory": "Audio",
    "keywords": [
      "headphones",
      "bluetooth",
      "audio",
      "electronics"
    ],
    "description": "Experience superior sound quality with these wireless Bluetooth headphones, designed for comfort and portability for everyday use."
  },
  {
    "id": "12",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/smartphone.jpg",
    "name": "Smartphone - 128GB",
    "rating": {
      "stars": 4.6,
      "count": 320
    },
    "priceCents": 45000,
    "category": "Electronics & Gadgets",
    "subCategory": "Mobile Phones",
    "keywords": [
      "smartphone",
      "mobile",
      "gadgets"
    ],
    "description": "Stay connected with this high-performance smartphone featuring 128GB storage, perfect for apps, photos, and multimedia."
  },
  {
    "id": "13",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/4k-tv.jpg",
    "name": "55-Inch 4K Ultra HD TV",
    "rating": {
      "stars": 4.8,
      "count": 190
    },
    "priceCents": 90000,
    "category": "Electronics & Gadgets",
    "subCategory": "Televisions",
    "keywords": [
      "television",
      "4K",
      "electronics",
      "gadgets"
    ],
    "description": "Enjoy breathtaking visuals with this 55-inch 4K Ultra HD TV, delivering stunning detail and vibrant colors for your favorite shows."
  },
  {
    "id": "14",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/laptop.jpg",
    "name": "Gaming Laptop - 16GB RAM, 512GB SSD",
    "rating": {
      "stars": 4.9,
      "count": 210
    },
    "priceCents": 120000,
    "category": "Electronics & Gadgets",
    "subCategory": "Computers",
    "keywords": [
      "laptop",
      "gaming",
      "computers",
      "electronics"
    ],
    "description": "Unleash your gaming potential with this powerful gaming laptop featuring 16GB RAM and 512GB SSD for speed and performance."
  },
  {
    "id": "15",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/smartwatch.jpg",
    "name": "Smartwatch - Fitness Tracker",
    "rating": {
      "stars": 4.5,
      "count": 130
    },
    "priceCents": 15000,
    "category": "Electronics & Gadgets",
    "subCategory": "Wearables",
    "keywords": [
      "smartwatch",
      "fitness",
      "wearables",
      "electronics"
    ],
    "description": "Monitor your health and stay connected with this feature-rich smartwatch, perfect for tracking fitness and receiving notifications."
  },
  {
    "id": "16",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/tablet.jpg",
    "name": "10.1-Inch Android Tablet",
    "rating": {
      "stars": 4.3,
      "count": 95
    },
    "priceCents": 20000,
    "category": "Electronics & Gadgets",
    "subCategory": "Tablets",
    "keywords": [
      "tablet",
      "android",
      "gadgets",
      "electronics"
    ],
    "description": "Enjoy your favorite apps and media on this sleek 10.1-inch Android tablet, offering portability and a vibrant display for on-the-go."
  },
  {
    "id": "17",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/bluetooth-speaker.jpg",
    "name": "Portable Bluetooth Speaker",
    "rating": {
      "stars": 4.7,
      "count": 180
    },
    "priceCents": 5000,
    "category": "Electronics & Gadgets",
    "subCategory": "Audio",
    "keywords": [
      "bluetooth",
      "speaker",
      "audio",
      "gadgets"
    ],
    "description": "Take your music anywhere with this portable Bluetooth speaker, delivering powerful sound in a compact design, perfect for outdoor use."
  },
  {
    "id": "18",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/dslr-camera.jpg",
    "name": "DSLR Camera - 24MP",
    "rating": {
      "stars": 4.8,
      "count": 115
    },
    "priceCents": 85000,
    "category": "Electronics & Gadgets",
    "subCategory": "Cameras",
    "keywords": [
      "camera",
      "dslr",
      "gadgets",
      "electronics"
    ],
    "description": "Capture stunning photos and videos with this 24MP DSLR camera, offering professional-quality imaging and advanced features for creatives."
  },
  {
    "id": "19",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/usb-drive.jpg",
    "name": "USB Drive - 64GB",
    "rating": {
      "stars": 4.2,
      "count": 75
    },
    "priceCents": 1200,
    "category": "Electronics & Gadgets",
    "subCategory": "Storage",
    "keywords": [
      "usb",
      "storage",
      "gadgets",
      "electronics"
    ],
    "description": "Store and transfer your files easily with this 64GB USB drive, offering ample space and portability for your data needs."
  },
  {
    "id": "20",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/action-camera.jpg",
    "name": "4K Action Camera",
    "rating": {
      "stars": 4.6,
      "count": 90
    },
    "priceCents": 18000,
    "category": "Electronics & Gadgets",
    "subCategory": "Cameras",
    "keywords": [
      "action camera",
      "4K",
      "gadgets",
      "electronics"
    ],
    "description": "Record your adventures in stunning detail with this 4K action camera, built to withstand tough conditions and capture high-quality footage."
  },
  {
    "id": "21",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/denim-jacket.jpg",
    "name": "Men's Denim Jacket",
    "rating": {
      "stars": 4.5,
      "count": 150
    },
    "priceCents": 3500,
    "category": "Fashion & Apparel",
    "subCategory": "Men's Clothing",
    "keywords": [
      "denim jacket",
      "men's fashion",
      "clothing",
      "outerwear"
    ],
    "description": "This stylish Men's Denim Jacket is perfect for any casual occasion. Crafted from high-quality denim, it features a classic fit, button closure, and timeless design that complements various outfits."
  },
  {
    "id": "22",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/maxi-dress.jpg",
    "name": "Women's Floral Maxi Dress",
    "rating": {
      "stars": 4.8,
      "count": 95
    },
    "priceCents": 4200,
    "category": "Fashion & Apparel",
    "subCategory": "Women's Clothing",
    "keywords": [
      "floral dress",
      "women's fashion",
      "clothing",
      "dress"
    ],
    "description": "Embrace elegance with this Women's Floral Maxi Dress, designed with a flattering silhouette and vibrant floral patterns. Perfect for sunny days and special occasions, it's a must-have addition to your wardrobe."
  },
  {
    "id": "23",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/sneakers.jpg",
    "name": "Unisex Casual Sneakers",
    "rating": {
      "stars": 4.7,
      "count": 210
    },
    "priceCents": 5500,
    "category": "Fashion & Apparel",
    "subCategory": "Footwear",
    "keywords": [
      "sneakers",
      "footwear",
      "shoes",
      "casual"
    ],
    "description": "These Unisex Casual Sneakers blend comfort and style effortlessly. With a lightweight design and cushioned sole, they're perfect for everyday wear, making them a versatile choice for any outfit."
  },
  {
    "id": "24",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/leather-bag.jpg",
    "name": "Leather Tote Bag",
    "rating": {
      "stars": 4.6,
      "count": 130
    },
    "priceCents": 6000,
    "category": "Fashion & Apparel",
    "subCategory": "Accessories",
    "keywords": [
      "leather bag",
      "tote",
      "accessories",
      "fashion"
    ],
    "description": "Elevate your style with this chic Leather Tote Bag, featuring a spacious interior and elegant design. Crafted from premium leather, it's perfect for carrying your essentials while looking effortlessly stylish."
  },
  {
    "id": "25",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/sunglasses.jpg",
    "name": "Polarized Sunglasses",
    "rating": {
      "stars": 4.4,
      "count": 90
    },
    "priceCents": 2500,
    "category": "Fashion & Apparel",
    "subCategory": "Accessories",
    "keywords": [
      "sunglasses",
      "polarized",
      "accessories",
      "fashion"
    ],
    "description": "Protect your eyes in style with these Polarized Sunglasses. Designed to reduce glare and enhance visual clarity, they offer both comfort and sophistication for all your outdoor adventures."
  },
  {
    "id": "26",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/formal-shirt.jpg",
    "name": "Men's Formal Shirt",
    "rating": {
      "stars": 4.3,
      "count": 85
    },
    "priceCents": 3100,
    "category": "Fashion & Apparel",
    "subCategory": "Men's Clothing",
    "keywords": [
      "formal shirt",
      "men's fashion",
      "clothing",
      "shirt"
    ],
    "description": "This Men's Formal Shirt combines elegance with comfort. Tailored to perfection, it features a classic collar and a crisp finish, making it the ideal choice for business meetings or formal occasions."
  },
  {
    "id": "27",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/heels.jpg",
    "name": "Women's High Heels",
    "rating": {
      "stars": 4.6,
      "count": 105
    },
    "priceCents": 4500,
    "category": "Fashion & Apparel",
    "subCategory": "Footwear",
    "keywords": [
      "heels",
      "women's footwear",
      "fashion",
      "shoes"
    ],
    "description": "Step into sophistication with these Women's High Heels, featuring a sleek design and comfortable fit. Perfect for parties, weddings, or a night out, they will elevate any outfit with a touch of glamour."
  },
  {
    "id": "28",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/t-shirt.jpg",
    "name": "Graphic Print T-Shirt",
    "rating": {
      "stars": 4.5,
      "count": 200
    },
    "priceCents": 1800,
    "category": "Fashion & Apparel",
    "subCategory": "Men's Clothing",
    "keywords": [
      "t-shirt",
      "graphic print",
      "men's fashion",
      "clothing"
    ],
    "description": "Express yourself with this Graphic Print T-Shirt, featuring vibrant colors and unique designs. Made from soft cotton, it offers a relaxed fit, making it perfect for casual outings or lounging at home."
  },
  {
    "id": "29",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/handbag.jpg",
    "name": "Women's Designer Handbag",
    "rating": {
      "stars": 4.9,
      "count": 150
    },
    "priceCents": 7500,
    "category": "Fashion & Apparel",
    "subCategory": "Accessories",
    "keywords": [
      "handbag",
      "designer",
      "fashion",
      "accessories"
    ],
    "description": "Make a statement with this Women's Designer Handbag, crafted from luxurious materials and featuring exquisite detailing. It's spacious enough for daily essentials while adding elegance to your ensemble."
  },
  {
    "id": "30",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/slippers.jpg",
    "name": "Comfortable Flip-Flops",
    "rating": {
      "stars": 4.2,
      "count": 70
    },
    "priceCents": 1200,
    "category": "Fashion & Apparel",
    "subCategory": "Footwear",
    "keywords": [
      "flip-flops",
      "slippers",
      "footwear",
      "casual"
    ],
    "description": "Enjoy ultimate comfort with these Comfortable Flip-Flops. Designed for casual wear, they feature soft straps and cushioned soles, making them perfect for the beach, pool, or everyday relaxation."
  },
  {
    "id": "31",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/sofa.jpg",
    "name": "Modern Leather Sofa",
    "rating": {
      "stars": 4.8,
      "count": 220
    },
    "priceCents": 120000,
    "category": "Home & Kitchen",
    "subCategory": "Furniture",
    "keywords": [
      "sofa",
      "furniture",
      "living room",
      "home decor"
    ],
    "description": "A stylish modern leather sofa that enhances the elegance of your living room while providing utmost comfort for relaxation and entertaining guests."
  },
  {
    "id": "32",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/refrigerator.jpg",
    "name": "Stainless Steel Refrigerator",
    "rating": {
      "stars": 4.6,
      "count": 150
    },
    "priceCents": 95000,
    "category": "Home & Kitchen",
    "subCategory": "Kitchen Appliances",
    "keywords": [
      "refrigerator",
      "appliance",
      "kitchen",
      "stainless steel"
    ],
    "description": "This sleek stainless steel refrigerator features ample storage space, energy efficiency, and modern technology, making it perfect for keeping your food fresh."
  },
  {
    "id": "33",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/vacuum-cleaner.jpg",
    "name": "Cordless Vacuum Cleaner",
    "rating": {
      "stars": 4.4,
      "count": 180
    },
    "priceCents": 18000,
    "category": "Home & Kitchen",
    "subCategory": "Home Appliances",
    "keywords": [
      "vacuum cleaner",
      "cordless",
      "cleaning",
      "home"
    ],
    "description": "Enjoy effortless cleaning with this cordless vacuum cleaner, designed for convenience and efficiency, easily reaching corners and tight spaces without any cords."
  },
  {
    "id": "34",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/cookware.jpg",
    "name": "Non-Stick Cookware Set",
    "rating": {
      "stars": 4.7,
      "count": 95
    },
    "priceCents": 25000,
    "category": "Home & Kitchen",
    "subCategory": "Cookware & Bakeware",
    "keywords": [
      "cookware",
      "non-stick",
      "kitchen",
      "bakeware"
    ],
    "description": "This non-stick cookware set is perfect for easy cooking and cleaning, ensuring your meals come out delicious without sticking, making meal prep a breeze."
  },
  {
    "id": "35",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/dinnerware.jpg",
    "name": "Porcelain Dinnerware Set",
    "rating": {
      "stars": 4.9,
      "count": 70
    },
    "priceCents": 16000,
    "category": "Home & Kitchen",
    "subCategory": "Dinnerware & Serveware",
    "keywords": [
      "dinnerware",
      "porcelain",
      "kitchen",
      "tableware"
    ],
    "description": "Elevate your dining experience with this exquisite porcelain dinnerware set, perfect for both everyday meals and special occasions, combining elegance and functionality."
  },
  {
    "id": "36",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/mattress.jpg",
    "name": "Memory Foam Mattress",
    "rating": {
      "stars": 4.8,
      "count": 140
    },
    "priceCents": 75000,
    "category": "Home & Kitchen",
    "subCategory": "Bedding",
    "keywords": [
      "mattress",
      "memory foam",
      "bedding",
      "sleep"
    ],
    "description": "Experience superior comfort with our memory foam mattress, designed to contour to your body and provide excellent support for a restful night’s sleep."
  },
  {
    "id": "37",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/table-lamp.jpg",
    "name": "Contemporary Table Lamp",
    "rating": {
      "stars": 4.5,
      "count": 85
    },
    "priceCents": 5000,
    "category": "Home & Kitchen",
    "subCategory": "Lighting",
    "keywords": [
      "lamp",
      "lighting",
      "home decor",
      "table lamp"
    ],
    "description": "Brighten your space with this contemporary table lamp, combining modern design and functionality, perfect for reading or creating a cozy atmosphere in any room."
  },
  {
    "id": "38",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/rug.jpg",
    "name": "Hand-Woven Area Rug",
    "rating": {
      "stars": 4.6,
      "count": 110
    },
    "priceCents": 20000,
    "category": "Home & Kitchen",
    "subCategory": "Home Decor",
    "keywords": [
      "rug",
      "home decor",
      "woven",
      "area rug"
    ],
    "description": "This hand-woven area rug adds warmth and style to your home decor, featuring intricate designs that enhance any living space while providing comfort underfoot."
  },
  {
    "id": "39",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/storage-boxes.jpg",
    "name": "Plastic Storage Boxes - Set of 4",
    "rating": {
      "stars": 4.3,
      "count": 55
    },
    "priceCents": 8000,
    "category": "Home & Kitchen",
    "subCategory": "Storage & Organization",
    "keywords": [
      "storage",
      "organization",
      "home",
      "plastic boxes"
    ],
    "description": "Keep your home organized with this set of 4 plastic storage boxes, perfect for decluttering any space and storing items securely while maintaining easy accessibility."
  },
  {
    "id": "40",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/cleaning-supplies.jpg",
    "name": "Eco-Friendly Cleaning Supplies Kit",
    "rating": {
      "stars": 4.8,
      "count": 120
    },
    "priceCents": 10000,
    "category": "Home & Kitchen",
    "subCategory": "Cleaning Supplies",
    "keywords": [
      "cleaning supplies",
      "eco-friendly",
      "home",
      "cleaning kit"
    ],
    "description": "This eco-friendly cleaning supplies kit features sustainable products that effectively clean your home while being safe for the environment and your family."
  },
  {
    "id": "41",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/treadmill.jpg",
    "name": "Foldable Electric Treadmill",
    "rating": {
      "stars": 4.7,
      "count": 320
    },
    "priceCents": 350000,
    "category": "Health & Fitness",
    "subCategory": "Fitness Equipment",
    "keywords": [
      "treadmill",
      "fitness",
      "exercise",
      "home gym"
    ],
    "description": "This Foldable Electric Treadmill offers a convenient way to maintain fitness at home. With various speed settings and a compact design, it's perfect for beginners and seasoned athletes."
  },
  {
    "id": "42",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/dumbbells.jpg",
    "name": "Adjustable Dumbbell Set - 20kg",
    "rating": {
      "stars": 4.5,
      "count": 260
    },
    "priceCents": 60000,
    "category": "Health & Fitness",
    "subCategory": "Fitness Equipment",
    "keywords": [
      "dumbbells",
      "weights",
      "fitness",
      "strength training"
    ],
    "description": "The Adjustable Dumbbell Set allows for a customizable weight training experience. With a total weight of 20kg, it's perfect for strength training and versatile enough for various workouts."
  },
  {
    "id": "43",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/protein-powder.jpg",
    "name": "Whey Protein Powder - 2kg",
    "rating": {
      "stars": 4.6,
      "count": 180
    },
    "priceCents": 35000,
    "category": "Health & Fitness",
    "subCategory": "Sports Nutrition",
    "keywords": [
      "protein",
      "nutrition",
      "supplement",
      "sports"
    ],
    "description": "This Whey Protein Powder provides an excellent source of protein for muscle recovery and growth. The 2kg package is ideal for athletes and fitness enthusiasts aiming for optimal nutrition."
  },
  {
    "id": "44",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/blood-pressure-monitor.jpg",
    "name": "Digital Blood Pressure Monitor",
    "rating": {
      "stars": 4.8,
      "count": 210
    },
    "priceCents": 22000,
    "category": "Health & Fitness",
    "subCategory": "Health Monitors",
    "keywords": [
      "blood pressure",
      "monitor",
      "health",
      "medical"
    ],
    "description": "Stay on top of your health with this Digital Blood Pressure Monitor. Easy to use and highly accurate, it helps you track your blood pressure at home with clear digital readings."
  },
  {
    "id": "45",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/first-aid-kit.jpg",
    "name": "Compact First Aid Kit",
    "rating": {
      "stars": 4.9,
      "count": 150
    },
    "priceCents": 12000,
    "category": "Health & Fitness",
    "subCategory": "First Aid",
    "keywords": [
      "first aid",
      "kit",
      "medical",
      "emergency"
    ],
    "description": "This Compact First Aid Kit is essential for home, travel, or emergency situations. Packed with necessary supplies, it ensures you're prepared for minor injuries and emergencies."
  },
  {
    "id": "46",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/hand-sanitizer.jpg",
    "name": "Alcohol-Based Hand Sanitizer - 500ml",
    "rating": {
      "stars": 4.5,
      "count": 90
    },
    "priceCents": 800,
    "category": "Health & Fitness",
    "subCategory": "Personal Health",
    "keywords": [
      "hand sanitizer",
      "personal health",
      "hygiene",
      "sanitizer"
    ],
    "description": "Keep your hands clean and germ-free with this Alcohol-Based Hand Sanitizer. The 500ml bottle is perfect for personal use at home or on the go, providing effective sanitization."
  },
  {
    "id": "47",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/gloves.jpg",
    "name": "Workout Gloves - Pair",
    "rating": {
      "stars": 4.4,
      "count": 100
    },
    "priceCents": 3000,
    "category": "Health & Fitness",
    "subCategory": "Sports Gear & Accessories",
    "keywords": [
      "gloves",
      "workout",
      "sports",
      "fitness"
    ],
    "description": "Enhance your workout experience with these comfortable Workout Gloves. Designed to provide grip and protection, they are perfect for lifting weights or performing rigorous exercises."
  },
  {
    "id": "48",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/thermometer.jpg",
    "name": "Infrared Digital Thermometer",
    "rating": {
      "stars": 4.7,
      "count": 120
    },
    "priceCents": 15000,
    "category": "Health & Fitness",
    "subCategory": "Health Monitors",
    "keywords": [
      "thermometer",
      "digital",
      "health",
      "infrared"
    ],
    "description": "This Infrared Digital Thermometer allows for quick and accurate temperature readings. Perfect for home health monitoring, it provides fast results without physical contact."
  },
  {
    "id": "49",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/yoga-mat.jpg",
    "name": "Non-Slip Yoga Mat",
    "rating": {
      "stars": 4.6,
      "count": 200
    },
    "priceCents": 5000,
    "category": "Health & Fitness",
    "subCategory": "Yoga & Meditation Supplies",
    "keywords": [
      "yoga mat",
      "fitness",
      "yoga",
      "exercise"
    ],
    "description": "The Non-Slip Yoga Mat is designed for stability and comfort during yoga sessions. Its durable material ensures a safe practice, making it ideal for all skill levels and styles."
  },
  {
    "id": "50",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/knee-pads.jpg",
    "name": "Adjustable Knee Pads",
    "rating": {
      "stars": 4.3,
      "count": 70
    },
    "priceCents": 4000,
    "category": "Health & Fitness",
    "subCategory": "Sports Gear & Accessories",
    "keywords": [
      "knee pads",
      "sports",
      "gear",
      "fitness"
    ],
    "description": "These Adjustable Knee Pads provide comfort and support during workouts. Perfect for protecting your knees during intense activities, they are essential for athletes and fitness lovers."
  }
];
if(!localStorage.getItem("AllProducts")){
  localStorage.setItem("AllProducts", JSON.stringify(productsData));
}
const cartCountElement = document.getElementById('cartCount');
const allProducts = JSON.parse(localStorage.getItem('AllProducts'));
const user = JSON.parse(localStorage.getItem("user"));
const searchInput = document.getElementById('searchInput');
const userName = document.querySelector("#person_name");
const track = document.querySelector('.slider_track');
const slides = document.querySelectorAll('.slider_content');
const nextBtn = document.querySelector('.slider_btn.next');
const prevBtn = document.querySelector('.slider_btn.prev');
const dots = document.querySelectorAll('.dot');
const productsContainer = document.getElementById('productsContainer');
const popup = document.getElementById('productPopup');
const popupImage = document.getElementById('popupImage');
const popupName = document.getElementById('popupName');
const popupPrice = document.getElementById('popupPrice');
const popupRating = document.getElementById('popupRating');
const popupDesc = document.getElementById('popupDesc');
const closeBtn = document.querySelector('.close_popup');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCartBtn = document.getElementsByClassName('add_to_cart')[0];
updateCartCount();
let index = 0;
function logout(){
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
if(!user) {
  window.location.href = "login.html";
}
userName.innerHTML = user.firstName;


function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}


searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(query)
  );
  resetFilters();
  displayProducts(filteredProducts);
});


prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
  resetAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
    resetAutoSlide();
  });
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 4000);
}

let autoSlide = setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 4000);

function gotoCart(){
  window.location.href = "cart.html";
}
// ===============================

displayProducts(productsData)

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

popup.addEventListener('click', e => {
  console.log(e.target, popup);
  if (e.target === popup) {
    popup.classList.remove('show');
  }
});
addToCartBtn.addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productId = productsData.find(product => product.name === popupName.textContent).id;
  const product = productsData.find(product => product.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} has been added to your cart!`);
});
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCountElement) {
    cartCountElement.textContent = totalQuantity;
  }
}

// ======================================================================
const minPrice = document.getElementById('min_price');
const maxPrice = document.getElementById('max_price');
const rating = document.getElementById('rating');

const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');
const ratingValue = document.getElementById('ratingValue');

minPrice.addEventListener('input', () => {
    minPriceValue.textContent = minPrice.value;
});

maxPrice.addEventListener('input', () => {
    maxPriceValue.textContent = maxPrice.value;
});

rating.addEventListener('input', () => {
    ratingValue.textContent = rating.value;
});
// ===============================
const applyFiltersBtn = document.getElementById('applyFilters');
applyFiltersBtn.addEventListener('click', () => {
    const selectedCategories = Array.from(document.querySelectorAll('.filter_input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    const selectedPriceOrder = document.querySelector('input[name="price"]:checked')?.value;

    const filters = {
        categories: selectedCategories,
        priceOrder: selectedPriceOrder,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
        rating: rating.value
    };

    localStorage.setItem('productFilters', JSON.stringify(filters));

    filterProducts(filters);
});

const savedFilters = JSON.parse(localStorage.getItem('productFilters'));
function resetFilters() {
    minPrice.value = 0;
    maxPrice.value = 3500;
    rating.value = 0;
    minPriceValue.textContent = 0;
    maxPriceValue.textContent = 3500;
    ratingValue.textContent = 0;
    const checkboxes = document.querySelectorAll('.filter_input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    const priceRadios = document.querySelectorAll('input[name="price"]');
    priceRadios.forEach(radio => radio.checked = false);
    localStorage.removeItem('productFilters');
    displayProducts(allProducts);
}
function setfilters(savedFilters) {

  minPrice.value = savedFilters.minPrice;
  maxPrice.value = savedFilters.maxPrice;
  rating.value = savedFilters.rating;

    minPriceValue.textContent = savedFilters.minPrice;
    maxPriceValue.textContent = savedFilters.maxPrice;
    ratingValue.textContent = savedFilters.rating;

    if (savedFilters.categories[0] !== "All") {
      savedFilters.categories.forEach(category => {
          const checkbox = document.querySelector(`.filter_input[value="${category}"]`);
          if (checkbox) checkbox.checked = true;
      });
  } else {
      const checkboxes = document.querySelectorAll('.filter_input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = true);
  }

    const priceRadio = document.querySelector(`input[name="price"][value="${savedFilters.priceOrder}"]`);
    if (priceRadio) priceRadio.checked = true;

}
setfilters(savedFilters)
filterProducts(savedFilters);
function filterProducts(filters) {
    let filteredProducts = allProducts;

    if(filters.categories.length > 0 && filters.categories[0] != "All") {
        filteredProducts = filteredProducts.filter(product =>
          filters.categories.includes(product.category));
  } 
    filteredProducts = filteredProducts.filter(product => {
      const price = product.priceCents / 100; 
      return price >= parseFloat(filters.minPrice) && price <= parseFloat(filters.maxPrice);
  });
    filteredProducts = filteredProducts.filter(product => product.rating.stars >= filters.rating);

    if (filters.priceOrder) {
        if (filters.priceOrder === 'lowToHigh') {
            filteredProducts = filteredProducts.sort((a, b) => (a.priceCents - b.priceCents));
        } else if (filters.priceOrder === 'highToLow') {
            filteredProducts = filteredProducts.sort((a, b) => (b.priceCents - a.priceCents));
        }
    }

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const price = (product.priceCents / 100).toFixed(2);
        const oldprice = (price * 1.1).toFixed(2);
        const card = document.createElement('div');
        card.className = 'product_card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product_img" />
            <div class="content">
                <h3>${product.name}</h3>
                <p class="price"><del>$${oldprice}</del> $${price}</p>
            </div>
        `;
        card.querySelector('.product_img').addEventListener('click', () => {
            popupImage.src = product.image;
            popupName.textContent = product.name;
            popupPrice.innerHTML = `<del>$${oldprice}</del>  $${price}`;
            popupRating.textContent = `⭐ ${product.rating.stars} (${product.rating.count} reviews)`;
            popupDesc.textContent = product.description;
            popup.classList.add('show');
        });
        productsContainer.appendChild(card);
    });
}
