export interface ProjectInfo {
  title: string;
  repo: string;
  description: string;
  roadmap: string[];
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
  },
];
