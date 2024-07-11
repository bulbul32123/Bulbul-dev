import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import html from '/images/html.png'
import css from '/images/css.png'
import js from '/images/javascript.png'
import react from '/images/React.png'
import tailwind from '/images/tailwind.png'
import framer from '/images/framer.png'
import figma from "/images/figma.png"
import git from "/images/github.png"
import next from "/images/next.png"
import mui from "/images/mui.png"
import node from "/images/nodejs.png"
import mongodb from "/images/mongodb.png"
import express from "/images/express.png"



import { FaPaperPlane, FaClipboardList } from "react-icons/fa";
import { IoPerson, IoDocumentTextOutline } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";


export const MainSkills = [
  {
    skill_name: "Html 5",
    Image: "/images/html.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Css",
    Image: "/images/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: "/images/javascript.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    Image: "/images/React.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js",
    Image: "/images/next.png",
    width: 80,
    height: 80,
  },
];
export const SubSkills = [

  {
    skill_name: "Redux",
    Image: "/images/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/images/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    Image: "/images/bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/images/framer.png",
    width: 80,
    height: 80,
  },
];

export const OtherSkills = [
  {
    skill_name: "Material Ui",
    Image: "/images/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    Image: "/images/figma.png",
    width: 80,
    height: 80,
  },
];

export const socialData = [
  {
    id: 0,
    icon: <FaFacebook size={25} color='white' />,
    link: 'https://www.facebook.com/profile.php?id=61550563621219',
  },
  {
    id: 1,
    icon: <FaLinkedin size={25} color='white' />,
    link: 'https://www.linkedin.com/in/webdevwithbulbul/',
  },
  {
    id: 2,
    icon: <FaGithub size={25} color='white' />,
    link: 'https://github.com/bulbul32123',
  },
  {
    id: 3,
    icon: <SiFiverr size={25} color='white' />,
    link: 'https://www.fiverr.com/mdbulbulisla222?up_rollout=true',
  },
]

export const texts = [
  {
    id: 0,
    texts: "A passionate front end developer with a focus on frontend technologies. I have 3+ years of experience crafting beautiful and responsive websites and web applications using cutting-edge tools and frameworks."
  },
  {
    id: 3,
    texts: "Let's Explore how I can help bring your ideas to life and create engaging digital experiences that resonate with your audience."
  },
]

