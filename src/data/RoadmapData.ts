export interface RoadmapItem {
  title: string;
  date: string;
  desc: string;
  status: "doing" | "done" | "NA";
}

const rawRoadmap = [
  {
    title: "Netcode UI/UX Refresh",
    date: "2025-05-01",
    desc: "Overhaul of the projects UI & UX to fit a more modern theme overall",
    status: "doing",
  },
  {
    title: "Netcode Concurrency Fix",
    date: "2025-06-01",
    desc: "Fix the concurrency issue that occurs when 2 users press a key at the same time causing misalignment of current local states",
    status: "NA",
  },
  {
    title: "E2E, Unit Testing and properly integrating CI/CD pipeline",
    date: "2025-06-02",
    desc: "Ensure that every push done throughout the coding process passes a quality check",
    status: "NA",
  },
  {
    title: "Netcode Docker & Kubernetes integration ",
    date: "2025-06-03",
    desc: "Implement Docker and K8 clusters to handle the code running enviroment and scale according to current users",
    status: "NA",
  },
  {
    title: "Netcode Github OAuth integration",
    date: "2025-07-01",
    desc: "Allow for logging in/syncing of repositories to Netcode",
    status: "NA",
  },
  {
    title: "Netcode Multiple file support",
    date: "2025-07-01",
    desc: "Show and support multiple files in netcode specifically for use with github repos/logged in accounts",
    status: "NA",
  },
  {
    title: "Metric gathering",
    date: "2025-07-02",
    desc: "Gather performance metrics/usage metrics and display in a nice ui",
    status: "NA",
  },
  {
    title: "Fuzzy testing",
    date: "2025-07-03",
    desc: "Ensure that under high load/mismatched data netcode works perfectly fine",
    status: "NA",
  },
  {
    title: "Final touchups",
    date: "2025-08-01",
    desc: "Make sure it works on mobile/desktop/laptop at throttled speeds and update the CI/CD pipeline to meet metric/fuzzy test requirements",
    status: "NA",
  },
  {
    title: "Ship Release",
    date: "2025-08-02",
    desc: "Package and redo readme in github to allow for easy running on any operating system",
    status: "NA",
  },
] satisfies RoadmapItem[];

export const roadmap: RoadmapItem[] = [...rawRoadmap].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

{
  /* 
{
  title: "",
  date: "",
  desc: "",
  status: "",
},
*/
}
