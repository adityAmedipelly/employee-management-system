const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          failed: false,
          title: "Complete report analysis",
          description: "Analyze the sales report for Q3",
          date: "2024-12-01",
          category: "Analysis"
        },
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Team meeting preparation",
          description: "Prepare slides for the upcoming team meeting",
          date: "2024-12-03",
          category: "Preparation"
        },
        {
          active: false,
          newTask: false,
          failed: true,
          title: "Submit weekly report",
          description: "Weekly report for the team is overdue",
          date: "2024-11-28",
          category: "Reporting"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Update client database",
          description: "Ensure all client information is up to date",
          date: "2024-12-02",
          category: "Database"
        },
        {
          active: false,
          newTask: true,
          failed: false,
          title: "Research competitors",
          description: "Research new market competitors and prepare a summary",
          date: "2024-12-04",
          category: "Research"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Fix production bugs",
          description: "Resolve issues reported in the production system",
          date: "2024-12-05",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          failed: false,
          title: "Test new features",
          description: "Test newly implemented features before deployment",
          date: "2024-12-06",
          category: "Testing"
        },
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Prepare deployment script",
          description: "Write and test deployment script for new release",
          date: "2024-12-07",
          category: "Deployment"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          failed: false,
          title: "Organize workshop",
          description: "Plan and organize the upcoming company workshop",
          date: "2024-12-08",
          category: "Planning"
        },
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Update website content",
          description: "Revise outdated sections of the company website",
          date: "2024-12-09",
          category: "Web Content"
        },
        {
          active: false,
          newTask: false,
          failed: true,
          title: "Prepare marketing materials",
          description: "Missed deadline for brochure updates",
          date: "2024-11-30",
          category: "Marketing"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          failed: false,
          title: "Customer feedback review",
          description: "Analyze feedback from last month's surveys",
          date: "2024-12-10",
          category: "Feedback"
        },
        {
          active: true,
          newTask: false,
          failed: false,
          title: "Create project roadmap",
          description: "Develop roadmap for Q1 2025 projects",
          date: "2024-12-11",
          category: "Planning"
        },
        {
          active: false,
          newTask: false,
          failed: true,
          title: "Submit expense report",
          description: "Failed to submit last month's expense report",
          date: "2024-11-29",
          category: "Finance"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
 export const setLocalStorge = () =>{
  localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
   
 }

 export const getLocalStorge = () =>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))
console.log(employees,admin)
 }
  