export const projectData = [
  {
    id: 0,
    title: 'Movix',
    desc: 'Millons of Movies,Tv shows and people to Discover. With Advance functionalitys. Explore now.',
    category: 'movie',
    link: 'https://advancemovieapp.netlify.app/',
    imgSrc: '/images/movix.png',
    views: '1.3k',
    comments: '500'
  },
  {
    id: 199,
    title: 'Foods For Foodies',
    desc: 'Different Spices For The Different Tastes.',
    category: 'resturant',
    link: 'https://foodforhummans.netlify.app/',
    imgSrc: '/images/tastyfood.png',
    views: '1.9k',
    comments: '1k'
  },
  {
    id: 2,
    title: "Bulbul's Portfolio",
    desc: 'I develop a 3D visuals, user interfaces and web application. Explore me with my portfolio.',
    category: 'portfolio',
    link: 'https://bulbuls-portfolio.netlify.app/',
    imgSrc: '/images/portfolio1.png',
    views: '1.4k',
    comments: '490'
  },
  {
    id: 99,
    title: "Youtube",
    desc: 'Build a social media Website Using React and Tailwidcss. Like Youtube. Now i have Clone the Youtube.',
    category: 'clone',
    link: 'https://youtubeclonewithreactjs.netlify.app/',
    imgSrc: '/images/youtube.png',
    views: '1.9k',
    comments: '600'
  },
  {
    id: 39,
    title: "Foodi",
    desc: 'Dive into Delights Of Delectable Food. Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship',
    category: 'resturant',
    link: 'https://foodwithfoodi.netlify.app/',
    imgSrc: '/images/foodi.png',
    views: '1.4k',
    comments: '500'
  },
  {
    id: 349,
    title: "Hoobank",
    desc: 'The Next Generation Payment Method.Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees. ',
    category: 'custom',
    link: 'https://modernbankwebsites.netlify.app/',
    imgSrc: '/images/hoobank.png',
    views: '1.6k',
    comments: '570'
  },
  {
    id: 69,
    title: "iphone 14 Pro",
    desc: 'Big and bigger.',
    category: 'clone',
    link: 'https://snazzy-capybara-872b80.netlify.app/',
    imgSrc: '/images/iphone.png',
    views: '1.3k',
    comments: '300'
  },
  {
    id: 75675,
    title: "Online Ekart Store",
    desc: 'Expertly designed goods for workspace, home, and travel. Shop the best products from EKart',
    category: 'e-commerce',
    link: 'https://ekart-frontend-mu.vercel.app/',
    imgSrc: '/images/ekart.png',
    views: '1k',
    comments: '100'
  },
  {
    id: 144,
    title: 'Tasty Foods',
    desc: 'Try the best food of the week.',
    category: 'resturant',
    link: 'https://tasteyourfood.netlify.app/',
    imgSrc: '/images/foodsforfoodies.png',
    views: '1k',
    comments: '300'
  },
  {
    id: 14454564,
    title: 'Linkly',
    desc: 'Linkly is an efficient and easy-to-use URL shortening service designed to streamline your online experience. Whether you need to shorten lengthy URLs for sharing on social media or tracking clicks, Linkly makes it simple and fast.',
    category: 'custom',
    link: '',
    imgSrc: '/images/linkly.png',
    views: '1.7k',
    comments: '390'
  },
  {
    id: 1,
    title: 'Best Eats',
    desc: 'The Best Foods Devlivered. Explore the best foods in your area.',
    category: 'resturant',
    link: 'https://bestfoodsdelivery.netlify.app/',
    imgSrc: '/images/besteat.png',
    views: '1k',
    comments: '300'
  },
  {
    id: 1546,
    title: 'Watch',
    desc: 'Watch Anime Traillers. Explore the popular animaes in the world',
    category: 'movie',
    link: 'https://watch-hot-animes.netlify.app/',
    imgSrc: '/images/watch.png',
    views: '600',
    comments: '100'
  },
  {
    id: 7,
    title: 'Movie Space',
    desc: 'Explore the functionalitys.',
    category: 'movie',
    link: 'https://movieappfunctionality.netlify.app/',
    imgSrc: '/images/moviespace.png',
    views: '1.4k',
    comments: '330'
  },
  {
    id: 8638,
    title: "Bulbul's Portfolio",
    desc: 'Creative Web Developer Offering 1+ Years Of Experience Providing High-Impact Web Solutions For Many Different Organizations.',
    category: 'portfolio',
    link: 'https://miniprotfoliowithreact.netlify.app/',
    imgSrc: '/images/CodeBoy.png',
    views: '400',
    comments: '330'
  },
  {
    id: 8,
    title: 'globecoin',
    desc: 'Move Money to All Corners of the World.',
    category: 'custom',
    link: 'https://globalcurrency.netlify.app/',
    imgSrc: '/images/Currency.png',
    views: '900',
    comments: '770'
  },
  {
    id: 7777,
    title: 'IMDB',
    desc: 'Find your Movies, tv/Shows. Explore All Movies Tv Shows bg IMDB',
    category: 'movie',
    link: 'https://movie4dream.netlify.app/',
    imgSrc: '/images/imdb.png',
    views: '1.3k',
    comments: '330'
  },
  {
    id: 234,
    title: 'Google Searcher',
    desc: 'Search what you want.',
    category: 'clone',
    link: 'https://google-searcher.netlify.app/',
    imgSrc: '/images/google.png',
    views: '2k',
    comments: '970'
  },
  {
    id: 868,
    title: "Bulbul's Portfolio",
    desc: 'Turning Vision Into Reality With Code And Design.',
    category: 'portfolio',
    link: 'https://bulbulpersonalportfolio.netlify.app/',
    imgSrc: '/images/portfolio3.png',
    views: '500',
    comments: '230'
  },
  {
    id: 3,
    title: 'Coffee Time',
    desc: 'FRESH COFFEE IN THE MORNING',
    category: 'resturant',
    link: 'https://coffeetimes.netlify.app/#',
    imgSrc: '/images/coffeetime.png',
    views: '1k',
    comments: '230'
  },

  {
    id: 443,
    title: 'Movie Pulse',
    desc: 'Find your favorite movies tv Shows etc.',
    category: 'movie',
    link: 'https://moviepulses.netlify.app/',
    imgSrc: '/images/MoviePulse.png',
    views: '1.5k',
    comments: '630'
  },
  {
    id: 878,
    title: "Bulbul's Portfolio",
    desc: 'There have some sample of my portfolios.',
    category: 'portfolio',
    link: 'https://bulbulportfolio.netlify.app/',
    imgSrc: '/images/portfolio4.png',
    views: '400',
    comments: '230'
  },
  {
    id: 67,
    title: "Homyz",
    desc: 'Discover Most Suitable Property',
    category: 'custom',
    link: 'https://realstatereactapp.netlify.app/',
    imgSrc: '/images/homyz.png',
    views: '500',
    comments: '330'
  },
]

