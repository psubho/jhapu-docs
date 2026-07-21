import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Release notes" };

export default function ReleaseNotesPage() {
  return (
    <DocArticle
      activePath="/release-notes"
      category="What’s new"
      title="Release notes"
      description="A concise record of meaningful documentation and Jhapu platform updates."
    >
      <section>
        <p className="release-date">21 July 2026</p>
        <h2>Documentation foundation</h2>
        <ul>
          <li>Created the standalone Jhapu documentation website.</li>
          <li>Added Getting Started, ERP Basics, Module Builder, Administration and Troubleshooting guides.</li>
          <li>Added documentation-wide navigation and search.</li>
          <li>Established a public documentation boundary that excludes credentials and sensitive infrastructure details.</li>
        </ul>
      </section>
      <section>
        <p className="release-date">Current ERP baseline</p>
        <h2>Core accounting and inventory</h2>
        <p>Core masters, transactions and reports are considered complete for the current agreed scope. Future work is tracked in the product roadmap rather than repeated in completed-work documentation.</p>
      </section>
    </DocArticle>
  );
}
