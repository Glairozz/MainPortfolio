export type ProjectCategory = "Web Development" | "Game Development" | "UI Design";

export interface Project {
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  github?: string;
  demo?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Y-SAFE",
    category: "Web Development",
    image: "/assets/images/projects/y-safe.png",
    description:
      "A comprehensive safety management system with dashboard functionality.",
    demo: "https://y-safe-v668.onrender.com/dashboard.html",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Lord of the Rings Library",
    category: "Web Development",
    image: "/assets/images/projects/lotr.png",
    description:
      "A comprehensive website showcasing information about the Lord of the Rings series.",
    demo: "https://the-legend-of-middle-earth.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "A Song of Ice and Fire & The Dance of the Dragons",
    category: "Web Development",
    image: "/assets/images/projects/got&hotd.png",
    description:
      "A detailed website about the A Song of Ice and Fire series.",
    demo: "https://a-song-of-fire-and-blood-beta.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Python Algorithm Visualizer",
    category: "Web Development",
    image: "/assets/images/projects/algo visualizer.png",
    description:
      "An interactive visual tool for understanding algorithms step-by-step.",
    demo: "https://glairozz.github.io/python-algorithm-visualizer/",
    tech: ["Python", "JavaScript", "Algorithms"],
  },
  {
    title: "ASCII Portrait Generator",
    category: "Web Development",
    image: "/assets/images/projects/portrait generator.png",
    description:
      "Convert images into ASCII art portraits with customizable settings.",
    demo: "https://glairozz.github.io/ASCII_PortraitGenerator/",
    tech: ["JavaScript", "Python"],
  },
  {
    title: "3D Visual Recognition",
    category: "Web Development",
    image: "/assets/images/projects/3dRecognition.jpg",
    description:
      "A 3D visual recognition project leveraging computer vision and deep learning for hand gesture tracking.",
    github: "https://github.com/Glairozz/3d-Hand-Recognition",
    tech: ["Python", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Ethan's Great Dungeon",
    category: "Game Development",
    image: "/assets/images/projects/egd.png",
    description:
      "A 2D dungeon crawler game made using Pygame with multiple levels and enemies.",
    github: "https://github.com/glairozzblair-gif/Pygame-Ethans-Great-Dungeon.git",
    tech: ["Python", "Pygame"],
  },
  {
    title: "Who's the Spy?",
    category: "Game Development",
    image: "/assets/images/projects/who's the spy.jpg",
    description:
      "An interactive spy-themed adventure game with stealth mechanics.",
    demo: "https://spy-game-amber.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Drunk Cards",
    category: "Game Development",
    image: "/assets/images/projects/drunk cards.jpg",
    description:
      "A fun card game with unique mechanics and animated movements.",
    demo: "https://drunk-cards.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Kings Cup",
    category: "Game Development",
    image: "/assets/images/projects/king's cup.jpg",
    description:
      "A digital version of the classic Kings Cup card game with interactive gameplay and party mechanics.",
    demo: "https://kings-cup-nine.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Rubik's Cube",
    category: "Game Development",
    image: "/assets/images/projects/rubics cube.jpg",
    description:
      "A virtual Rubik's Cube simulator with intuitive controls.",
    demo: "https://glairozz.github.io/Rubic-Cube/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Space Shooter",
    category: "Game Development",
    image: "/assets/images/projects/pyshooter.png",
    description:
      "An arcade space shooter with multiple enemy types and power-ups.",
    github: "https://github.com/Glairozz/PygameSpaceShooter",
    tech: ["Python", "Pygame"],
  },
  {
    title: "PyChess",
    category: "Game Development",
    image: "/assets/images/projects/pychess.png",
    description:
      "A fully functional chess game with AI opponent and graphical interface.",
    github: "https://github.com/Glairozz/python-chess",
    tech: ["Python", "Pygame"],
  },
  {
    title: "Zzoryx Game Hub",
    category: "Game Development",
    image: "/assets/images/projects/game hub.jpg",
    description:
      "A game hub portal featuring a collection of interactive web-based games and experiences.",
    demo: "https://game-hub-portal-alpha.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web Portfolio",
    category: "UI Design",
    image: "/assets/images/projects/firstportfolio.png",
    description:
      "My first personal portfolio website showcasing web development skills.",
    demo: "https://glairozz-formal-portfolio.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "Game Development",
  "UI Design",
];
