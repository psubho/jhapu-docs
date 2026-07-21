import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "ERP basics" };

export default function ErpBasicsPage() {
  return (
    <DocArticle
      activePath="/erp-basics"
      category="Use Jhapu ERP"
      title="The core ERP workflow"
      description="Jhapu follows a dependable sequence: prepare masters, record transactions, then verify the result through reports."
      next={{ title: "Module Builder", href: "/module-builder" }}
    >
      <section>
        <h2>1. Masters define reusable information</h2>
        <p>Create records once and select them in transactions. Core masters include Ledgers, Items, Units, Categories, Stores, GST rates, HSN/SAC, Cost Centres and TDS sections.</p>
        <div className="three-column">
          <div><span>Accounts</span><strong>Ledgers and groups</strong><p>Define who you transact with and how values are classified.</p></div>
          <div><span>Inventory</span><strong>Items and stores</strong><p>Define what you buy, sell, move and value.</p></div>
          <div><span>Tax</span><strong>GST and TDS</strong><p>Define statutory rates and classifications used by transactions.</p></div>
        </div>
      </section>
      <section>
        <h2>2. Transactions create business activity</h2>
        <p>Sales, purchases, returns, orders, GRNs, stock movements and financial vouchers use your masters. Save transactions only in the intended company and financial year.</p>
        <div className="callout"><strong>Accounting and stock stay connected</strong><p>Where configured, Jhapu posts voucher and stock effects as part of the same transaction. If posting fails, the business document should not be partially saved.</p></div>
      </section>
      <section>
        <h2>3. Reports verify the result</h2>
        <p>Use Ledger, Day Book, Trial Balance, Profit &amp; Loss, Balance Sheet, stock reports, registers, GST and TDS reports to confirm entries. Filter by the correct dates, company and other available dimensions before comparing totals.</p>
      </section>
      <section>
        <h2>A simple daily control routine</h2>
        <ol>
          <li>Review unposted or incomplete work.</li>
          <li>Verify voucher totals and stock quantities.</li>
          <li>Check Day Book and relevant registers.</li>
          <li>Review bank clearing and reconciliation.</li>
          <li>Investigate exceptions before closing the period.</li>
        </ol>
      </section>
    </DocArticle>
  );
}
