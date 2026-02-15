// Resume.js

/**
 * =============================================================================
 * RESUME DATA CONFIGURATION FILE
 * =============================================================================
 * 
 * This file contains ALL resume content in a structured format.
 * Updating this file automatically updates the UI without touching Resume.jsx
 * 
 * HOW TO UPDATE:
 * 1. Locate the section you want to modify (header, education, projects, etc.)
 * 2. Edit the values directly
 * 3. Save the file → Changes appear instantly in the UI
 * 
 * IMPORTANT: Maintain the object structure and data types
 * =============================================================================
 */

const resumeData = {
  
  // =============================================================================
  // HEADER SECTION
  // =============================================================================
  // Your basic contact information displayed at the top of the resume
  // TO UPDATE: Simply change the values below
  
  header: {
    name: "Vikash Mundakar",                    // Your full name
    email: "m.vikash1630@gmail.com",            // Professional email
    phone: "+91 9573696792",                    // Contact number with country code
    location: "Hyderabad"                       // Current city/location
  },

  // =============================================================================
  // CAREER OBJECTIVE
  // =============================================================================
  // A brief statement about your career goals and aspirations
  // TO UPDATE: Replace the text with your own objective (keep it concise)
  
  objective: "Dedicated Full Stack Developer passionate about applying frontend and backend skills to build real-world applications, continuously learn, and grow as a professional.",

  // =============================================================================
  // EDUCATION SECTION
  // =============================================================================
  // List your educational qualifications in reverse chronological order
  // TO ADD NEW EDUCATION: Copy the object structure below and add to the array
  //
  // Format:
  // {
  //   degree: "Degree Name",
  //   institution: "School/College Name",
  //   year: "Year Range or Single Year",
  //   percentage: "Your Score" (optional - remove if not applicable)
  // }
  
  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Mahatma Gandhi Institute of Technology",
      year: "2024 - 2028"
      // No percentage field here since it's ongoing
    },
    {
      degree: "Senior Secondary (XII), Telangana State Board Of Intermediate Education",
      institution: "Sri Chaitanya Junior Kalashala",
      year: "2023",
      percentage: "96.60%"  // Optional field - remove if not needed
    }
  ],

  // =============================================================================
  // PORTFOLIO LINKS
  // =============================================================================
  // Your professional online presence (GitHub, Portfolio, LinkedIn, etc.)
  // TO UPDATE: Replace URLs with your actual profile links
  // TO ADD MORE LINKS: Add new key-value pairs (e.g., linkedin: "url")
  
  portfolio: {
    github: "https://github.com/vikashmundakar",     // GitHub profile
    website: "https://portfolio-link.com"            // Personal portfolio/website
    // Add more as needed:
    // linkedin: "https://linkedin.com/in/yourprofile",
    // twitter: "https://twitter.com/yourhandle"
  },

  // =============================================================================
  // PROJECTS SECTION
  // =============================================================================
  // Showcase your best projects here
  // Projects are displayed in the order listed (top to bottom)
  // 
  // TO ADD NEW PROJECT: Copy this template and paste it into the array
  // {
  //   title: "Project Name",
  //   date: "Month Year - Month Year",
  //   description: "Brief description of the project, tech stack, and impact",
  //   link: "https://project-url.com"
  // }
  //
  // TO REMOVE PROJECT: Delete the entire object from the array
  // TO REORDER: Cut and paste objects in desired order
  
  projects: [
    {
      title: "Local Lynk E commerce app",
      date: "Dec 2025 - Jan 2026",
      description: "Local Lynk: A community-driven e-commerce platform that connects local sellers and buyers, enabling product discovery, secure transactions, and user interaction through integrated community features. Designed with a scalable backend and responsive UI to support real-time engagement and local commerce growth.",
      link: "https://local-lynk.vercel.app"
    },
    {
      title: "Solo Levelling Fitness Model App",
      date: "Oct 2025",
      description: "Solo Levelling Fitness Model: A full-stack fitness tracking application that helps users monitor workouts, track progress, and stay consistent through a structured levelling system. Built with a responsive server side rendering, secure authentication, and a scalable backend to deliver a smooth, data-driven fitness experience.",
      link: "https://solo-levelling-fitness-model-app.onrender.com"
    },
    {
      title: "IPL Analytics Dashboard",
      date: "Nov 2025",
      description: "IPL Analytics Dashboard: A data-driven web dashboard built using Flask that visualizes IPL match and player statistics through interactive charts and insights. Designed to process, analyze, and present large datasets efficiently, enabling users to explore performance trends and make data-backed observations.",
      link: "https://ipl-analytics-dashboard-htof.onrender.com"
    },
    {
      title: "Advanced Notes App",
      date: "Aug 2025",
      description: "Advanced Notes App: A full-stack notes management application that allows users to create, edit, organize, and securely store notes with real-time updates. Built with authentication, optimized data handling, and a responsive interface to ensure fast, reliable, and user-friendly note management.",
      link: "https://notes-app-mwwd.onrender.com"
    }
    // Add more projects here following the same format
  ],

  // =============================================================================
  // SKILLS SECTION
  // =============================================================================
  // Organized by categories for better readability and professional presentation
  // Skills appear as tags/badges in the UI
  //
  // TO ADD SKILL: Add the skill name as a string to the appropriate category
  // TO REMOVE SKILL: Delete the string from the array
  // TO ADD NEW CATEGORY: Create a new array with your category name
  //
  // TIP: Order matters - put most important skills first in each category
  
  skills: {
    
    // Programming Languages
    // Languages you're proficient in
    programmingLanguages: [
      "JavaScript",
      "Python",
      "Java",
      "C++ Programming",
      "C Programming"
    ],

    // Frontend Development
    // UI/UX and client-side technologies
    frontend: [
      "React",
      "User Interface (UI) Development",
      "UI & UX Design",
      "Tailwind CSS",
      "Bootstrap",
      "EJS",
      "Vite"
    ],

    // Backend Development
    // Server-side technologies and frameworks
    backend: [
      "Node.js",
      "Express.js",
      "Flask",
      "Backend development",
      "REST API",
      "APIs"
    ],

    // Database & Data
    // Database management and data handling
    databases: [
      "MongoDB",
      "Big Data Analytics",
      "Data Analysis"
    ],

    // Authentication & Security
    // Security and authentication mechanisms
    authAndSecurity: [
      "JWT",
      "OAuth"
    ],

    // Real-time & Networking
    // Real-time communication technologies
    realtime: [
      "Socket.IO",
      "WebSockets"
    ],

    // Tools & Platforms
    // Development tools and deployment platforms
    toolsAndPlatforms: [
      "GitHub",
      "Postman",
      "Google Colab",
      "Vercel"
    ],

    // Libraries & Frameworks
    // Additional libraries and frameworks
    libraries: [
      "Python Libraries",
      "Swing (Java)"
    ],

    // Domain Knowledge
    // Specialized knowledge areas
    domainKnowledge: [
      "E-commerce",
      "Frontend development"
    ]
  }

};

