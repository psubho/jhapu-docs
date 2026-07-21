import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Accounting" };

export default function AccountingPage() {
  return (
    <DocArticle activePath="/erp-basics/accounting" category="ERP Basics" title="Accounting" description="Record financial activity in the selected company and keep vouchers, ledgers and reporting aligned." next={{ title: "Inventory", href: "/erp-basics/inventory" }}>
      <section>
        <h2>Accounting workflows</h2>
        <p>Use the Accounting menu for financial vouchers and related workflows. Transactions should be posted only after confirming the active company and financial period.</p>
        <div className="callout"><strong>Guides coming by workflow</strong><p>Individual pages for voucher types, ledger work, bank reconciliation and financial controls will be added in this section.</p></div>
      </section>
    </DocArticle>
  );
}
