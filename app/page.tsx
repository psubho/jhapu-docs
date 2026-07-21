import Link from "next/link";
import { DocsShell } from "./components/DocsShell";

const collections = [
  {
    index: "01",
    title: "Get started",
    description: "Sign in, choose a company and financial year, and prepare a tenant for daily work.",
    href: "/getting-started",
    meta: "6 min read",
  },
  {
    index: "02",
    title: "Use the ERP",
    description: "Understand the flow from masters to transactions, stock, vouchers and reports.",
    href: "/erp-basics",
    meta: "Core workflow",
  },
  {
    index: "03",
    title: "Build modules",
    description: "Create safe tenant modules with drafts, form design, posting rules and generation.",
    href: "/module-builder",
    meta: "Module Builder",
  },
  {
    index: "04",
    title: "Administer Jhapu",
    description: "Manage companies, users, permissions and the settings that control ERP access.",
    href: "/administration",
    meta: "Administrator",
  },
];

export default function Home() {
  return (
    <DocsShell activePath="/">
      <section className="docs-hero">
        <div className="hero-kicker"><span /> Jhapu knowledge base</div>
        <h1>Everything you need to<br /><em>work confidently.</em></h1>
        <p>
          Practical guidance for setting up Jhapu ERP, running daily operations,
          creating modules and administering your organisation.
        </p>
        <div className="hero-actions">
          <Link className="primary-action" href="/getting-started">Start with the basics <span>→</span></Link>
          <Link className="secondary-action" href="/erp-basics">Explore ERP workflows</Link>
        </div>
      </section>

      <section className="quick-paths" aria-labelledby="browse-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Choose your path</p>
            <h2 id="browse-heading">Browse the documentation</h2>
          </div>
          <p>Begin with the guide closest to the work you want to complete.</p>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <Link className="collection-card" href={collection.href} key={collection.href}>
              <div className="card-topline">
                <span>{collection.index}</span>
                <span>{collection.meta}</span>
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <strong>Open guide <span>↗</span></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="status-strip">
        <div className="status-mark"><span /> Documentation status</div>
        <p>This is the first documentation release. More module-by-module guides will be added as Jhapu evolves.</p>
        <Link href="/release-notes">Release notes →</Link>
      </section>
    </DocsShell>
  );
}
