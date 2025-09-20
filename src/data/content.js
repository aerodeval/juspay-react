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
  

  [
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
    }
  ]
  