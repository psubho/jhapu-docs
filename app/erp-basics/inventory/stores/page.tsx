import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "Manage Stores" };

export default function ManageStoresPage() {
  return (
    <DocArticle
      activePath="/erp-basics/inventory/stores"
      category="ERP Basics · Inventory"
      title="Manage Stores"
      description="Create and maintain stores, along with the ledger configuration used for inventory operations."
      next={{ title: "Company Specific", href: "/erp-basics/company-specific" }}
    >
      <section>
        <h2>View and manage stores</h2>
        <p>
          Manage Stores shows the stores configured for the selected company. Search by store name, export the list to Excel, or choose Create New to add a store.
        </p>
        <figure className="doc-screenshot">
          <img src="/screenshots/manage-stores.png" alt="Example Jhapu Manage Stores list showing a store and ledger configuration" />
          <figcaption>Example only: each store can be linked with the relevant inventory and opposite-account ledgers.</figcaption>
        </figure>
      </section>

      <section>
        <h2>Create a store</h2>
        <p>
          Choose Create New, enter the store name, then select the main and sub ledgers that will be associated with the store. Select the opposite posting ledger before saving.
        </p>
        <figure className="doc-screenshot">
          <img src="/screenshots/create-store.png" alt="Example Create New Store form with store name and ledger selections" />
          <figcaption>The Create New Store form lets you set the store name and its related ledger configuration.</figcaption>
        </figure>
      </section>

      <section>
        <h2>Store configuration</h2>
        <ul>
          <li><strong>Main Ledger and Sub Ledger:</strong> identify the accounting records associated with the store.</li>
          <li><strong>Opp Account:</strong> shows the opposite account used in the store’s inventory posting setup.</li>
          <li><strong>Create New, Edit and Delete:</strong> maintain store definitions as inventory operations change.</li>
        </ul>
        <div className="callout">
          <strong>Set up carefully</strong>
          <p>Review the ledger assignments before saving a store, as they are used for inventory-related accounting entries.</p>
        </div>
      </section>
    </DocArticle>
  );
}
