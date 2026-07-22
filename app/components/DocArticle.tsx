import Link from "next/link";
import { DocsShell } from "./DocsShell";

export function DocArticle({
  activePath,
  category,
  title,
  description,
  children,
  next,
}: {
  activePath: string;
  category: string;
  title: string;
  description: string;
  children: React.ReactNode;
  next?: { title: string; href: string };
}) {
  return (
    <DocsShell activePath={activePath}>
      <article className="doc-article">
        <header className="article-header">
          <p className="article-category">{category}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="article-meta"><span>Jhapu Documentation</span><span>Updated 22 July 2026</span></div>
        </header>
        <div className="article-body">{children}</div>
        {next && (
          <Link className="next-guide" href={next.href}>
            <span>Next guide</span>
            <strong>{next.title} →</strong>
          </Link>
        )}
      </article>
    </DocsShell>
  );
}
