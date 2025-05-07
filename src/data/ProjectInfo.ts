export interface ProjectInfo {
  title: string;
  repo: string;
  description: string;
  roadmap: string[];
  tech_stack: string[];
}

export const projects: ProjectInfo[] = [
  {
    title: "Netcode",
    repo: "https://github.com/Xavanion/NetCode",
    description:
      "Real-time collaborative code editor & runner built with React, Go, WebSockets and OT.",
    roadmap: [
      "Fix concurrency issue",
      "K8 and dockerize code running enviroment",
      "UI/UX Refresh",
      "Allow for signing in with github and syncing of github repos",
      "Easily allow sharing/private rooms",
    ],
    tech_stack: [
      "React",
      "TypeScript",
      "Tailwind & Shadcn",
      "Go",
      "WebSockets",
      "Kubernetes & Docker",
      "Utilized OT (Operational Transformations) for concurrency",
    ],
  },
  {
    title: "Monke Chat",
    repo: "https://github.com/Xavanion/Monke-Chat",
    description:
      "A real-time chat application built with the ability to create accounts and friend other users",
    roadmap: ["Add proper handling of adding friends", "Add Group chats"],
    tech_stack: [
      "React",
      "TypeScript",
      "Node.JS",
      "ExpressJS",
      "PostgreSQL",
      "Socket.IO",
    ],
  },
  {
    title: "NetShare",
    repo: "https://github.com/Xavanion/NetShare",
    description:
      "A WPF application that enables seamless file sharing between users on the same local network using UDP broadcast for discovery and TCP for file transfer. The application also supports remote file sharing by allowing users to create and join rooms with a group code.",
    roadmap: [
      "Add sending of files over the network",
      "Add P2P support",
      "UI/UX Refresh",
    ],
    tech_stack: ["C#", ".NET WPF", "TCP & UDP"],
  },
  {
    title: "Sweater Weather",
    repo: "https://github.com/Xavanion/SweaterWeather",
    description:
      "Web application that allows users to obtain weather information for any location and receive pizza recommendations tailored to the local area. ",
    roadmap: [
      "Done for now! Made as a Hackathon project to explore dealing with web design + APIs",
    ],
    tech_stack: ["Flask", "HTML", "CSS", "API Handling"],
  },
];
