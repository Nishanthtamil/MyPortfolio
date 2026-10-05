const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar, 2024",
    title:
      "a graph-based decision system for trust analysis in criminal investigation scenarios.",
    image: "/images/blog1.png",
    link: "https://migrationletters.com/index.php/ml/issue/view/184",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django", "Laravel", "FastAPI", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "AI",
    items: ["Machine learning", "Deep Learning", "Computer Vision", "NLP", "Pytorch", "Tensorflow", "Keras", "Scikit-learn", "SpaCy", "NLTK", "OpenCV",],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Nishanthtamil",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/A_Nishanth_?t=HSK1dI_a5SLlJgQMUfdauA&s=09",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nishanth-asaithambi-86b065257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "LawD",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "LawD_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A multi-agent framework on Vercel with a Hybrid Vector DB (Milvus) and Knowledge Graph",
            "Optimized backend latency using Groq API for low-latency LLM inference and secure session management.",
          ],
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Compliance Management Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Compliance_Management_Chatbot_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Engineered an AI compliance system featuring a custom SOAR searching algorithm for accelerated retrieval speed",
            "Built a high-performance FastAPI backend with PostgreSQL and Milvus Vector DB for hybrid search "
          ],
        },
        {
          id: 2,
          name: "Compliance Management Chatbot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/techg",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Tutor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Tutor project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is a Next.js-based AI tutor that helps users learn English and Hindi through interactive chat and image analysis",
            "it utilizes the Groq SDK and Llama models to offer specialized modes including a conversation partner",
            "a translator, and a visual dictionary, and the application features a dynamic system prompt that adjusts its tone and output format based on the user's age and selected language mode.",
          ],
        },
        {
          id: 2,
          name: "tutor-six-inky.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tutor-six-inky.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "tutor.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Vigilant-X",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[46vh] left-7",
      children: [
        {
          id: 1,
          name: "Vigilant-X_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An Agentic Multi-Language Security Reviewer leveraging Semantic Formal Verification and Parallelized Mirror Sandbox Analysis.",
            "Moves beyond heuristic linting by transpiling code into Z3 SMT constraints and verifying exploits like Use-After-Free in a secure Docker sandbox.",
            "Features a Multi-Language CPG Backend, Temporal Program-Point Proofs, and Budget-Controlled Deep Scans with automatic GitHub SARIF integration."
          ],
        },
        {
          id: 2,
          name: "Vigilant-X.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/Vigilant-X",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 5
    {
      id: 9,
      name: "DittoFS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-96 left-5",
      windowPosition: "top-[60vh] left-7",
      children: [
        {
          id: 1,
          name: "DittoFS_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A CRDT-backed distributed filesystem built in Rust that synchronizes file changes across multiple nodes in real-time.",
            "Operates entirely without a central server, leveraging libp2p Gossipsub for data broadcast and mDNS for peer discovery.",
            "Combines Loro CRDTs for robust file metadata state, Sled for raw blob storage, and fuse3 for a seamless OS-level filesystem mount."
          ],
        },
        {
          id: 2,
          name: "DittoFS.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/DittoFS",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 6
    {
      id: 10,
      name: "IPL Blockchain Ticketing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-96 right-80",
      windowPosition: "top-[75vh] left-7",
      children: [
        {
          id: 1,
          name: "IPL_Blockchain_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A high-performance, secure ticketing platform for IPL matches built on Hyperledger Fabric to prevent black marketing and duplicate tickets.",
            "Features a microservices backend (Node.js/TypeScript) with Redis caching to handle massive traffic surges during flash sales.",
            "Includes a suite of React Native apps for fans, members, and gate scanners, along with a React admin dashboard for live match management."
          ],
        },
        {
          id: 2,
          name: "IPL-Ticketing.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/ticketing",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 7
    {
      id: 11,
      name: "PropDesk",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[25rem] left-[40%]",
      windowPosition: "top-[20vh] left-[40vw]",
      children: [
        {
          id: 1,
          name: "PropDesk_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack Real Estate CRM platform for managing property listings, leads, and team operations with role-based access for Admins and Agents.",
            "Built with a React (Vite) frontend and a high-performance FastAPI backend, utilizing MongoDB for async document storage.",
            "Features a secure authentication flow with local JWT and Google OAuth 2.0 integration."
          ],
        },
        {
          id: 2,
          name: "PropDesk.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/PropDesk",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 8
    {
      id: 12,
      name: "OpenClaw Stellar",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-[40%]",
      windowPosition: "top-[15vh] left-[40vw]",
      children: [
        {
          id: 1,
          name: "OpenClaw_Stellar_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Web3-native execution agent built on Stellar that enables AI agents to discover, pay in USDC, and run sandboxed Docker tasks trustlessly.",
            "Implements the x402 protocol for decentralized per-job payments and uses Soroban smart contracts for on-chain identity verification.",
            "Features a strict, sandboxed Docker execution environment (OpenClaw) with cryptographic Ed25519 signatures for result validation."
          ],
        },
        {
          id: 2,
          name: "OpenClaw.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/nirmalplays/Stellar-x402",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 9
    {
      id: 13,
      name: "Auction Simulator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-[40%]",
      windowPosition: "top-[30vh] left-[40vw]",
      children: [
        {
          id: 1,
          name: "Auction_Simulator_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A real-time multiplayer IPL auction simulator built with Next.js, React, Socket.IO, and TypeScript.",
            "Features a live bidding engine that handles rapid bids, calculates automatic increments, and enforces synchronized countdowns.",
            "Includes built-in support to parse the official IPL mega auction player list and manages real-time purse deductions."
          ],
        },
        {
          id: 2,
          name: "AuctionSimulator.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://auctionsimulator.onrender.com",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/AuctionSimulator",
          position: "top-20 left-40",
        },
      ],
    },

    // ▶ Project 10
    {
      id: 14,
      name: "Snake Game Engine",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[25rem] right-80",
      windowPosition: "top-[40vh] left-[40vw]",
      children: [
        {
          id: 1,
          name: "SnakeGameEngine_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A 2D Data-Driven Game Engine built entirely in C and Raylib.",
            "Features an integrated visual Level Editor with immediate-mode GUI (raygui) and hot-reloading capabilities.",
            "Originally started as a Snake game, evolving into a flexible ECS-style architecture supporting various game entities."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/SnakeGameEngine",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 11
    {
      id: 15,
      name: "Wildlife WSN AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40rem] left-5",
      windowPosition: "top-[50vh] left-[15vw]",
      children: [
        {
          id: 1,
          name: "WSN_GNN_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An energy-efficient clustering and routing protocol for Wireless Sensor Networks used in wildlife tracking cameras.",
            "Utilizes an inductive Graph Neural Network (PyTorch Geometric, GraphSAGE) combined with an Actor-Critic Reinforcement Learning framework.",
            "Optimizes network topology to significantly maximize camera battery lifetime in constrained environments."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/WSN-GNN-reinforcemnt-clustering-method-energy-efficient",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 12
    {
      id: 16,
      name: "Netflix IMDb Extension",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40rem] left-[40%]",
      windowPosition: "top-[55vh] left-[35vw]",
      children: [
        {
          id: 1,
          name: "Netflix_IMDb_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Google Chrome browser extension that automatically fetches and displays IMDb ratings directly on Netflix movie and TV show cards.",
            "Built using plain JavaScript, HTML, and CSS, leveraging the OMDB API for real-time rating data.",
            "Features seamless DOM injection into the Netflix UI and uses local storage for caching to minimize API requests."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/netflix-extension",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 13
    {
      id: 17,
      name: "Live Sports API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40rem] right-80",
      windowPosition: "top-[60vh] left-[40vw]",
      children: [
        {
          id: 1,
          name: "LiveSports_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A real-time Live Sports scoring and commentary backend API built with Node.js, Express, and WebSockets.",
            "Utilizes PostgreSQL and Drizzle ORM for robust database schema management and structured data storage.",
            "Integrated with Arcjet for advanced security, including bot detection and sliding window rate limiting."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/LiveSports",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 14
    {
      id: 18,
      name: "Medical Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40rem] right-[40%]",
      windowPosition: "top-[65vh] left-[45vw]",
      children: [
        {
          id: 1,
          name: "Medical_Chatbot_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A multimodal Medical AI Chatbot built with FastAPI, integrating voice transcription, translation, and image analysis.",
            "Uses OpenAI's Whisper for robust multi-language audio transcription and Google Translate for seamless English translation.",
            "Leverages the Groq API with Meta's Llama Vision models to process medical queries and analyze uploaded images in real-time."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/medical-chatbot",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 15
    {
      id: 19,
      name: "Crop Insurance AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[55rem] left-5",
      windowPosition: "top-[70vh] left-[10vw]",
      children: [
        {
          id: 1,
          name: "CropInsurance_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An AI-powered crop insurance claim evaluation platform that identifies crop type, damage percentage, and flags fraud.",
            "Uses a fine-tuned MobileNet (TensorFlow/Keras) to classify Cotton, Maize, Rice, and Wheat from live camera images.",
            "Captures GPS coordinates, computes NDVI values, and visualizes farm locations on an interactive OpenStreetMap."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/cropinsuranceproject",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 16
    {
      id: 20,
      name: "SynthForge",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[55rem] left-[40%]",
      windowPosition: "top-[75vh] left-[30vw]",
      children: [
        {
          id: 1,
          name: "SynthForge_project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An enterprise-grade platform for generating physics-accurate synthetic industrial sensor data for training ML models.",
            "Features a 14-stage generation pipeline with PINN Surrogate (sub-100ms inference), CTGAN engine, physics validation, fault injection, and auto-labeling.",
            "Exports datasets natively to AWS S3, HuggingFace Hub, and MLflow; deployed via Docker Compose with a Python SDK."
          ],
        },
        {
          id: 2,
          name: "GitHub_Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Nishanthtamil/SynthForge",
          position: "top-20 left-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/nishanth.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/nishanth.jpg",
      description: [
        "Hey! I’m Nishanth 👋, a programmer who lives at the intersection of AI research, game design, and building digital products that actually matter.",
        "I don't just write code; I’m a researcher at heart. I love digging into the 'why' behind a system to build smarter websites, smoother apps, and game worlds that feel alive.",
        "I’m big on clean logic, intelligent UI, and creating experiences where the tech feels like magic rather than just a tool.",
        "When I’m not in the zone, you’ll find me down a research rabbit hole at 3 AM, tweaking a game mechanic for the tenth time, or probably starting 'just one more' side project I definitely have time for 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };