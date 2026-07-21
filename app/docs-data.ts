export type DocsPage = {
  title: string;
  href: string;
  summary: string;
  keywords: string;
  nested?: boolean;
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
      { title: "ERP Basics", href: "/erp-basics", summary: "Company Home and ERP menu areas.", keywords: "company home masters accounting inventory reports company specific" },
      { title: "Masters", href: "/erp-basics/masters", summary: "Reusable accounts, inventory and statutory information.", keywords: "masters ledger item unit category store GST HSN cost centre", nested: true },
      { title: "Accounting", href: "/erp-basics/accounting", summary: "Financial vouchers and accounting workflows.", keywords: "accounting voucher ledger bank financial", nested: true },
      { title: "Inventory", href: "/erp-basics/inventory", summary: "Stock-related documents and operations.", keywords: "inventory stock item movement purchase sale", nested: true },
      { title: "Company Specific", href: "/erp-basics/company-specific", summary: "Custom modules for the selected company.", keywords: "company specific custom module tenant", nested: true },
      { title: "Reports", href: "/erp-basics/reports", summary: "Financial, inventory and statutory reports.", keywords: "reports day book trial balance profit loss balance sheet GST", nested: true },
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
      { title: "Administration", href: "/administration", summary: "Administration guide overview.", keywords: "admin administration overview" },
      { title: "User Management", href: "/administration/users", summary: "Users, company access and module permissions.", keywords: "user role permission company access password activity log", nested: true },
      { title: "Company Management", href: "/administration/companies", summary: "Companies, system configuration and account sub-groups.", keywords: "company create configuration account subgroup financial year", nested: true },
      { title: "Module Management", href: "/administration/modules", summary: "Custom modules and company-level access.", keywords: "custom module permission company module management", nested: true },
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
