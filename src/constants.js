// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';


import vercelLogo from './assets/tech_logo/vercel.png';
import elcips from './assets/tech_logo/eclips.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import sfs from './assets/company_logo/sfs.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import Consilio from './assets/company_logo/Consilio.png';

// Project Section Logo's
import healthcare from './assets/work_logo/healthcare.png';
import hotel from './assets/work_logo/hotel.png';
import food from './assets/work_logo/food.png';
import robot from './assets/work_logo/robot.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },


    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name: 'ReactJs', logo: reactjsLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'eclips', logo: elcips },
      { name: 'Vercel', logo: vercelLogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Consilio,
      role: "Associate Software Developer",
      company: "Consilio",
      date: "June 2021 - April 2023",
      desc: "Contributed to the Consilio e-discovery product by delivering new features, resolving product defects, and ensuring functionality through comprehensive manual testing and unit test cases. Collaborated closely with cross-functional teams and gained hands-on experience working with international clients in a dynamic, real-world development environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node JS",
      ],
    },
    {
      id: 1,
      img: sfs,
      role: "Software Developer Intern",
      company: "Simplified future Systems",
      date: "Aug 2019 - Nov 20219",
      desc: "Developed a Matrimonial Website as part of a web development internship, focusing on both frontend and backend functionalities. Contributed to core development tasks, implemented key features, and actively participated in troubleshooting and debugging to ensure a smooth user experience.",
      skills: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "HealthCare Management System",
      description:
        "A comprehensive web-based application designed to streamline hospital operations and enhance patient care. The system enables efficient management of patient records, doctor appointments, billing, and staff administration. It supports real-time appointment booking, secure data access, and role-based dashboards for doctors, patients, and administrators. The platform aims to improve workflow efficiency, reduce manual errors, and provide a seamless healthcare experience through an intuitive and user-friendly interface.",
      image: healthcare,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    },
    {
      id: 1,
      title: "Hotel Management System",
      description:
        "A full-featured application designed to simplify and automate hotel operations, including room booking, customer check-in/check-out, billing, and staff management. The system offers real-time room availability tracking, online reservation capabilities, and role-based access for administrators, staff, and customers. It enhances operational efficiency, reduces manual workload, and delivers a seamless experience for both hotel staff and guests through a clean, intuitive user interface.",
      image: hotel,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Online Food Delivery System",
      description:
        "A user-friendly web application that connects customers with local restaurants, enabling them to browse menus, place orders, and track deliveries in real-time. The system features secure user authentication, restaurant and menu management, order tracking, and payment integration. Designed with a responsive interface for both customers and restaurant admins, the platform streamlines the food ordering process and enhances customer convenience while improving operational efficiency for vendors.",
      image: food,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],

    },
    {
      id: 3,
      title: "Robot Bike Simulation",
      description:
        "A simulated environment designed to model and visualize the behavior of an autonomous robot riding a bike. The system uses physics-based simulation to replicate real-world bike dynamics, balance control, and navigation. It allows testing of various algorithms for motion planning, obstacle avoidance, and stability control in a controlled virtual environment. This project provides insights into robotics, simulation, and control systems, with potential applications in autonomous vehicle development and robotic research.",
      image: robot,
      tags: ["React JS", "C++", "Webots","Matplotlib", "GitHub"],
      
    },
  ];  