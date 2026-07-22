import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "Item" };

export default function ItemPage() {
  return (
    <DocArticle
      activePath="/erp-basics/masters/items"
      category="ERP Basics · Masters"
      title="Create an Item"
      description="Create the reusable item record that supports inventory, transactions, tax and optional company-specific workflows."
      next={{ title: "Accounting", href: "/erp-basics/accounting" }}
    >
      <section>
        <h2>Item details and classification</h2>
        <p>Start with the item’s basic identification, then select the category, subcategory and unit. The item can also be enabled for multiple companies or multiple categories when the business setup requires it.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/item-create-details.png" alt="Jhapu Create New Item form showing item classification, unit, rate, HSN and GST fields" />
          <figcaption>Item classification, unit, rate and tax selection fields.</figcaption>
        </figure>
        <ul>
          <li><strong>Item Category and Item Subcategory:</strong> classify the item for organised selection and reporting.</li>
          <li><strong>Unit and Unit Description:</strong> define the unit of measurement used in transactions.</li>
          <li><strong>Rate:</strong> record the item’s rate where applicable.</li>
          <li><strong>HSN, GST Rate and GST Category:</strong> select the applicable tax classification.</li>
        </ul>
      </section>
      <section>
        <h2>Additional fields, custom fields and images</h2>
        <p>Complete the remaining identifiers and optional fields, then add tenant-specific data or item images when these workflows are enabled.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/item-create-additional.png" alt="Jhapu Create New Item form showing custom fields, item image upload and save actions" />
          <figcaption>Additional item information, tenant-configured custom fields, image upload and save actions.</figcaption>
        </figure>
        <ul>
          <li><strong>EAN:</strong> record the barcode or EAN where it is used.</li>
          <li><strong>WDV and WDV Date:</strong> enter these values when relevant to the item workflow.</li>
          <li><strong>Custom Fields:</strong> fields configured specifically for the tenant appear here.</li>
          <li><strong>Item Images:</strong> upload JPEG, PNG, WebP or GIF images; the first image becomes the primary image automatically.</li>
        </ul>
        <div className="callout"><strong>Before saving</strong><p>Verify the category, unit and tax selections. These choices affect how the item is used in transactions and reports.</p></div>
      </section>
    </DocArticle>
  );
}
