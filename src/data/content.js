

export const navigationContent = {
  Dashboards: {
    sections: [
      {
        name: "Default",
        hasIcon: true,
        icon: "ChartPieSlice",
    
      },
      {
        name: "Ecommerce",
        hasIcon: true,
        icon: "ShoppingBagOpen",
        subsections: [
          { name: "Test Data", hasIcon: false},
      
        ]
      },
      {
        name: "Projects",
        hasIcon: true,
        icon: "Notebook",
        subsections: [
            { name: "Test Data",hasIcon: false },
        ]
      },
      {
        name: "Online Course",
        hasIcon: true,
        icon: "BookOpen",
        subsections: [
            { name: "Test Data",hasIcon: false },
        ]
      }
    ]
  },
  Pages: {
    sections: [
      {
        name: "UserProfile",
        hasIcon: true,
        icon: "IdentificationBadge",
        subsections: [
          { name: "Overview", hasIcon: false },
          { name: "Projects", hasIcon: false },
          { name: "Campaigns", hasIcon: false },
          { name: "Documents", hasIcon: false },
          { name: "Followers", hasIcon: false }
        ]
      },
      {
        name: "Account",
        hasIcon: true,
        icon: "IdentificationCard",
        subsections: [
          { name: "User Profile", hasIcon: false },
            
        ]
      },
      {
        name: "Corporate",
        hasIcon: true,
        icon: "UsersThree",
        subsections: [
            { name: "User Profile", hasIcon: false },
        ]
      },
      {
        name: "Blog",
        hasIcon: true,
        icon: "Notebook",
        subsections: [
            { name: "User Profile", hasIcon: false },
        ]
      },
      {
        name: "Social",
        hasIcon: true,
        icon: "ChatsTeardrop",
        subsections: [
            { name: "User Profile", hasIcon: false },
        ]
      }
    ]
  }
};



export const userData = 
  {
    name: "WayWind",
    email: "john@example.com",
    role: "Admin",
    userImg:"/src/assets/images/image.png",
    status: "Active"
  }


  export const ecommerceStats =[
    {
      name: "Customers",
      count: "3,781",
      percentChange: "+11.01%",
    
    },
    {
      name: "Orders",
      count: "1,219",
      percentChange: "-0.03%",
    },
    {
      name: "Customers",
      count: "$695",
      percentChange: "+11.01%",
    },
    {
      name: "Customers",
      count: "30.1%",
      percentChange: "+6.08%",
    },

  ]


  export const notifications =[
    { id:1,
      message: "You have a bug that needs to be fixed.",
      timestamp: "Just now",
      type: "bug",
      icon: "bug",
    },
    { id:2,
     message: "New user registered",
      timestamp: "59 minutes ago",
      type: "user",
      icon: "user"
    },
    {id:3,
     message: "You have a bug that needs to be fixed.",
      timestamp: "12 hours ago",
      type: "bug",
      icon: "bug"
    },
    { id:4,
     message: "Andi Lane subscribed to you",
      timestamp: "Today, 11:59 AM",
      type: "subscription",
      icon: "radio"
    }
  ]


  export const iconMap = {
    task: "/src/assets/icons/Checkbox.svg",
    bug: "/src/assets/icons/BugBeetle.svg",
    user: "/src/assets/icons/User.svg",
    subscription: "/src/assets/icons/Broadcast.svg",
    ArrowRise: "/src/assets/icons/ArrowRise.svg",
    ArrowFall: "/src/assets/icons/ArrowFall.svg",
    Add:"/src/assets/icons/Add.svg",
    Filter:"/src/assets/icons/FunnelSimple.svg",
    ArrowsDownsUp: "/src/assets/icons/ArrowsDownUp.svg",
    Search:"/src/assets/icons/Search.svg",
    Calendar:"/src/assets/icons/CalendarBlank.svg",
    ArrowLineLeft:"/src/assets/icons/ArrowLineLeft.svg",
      ArrowLineRight:"/src/assets/icons/ArrowLineRight.svg",
      theme:"/src/assets/icons/Sun.svg",
         history:"/src/assets/icons/ClockCounterClockwise.svg",
           notification:"/src/assets/icons/Bell.svg",
           sidebar:"/src/assets/icons/Sidebar.svg",
           star:"/src/assets/icons/Star.svg"
  };
  




  export const contactsData =[
    {
      "name": "Natali Craig",
      "avatar": "/src/assets/images/female15.png"
    },
    {
      "name": "Drew Cano",
      "avatar": "/src/assets/images/male08.png"
    },
    {
      "name": "Orlando Diggs",
      "avatar": "/src/assets/images/male06.png"
    },
    {
      "name": "Andi Lane",
      "avatar": "/src/assets/images/female08.png"
    },
    {
      "name": "Kate Morrison",
      "avatar": "/src/assets/images/female09.png"
    },
    {
      "name": "Koray Okumus",
      "avatar": "/src/assets/images/3d03.png"
    }
  ]


  export const activities = [
    {
      id: 1,
      avatarImg: "/src/assets/images/3d05.png",
      text: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      id: 2,
      avatarImg: "/src/assets/images/iconset.png",
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatarImg: "/src/assets/images/iconset-1.png",
      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatarImg: "/src/assets/images/iconset-2.png",
      text: "Modified A data in Page X",
      time: "Feb 2, 2023",
    },
    {
      id: 5,
      avatarImg: "/src/assets/images/iconset-3.png",
      text: "Deleted a page in Project X",
      time: "1 hour ago",
    },
  ];



  export const cityData = [
    { city: 'New York', value: '72' },
    { city: 'San Francisco', value: '39' },
    { city: 'Sydney', value: '25' },
    { city: 'Singapore', value: '61' }
  ];

  



