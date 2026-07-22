import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Masters" };

export default function MastersPage() {
  return (
    <DocArticle activePath="/erp-basics/masters" category="ERP Basics" title="Masters" description="Create and maintain the reusable information that supports daily transactions and reporting." next={{ title: "Accounting", href: "/erp-basics/accounting" }}>
      <section>
        <h2>Built-in master data</h2>
        <p>Masters are records created once and selected across the ERP. They include ledgers, items, units, categories, stores, GST rates, HSN/SAC, cost centres and statutory classifications.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/masters-menu.png" alt="Jhapu Masters menu with item, accounts and ledger, GST, and company master data" />
          <figcaption>The built-in Masters menu groups reusable records under Item, Accounts/Ledger, GST and Company.</figcaption>
        </figure>
        <ul>
          <li><strong>Item:</strong> manage units, item categories, item sub-categories and items.</li>
          <li><strong>Accounts/Ledger:</strong> manage main ledgers, sub-ledgers and ledger import.</li>
          <li><strong>GST:</strong> manage GST states, HSN/SAC, GST rates and TDS sections.</li>
          <li><strong>Company:</strong> maintain company-level masters such as payment masters and cost centres.</li>
        </ul>
        <div className="guide-links">
          <Link className="secondary-action inline-action" href="/erp-basics/masters/items">Open Item guide →</Link>
          <Link className="secondary-action inline-action" href="/erp-basics/masters/main-ledgers">Open Main Ledger guide →</Link>
          <Link className="secondary-action inline-action" href="/erp-basics/masters/sub-ledgers">Open Sub Ledger guide →</Link>
          <Link className="secondary-action inline-action" href="/erp-basics/masters/gst-states">Open GST State guide →</Link>
        </div>
        <div className="callout"><strong>Build a clean foundation</strong><p>Keep master data accurate before posting transactions. Future guides in this section will cover each master screen individually.</p></div>
      </section>
    </DocArticle>
  );
}
