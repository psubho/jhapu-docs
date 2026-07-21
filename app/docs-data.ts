export type DocsPage = {
  title: string;
  href: string;
  summary: string;
  keywords: string;
};

export const docsGroups: Array<{ label: string; pages: DocsPage[] }> = [
  {
    label: "Start here",
    pages: [
      { title: "Documentation home", href: "/", summary: "Find the right Jhapu guide.", keywords: "home overview documentation" },
      { title: "Getting started", href: "/getting-started", summary: "Login, company and first setup.", keywords: "login tenant company financial year setup" },
    ],
  },
  {
    label: "Use Jhapu ERP",
    pages: [
      { title: "ERP basics", href: "/erp-basics", summary: "Masters, transactions and reports.", keywords: "item ledger sale purchase stock voucher reports" },
    ],
  },
  {
    label: "Customise",
    pages: [
      { title: "Module Builder", href: "/module-builder", summary: "Design and generate custom modules.", keywords: "module builder ai draft form generate tenant" },
    ],
  },
  {
    label: "Manage",
    pages: [
      { title: "Administration", href: "/administration", summary: "Companies, users and access.", keywords: "admin company user role access password" },
      { title: "Troubleshooting", href: "/troubleshooting", summary: "Resolve common issues safely.", keywords: "problem login api health cache support" },
    ],
  },
  {
    label: "What’s new",
    pages: [
      { title: "Release notes", href: "/release-notes", summary: "Documentation and product updates.", keywords: "release update change new" },
    ],
  },
];

export const docsPages = docsGroups.flatMap((group) => group.pages);
