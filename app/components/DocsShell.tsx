"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { docsGroups, docsPages } from "../docs-data";

export function DocsShell({ activePath, children }: { activePath: string; children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return docsPages.filter((page) =>
      `${page.title} ${page.summary} ${page.keywords}`.toLowerCase().includes(normalized),
    ).slice(0, 6);
  }, [query]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Jhapu Documentation home">
          <img src="/jhapu-logo.svg" alt="Jhapu" />
          <span className="brand-divider" />
          <span className="brand-label">Docs</span>
        </Link>
        <div className="top-search">
          <label htmlFor="docs-search">Search documentation</label>
          <span aria-hidden="true">⌕</span>
          <input
            id="docs-search"
            type="search"
            placeholder="Search documentation"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <kbd>/</kbd>
          {query && (
            <div className="search-results">
              {results.length ? results.map((result) => (
                <Link href={result.href} key={result.href} onClick={() => setQuery("")}>
                  <strong>{result.title}</strong>
                  <span>{result.summary}</span>
                </Link>
              )) : <p>No matching guide yet.</p>}
            </div>
          )}
        </div>
        <a className="erp-link" href="https://erp.jhapu.com" target="_blank" rel="noreferrer">Open ERP <span>↗</span></a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle documentation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>

      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <nav aria-label="Documentation navigation">
          {docsGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <p>{group.label}</p>
              {group.pages.map((page) => (
                <Link
                  href={page.href}
                  key={page.href}
                  className={`${page.nested ? "nested" : ""} ${page.deeper ? "deeper" : ""} ${activePath === page.href ? "active" : ""}`.trim()}
                  onClick={() => setMenuOpen(false)}
                >
                  {page.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-note">
          <span>JHAPU DOCS</span>
          <p>Clear guidance for confident ERP work.</p>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
