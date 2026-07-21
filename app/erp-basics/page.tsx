import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "ERP Basics" };

export default function ErpBasicsPage() {
  return (
    <DocArticle
      activePath="/erp-basics"
      category="Use Jhapu ERP"
      title="ERP Basics"
      description="After selecting a company, use the Company Home menu to work with the built-in ERP areas and your company-specific modules."
      next={{ title: "Module Builder", href: "/module-builder" }}
    >
      <section>
        <h2>Company Home</h2>
        <p>After selecting a company, the user lands on Company Home. This is the starting point for day-to-day ERP work in the selected company.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-home.png" alt="Example Jhapu Company Home page after company selection" />
          <figcaption>Example only: Company Home displays the selected company and its available ERP menu areas.</figcaption>
        </figure>
        <div className="callout"><strong>Built-in and custom modules</strong><p>Masters, Accounting, Inventory and Reports are built-in ERP areas. When custom modules are added for a company, they appear under <strong>Company Specific</strong>.</p></div>
      </section>
      <section>
        <h2>Choose an ERP area</h2>
        <p>Use these category guides as the starting point. Each category will contain focused pages for its individual ERP screens and workflows.</p>
        <div className="admin-guide-grid">
          <Link href="/erp-basics/masters"><span>Built-in ERP</span><strong>Masters</strong><p>Maintain the reusable account, inventory and statutory information used by transactions.</p><em>Open Masters →</em></Link>
          <Link href="/erp-basics/accounting"><span>Built-in ERP</span><strong>Accounting</strong><p>Record financial vouchers and manage the accounting workflow for the selected company.</p><em>Open Accounting →</em></Link>
          <Link href="/erp-basics/inventory"><span>Built-in ERP</span><strong>Inventory</strong><p>Manage item movement, stock-related documents and inventory operations.</p><em>Open Inventory →</em></Link>
          <Link href="/erp-basics/company-specific"><span>Custom ERP</span><strong>Company Specific</strong><p>Access the custom modules that have been created and enabled for the company.</p><em>Open Company Specific →</em></Link>
          <Link href="/erp-basics/reports"><span>Built-in ERP</span><strong>Reports</strong><p>Review financial, inventory and statutory reports for the selected company.</p><em>Open Reports →</em></Link>
        </div>
      </section>
    </DocArticle>
  );
}
