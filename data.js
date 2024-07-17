import { GithubIcon, Linkedin, Mail, X, YoutubeIcon } from "lucide-react";

export const DATA = {
  // navbar:[

  //         { href: "/", icon: HomeIcon, label: "Home" },
  // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  // { href: "#", icon: CodeIcon, label: "Projects" },
  // { href: "#", icon: PencilLine, label: "Notes" },
  // ],

  contact: {
    devName: "John Doe",
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dev-Lukale",
        icon: <GithubIcon />,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://",
        icon: <Linkedin />,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://",
        icon: <X />,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://",
        icon: <YoutubeIcon />,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: <Mail />,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "Portfolio",

      image: "/images/portfolio.png",
      githublink: "",

      livelink: "",

      desc: "Project done using NextJs,tailwind",

      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
    },
    {
      title: "LMS",

      image: "/images/portfolio.png",
      githublink: "",

      livelink: "",

      desc: "Project done using NextJs,tailwind",
    },
    {
      title: "ECommerce",

      image: "/images/portfolio.png",
      githublink: "",

      livelink: "",

      desc: "Project done using NextJs,tailwind",
    },
    {
      title: "Auth System",

      image: "/images/portfolio.png",
      githublink: "",

      livelink: "",

      desc: "Project done using NextJs,tailwind",
    },
  ],
};