export const skills = [
  {
    title: "Html",
    progressValue: 100,
    iconBg: "#383E56",
    icon: html,
    points: "HTML was my gateway into the world of web development. Learning about the structure and semantics of web pages laid a solid foundation for understanding how content is organized and presented on the web."
  },
  {
    title: "Css",
    progressValue: 95,
    icon: css,
    iconBg: "#E6DEDD",
    points: "CSS introduced me to the world of styling and design. Understanding CSS selectors, properties, and layout techniques allowed me to bring creativity and visual appeal to my projects while ensuring they remained accessible and responsive across different devices."
  },
  {
    title: "JavaScript",
    icon: js,
    progressValue: 80,
    iconBg: "#383E56",
    points: "JavaScript unlocked the power of interactivity and dynamic behavior on the web. With JavaScript, I learned how to manipulate the DOM, handle user events, and build complex functionality, adding a layer of richness and functionality to my projects."
  },
  {
    title: "React",
    progressValue: 90,
    icon: react,
    iconBg: "#3d3a3a",
    points: "Discovering React revolutionized my approach to building user interfaces. Its component-based architecture, virtual DOM, and state management capabilities simplified the process of creating complex UIs while promoting reusability and maintainability."
  },
  {
    title: "Next js",
    progressValue: 80,
    icon: next,
    iconBg: "black",
    points: "Next.js introduced me to the world of server-side rendering and static site generation, optimizing performance and SEO for my web applications. Its seamless integration with React and built-in features like routing and code splitting made it a powerful tool for building fast and scalable web apps."
  },
  {
    title: "TailwindCss",
    progressValue: 90,
    icon: tailwind,
    iconBg: "#1e1F1F",
    points: "Tailwind CSS introduced me to a utility-first approach to styling, streamlining my workflow and allowing for rapid prototyping and iteration. Its modular and customizable nature empowered me to create visually stunning designs with minimal effort."
  },
  {
    title: "Nodejs",
    icon: node,
    iconBg: "#1e1F1F",
    points: "Node.js opened the door to full-stack development for me, enabling JavaScript to be used for server-side scripting. Its event-driven, non-blocking I/O model ensured efficient, lightweight performance, making it ideal for data-intensive real-time applications. Integrating Node.js into my skill set allowed me to build scalable network applications with ease"
  },
  {
    title: "Express.js",
    icon: express,
    iconBg: "#1e1F1F",
    points: "Express.js provided a minimal and flexible Node.js web application framework that offered a robust set of features for web and mobile applications. Its middleware and routing capabilities simplified the process of managing server-side logic, and its lightweight nature made it perfect for creating fast and scalable server-side applications. Express.js empowered me to build powerful APIs and dynamic web applications efficiently",
  },
  {
    title: "MongoDB",
    icon: mongodb,
    iconBg: "#1e1F1F",
    points: "MongoDB introduced me to the world of NoSQL databases, offering flexibility and scalability with its document-oriented data model. Its ability to handle large volumes of diverse data types seamlessly integrated with my Node.js applications, allowing for fast development and iteration. Utilizing MongoDB, I could efficiently manage and query data, enhancing the performance and adaptability of my applications."
  },
  {
    title: "Framer Motion",
    progressValue: 65,
    icon: framer,
    iconBg: "black",
    points: "Framer Motion elevated my UI animations and transitions to the next level. Its declarative syntax and intuitive API allowed me to bring my designs to life with fluid motion and interactive elements, enhancing the overall user experience."
  },
  {
    title: "Github",
    progressValue: 65,
    icon: git,
    iconBg: "black",
    points: "GitHub became my go-to platform for version control and collaboration. Learning to use Git and GitHub effectively enabled me to manage project versions, collaborate with team members, and contribute to open-source projects, fostering a sense of community and continuous improvement."
  },
  {
    title: "Figma",
    progressValue: 60,
    icon: figma,
    iconBg: "black",
    points: "Figma became my go-to design tool for creating high-fidelity prototypes and mockups. Its collaborative features, responsive design capabilities, and plugin ecosystem streamlined the design-to-development workflow, enabling seamless communication and iteration between designers and developers",
  },
  {
    title: "Material Ui",
    progressValue: 55,
    icon: mui,
    iconBg: "black",
    points: "Material UI provided a rich library of pre-designed components and styles, accelerating the development process and ensuring consistency across my projects. Its theming and customization options allowed me to tailor the design to fit the unique needs of each project while maintaining a cohesive visual identity."
  },
];