export const topSellingProducts = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: 128.50,
    quantity: 37,
    amount: 4754.50
  },
  {
    id: 3,
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: 20.00,
    quantity: 184,
    amount: 3680.00
  },
  {
    id: 5,
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81
  }
];


export const productColumns = [
  { 
    key: 'name', 
    label: 'Name', 
    align: 'left' 
  },
  { 
    key: 'price', 
    label: 'Price', 
    align: 'left',
    format: (value) => `$${value.toFixed(2)}`
  },
  { 
    key: 'quantity', 
    label: 'Quantity', 
    align: 'left' 
  },
  { 
    key: 'amount', 
    label: 'Amount', 
    align: 'left',
    format: (value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
  }
];




export const totalSales= [

  {key:'Direct',
    sale: 300.56
  },
  {key:'Affilliate',
    sale: 135.18
  }, {key:'Sponsored',
    sale: 154.02
  },
  {key: 'E-mail',
    sale: 48.96
  }
]


export const stackedChartData = [
  {
    month: 'Jan',
    projections: 8,    
    actuals: 20,
    monthFull: 'January'
  },
  {
    month: 'Feb',
    projections: 20,
    actuals: 5,
    monthFull: 'February'
  },
  {
    month: 'Mar',
    projections: 7,
    actuals: 12,
    monthFull: 'March'
  },
  {
    month: 'Apr',
    projections: 1,
    actuals: 26,
    monthFull: 'April'
  },
  {
    month: 'May',
    projections: 7,
    actuals: 18,
    monthFull: 'May'
  },
  {
    month: 'Jun',
    projections: 3,
    actuals: 24,
    monthFull: 'June'
  }
];








 export const OrdersList=[
    {
      "orderId": "CM9801",
      "user": "Natali Craig",
      "project": "Landing Page",
      "address": "Meadow Lane Oakland",
      "date": "Just now",
      "status": "In Progress"
    },
    {
      "orderId": "CM9802",
      "user": "Kate Morrison",
      "project": "CRM Admin pages",
      "address": "Larry San Francisco",
      "date": "A minute ago",
      "status": "Complete"
    },
    {
      "orderId": "CM9803",
      "user": "Drew Cano",
      "project": "Client Project",
      "address": "Boyaval Avenue Ocala",
      "date": "1 hour ago",
      "status": "Pending"
    },
    {
      "orderId": "CM9804",
      "user": "Orlando Diggs",
      "project": "Admin Dashboard",
      "address": "Westbourn Baton Rouge",
      "date": "Yesterday",
      "status": "Approved"
    },
    {
      "orderId": "CM9805",
      "user": "Andi Lane",
      "project": "App Landing Page",
      "address": "Nest Lane Olivette",
      "date": "Feb 2, 2023",
      "status": "Rejected"
    },
    {
      "orderId": "CM9806",
      "user": "Sarah Johnson",
      "project": "E-commerce Site",
      "address": "Main Street Boston",
      "date": "2 hours ago",
      "status": "In Progress"
    },
    {
      "orderId": "CM9807",
      "user": "Michael Chen",
      "project": "Mobile App",
      "address": "Oak Avenue Seattle",
      "date": "3 hours ago",
      "status": "Complete"
    },
    {
      "orderId": "CM9808",
      "user": "Emily Davis",
      "project": "Portfolio Website",
      "address": "Pine Street Denver",
      "date": "4 hours ago",
      "status": "Pending"
    },
    {
      "orderId": "CM9809",
      "user": "David Wilson",
      "project": "Blog Platform",
      "address": "Cedar Lane Austin",
      "date": "5 hours ago",
      "status": "Approved"
    },
    {
      "orderId": "CM9810",
      "user": "Lisa Anderson",
      "project": "SaaS Dashboard",
      "address": "Maple Drive Portland",
      "date": "6 hours ago",
      "status": "Rejected"
    },
    {
      "orderId": "CM9811",
      "user": "Robert Taylor",
      "project": "API Integration",
      "address": "Elm Street Chicago",
      "date": "7 hours ago",
      "status": "In Progress"
    },
    {
      "orderId": "CM9812",
      "user": "Jennifer Brown",
      "project": "Data Analytics",
      "address": "First Avenue Miami",
      "date": "8 hours ago",
      "status": "Complete"
    },
    {
      "orderId": "CM9813",
      "user": "Christopher Lee",
      "project": "Cloud Migration",
      "address": "Second Street Phoenix",
      "date": "9 hours ago",
      "status": "Pending"
    },
    {
      "orderId": "CM9814",
      "user": "Amanda Garcia",
      "project": "Security Audit",
      "address": "Third Avenue Dallas",
      "date": "10 hours ago",
      "status": "Approved"
    },
    {
      "orderId": "CM9815",
      "user": "James Martinez",
      "project": "Performance Optimization",
      "address": "Fourth Street Houston",
      "date": "11 hours ago",
      "status": "Rejected"
    }
  ]
  