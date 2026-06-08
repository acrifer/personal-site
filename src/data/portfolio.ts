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
    "把产品思考、工程实现和视觉叙事放在同一个工作台上，构建高质感、可交付、可扩展的数字体验。",
  availability: "Available for selected collaborations",
  email: "2830795495@qq.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/crifer",
    },
    {
      label: "Email",
      href: "mailto:2830795495@qq.com",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Editorial Portfolio System",
    year: "2026",
    category: "Personal Site",
    summary:
      "一个以 Canvas 动态视觉和编辑部网格为核心的个人作品集，用来展示项目、方法论和合作入口。",
    stack: ["Next.js", "Canvas", "Tailwind"],
    href: "https://github.com/crifer",
    featured: true,
  },
  {
    title: "Insight Command Center",
    year: "2025",
    category: "Dashboard",
    summary:
      "面向业务团队的实时数据工作台，强调信息密度、趋势识别和快速筛选路径。",
    stack: ["React", "TypeScript", "Charts"],
    href: "https://github.com/crifer",
    featured: true,
  },
  {
    title: "Signal Landing Kit",
    year: "2025",
    category: "Growth",
    summary:
      "为早期产品准备的高转化落地页组件库，统一叙事节奏、视觉层级和行动入口。",
    stack: ["Next.js", "Design System", "SEO"],
    href: "https://github.com/crifer",
    featured: false,
  },
  {
    title: "Workflow Automator",
    year: "2024",
    category: "Internal Tool",
    summary:
      "把重复运营流程抽象成可配置任务，减少人工检查、复制和跨系统同步成本。",
    stack: ["Node.js", "API", "Automation"],
    href: "https://github.com/crifer",
    featured: false,
  },
  {
    title: "Canvas Motion Studies",
    year: "2024",
    category: "Experiment",
    summary:
      "围绕粒子、流线和排版网格的前端视觉实验，用轻量代码生成具有辨识度的动态背景。",
    stack: ["Canvas", "Animation", "UX"],
    href: "https://github.com/crifer",
    featured: false,
  },
  {
    title: "Documentation Studio",
    year: "2023",
    category: "Knowledge",
    summary:
      "为项目文档、技术方案和发布材料建立统一结构，让复杂信息更容易被检索和复用。",
    stack: ["MDX", "Content", "Next.js"],
    href: "https://github.com/crifer",
    featured: false,
  },
];

export const contactLinks: SocialLink[] = [
  {
    label: "Start a project",
    href: `mailto:${profile.email}?subject=Portfolio%20Collaboration`,
  },
  ...profile.socialLinks,
];