export const service = [
  {
    name: 'Website Development',
    des: 'Elevate your online presence with custom website development tailored to your unique needs. From sleek and modern corporate sites to dynamic e-commerce platforms, I specialize in crafting pixel-perfect websites that captivate your audience and drive results. I bring your vision to life, delivering intuitive navigation, seamless functionality, and stunning visual design.',
    icons: '/images/webdevelopment.png'
  },
  {
    name: 'UI/UX Design Implementation',
    des: 'Transform your design concepts into fully functional and visually stunning interfaces with UI/UX design implementation. Seamlessly blending creativity with functionality, I meticulously translate design mockups into code, ensuring a flawless user experience across every interaction. From intuitive navigation and responsive layouts to engaging animations and interactive elements.',
    icons: '/images/uiux.png'
  },
  {
    name: 'Responsive Design',
    des: 'Reach your audience wherever they are with responsive design solutions that adapt seamlessly to any device or screen size. Whether your visitors are browsing on desktops, tablets, or smartphones, I ensure your website looks and performs flawlessly across all platforms. I create a cohesive and consistent user experience that maximizes engagement and drives conversions.',
    icons: '/images/respdesign.png'
  },
  {
    name: 'Performance Optimization',
    des: "Supercharge your website's speed and performance with comprehensive optimization techniques. From minimizing file sizes and leveraging browser caching to optimizing code and reducing server response times, I employ a holistic approach to enhance your site's loading times and overall performance. I create lightning-fast experiences that keep your audience engaged and coming back for more.",
    icons: '/images/performance.png'
  },
  {
    name: 'Frontend Testing and Debugging',
    des: 'Ensure the reliability and functionality of your website with rigorous frontend testing and debugging. I meticulously identify and resolve issues across various browsers, devices, and screen sizes, ensuring a seamless user experience for every visitor. From browser compatibility and accessibility checks to responsive testing and code validation.',
    icons: '/images/testing.png'
  },
]
export const infoData = [
  {
    name: 'Birthday',
    value: "April 18, 2007",
  },
  {
    name: 'Mail',
    value: "bulbulhero63@gmail.com",
  },
  {
    name: 'Address',
    value: "Dhaka, Banani 12-13",
  },
  {
    name: 'Nationality',
    value: "Bangladeshi",
  },
]

export const mobileNavLinks = [
  {
    icon: <IoPerson size={18} />,
    path: 'about',
    name: 'About',
  },
  {
    icon: <IoDocumentTextOutline size={18} />,
    path: 'skills',
    name: 'Skills',
  },
  {
    icon: <FaClipboardList size={18} />,
    path: 'projects',
    name: 'Projects',
  },
  {
    icon: <MdHomeRepairService size={18} />,
    path: 'service',
    name: 'Services',
  },
  {
    icon: <FaPaperPlane size={18} />,
    path: 'contact',
    name: 'Contact',
  },
]
export const links = [
  {
    name: 'About',
    label: 'about'
  },
  {
    name: 'Skill',
    label: 'skills'
  },
  {
    name: 'Projects',
    label: 'projects'
  },
  {
    name: 'Services',
    label: 'service'
  },
]