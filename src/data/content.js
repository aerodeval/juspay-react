

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
    userImg:"/assets/images/image.png",
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
    task: "/assets/icons/Checkbox.svg",
    bug: "/assets/icons/BugBeetle.svg",
    user: "/assets/icons/User.svg",
    subscription: "/assets/icons/Broadcast.svg",
    ArrowRise: "/assets/icons/ArrowRise.svg",
    ArrowFall: "/assets/icons/ArrowFall.svg",
    Add:"/assets/icons/Add.svg",
    Filter:"/assets/icons/FunnelSimple.svg",
    ArrowsDownsUp: "/assets/icons/ArrowsDownUp.svg",
    Search:"/assets/icons/Search.svg",
    Calendar:"/assets/icons/CalendarBlank.svg",
    ArrowLineLeft:"/assets/icons/ArrowLineLeft.svg",
      ArrowLineRight:"/assets/icons/ArrowLineRight.svg",
      theme:"/assets/icons/Sun.svg",
         history:"/assets/icons/ClockCounterClockwise.svg",
           notification:"/assets/icons/Bell.svg",
           sidebar:"/assets/icons/Sidebar.svg",
           star:"/assets/icons/Star.svg"
  };
  




  export const contactsData =[
    {
      "name": "Natali Craig",
      "avatar": "/assets/images/Female15.png"
    },
    {
      "name": "Drew Cano",
      "avatar": "/assets/images/male08.png"
    },
    {
      "name": "Orlando Diggs",
      "avatar": "/assets/images/male06.png"
    },
    {
      "name": "Andi Lane",
      "avatar": "/assets/images/female08.png"
    },
    {
      "name": "Kate Morrison",
      "avatar": "/assets/images/female09.png"
    },
    {
      "name": "Koray Okumus",
      "avatar": "/assets/images/3D03.png"
    }
  ]


  export const activities = [
    {
      id: 1,
      avatarImg: "/assets/images/3D05.png",
      text: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      id: 2,
      avatarImg: "/assets/images/IconSet.png",
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatarImg: "/assets/images/IconSet-1.png",
      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatarImg: "/assets/images/IconSet-2.png",
      text: "Modified A data in Page X",
      time: "Feb 2, 2023",
    },
    {
      id: 5,
      avatarImg: "/assets/images/IconSet-3.png",
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



export const LineChartData = [
  {
    name: 'Jan',
    "Current Week": 4000,
    "Previous Week": 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    "Current Week": 3000,
    "Previous Week": 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    "Current Week": 2000,
    "Previous Week": 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    "Current Week": 2780,
    "Previous Week": 3908,
    amt: 2000,
  },
  {
    name: 'May',
    "Current Week": 1890,
    "Previous Week": 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    "Current Week": 2390,
    "Previous Week": 3800,
    amt: 2500,
  },

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
  