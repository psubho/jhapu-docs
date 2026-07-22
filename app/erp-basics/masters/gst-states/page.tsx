import type { Metadata } from "next";
import { DocArticle } from "../../../components/DocArticle";

export const metadata: Metadata = { title: "GST State" };

export default function GstStatesPage() {
  return (
    <DocArticle
      activePath="/erp-basics/masters/gst-states"
      category="ERP Basics · Masters"
      title="Manage GST States"
      description="Maintain the public state and Union Territory names and the GST codes used in statutory transactions and reports."
      next={{ title: "Accounting", href: "/erp-basics/accounting" }}
    >
      <section>
        <h2>GST State list</h2>
        <p>The list displays each State Name with its GST Code. Search by state name, export the visible data to Excel, or use the edit and delete actions to maintain records. Select <strong>Create New</strong> to add a state entry when required.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/gst-state-list.png" alt="Jhapu Manage GST States list showing public state names, GST codes and actions" />
          <figcaption>The GST State master provides the state names and statutory codes used across the ERP.</figcaption>
        </figure>
      </section>
    </DocArticle>
  );
}
