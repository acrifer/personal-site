export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  intro: string;
  availability: string;
  email: string;
  socialLinks: SocialLink[];
};

export type Project = {
  title: string;
  year: string;
  category: string;
  status: string;
  summary: string;
  stack: string[];
  href: string;
  featured: boolean;
};

export const profile: Profile = {
  name: "Crifer",
  role: "Creative Developer / Product Builder",
  location: "China / Remote",
  intro:
    "正在完善 HandoffOS 与 OmniAgent-Studio，把产品思考、工程实现和视觉叙事整理成可持续迭代的项目资产。",
  availability: "Building in public / In progress",
  email: "2830795495@qq.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/acrifer",
    },
    {
      label: "HandoffOS",
      href: "https://github.com/acrifer/HandoffOS",
    },
    {
      label: "OmniAgent-Studio",
      href: "https://github.com/acrifer/OmniAgent-Studio",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "HandoffOS",
    year: "2026",
    category: "Product System",
    status: "In progress / GitHub only",
    summary:
      "正在完善中的系统型项目。当前作品集先展示 GitHub 仓库入口和项目状态，后续会继续补充完整说明、核心能力和线上演示。",
    stack: ["Planning", "Workflow", "Handoff"],
    href: "https://github.com/acrifer/HandoffOS",
    featured: true,
  },
  {
    title: "OmniAgent-Studio",
    year: "2026",
    category: "Agent Tooling",
    status: "In progress / GitHub only",
    summary:
      "一个正在完善中的智能体工作台项目，当前先展示 GitHub 仓库入口和迭代状态，后续再补充完整功能说明与线上演示。",
    stack: ["Java", "Agent", "Studio"],
    href: "https://github.com/acrifer/OmniAgent-Studio",
    featured: true,
  },
];

export const contactLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}?subject=Portfolio%20Collaboration`,
  },
  ...profile.socialLinks,
];
