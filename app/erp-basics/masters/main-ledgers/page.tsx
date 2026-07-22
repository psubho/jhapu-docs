import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "Main Ledger" };

export default function MainLedgerPage() {
  return (
    <DocArticle
      activePath="/erp-basics/masters/main-ledgers"
      category="ERP Basics · Masters"
      title="Create a Main Ledger"
      description="Create the main account ledger and configure its grouping, contact information, tax details and balance settings."
      next={{ title: "Accounting", href: "/erp-basics/accounting" }}
    >
      <section>
        <h2>Ledger setup</h2>
        <p>Select the Group and Subgroup, then enter the account name and printable name. Enable <strong>Contains Sub Ledger</strong> when the main ledger will have sub-ledger records beneath it.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/main-ledger-create-details.png" alt="Jhapu Create New Main Ledger form showing group, subgroup, account name, printable name and address fields" />
          <figcaption>Set the ledger’s accounting group, name and whether it contains sub-ledgers.</figcaption>
        </figure>
        <ul>
          <li><strong>Group and Subgroup:</strong> classify the account in the accounting structure.</li>
          <li><strong>Account Name and Printable Name:</strong> define the internal and document-facing ledger names.</li>
          <li><strong>Address:</strong> record location information where it applies to the account.</li>
        </ul>
      </section>
      <section>
        <h2>Contact, tax and balance details</h2>
        <p>Complete the contact and statutory information that applies to the ledger. The form also supports opening-balance setup, credit limit, remarks and billing-related configuration.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/main-ledger-create-contact-tax.png" alt="Jhapu Create New Main Ledger form showing contact and tax fields" />
          <figcaption>Contact and statutory fields include phone numbers, email, PAN, GST and UIN.</figcaption>
        </figure>
        <ul>
          <li><strong>Contact:</strong> phone, mobile, alternate contact numbers and email addresses.</li>
          <li><strong>Tax:</strong> PAN, GST and UIN, along with relevant SEZ, composition-scheme and exporter options.</li>
          <li><strong>Balance:</strong> choose the opening balance type, enter the opening balance and credit limit, then save after review.</li>
        </ul>
        <div className="callout"><strong>Before saving</strong><p>Confirm the ledger group and any Contains Sub Ledger setting carefully. These choices affect accounting classification and how related account records are maintained.</p></div>
      </section>
      <section>
        <h2>Import ledgers from Excel</h2>
        <p>Use the Excel Import page to add main ledgers in bulk. Prepare the spreadsheet in the displayed column order, choose the completed Excel file, then select <strong>Upload Excel File</strong>.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/ledger-import-excel.png" alt="Jhapu Excel Import page showing the required main-ledger spreadsheet columns and upload control" />
          <figcaption>The import page shows the exact spreadsheet columns required for each main ledger.</figcaption>
        </figure>
        <ul>
          <li><strong>Columns A–F:</strong> Group ID, Sub-group ID, optional Main/Mother Account ID, Contains Sub Ledger, Account Name and Printable Name.</li>
          <li><strong>Columns G–K:</strong> Country, State, City, GST and PAN.</li>
          <li><strong>Contains Sub Ledger:</strong> enter <strong>YES</strong> or <strong>NO</strong>; leave the cell blank to use <strong>NO</strong>.</li>
        </ul>
      </section>
    </DocArticle>
  );
}
