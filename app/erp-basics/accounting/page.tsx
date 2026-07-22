import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Accounting" };

export default function AccountingPage() {
  return (
    <DocArticle activePath="/erp-basics/accounting" category="ERP Basics" title="Accounting" description="Record financial activity in the selected company and keep vouchers, ledgers and reporting aligned." next={{ title: "Inventory", href: "/erp-basics/inventory" }}>
      <section>
        <h2>Accounting workflows</h2>
        <p>Use the Accounting menu for financial vouchers and related workflows. Transactions should be posted only after confirming the active company and financial period.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/accounting-menu.png" alt="Jhapu Accounting menu showing voucher entry, other voucher and banking options" />
          <figcaption>The Accounting menu groups everyday voucher creation and review with banking and opening-balance tasks.</figcaption>
        </figure>
        <ul>
          <li><strong>Voucher Entries:</strong> create or view Cash Receipt, Bank Receipt, Cash Payment and Bank Payment vouchers.</li>
          <li><strong>Other Vouchers:</strong> create or view Contra, Journal, Debit Note and Credit Note vouchers.</li>
          <li><strong>Misc.:</strong> access Comp-Comp entries, Banking and Opening Balance functions.</li>
        </ul>
        <div className="guide-links">
          <Link className="secondary-action inline-action" href="/erp-basics/accounting/cash-receipts">Open Voucher guide →</Link>
        </div>
        <div className="callout"><strong>Guides coming by workflow</strong><p>Individual pages for voucher types, ledger work, bank reconciliation and financial controls will be added in this section.</p></div>
      </section>
    </DocArticle>
  );
}
