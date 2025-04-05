export const navItems = [
  { name: "About", link: "#about" },
  // { name: "Projects", link: "#projects" },
  { name: "Work Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 5,
    type: "present",
    title: "Currently crafting dynamic web experiences using Next.js, React, and TypeScript",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-40",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    type: "personality",
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 2,
    type: "time",
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    type: "tech",
    title: "I treat every line of code as a step toward something magical.",
    description: "My tech stack is always growing",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: "6",
    type: "connect",
    title: "Let's connect — I'm open to new opportunities and conversations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Practice & Feedback",
    des: "AI interview platform powered by Vapi and Google Gemini for smart feedback.",
    img: "/project1.png",
    iconLists: ["/tech/re.svg", "/tech/tail.svg", "/tech/ts.svg", "/tech/next.svg"],
    link: "https://devcrackai.vercel.app/",
  },
  {
    id: 2,
    title: "Children’s Book Website Animated with GSAP",
    des: "Self-published children’s book site, dynamically animated with GSAP.",
    img: "/project2.png",
    iconLists: ["/tech/re.svg", "/tech/tail.svg", "/tech/gsap.svg"],
    link: "https://three-little-chicks.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - Side Projects",
    desc: "Designed and developed an AI-powered interview preparation platform using Next.js, React, TypeScript, and Tailwind CSS, leveraging server-side rendering and static site generation to boost SEO and performance. Collaborated with design stakeholders via Figma to build reusable, scalable components and integrated RESTful APIs for a responsive, accessible user interface. Integrated Vapi for voice-based AI interaction, Firebase for storing user-defined data, and Vercel AI SDK with Google Gemini to dynamically generate and evaluate interview questions and answers. Applied best practices in accessibility, performance, and SEO, while ensuring high code quality through robust Git version control, ESLint, Prettier, and thorough testing.",
    className: "md:col-span-2",
    period: "2024 - present",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer - First Republic Bank",
    desc: "Built and deployed responsive, cross-browser websites using HTML5, CSS3, SASS, JavaScript, jQuery, and Foundation. Integrated front-end with APIs, ensured ADA compliance, and implemented Jest, ESLint, Prettier, and Webpack for testing, code quality, and bundling. Designed reusable UI components, conducted code reviews, managed Git workflows, and configured Tealium analytics to track user behavior and maintain brand consistency.",
    className: "md:col-span-2", 
    period: "2017 - 2024",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Engineer - Kabam Inc.",
    desc: "Rebuilt and enhanced a corporate WordPress site using Gulp, Sass, jQuery, and Bootstrap for a responsive, high-performance codebase. Customized themes and plugins, integrated JobVite JSON data with PHP, and refactored CSS for better maintainability. Designed UI layouts aligned with brand identity and collaborated with stakeholders to turn user needs into actionable designs.",
    className: "md:col-span-2", 
    period: "2015 - 2017",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Engineer - Western Union",
    desc: "Built responsive mobile simulation prototypes and optimized CSS for performance using AngularJS, Sass, jQuery, and Bootstrap. Migrated money transfer platforms to a custom MVC front-end with Adobe CQ5 and DTM for dynamic tagging. Integrated JSON/Ajax service calls and ensured cross-browser compatibility within Agile Scrum teams.",
    className: "md:col-span-2",
    period: "2012 - 2014",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/kalarsu",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/chi-su-profile/",
  },
];

export const aboutMeImages = [
  "/me/1.jpg",
  "/me/2.jpg",
  "/me/3.jpg"
];
