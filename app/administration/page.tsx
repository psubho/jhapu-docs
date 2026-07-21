import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Administration" };

export default function AdministrationPage() {
  return (
    <DocArticle
      activePath="/administration"
      category="Manage"
      title="Administer your organisation"
      description="Use these focused administrator guides to keep companies, user access and custom modules correctly managed."
      next={{ title: "Troubleshooting", href: "/troubleshooting" }}
    >
      <section>
        <h2>Choose an administrator task</h2>
        <p>Each guide is intentionally short and focused, so an ERP help link can send an administrator directly to the relevant task.</p>
        <div className="admin-guide-grid">
          <Link href="/administration/users">
            <span>User Management</span>
            <strong>Users, company access and permissions</strong>
            <p>Create user accounts, grant access to companies, and manage module-level Create, Edit, Delete and View permissions.</p>
            <em>Open User Management →</em>
          </Link>
          <Link href="/administration/companies">
            <span>Company Management</span>
            <strong>Companies and configuration</strong>
            <p>Create or maintain companies, manage system configuration, and keep account sub-groups organised.</p>
            <em>Open Company Management →</em>
          </Link>
          <Link href="/administration/modules">
            <span>Module Management</span>
            <strong>Custom modules and access</strong>
            <p>Build tenant-specific modules and understand how they are made available through company-level permissions.</p>
            <em>Open Module Management →</em>
          </Link>
        </div>
      </section>
    </DocArticle>
  );
}
