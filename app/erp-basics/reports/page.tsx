import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Reports" };

export default function ReportsPage() {
  return (
    <DocArticle activePath="/erp-basics/reports" category="ERP Basics" title="Reports" description="Use built-in reports to review the financial, inventory and statutory position of the selected company." next={{ title: "Administration", href: "/administration" }}>
      <section>
        <h2>Reporting workflows</h2>
        <p>Reports help verify business activity after masters and transactions have been maintained. Always review the company, date range and available filters before relying on a result.</p>
        <div className="callout"><strong>Guides coming by report</strong><p>Individual pages for financial, inventory and statutory reports will be added in this section.</p></div>
      </section>
    </DocArticle>
  );
}
