const variationTemplates = [
  {
    category: 'Clothing',
    variations: [
      { name: 'Size', type: 'dropdown', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { name: 'Color', type: 'text' },
      { name: 'Material', type: 'dropdown', options: ['Cotton', 'Polyester', 'Denim', 'Linen'] },
      { name: 'Fit Type', type: 'dropdown', options: ['Regular', 'Slim', 'Loose'] },
      { name: 'Sleeve Type', type: 'dropdown', options: ['Full', 'Half', 'Sleeveless'] },
      { name: 'Gender', type: 'dropdown', options: ['Men', 'Women', 'Unisex'] },
    ],
  },
  {
    category: 'Fashion',
    variations: [
      { name: 'Type', type: 'dropdown', options: ['Watch', 'Bag', 'Wallet', 'Sunglasses'] },
      { name: 'Material', type: 'text' },
      { name: 'Color', type: 'text' },
      { name: 'Brand', type: 'text' },
    ],
  },
  {
    category: 'Electronics',
    subcategories: [
      {
        name: 'Mobiles & Tablets',
        variations: [
          { name: 'Brand', type: 'text' },
          { name: 'Model', type: 'text' },
          { name: 'RAM', type: 'dropdown', options: ['4GB', '6GB', '8GB', '12GB'] },
          { name: 'Storage', type: 'dropdown', options: ['64GB', '128GB', '256GB', '512GB'] },
          { name: 'Battery', type: 'text' },
          { name: 'Screen Size', type: 'text' },
          { name: 'Warranty', type: 'dropdown', options: ['6 Months', '1 Year', '2 Years'] },

        ],
      },
      {
        name: 'Laptops',
        variations: [
          { name: 'Processor', type: 'dropdown', options: ['i3', 'i5', 'i7', 'Ryzen 5', 'Ryzen 7'] },
          { name: 'RAM', type: 'dropdown', options: ['4GB', '8GB', '16GB', '32GB'] },
          { name: 'Storage', type: 'dropdown', options: ['256GB SSD', '512GB SSD', '1TB HDD'] },
          { name: 'Operating System', type: 'dropdown', options: ['Windows', 'Linux', 'macOS'] },
          { name: 'Warranty', type: 'dropdown', options: ['6 Months', '1 Year', '2 Years'] },

        ],
      },
      {
        name: 'Televisions',
        variations: [
          { name: 'Screen Size', type: 'dropdown', options: ['32"', '43"', '55"', '65"'] },
          { name: 'Resolution', type: 'dropdown', options: ['HD', 'Full HD', '4K'] },
          { name: 'Smart TV', type: 'dropdown', options: ['Yes', 'No'] },
          { name: 'Warranty', type: 'dropdown', options: ['6 Months', '1 Year', '2 Years'] },
        ],
      },
    ],
  },
  {
    category: 'Home & Kitchen',
    subcategories: [
      {
        name: 'Kitchen Appliances',
        variations: [
          { name: 'Brand', type: 'text' },
          { name: 'Capacity', type: 'text' },
          { name: 'Power Consumption', type: 'text' },
          { name: 'Warranty', type: 'dropdown', options: ['1 Year', '2 Years'] },
          { name: 'Material', type: 'dropdown', options: ['Plastic', 'Steel', 'Wood', 'Glass'] },
        ],
      },
      {
        name: 'Cookware & Bakeware',
        variations: [
          { name: 'Brand', type: 'text' },
          { name: 'Material', type: 'dropdown', options: ['Aluminium', 'Iron', 'Non-stick'] },
          { name: 'Compatible Stove', type: 'dropdown', options: ['Gas', 'Induction'] },
          { name: 'Material', type: 'dropdown', options: ['Plastic', 'Steel', 'Wood', 'Glass'] },
        ],
      },
    ],
  },
  {
    category: 'Beauty',
    subcategories: [
      {
        name: 'Skin Care',
        variations: [
          { name: 'Skin Type', type: 'dropdown', options: ['Oily', 'Dry', 'Normal', 'Sensitive'] },
          { name: 'Product Type', type: 'dropdown', options: ['Cream', 'Gel', 'Lotion'] },
          { name: 'Quantity', type: 'text' }
        ],
      },
      {
        name: 'Hair Care',
        variations: [
          { name: 'Hair Type', type: 'dropdown', options: ['Dry', 'Oily', 'Normal'] },
          { name: 'Shampoo Type', type: 'dropdown', options: ['Anti-Dandruff', 'Color-Protect', 'Volumizing'] },
        ],
      },
    ],
  },
  {
    category: 'Grocery & Daily Needs',
    subcategories: [
      {
        name: 'Food Grains & Pulses',
        variations: [
          { name: 'Type', type: 'dropdown', options: ['Rice', 'Wheat', 'Lentils'] },
          { name: 'Quantity', type: 'dropdown', options: ['250g', '500g', '1kg', '2kg'] },
          { name: 'Organic', type: 'dropdown', options: ['Yes', 'No'] },
          { name: 'Brand', type: 'text' },
        ],
      },
      {
        name: 'Beverages',
        variations: [
          { name: 'Type', type: 'dropdown', options: ['Tea', 'Coffee', 'Juice'] },
          { name: 'Volume', type: 'text' },
          { name: 'Quantity', type: 'dropdown', options: ['250g', '500g', '1kg', '2kg'] },
          { name: 'Organic', type: 'dropdown', options: ['Yes', 'No'] },
          { name: 'Brand', type: 'text' },
        ],
      },
    ],
  },
  {
    category: 'Furniture',
    subcategories: [
      {
        name: 'Beds & Mattresses',
        variations: [
          { name: 'Size', type: 'dropdown', options: ['Single', 'Double', 'Queen', 'King'] },
          { name: 'Material', type: 'dropdown', options: ['Wood', 'Metal', 'Plastic'] },
          { name: 'Color', type: 'text' },
          { name: 'Dimensions', type: 'text' },
          { name: 'Assembly Required', type: 'dropdown', options: ['Yes', 'No'] },
        ],
      },
      {
        name: 'Sofas & Recliners',
        variations: [
          { name: 'Seater', type: 'dropdown', options: ['1', '2', '3', '5'] },
          { name: 'Upholstery Material', type: 'text' },
          { name: 'Material', type: 'dropdown', options: ['Wood', 'Metal', 'Plastic'] },
          { name: 'Color', type: 'text' },
          { name: 'Dimensions', type: 'text' },
          { name: 'Assembly Required', type: 'dropdown', options: ['Yes', 'No'] },
        ],
      },
    ],
  },
  {
  category: 'Health',
  subcategories: [
    {
      name: 'Health & Wellness',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Type', type: 'dropdown', options: ['Fitness', 'Mental Health', 'Lifestyle'] },
        { name: 'Target Audience', type: 'dropdown', options: ['Men', 'Women', 'Kids', 'Unisex'] },
        { name: 'Usage', type: 'text' },
      ],
    },
    {
      name: 'Medical Equipment',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Equipment Type', type: 'dropdown', options: ['BP Monitor', 'Thermometer', 'Oximeter', 'Glucometer'] },
        { name: 'Warranty', type: 'dropdown', options: ['6 Months', '1 Year', '2 Years'] },
        { name: 'Power Source', type: 'dropdown', options: ['Battery', 'Electric'] },
      ],
    },
    {
      name: 'Supplements',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Form', type: 'dropdown', options: ['Tablet', 'Capsule', 'Powder', 'Liquid'] },
        { name: 'Target Goal', type: 'dropdown', options: ['Weight Loss', 'Muscle Gain', 'Immunity Boost'] },
        { name: 'Flavour', type: 'text' },
      ],
    },
  ],
},
{
  category: 'Footwear',
  subcategories: [
    {
      name: 'Sports Shoes',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Size', type: 'dropdown', options: ['6', '7', '8', '9', '10', '11'] },
        { name: 'Material', type: 'dropdown', options: ['Mesh', 'Synthetic', 'Leather'] },
        { name: 'Color', type: 'text' },
      ],
    },
    {
      name: 'Casual Shoes',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Closure Type', type: 'dropdown', options: ['Lace-Up', 'Slip-On'] },
        { name: 'Material', type: 'dropdown', options: ['Canvas', 'Synthetic', 'Leather'] },
        { name: 'Sole Material', type: 'text' },
      ],
    },
    {
      name: 'Formal Shoes',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Type', type: 'dropdown', options: ['Oxford', 'Derby', 'Loafers'] },
        { name: 'Material', type: 'dropdown', options: ['Leather', 'Synthetic'] },
        { name: 'Color', type: 'text' },
      ],
    },
    {
      name: 'Sandals & Floaters',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Gender', type: 'dropdown', options: ['Men', 'Women', 'Kids'] },
        { name: 'Material', type: 'dropdown', options: ['Rubber', 'Synthetic', 'Leather'] },
        { name: 'Fastening', type: 'dropdown', options: ['Velcro', 'Buckle'] },
      ],
    },
    {
      name: 'Boots',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Boot Type', type: 'dropdown', options: ['Chelsea', 'Combat', 'Ankle'] },
        { name: 'Material', type: 'dropdown', options: ['Leather', 'Synthetic'] },
        { name: 'Color', type: 'text' },
      ],
    },
    
  ],
},
{
  category: 'Tools & Hardware',
  subcategories: [
    {
      name: 'Hand Tools',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Tool Type', type: 'dropdown', options: ['Screwdriver', 'Hammer', 'Wrench', 'Pliers'] },
        { name: 'Material', type: 'dropdown', options: ['Steel', 'Carbon Steel', 'Alloy Steel'] },
        { name: 'Handle Material', type: 'dropdown', options: ['Plastic', 'Rubber', 'Wood'] },
      ],
    },
    {
      name: 'Power Tools',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Tool Type', type: 'dropdown', options: ['Drill', 'Grinder', 'Jigsaw', 'Sander'] },
        { name: 'Power Source', type: 'dropdown', options: ['Corded', 'Cordless', 'Battery'] },
        { name: 'Voltage', type: 'text' },
        { name: 'Warranty', type: 'dropdown', options: ['6 Months', '1 Year', '2 Years'] },
      ],
    },
    {
      name: 'Safety & Protective Gear',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Gear Type', type: 'dropdown', options: ['Gloves', 'Goggles', 'Helmet', 'Mask'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Rubber', 'Polycarbonate'] },
        { name: 'Size', type: 'dropdown', options: ['S', 'M', 'L', 'XL'] },
      ],
    },
    {
      name: 'Tool Storage',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Storage Type', type: 'dropdown', options: ['Toolbox', 'Cabinet', 'Bag'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Steel', 'Aluminum'] },
        { name: 'Number of Compartments', type: 'text' },
      ],
    },
    {
      name: 'Measuring & Layout Tools',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Tool Type', type: 'dropdown', options: ['Tape Measure', 'Spirit Level', 'Caliper', 'Ruler'] },
        { name: 'Length/Range', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Steel', 'Plastic', 'Aluminum'] },
      ],
    },
  ],
},
{
  category: 'Gift Cards & Vouchers',
  subcategories: [
    {
      name: 'Retail Gift Cards',
      variations: [
        { name: 'Brand/Store', type: 'text' },
        { name: 'Card Value', type: 'dropdown', options: ['₹100', '₹250', '₹500', '₹1000', 'Custom'] },
        { name: 'Delivery Mode', type: 'dropdown', options: ['Physical', 'Digital'] },
        { name: 'Validity Period', type: 'text' },
      ],
    },
    {
      name: 'E-Gift Cards',
      variations: [
        { name: 'Brand/Platform', type: 'text' },
        { name: 'Card Value', type: 'dropdown', options: ['₹100', '₹250', '₹500', '₹1000', 'Custom'] },
        { name: 'Delivery Method', type: 'dropdown', options: ['Email', 'SMS'] },
        { name: 'Personalized Message', type: 'text' },
        { name: 'Validity Period', type: 'text' },
      ],
    },
    {
      name: 'Experience Vouchers',
      variations: [
        { name: 'Experience Type', type: 'dropdown', options: ['Dining', 'Spa', 'Adventure', 'Travel'] },
        { name: 'Location', type: 'text' },
        { name: 'Voucher Value', type: 'text' },
        { name: 'Validity Period', type: 'text' },
        { name: 'Recipient Name', type: 'text' },
      ],
    },
  ],
},
{
  category: 'Software & Subscriptions',
  subcategories: [
    {
      name: 'Antivirus',
      variations: [
        { name: 'Software Name', type: 'text' },
        { name: 'License Duration', type: 'dropdown', options: ['1 Year', '2 Years', '3 Years'] },
        { name: 'Number of Devices', type: 'dropdown', options: ['1 Device', '3 Devices', '5 Devices'] },
        { name: 'Platform', type: 'dropdown', options: ['Windows', 'Mac', 'Android', 'iOS'] },
        { name: 'Delivery Mode', type: 'dropdown', options: ['Digital Download', 'Activation Key Only'] },
      ],
    },
    {
      name: 'Office Tools',
      variations: [
        { name: 'Software Name', type: 'text' },
        { name: 'License Type', type: 'dropdown', options: ['Personal', 'Business', 'Enterprise'] },
        { name: 'Subscription Duration', type: 'dropdown', options: ['Monthly', 'Yearly'] },
        { name: 'Number of Users', type: 'dropdown', options: ['1 User', 'Up to 5 Users', 'Unlimited'] },
        { name: 'Platform', type: 'dropdown', options: ['Windows', 'Mac', 'Web'] },
      ],
    },
    {
      name: 'Streaming Services',
      variations: [
        { name: 'Service Name', type: 'text' },
        { name: 'Plan Type', type: 'dropdown', options: ['Basic', 'Standard', 'Premium'] },
        { name: 'Subscription Duration', type: 'dropdown', options: ['1 Month', '3 Months', '1 Year'] },
        { name: 'Device Limit', type: 'text' },
        { name: 'Region', type: 'text' },
      ],
    },
    {
      name: 'Educational Software',
      variations: [
        { name: 'Software Name', type: 'text' },
        { name: 'Subject/Domain', type: 'dropdown', options: ['Coding', 'Math', 'Science', 'Language Learning'] },
        { name: 'Subscription Duration', type: 'dropdown', options: ['Monthly', 'Yearly', 'Lifetime'] },
        { name: 'Age Group', type: 'dropdown', options: ['Kids', 'Teens', 'Adults'] },
        { name: 'Platform', type: 'dropdown', options: ['Windows', 'Mac', 'Web', 'Mobile'] },
      ],
    },
  ],
},
{
  category: 'Garden & Outdoor Living',
  subcategories: [
    {
      name: 'Patio Furniture',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Wood', 'Metal', 'Plastic', 'Rattan'] },
        { name: 'Seating Capacity', type: 'dropdown', options: ['2 Seater', '4 Seater', '6 Seater'] },
        { name: 'Cushion Included', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Weather Resistant', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Outdoor Lighting',
      variations: [
        { name: 'Type', type: 'dropdown', options: ['String Lights', 'Wall Lights', 'Pathway Lights', 'Flood Lights'] },
        { name: 'Power Source', type: 'dropdown', options: ['Solar', 'Electric', 'Battery'] },
        { name: 'Color Temperature', type: 'dropdown', options: ['Warm White', 'Cool White', 'RGB'] },
        { name: 'Waterproof Rating', type: 'dropdown', options: ['IP44', 'IP65', 'IP67'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Glass'] },
      ],
    },
    {
      name: 'Planters & Pots',
      variations: [
        { name: 'Material', type: 'dropdown', options: ['Terracotta', 'Ceramic', 'Plastic', 'Metal', 'Wood'] },
        { name: 'Size', type: 'dropdown', options: ['Small', 'Medium', 'Large'] },
        { name: 'Shape', type: 'dropdown', options: ['Round', 'Square', 'Rectangular'] },
        { name: 'Drainage Hole', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Indoor/Outdoor', type: 'dropdown', options: ['Indoor', 'Outdoor', 'Both'] },
      ],
    },
  ],
},
{
  category: 'Art & Collectibles',
  subcategories: [
    {
      name: 'Paintings',
      variations: [
        { name: 'Artist', type: 'text' },
        { name: 'Painting Type', type: 'dropdown', options: ['Oil', 'Acrylic', 'Watercolor', 'Mixed Media'] },
        { name: 'Size', type: 'dropdown', options: ['Small', 'Medium', 'Large'] },
        { name: 'Framed', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Orientation', type: 'dropdown', options: ['Portrait', 'Landscape', 'Square'] },
      ],
    },
    {
      name: 'Collectibles',
      variations: [
        { name: 'Category', type: 'dropdown', options: ['Stamps', 'Coins', 'Vintage Items', 'Miniatures'] },
        { name: 'Material', type: 'dropdown', options: ['Metal', 'Paper', 'Plastic', 'Mixed'] },
        { name: 'Year/Period', type: 'text' },
        { name: 'Condition', type: 'dropdown', options: ['New', 'Like New', 'Used', 'Antique'] },
        { name: 'Rarity', type: 'dropdown', options: ['Common', 'Rare', 'Limited Edition'] },
      ],
    },
    {
      name: 'Handicrafts',
      variations: [
        { name: 'Craft Type', type: 'dropdown', options: ['Embroidery', 'Woodwork', 'Pottery', 'Weaving'] },
        { name: 'Material', type: 'dropdown', options: ['Wood', 'Clay', 'Fabric', 'Metal'] },
        { name: 'Region', type: 'text' },
        { name: 'Handmade', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Sculptures',
      variations: [
        { name: 'Artist', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Bronze', 'Wood', 'Marble', 'Clay', 'Resin'] },
        { name: 'Height', type: 'text' },
        { name: 'Weight', type: 'text' },
        { name: 'Indoor/Outdoor', type: 'dropdown', options: ['Indoor', 'Outdoor', 'Both'] },
      ],
    },
  ],
},
{
  category: 'Musical Instruments & Gear',
  subcategories: [
    {
      name: 'Guitars',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Guitar Type', type: 'dropdown', options: ['Acoustic', 'Electric', 'Bass', 'Classical'] },
        { name: 'Number of Strings', type: 'dropdown', options: ['6', '7', '12'] },
        { name: 'Body Material', type: 'dropdown', options: ['Mahogany', 'Maple', 'Rosewood', 'Spruce'] },
        { name: 'With Case', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Keyboards',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Number of Keys', type: 'dropdown', options: ['49', '61', '76', '88'] },
        { name: 'Type', type: 'dropdown', options: ['Digital Piano', 'MIDI Controller', 'Synthesizer'] },
        { name: 'Connectivity', type: 'dropdown', options: ['USB', 'MIDI', 'Bluetooth'] },
        { name: 'With Stand', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Drums',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Drum Type', type: 'dropdown', options: ['Acoustic Drum Kit', 'Electronic Drum Kit', 'Snare Drum', 'Djembe'] },
        { name: 'Number of Pieces', type: 'dropdown', options: ['3', '5', '7'] },
        { name: 'Material', type: 'dropdown', options: ['Wood', 'Metal', 'Synthetic'] },
        { name: 'Includes Hardware', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Audio Interfaces',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Number of Inputs', type: 'dropdown', options: ['1', '2', '4', '8'] },
        { name: 'Connection Type', type: 'dropdown', options: ['USB', 'Thunderbolt', 'FireWire'] },
        { name: 'Phantom Power', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Includes Software Bundle', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Microphones',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Microphone Type', type: 'dropdown', options: ['Dynamic', 'Condenser', 'Lavalier', 'Ribbon'] },
        { name: 'Connection Type', type: 'dropdown', options: ['XLR', 'USB', '3.5mm'] },
        { name: 'Frequency Response', type: 'text' },
        { name: 'Includes Stand', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
  ],
},
{
  category: 'Office & School Supplies',
  subcategories: [
    {
      name: 'Writing Instruments',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Type', type: 'dropdown', options: ['Ball Pen', 'Gel Pen', 'Fountain Pen', 'Marker', 'Pencil'] },
        { name: 'Ink Color', type: 'dropdown', options: ['Blue', 'Black', 'Red', 'Green', 'Multi-color'] },
        { name: 'Refillable', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Pack Size', type: 'text' },
      ],
    },
    {
      name: 'Paper Products',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Notebook', 'Notepad', 'Sticky Notes', 'Printer Paper'] },
        { name: 'Size', type: 'dropdown', options: ['A4', 'A5', 'A6', 'Letter', 'Legal'] },
        { name: 'Number of Pages', type: 'text' },
        { name: 'Binding Type', type: 'dropdown', options: ['Spiral', 'Stapled', 'Glue Bound'] },
        { name: 'Paper GSM', type: 'text' },
      ],
    },
    {
      name: 'Desk Organizers',
      variations: [
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Wood', 'Fabric'] },
        { name: 'Color', type: 'text' },
        { name: 'Number of Compartments', type: 'text' },
        { name: 'Mount Type', type: 'dropdown', options: ['Desktop', 'Wall-mounted'] },
        { name: 'Size', type: 'text' },
      ],
    },
    {
      name: 'School Bags',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Capacity (Litres)', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Polyester', 'Nylon', 'Canvas'] },
        { name: 'Laptop Compartment', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Water Resistant', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
  ],
},
{
  category: 'Pet Supplies',
  subcategories: [
    {
      name: 'Dog Supplies',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Collar', 'Leash', 'Bed', 'Toy', 'Clothing'] },
        { name: 'Size', type: 'dropdown', options: ['Small', 'Medium', 'Large'] },
        { name: 'Material', type: 'dropdown', options: ['Nylon', 'Cotton', 'Rubber', 'Plastic'] },
        { name: 'Color', type: 'text' },
        { name: 'Breed Suitability', type: 'text' },
      ],
    },
    {
      name: 'Cat Supplies',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Litter Box', 'Toy', 'Scratching Post', 'Bed'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Fabric', 'Wood', 'Cardboard'] },
        { name: 'Color', type: 'text' },
        { name: 'Size', type: 'text' },
        { name: 'With Catnip', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Bird Supplies',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Cage', 'Toy', 'Feeder', 'Bath'] },
        { name: 'Material', type: 'dropdown', options: ['Metal', 'Plastic', 'Wood'] },
        { name: 'Suitable Bird Type', type: 'dropdown', options: ['Parrot', 'Budgie', 'Lovebird', 'Cockatiel'] },
        { name: 'Dimensions', type: 'text' },
      ],
    },
    {
      name: 'Fish Supplies',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Aquarium', 'Filter', 'Air Pump', 'Decoration'] },
        { name: 'Aquarium Size (Litres)', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Glass', 'Acrylic', 'Plastic'] },
        { name: 'Lighting Included', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Pet Food',
      variations: [
        { name: 'Animal Type', type: 'dropdown', options: ['Dog', 'Cat', 'Bird', 'Fish'] },
        { name: 'Food Type', type: 'dropdown', options: ['Dry', 'Wet', 'Treats', 'Supplements'] },
        { name: 'Flavor', type: 'text' },
        { name: 'Weight', type: 'text' },
        { name: 'Age Group', type: 'dropdown', options: ['Puppy/Kitten', 'Adult', 'Senior'] },
      ],
    },
  ],
},
{
  category: 'Jewelry & Accessories',
  subcategories: [
    {
      name: 'Necklaces & Pendants',
      variations: [
        { name: 'Material', type: 'dropdown', options: ['Gold', 'Silver', 'Platinum', 'Artificial'] },
        { name: 'Pendant Type', type: 'dropdown', options: ['Religious', 'Heart', 'Gemstone', 'Name'] },
        { name: 'Length', type: 'text' },
        { name: 'Gender', type: 'dropdown', options: ['Women', 'Men', 'Unisex'] },
        { name: 'Occasion', type: 'dropdown', options: ['Casual', 'Party', 'Wedding', 'Daily Wear'] },
      ],
    },
    {
      name: 'Rings',
      variations: [
        { name: 'Material', type: 'dropdown', options: ['Gold', 'Silver', 'Platinum', 'Artificial'] },
        { name: 'Ring Size', type: 'text' },
        { name: 'Stone Type', type: 'dropdown', options: ['Diamond', 'Cubic Zirconia', 'Gemstone', 'None'] },
        { name: 'Style', type: 'dropdown', options: ['Engagement', 'Casual', 'Statement', 'Band'] },
        { name: 'Gender', type: 'dropdown', options: ['Women', 'Men', 'Unisex'] },
      ],
    },
    {
      name: 'Earrings',
      variations: [
        { name: 'Material', type: 'dropdown', options: ['Gold', 'Silver', 'Platinum', 'Artificial'] },
        { name: 'Earring Type', type: 'dropdown', options: ['Studs', 'Hoops', 'Jhumkas', 'Danglers'] },
        { name: 'Closure Type', type: 'dropdown', options: ['Push Back', 'Hook', 'Screw Back'] },
        { name: 'Gender', type: 'dropdown', options: ['Women', 'Men', 'Unisex'] },
        { name: 'Occasion', type: 'dropdown', options: ['Casual', 'Party', 'Wedding'] },
      ],
    },
    {
      name: 'Watches',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Display Type', type: 'dropdown', options: ['Analog', 'Digital', 'Smart'] },
        { name: 'Strap Material', type: 'dropdown', options: ['Leather', 'Metal', 'Rubber', 'Silicone'] },
        { name: 'Water Resistant', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Gender', type: 'dropdown', options: ['Men', 'Women', 'Unisex'] },
      ],
    },
    {
      name: 'Sunglasses',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Frame Shape', type: 'dropdown', options: ['Aviator', 'Wayfarer', 'Round', 'Square'] },
        { name: 'Lens Type', type: 'dropdown', options: ['Polarized', 'UV Protected', 'Mirrored'] },
        { name: 'Frame Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Acetate'] },
        { name: 'Gender', type: 'dropdown', options: ['Men', 'Women', 'Unisex'] },
      ],
    },
  ],
},
{
  category: 'Sports & Outdoors',
  subcategories: [
    {
      name: 'Fitness Equipment',
      variations: [
        { name: 'Brand', type: 'text' },
        { name: 'Type', type: 'dropdown', options: ['Treadmill', 'Dumbbells', 'Resistance Bands', 'Exercise Bike'] },
        { name: 'Weight Capacity', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Steel', 'Rubber', 'Plastic'] },
        { name: 'Foldable', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Team Sports Gear',
      variations: [
        { name: 'Sport Type', type: 'dropdown', options: ['Football', 'Cricket', 'Basketball', 'Hockey'] },
        { name: 'Brand', type: 'text' },
        { name: 'Size', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Leather', 'Synthetic', 'Plastic'] },
      ],
    },
    {
      name: 'Camping & Hiking',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Tent', 'Sleeping Bag', 'Backpack', 'Camping Stove'] },
        { name: 'Capacity (Persons)', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Nylon', 'Polyester', 'Canvas'] },
        { name: 'Waterproof', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Cycling Accessories',
      variations: [
        { name: 'Accessory Type', type: 'dropdown', options: ['Helmet', 'Lights', 'Gloves', 'Bottle Holder'] },
        { name: 'Brand', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Fabric'] },
        { name: 'Size', type: 'text' },
      ],
    },
  ],
},
{
  category: 'Automotive & Auto Parts',
  subcategories: [
    {
      name: 'Car Accessories',
      variations: [
        { name: 'Accessory Type', type: 'dropdown', options: ['Seat Cover', 'Car Charger', 'Phone Mount', 'Air Freshener'] },
        { name: 'Compatibility', type: 'text' },
        { name: 'Material', type: 'dropdown', options: ['Leather', 'Plastic', 'Fabric'] },
        { name: 'Color', type: 'text' },
      ],
    },
    {
      name: 'Engine Oils & Fluids',
      variations: [
        { name: 'Oil Type', type: 'dropdown', options: ['Engine Oil', 'Brake Fluid', 'Coolant', 'Transmission Fluid'] },
        { name: 'Viscosity', type: 'text' },
        { name: 'Volume', type: 'text' },
        { name: 'Brand', type: 'text' },
        { name: 'Vehicle Type', type: 'dropdown', options: ['Car', 'Bike', 'Truck'] },
      ],
    },
    {
      name: 'Tools & Equipment',
      variations: [
        { name: 'Tool Type', type: 'dropdown', options: ['Wrench', 'Jack', 'Battery Charger', 'Tool Kit'] },
        { name: 'Usage', type: 'dropdown', options: ['Repair', 'Maintenance', 'Diagnostics'] },
        { name: 'Brand', type: 'text' },
        { name: 'Power Source', type: 'dropdown', options: ['Manual', 'Electric', 'Battery Powered'] },
      ],
    },
    {
      name: 'Tyres & Wheels',
      variations: [
        { name: 'Type', type: 'dropdown', options: ['Tyre', 'Alloy Wheel', 'Rim'] },
        { name: 'Size', type: 'text' },
        { name: 'Compatible Vehicle', type: 'text' },
        { name: 'Brand', type: 'text' },
        { name: 'Tread Type', type: 'dropdown', options: ['All-Terrain', 'Highway', 'Mud-Terrain'] },
      ],
    },
  ],
},
{
  category: 'Farming & Garden',
  subcategories: [
    {
      name: 'Seeds & Bulbs',
      variations: [
        { name: 'Plant Type', type: 'dropdown', options: ['Vegetable', 'Flower', 'Herb', 'Fruit'] },
        { name: 'Season', type: 'dropdown', options: ['Summer', 'Winter', 'All Season'] },
        { name: 'Quantity', type: 'text' },
        { name: 'Organic', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Plants & Planters',
      variations: [
        { name: 'Plant Type', type: 'dropdown', options: ['Indoor', 'Outdoor', 'Succulent', 'Bonsai'] },
        { name: 'Pot Material', type: 'dropdown', options: ['Ceramic', 'Plastic', 'Terracotta', 'Metal'] },
        { name: 'Size', type: 'text' },
        { name: 'Watering Frequency', type: 'dropdown', options: ['Daily', 'Weekly', 'Biweekly'] },
      ],
    },
    {
      name: 'Garden Tools',
      variations: [
        { name: 'Tool Type', type: 'dropdown', options: ['Spade', 'Trowel', 'Pruner', 'Hoe', 'Rake'] },
        { name: 'Material', type: 'dropdown', options: ['Steel', 'Aluminum', 'Wood', 'Plastic'] },
        { name: 'Handle Type', type: 'dropdown', options: ['Short', 'Long', 'Ergonomic'] },
        { name: 'Brand', type: 'text' },
      ],
    },
    {
      name: 'Irrigation & Watering',
      variations: [
        { name: 'Type', type: 'dropdown', options: ['Drip Irrigation', 'Sprinkler', 'Watering Can', 'Hose'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Rubber'] },
        { name: 'Length (if applicable)', type: 'text' },
        { name: 'Capacity', type: 'text' },
      ],
    },
  ],
},
{
  category: 'Baby Products',
  subcategories: [
    {
      name: 'Baby Gear',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Stroller', 'Car Seat', 'Carrier', 'Bouncer'] },
        { name: 'Age Group', type: 'dropdown', options: ['0-6 months', '6-12 months', '1-2 years'] },
        { name: 'Color', type: 'text' },
        { name: 'Weight Limit', type: 'text' },
      ],
    },
    {
      name: 'Feeding & Nursing',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Bottle', 'Breast Pump', 'High Chair', 'Sterilizer'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Glass', 'Silicone'] },
        { name: 'Capacity (ml)', type: 'text' },
        { name: 'BPA Free', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Diapers & Wipes',
      variations: [
        { name: 'Type', type: 'dropdown', options: ['Disposable Diaper', 'Cloth Diaper', 'Wipes'] },
        { name: 'Size', type: 'dropdown', options: ['Newborn', 'S', 'M', 'L', 'XL'] },
        { name: 'Quantity per Pack', type: 'text' },
        { name: 'Fragrance-Free', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
    {
      name: 'Baby Skincare',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Lotion', 'Powder', 'Shampoo', 'Soap'] },
        { name: 'Hypoallergenic', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Volume (ml)', type: 'text' },
        { name: 'Paraben-Free', type: 'dropdown', options: ['Yes', 'No'] },
      ],
    },
  ],
},
{
  category: 'Toys',
  subcategories: [
    {
      name: 'Toys for Infants',
      variations: [
        { name: 'Age Group', type: 'dropdown', options: ['0-6 months', '6-12 months', '1-2 years'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Wood', 'Fabric'] },
        { name: 'Battery Required', type: 'dropdown', options: ['Yes', 'No'] },
        { name: 'Color', type: 'text' },
      ],
    },
    {
      name: 'Educational Toys',
      variations: [
        { name: 'Age Group', type: 'dropdown', options: ['3-5 years', '5-8 years', '8+ years'] },
        { name: 'Learning Type', type: 'dropdown', options: ['STEM', 'Language', 'Math', 'Logic'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Wood'] },
        { name: 'Included Accessories', type: 'text' },
      ],
    },
    {
      name: 'Remote Control Toys',
      variations: [
        { name: 'Toy Type', type: 'dropdown', options: ['Car', 'Helicopter', 'Boat', 'Robot'] },
        { name: 'Battery Type', type: 'text' },
        { name: 'Range (meters)', type: 'text' },
        { name: 'Charging Time (hrs)', type: 'text' },
      ],
    },
    {
      name: 'Outdoor Play',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Slide', 'Swing', 'Trampoline', 'Playhouse'] },
        { name: 'Age Group', type: 'dropdown', options: ['2-5 years', '5-10 years', '10+ years'] },
        { name: 'Material', type: 'dropdown', options: ['Plastic', 'Metal', 'Wood'] },
        { name: 'Weight Capacity (kg)', type: 'text' },
      ],
    },
  ],
},
{
  category: 'Books & Stationery',
  subcategories: [
    {
      name: 'Fiction',
      variations: [
        { name: 'Genre', type: 'dropdown', options: ['Romance', 'Thriller', 'Fantasy', 'Science Fiction', 'Drama'] },
        { name: 'Language', type: 'dropdown', options: ['English', 'Hindi', 'Regional'] },
        { name: 'Author', type: 'text' },
        { name: 'Format', type: 'dropdown', options: ['Paperback', 'Hardcover', 'Ebook'] },
      ],
    },
    {
      name: 'Non-Fiction',
      variations: [
        { name: 'Category', type: 'dropdown', options: ['Biography', 'Self-help', 'History', 'Politics', 'Science'] },
        { name: 'Language', type: 'dropdown', options: ['English', 'Hindi', 'Regional'] },
        { name: 'Author', type: 'text' },
        { name: 'Format', type: 'dropdown', options: ['Paperback', 'Hardcover', 'Ebook'] },
      ],
    },
    {
      name: 'Educational & Textbooks',
      variations: [
        { name: 'Subject', type: 'dropdown', options: ['Math', 'Science', 'History', 'Language', 'Commerce'] },
        { name: 'Class/Grade', type: 'text' },
        { name: 'Board', type: 'dropdown', options: ['CBSE', 'ICSE', 'State Board', 'Other'] },
        { name: 'Author/Publisher', type: 'text' },
      ],
    },
    {
      name: 'Art & Craft Supplies',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Paints', 'Brushes', 'Sketchbooks', 'Craft Paper', 'Clay'] },
        { name: 'Color Type', type: 'dropdown', options: ['Acrylic', 'Watercolor', 'Oil'] },
        { name: 'Set/Single', type: 'dropdown', options: ['Set', 'Single'] },
        { name: 'Quantity', type: 'text' },
      ],
    },
    {
      name: 'Office Stationery',
      variations: [
        { name: 'Product Type', type: 'dropdown', options: ['Pens', 'Files', 'Staplers', 'Notebooks', 'Folders'] },
        { name: 'Brand', type: 'text' },
        { name: 'Pack Size', type: 'text' },
        { name: 'Color', type: 'text' },
      ],
    },
  ],
},


];

export default variationTemplates;
