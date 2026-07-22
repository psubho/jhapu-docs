import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "Voucher" };

export default function CashReceiptVoucherPage() {
  return (
    <DocArticle
      activePath="/erp-basics/accounting/cash-receipts"
      category="ERP Basics · Accounting"
      title="Vouchers"
      description="Create, manage and print all kinds of vouchers for the selected company."
      next={{ title: "Inventory", href: "/erp-basics/inventory" }}
    >
      <section>
        <h2>Cash Receipt Voucher (CRV)</h2>
        <p>Set the voucher date and select the cash account receiving the amount. Add a narration when needed, then enter the credit ledgers that explain the receipt.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/cash-receipt-create.png" alt="Jhapu New Cash Receipt form with date, cash account and credit ledger entry row" />
          <figcaption>Create a Cash Receipt Voucher by selecting the cash account and adding the credit-ledger entries.</figcaption>
        </figure>
        <ul>
          <li><strong>Date and Cash Account:</strong> required voucher details. The closing balance is displayed for reference.</li>
          <li><strong>Credit Ledgers:</strong> choose a ledger and, where applicable, its sub-ledger, then enter the receipt amount.</li>
          <li><strong>Cost Centre, GST and Tag:</strong> record these optional dimensions when the transaction requires them.</li>
          <li><strong>Add Row / Delete Last:</strong> use these actions to manage multiple credit entries before creating the voucher.</li>
        </ul>
        <div className="callout"><strong>Before creating</strong><p>Check that Total Credit and Cash Account Debit agree and the Diff is zero. This confirms that the voucher is balanced.</p></div>
      </section>
      <section>
        <h2>Bank Receipt Voucher (BRV)</h2>
        <p>A Bank Receipt Voucher follows the same receipt-entry pattern, with the bank account receiving the amount. Use the <strong>Chq</strong> action on a voucher line to record cheque information when the receipt is made by cheque.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/bank-receipt-cheque-details.png" alt="Jhapu Bank Receipt Voucher form with the Cheque Details dialog open" />
          <figcaption>The Cheque Details dialog records the cheque number, cheque date and bank name for the selected voucher line.</figcaption>
        </figure>
        <ul>
          <li><strong>Cheque No.:</strong> enter the cheque reference.</li>
          <li><strong>Cheque Date:</strong> record the date printed on the cheque.</li>
          <li><strong>Bank Name:</strong> record the issuing bank, then select <strong>Apply Cheque Details</strong>.</li>
        </ul>
      </section>
      <section>
        <h2>Journal Voucher</h2>
        <p>Use a Journal Voucher for accounting adjustments and transfers that do not involve direct cash or bank receipt/payment. Enter the date and narration, then add debit and credit ledger lines for the adjustment.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/journal-voucher-create.png" alt="Example Jhapu New Journal Voucher form with debit and credit ledger lines" />
          <figcaption>Example only: create a Journal Voucher by entering balanced debit and credit lines.</figcaption>
        </figure>
        <ul>
          <li><strong>Dr/Cr:</strong> choose whether each voucher line is a debit or credit.</li>
          <li><strong>Ledger and Sub Ledger:</strong> select the accounts affected by the journal entry.</li>
          <li><strong>Amount and dimensions:</strong> enter the amount and add a cost centre, GST or tag where applicable.</li>
          <li><strong>Add Row / Delete Last:</strong> manage the voucher lines before creating the voucher.</li>
        </ul>
        <div className="callout"><strong>Before creating</strong><p>Total Debit and Total Credit must be equal and the Diff must be zero.</p></div>
      </section>
      <section>
        <h2>View and manage Cash Receipt Vouchers</h2>
        <p>The Cash Receipt Voucher list shows voucher lines within the selected date range. Filter by ledger, export the results to Excel, create a new voucher or use the row actions to work with an existing voucher.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/cash-receipt-list.png" alt="Example Jhapu Manage Cash Receipt Vouchers list with date filters, ledger filter and row actions" />
          <figcaption>Example only: use the CRV list to search, export and manage cash receipt vouchers.</figcaption>
        </figure>
        <ul>
          <li><strong>Date and Ledger filters:</strong> narrow the voucher list before selecting Search.</li>
          <li><strong>Excel:</strong> export the filtered voucher information.</li>
          <li><strong>Actions:</strong> open the voucher details, print, edit or delete the voucher as permitted.</li>
        </ul>
      </section>
      <section>
        <h2>Print a voucher</h2>
        <p>The print action is common to vouchers. It opens a voucher-ready document with the company heading, voucher number, account entries, total and narration for printing or sharing.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/cash-receipt-print.png" alt="Example printed Cash Receipt Voucher showing voucher number, account entries, total and narration" />
          <figcaption>Example only: the printable voucher shows the accounting entries and total in document form.</figcaption>
        </figure>
      </section>
    </DocArticle>
  );
}
