import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Inventory" };

export default function InventoryPage() {
  return (
    <DocArticle activePath="/erp-basics/inventory" category="ERP Basics" title="Inventory" description="Manage stock-related operations through the built-in Inventory area for the selected company." next={{ title: "Company Specific", href: "/erp-basics/company-specific" }}>
      <section>
        <h2>Inventory workflows</h2>
        <p>Use Inventory for store setup, item movement and stock-related documents. The available workflows depend on the company’s configuration and enabled modules.</p>
        <div className="guide-links">
          <Link href="/erp-basics/inventory/stores">Manage Stores <span>→</span></Link>
        </div>
      </section>
    </DocArticle>
  );
}
