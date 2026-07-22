import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "Sub Ledger" };

export default function SubLedgerPage() {
  return (
    <DocArticle
      activePath="/erp-basics/masters/sub-ledgers"
      category="ERP Basics · Masters"
      title="Create a Sub Ledger"
      description="Create a detailed account beneath a main ledger, with the same address, contact, tax and balance information where required."
      next={{ title: "Accounting", href: "/erp-basics/accounting" }}
    >
      <section>
        <h2>Select the Mother Account</h2>
        <p>A sub-ledger is similar to a main ledger, but it must be linked to a parent account. Select the appropriate <strong>Mother Account</strong> before entering the account and printable names.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/sub-ledger-create-details.png" alt="Jhapu New Sub-ledger Details form showing the Mother Account selector and account name fields" />
          <figcaption>Select the main ledger that will contain the new sub-ledger.</figcaption>
        </figure>
        <ul>
          <li><strong>Mother Account:</strong> the main ledger under which this sub-ledger is maintained.</li>
          <li><strong>Account Name and Printable Name:</strong> define the internal and document-facing account names.</li>
          <li><strong>Additional details:</strong> complete the address, contact, tax, opening-balance and credit-limit fields as appropriate.</li>
        </ul>
      </section>
      <section>
        <h2>Make the ledger available for bill adjustment</h2>
        <p>Enable <strong>Relate To Bill</strong> when this sub-ledger should be available in the Sale and Purchase <strong>Add/Less</strong> dropdown. Leave it unchecked for sub-ledgers that should not be selected there.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/sub-ledger-relate-to-bill.png" alt="Jhapu Sub-ledger form showing opening balance, remarks and the Relate To Bill checkbox" />
          <figcaption>Relate To Bill controls whether the sub-ledger appears in the Sale and Purchase Add/Less selection.</figcaption>
        </figure>
        <div className="callout"><strong>Before saving</strong><p>Confirm the Mother Account and Relate To Bill setting carefully. They determine the sub-ledger’s accounting hierarchy and transaction availability.</p></div>
      </section>
      <section>
        <h2>Import ledgers from Excel</h2>
        <p>The Excel Import workflow supports both main ledgers and sub-ledgers. Prepare the sheet using the displayed column layout, including the <strong>Main/Mother Account ID</strong> for each sub-ledger, then choose the file and select <strong>Upload Excel File</strong>.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/ledger-import-excel.png" alt="Jhapu Excel Import page showing the required main and sub-ledger spreadsheet columns and upload control" />
          <figcaption>Use the Main/Mother Account ID column to link imported sub-ledgers to their parent ledger.</figcaption>
        </figure>
        <div className="callout"><strong>Import check</strong><p>Ensure the Group ID, Sub-group ID and Main/Mother Account ID values are correct before uploading, so every imported sub-ledger is created under the intended main ledger.</p></div>
      </section>
    </DocArticle>
  );
}
