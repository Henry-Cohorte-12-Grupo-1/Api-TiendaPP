const { v4: uuidv4 } = require("uuid");

export const products = [
    {
        productId: "13c22a6b-fa8e-4640-ad5c-132e0e61a4f3",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "TV 50 Inches",
        price: 348,
        status: "in_stock",
        quantity: 80,
        description:
            "Television 50 inches. Great quality, nothing compares to wasting time watching your favourite movies in here'",
        categoryId: 1001,
    },

    {
        productId: "cce405a8-873b-4ceb-a9b1-8fd6f4baf250",
        userId: "029c1d76-306f-4bf9-bb9c-32cd24533a59",
        name: "2021 Apple TV 4K (32GB)",
        price: 179,
        status: "running_low",
        quantity: 9,
        description:
            "Apple TV. Enjoy your favorite shows here, great integration with apple ecosystem. Siri integrated and compatible with smart homes",
        categoryId: 1001,
    },

    {
        productId: "9a09e1fa-e7ae-47bd-acb3-0bffaf012d81",
        userId: "029c1d76-306f-4bf9-bb9c-32cd24533a59",
        name: "Oculus Rift VR Gaming Headset",
        price: 179,
        quantity: 1,
        description:
            "Video-Reality Headset. Feel your games in close-to-real experiencies. Forget about your personal life once you buy this headset.",
        categoryId: 1001,
    },
    {
        productId: "2840efc4-c172-4961-bf8d-78c1bad3d1ee",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "Tea Cup Mug",
        price: 38.5,
        quantity: 139,
        description:
            "Stainless steel mug, water resistant. Great for outdoors and for having your coffe always ready to drink",
        categoryId: 1002,
    },
    {
        productId: "41e63e10-b85b-4a2f-a41c-27434fa35a9f",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "Insect Repelent",
        price: 85.45,
        quantity: 4,
        categoryId: 1002,
        description:
            "Forget about not enjoying your outdoors activities because of dumbasses mosquitoes. Kill'em all whith this great poison",
    },
    {
        productId: "c04d0fa6-a561-470b-9907-529ee916ca0d",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        name: "Kitchen Thermometer",
        price: 3,
        quantity: 1,
        description:
            "Digital Kitchen Meat Thermometer. Great for controlling your food. No more excuses for roasting everything in the oven",
        categoryId: 1002,
    },
    {
        productId: "32cf621a-9551-43ac-81fe-150938dd706f",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "Backpack",
        price: 59.97,
        quantity: 92,
        description:
            "Awesome backpack for every opportunity. Durable and waterproof. Graet for bringing over to the mountain and walking outdoors ",
        categoryId: 1003,
    },
    {
        productId: "3490bb8b-3a0d-41a2-86aa-32922c57edbb",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "Eau de Toilette",
        price: 28.75,
        quantity: 7,
        description:
            "Very Fancy perfume, so you wont be stinking everywhere you go. You'll smell like a baby's fart",
        categoryId: 1003,
    },
    {
        productId: "3d56de88-5f25-433f-9c3c-1dfa30cce15a",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        name: "Haircutting kit",
        price: 44,
        quantity: 1,
        description:
            "With this razor blade your face will look younger. People wont be able to recognize you. Baby face you. dudu dada.",
        categoryId: 1003,
    },

    {
        productId: "d145b475-c391-49bf-aa62-eef167aa402c",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        quantity: 1,
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        productId: "34ad64ff-e5e9-4a83-83fc-a6292afc3752",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        quantity: 1,
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        productId: "7d5eb7d5-42b3-4362-b6c5-90c0d64f57f9",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "Mens Cotton Jacket",
        quantity: 1,
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
        productId: "c9ab98fd-1fd6-4aa6-a88a-307e44cb1170",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        name: "Mens Casual Slim Fit",
        quantity: 1,
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    },
    {
        productId: "cbb74968-403c-4503-b529-e528c6a9d0d3",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        quantity: 1,
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        categoryId: 1004,
        //: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        productId: "c1a3fb91-a878-427b-a36b-00ca1ef6519e",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "Solid Gold Petite Micropave ",
        quantity: 1,
        price: 168,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        categoryId: 1004,
        //: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        productId: "6a64a194-f796-4202-89fb-1a68deec6f63",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "White Gold Plated Princess",
        quantity: 1,
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        categoryId: 1004,
        //: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        productId: "1c37643d-4de4-48d3-9be9-a935ae720df7",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        quantity: 1,
        price: 10.99,
        description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        categoryId: 1004,
        //: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        productId: "77ac3ec4-bab0-4e93-bd98-f32f206ebc0e",
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        quantity: 1,
        price: 64,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    },
    {
        productId: "a1f38353-4eaa-4a31-9202-8fa9ad90f3e2",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    },
    {
        productId: "f663596c-7f87-40db-8626-ad598d299924",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 1,
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    },
    {
        productId: "d52ce289-7ab9-4962-9ce8-0b8f438b74b4",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
    },
    {
        productId: "f0d8d298-892e-4fdb-a911-ded56e619ceb",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    },
    {
        productId: "16b99392-e7d1-4f6c-a043-81a3c338baf3",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 1,
        name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        categoryId: 1001,
        //: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
    },
    {
        productId: "c9b00afd-7a10-447a-998d-fb664ee09b1c",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
    },
    {
        productId: "0a71dc38-27ae-4265-a390-eb6da354b9c7",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 1,
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
    },
    {
        productId: "ede5dd12-a034-4e9d-b84e-7e566698a3fd",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    },
    {
        productId: "c1797a51-59db-401a-a150-d3b5233529de",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 1,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
    },
    {
        productId: "0625e68a-f8c2-43c2-b397-73bc7eb97125",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
    },
    {
        productId: "fb926159-40d9-40e4-baf8-8421d8c99cf5",
        userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
        quantity: 1,
        name: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        categoryId: 1003,
        //: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    },
    {
        productId: "02877f95-5376-4eb0-a698-665b9b5eab98",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 2,
        name: "Mini Cooper Countryman 1.6 S 184cv At All4",
        price: 3000,
        description:
            "The Mini Countryman is a B-segment SUV that the German manufacturer BMW put on sale in the third quarter of 2010. It has a five-door body, transverse front engine, front or four-wheel drive, and four or five seats.",
        categoryId: 1006,
        //: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    },
    {
        productId: "a009c1b5-c592-4282-b44f-d94ae2b22b29",
        userId: "9de81b64-1c4a-49d7-b9c5-7554d1d35df2",
        quantity: 3,
        name: "Chevrolet Camaro 6.2 Coupe Ss V8",
        price: 10000,
        description:
            "The Camaro Convertible has two power windows on each side (unlike the Coupe, which only has one on each side). This is because the small triangular rear glasses can also be raised or lowered.",
        categoryId: 1006,
        //: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    },
    {
        productId: "f0983987-6c38-4fac-afc3-16f125e4c7a0",
        userId: "ef1795e2-c591-4544-8360-ca83cc1943e1",
        quantity: 5,
        name: "adidas MLS Club Soccer Ball",
        price: 49,
        description:
            "Celebrating 25 consecutive years of elite club football in the US and Canada. Created for kickabouts, this adidas MLS Nativo XXV Club Ball has a dynamic design that's based on the look of the MLS official match ball.",
        categoryId: 1005,
        //: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    },

];
