import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Masters" };

export default function MastersPage() {
  return (
    <DocArticle activePath="/erp-basics/masters" category="ERP Basics" title="Masters" description="Create and maintain the reusable information that supports daily transactions and reporting." next={{ title: "Accounting", href: "/erp-basics/accounting" }}>
      <section>
        <h2>Built-in master data</h2>
        <p>Masters are records created once and selected across the ERP. They include ledgers, items, units, categories, stores, GST rates, HSN/SAC, cost centres and statutory classifications.</p>
        <div className="callout"><strong>Build a clean foundation</strong><p>Keep master data accurate before posting transactions. Future guides in this section will cover each master screen individually.</p></div>
      </section>
    </DocArticle>
  );
}
