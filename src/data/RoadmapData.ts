export interface RoadmapItem {
  title: string;
  date: string;
  desc: string;
}

export const roadmap: RoadmapItem[] = [
  {
    title: "Netcode UI/UX Refresh",
    date: "2025-05-01",
    desc: "Overhaul of the projects UI & UX to fit a more modern theme overall",
  },
  {
    title: "Netcode Concurrency Fix",
    date: "2025-06-01",
    desc: "Fix the concurrency issue that occurs when 2 users press a key at the same time",
  },
  {
    title: "Netcode Docker & Kubernetes",
    date: "2025-07-01",
    desc: "Implement Docker and K8 clusters to handle the code running enviroment",
  },
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
