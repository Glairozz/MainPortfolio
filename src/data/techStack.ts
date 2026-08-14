export interface TechItem {
  name: string;
  image?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", image: "/assets/images/software/python.png" },
      { name: "JavaScript", image: "/assets/images/software/js.png" },
      { name: "C++", image: "/assets/images/software/cpp.png" },
      { name: "Java", image: "/assets/images/software/java.png" },
      { name: "HTML", image: "/assets/images/software/html.png" },
      { name: "CSS", image: "/assets/images/software/css.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", image: "/assets/images/software/react.png" },
      { name: "Node.js", image: "/assets/images/software/nodejs.png" },
      { name: "Bootstrap", image: "/assets/images/software/bootstrap.png" },
      { name: "Pygame" },
      { name: "Pandas" },
      { name: "PyQt" },
      { name: "Tkinter" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", image: "/assets/images/software/mysql.png" },
      { name: "MongoDB", image: "/assets/images/software/mongodb.png" },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", image: "/assets/images/software/git.png" },
      { name: "GitHub", image: "/assets/images/tools/github.webp" },
      { name: "VS Code", image: "/assets/images/tools/vscode.png" },
      { name: "PyCharm", image: "/assets/images/tools/pycharm.png" },
      { name: "Dev-C++", image: "/assets/images/tools/devcpp.jpg" },
      { name: "IntelliJ IDEA", image: "/assets/images/tools/intellij.jpg" },
      { name: "Cisco Packet Tracer", image: "/assets/images/tools/cisco.png" },
      { name: "Figma", image: "/assets/images/tools/figma.png" },
    ],
  },
];
