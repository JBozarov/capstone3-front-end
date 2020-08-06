const data = [
  {
    id: 0,
    name: "Joe's JeansWintz Long Sleeve Henley",
    price: 65.98,
    quantity: 14,
    manufacturer: "Joe's",
    category: "Men's casual",
    serial: 'AQ3265',
    images: [
      'https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/10775822_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/10771097_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/10771099_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
    ]
  },
  {
    id: 1,
    name: "John Varvatos Star USA Long-Sleeve Henley",
    price: 65.96,
    quantity: 8,
    manufacturer: "John Varvators",
    category: "Men's casual",
    serial: 'AB5365',
    images: [
      '',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/10526086_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/10526090_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/10562340_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp'
    ]
  },
  {
    id: 2,
    name: "Theory Melange Cotton Essential Henley",
    price: 195.00,
    quantity: 150,
    manufacturer: "Theory",
    category: "Men's casual",
    serial: 'CH6952',
    images: [
      'https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/10714389_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/10714051_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/10714052_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp',
      'https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/10743431_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp'
    ]
  },
  {
    id: 3,
    name: "Quick Dry Sports Gym T shirts For Men",
    price: 15.91,
    quantity: 1,
    manufacturer: "Amazon",
    category: "Men's casual",
    serial: 'XM7566',
    images: [
      'https://sc02.alicdn.com/kf/H32ac7603304046149bb25882cc884e5dU.jpg',
      'https://sc01.alicdn.com/kf/Hfe79750c85fd42f5a788b46fce396c81W.jpg',
      'https://sc01.alicdn.com/kf/Hfe79750c85fd42f5a788b46fce396c81W.jpg',
      'https://sc01.alicdn.com/kf/He2ea46fc8e3443caab275d7afaad0f3es.jpg'
    ]
  },
  {
    id: 4,
    name: "Curved hem arm stripes promotional tshirt ",
    price: 63.25,
    quantity: 73,
    manufacturer: "Amazon",
    category: "Men's casual",
    serial: 'KL6958',
    images: [
      'https://sc01.alicdn.com/kf/HTB1zLuNcZbI8KJjy1zdq6ze1VXag.jpg',
      'https://sc01.alicdn.com/kf/HTB1FJeLcZnI8KJjSspeq6AwIpXaV.jpg',
      'https://sc02.alicdn.com/kf/HTB16wWSc46I8KJjy0Fgq6xXzVXag.jpg',
      'https://sc02.alicdn.com/kf/HTB16wWSc46I8KJjy0Fgq6xXzVXag.jpg'
    ]
  },
  {
    id: 5,
    name: "Men's IZOD Saltwater Graphic Tee",
    price: 35.00,
    quantity: 50,
    manufacturer: "IZOD",
    category: "Men's casual",
    serial: 'SJ7568',
    images: [
      'https://media.kohlsimg.com/is/image/kohls/3762610_Claret_Red?wid=1200&hei=1000&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/3762610_ALT3?wid=1200&hei=50&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/3762610_ALT4?wid=1200&hei=50&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/3762610_ALT5?wid=1200&hei=50&op_sharpen=1&hgt=1200'
    ]
  },
  {
    id: 6,
    name: "Men's Extra-Soft Fishing Graphic Tee",
    price: 23.00,
    quantity: 80,
    manufacturer: "Croft & Barrow",
    category: "Men's casual",
    serial: 'RT5982',
    images: [
      'https://media.kohlsimg.com/is/image/kohls/4254962_Charcoal?wid=1200&hei=1000&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/4254962_ALT?wid=1200&hei=50&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/4254962_ALT9?wid=1200&hei=50&op_sharpen=1&hgt=1200',
      'https://media.kohlsimg.com/is/image/kohls/4254962_Light_Blue_Heather?wid=1200&hei=1000&op_sharpen=1&hgt=1200'
    ]
  },
  {
    id: 7,
    name: "Nike Men's Sportswear Club Fleece Hoodie",
    price: 57.50,
    quantity: 136,
    manufacturer: "Nike",
    category: "Men's casual",
    serial: 'JZ2684',
    images: [
      "https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNSWCLBHDPBNFT_White_Black?qlt=70&wid=1100&fmt=webp",
      "https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNSWCLBHDPBNFT_Galactic_Jade_White?qlt=70&wid=1100&fmt=webp",
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNSWCLBHDPBNFT_Charcoal_Heather_Anth?qlt=70&wid=1100&fmt=webp',
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNSWCLBHDPBNFT_Midnight_Navy_White?qlt=70&wid=1100&fmt=webp'
    ]
  },
  {
    id: 8,
    name: "Nike Men's Pro Sleeveless Shirt",
    price: 73.86,
    quantity: 36,
    manufacturer: "Nike",
    category: "Men's casual",
    serial: 'KL4992',
    images: [
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNPTPSLSLMXAPT_Obsidian_Ocean_Fog_Black?qlt=70&wid=1100&fmt=webp',
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNPTPSLSLMXAPT_Smke_Gry_Lt_Smke_Gry_Blk?qlt=70&wid=1100&fmt=webp',
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNPTPSLSLMXAPT_Black_White-1?qlt=70&wid=1100&fmt=webp',
      'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMMNPTPSLSLMXAPT_White_Black-1?qlt=70&wid=1100&fmt=webp'
    ]
  },
  {
    id: 9,
    name: "Men's Standard Fit Lyndale Crew Neck T-Shirt",
    price: 13.99,
    quantity: 1,
    manufacturer: "Legacy91",
    category: "Men's casual",
    serial: 'ME4985',
    images: [
      'https://target.scene7.com/is/image/Target/GUEST_df88fbea-b985-4c82-926b-00e1c9bdd473?fmt=webp&wid=1400&qlt=80',
      'https://target.scene7.com/is/image/Target/GUEST_44ea4573-cc05-4d20-8260-14b23a32d1e9?fmt=webp&wid=1400&qlt=80',
      'https://target.scene7.com/is/image/Target/GUEST_fd795f8f-3502-4a82-a0c3-54ebddaf90f0?fmt=webp&wid=1400&qlt=80',
      'https://target.scene7.com/is/image/Target/GUEST_5f2cf906-2b50-4ba3-a11a-672eb2ce1ced?fmt=webp&wid=1400&qlt=80'
    ]
  },
  {
    id: 10,
    name: "Men's Soft Shell Jacket Hood",
    price: 10.51,
    quantity: 14,
    manufacturer: "Shell",
    category: "Men's casual",
    serial: 'LQ9555',
    images: [
      'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/10469861_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/10469862_fpx.tif?op_sharpen=1&wid=402&hei=489&fit=fit,1&$filtersm$&fmt=webp',
      'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/10469851_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10469853_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
    ]
  },
  {
    id: 11,
    name: "Men's Ombre Sporty Polo Shirt",
    price: 69.99,
    quantity: 9,
    manufacturer: "Ombre",
    category: "Men's casual",
    serial: 'RF6541',
    images: [
      'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16477549_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/16692120_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16692129_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/16692130_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
    ]
  },
  {
    id: 12,
    name: "Men's Slim-Fit Logo Print Polo Shirt",
    price: 39.99,
    quantity: 51,
    manufacturer: "Polo",
    category: "Men's casual",
    serial: 'QS4455',
    images: [
      'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16359343_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/16359346_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/16403042_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/16403045_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
    ]
  },
  {
    id: 13,
    name: "Men's Denim Trucker Jacket",
    price: 109.99,
    quantity: 7,
    manufacturer: "Denim",
    category: "Men's casual",
    serial: 'YT9686',
    images: [
      'https://slimages.macysassets.com/is/image/MCY/products/7/optimized/9237707_fpx.tif?op_sharpen=1&wid=402&hei=489&fit=fit,1&$filtersm$&fmt=webp',
      'https://slimages.macysassets.com/is/image/MCY/products/7/optimized/10138177_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/16634450_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
      'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/8104626_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
    ]
  }
]

export default data; 