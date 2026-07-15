import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaDocker,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiZod,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

export const skills = [
  
  { name: "HTML5", icon: FaHtml5, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, category: "Frontend" },
  { name: "Redux Toolkit", icon: SiRedux, category: "Frontend" },


  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "PHP", icon: FaPhp, category: "Backend" },
  { name: "JWT", icon: SiJsonwebtokens, category: "Backend" },
  { name: "Zod", icon: SiZod, category: "Backend" },

  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "Prisma", icon: SiPrisma, category: "Database" },
  { name: "Redis", icon: SiRedis, category: "Database" },

 
  { name: "Docker", icon: FaDocker, category: "DevOps" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "GitHub", icon: FaGithub, category: "Tools" },
  { name: "Vercel", icon: SiVercel, category: "DevOps" },
  { name: "Postman", icon: SiPostman, category: "Tools" },
  { name: "Figma", icon: FaFigma, category: "Tools" },
];