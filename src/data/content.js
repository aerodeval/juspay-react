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
