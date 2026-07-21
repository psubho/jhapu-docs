import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Inventory" };

export default function InventoryPage() {
  return (
    <DocArticle activePath="/erp-basics/inventory" category="ERP Basics" title="Inventory" description="Manage stock-related operations through the built-in Inventory area for the selected company." next={{ title: "Company Specific", href: "/erp-basics/company-specific" }}>
      <section>
        <h2>Inventory workflows</h2>
        <p>Use Inventory for item movement and stock-related documents. The available workflows depend on the company’s configuration and enabled modules.</p>
        <div className="callout"><strong>Guides coming by workflow</strong><p>Individual pages for stock entries, movements and inventory controls will be added in this section.</p></div>
      </section>
    </DocArticle>
  );
}
