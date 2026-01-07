// experience.js - FINAL VERSION (Works on Vercel)

// IMPORT LOCAL LOGOS PROPERLY
import mgitLogo from "../assets/icons/mgitlogo_2.jpg";
import sriChaitanyaLogo from "../assets/icons/sriChaitanya.jpg";
import ravindraLogo from "../assets/icons/RavindraBharathiLogo.png";

export const experienceData = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Engineering (B.E / B.Tech) - Computer Science",
    company: "Mahatma Gandhi Institute of Technology (MGIT)",
    logo: mgitLogo + "?v=1",
    location: "Kukatpally, Hyderabad, Telangana",
    duration: "2024 - 2028",
    description:
      "Pursuing Bachelor's degree in Computer Science Engineering with a strong focus on full-stack development, algorithms, and modern web technologies.",
    responsibilities: [
      "Strengthening core CS fundamentals including DSA, OOPS, DBMS and OS",
      "Building full-stack web applications using MERN, Flask, and Java",
      "Participating in hackathons, workshops, and technical events",
      "Collaborating on team-based software engineering projects",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "MongoDB", "Git"],
  },

  {
    id: 2,
    type: "education",
    title: "Intermediate (MPC)",
    company: "Sri Chaitanya Junior College",
    logo: sriChaitanyaLogo + "?v=1",
    location: "Hyderabad, Telangana",
    duration: "2022 - 2024",
    description:
      "Completed Intermediate MPC with strong foundation in Mathematics and analytical reasoning.",
    responsibilities: [
      "Focused heavily on mathematics and logical problem solving",
      "Participated in academic competitions and seminars",
      "Maintained consistent academic performance",
    ],
    technologies: ["Mathematics", "Physics", "Problem Solving"],
  },

  {
    id: 3,
    type: "education",
    title: "Primary & High School (Grade 1–10)",
    company: "Ravindra Bharathi School",
    logo: ravindraLogo + "?v=1",
    location: "Hyderabad, Telangana",
    duration: "2012 - 2022",
    description:
      "Completed schooling with strong fundamentals in science, mathematics and communication skills.",
    responsibilities: [
      "Participated in science fairs and academic competitions",
      "Developed early interest in computers and technology",
      "Consistently performed well in academics",
    ],
    technologies: ["Science", "Mathematics", "Communication"],
  },
];