// =============================================================================
// EXPORT
// =============================================================================
// DO NOT MODIFY THIS LINE - Required for Resume.jsx to import the data
export default resumeData;

/**
 * =============================================================================
 * QUICK REFERENCE GUIDE
 * =============================================================================
 * 
 * COMMON TASKS:
 * 
 * 1. UPDATE CONTACT INFO:
 *    → Go to 'header' section
 *    → Change name, email, phone, or location
 * 
 * 2. ADD NEW PROJECT:
 *    → Go to 'projects' array
 *    → Copy an existing project object
 *    → Paste it and modify the values
 *    → Don't forget the comma after the previous project
 * 
 * 3. ADD NEW SKILL:
 *    → Go to 'skills' object
 *    → Find the appropriate category
 *    → Add the skill as a string in quotes
 *    → Don't forget the comma after the previous skill
 * 
 * 4. ADD NEW EDUCATION:
 *    → Go to 'education' array
 *    → Copy an existing education object
 *    → Paste it and modify the values
 * 
 * 5. ADD NEW SKILL CATEGORY:
 *    → Go to 'skills' object
 *    → Add a new key with an array of skills
 *    → Example: cloudPlatforms: ["AWS", "Azure", "GCP"]
 *    → NOTE: You'll need to update Resume.jsx to render the new category
 * 
 * TROUBLESHOOTING:
 * 
 * - If UI breaks after editing: Check for missing commas or quotes
 * - Ensure all objects have closing braces }
 * - Ensure all arrays have closing brackets ]
 * - Keep the export statement at the bottom unchanged
 * 
 * =============================================================================
 */
