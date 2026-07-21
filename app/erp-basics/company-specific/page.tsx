import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Company Specific" };

export default function CompanySpecificPage() {
  return (
    <DocArticle activePath="/erp-basics/company-specific" category="ERP Basics" title="Company Specific" description="Access the custom modules created for the selected company." next={{ title: "Reports", href: "/erp-basics/reports" }}>
      <section>
        <h2>Company-specific custom modules</h2>
        <p>When custom modules are created and enabled for a company, they appear under the Company Specific menu. The modules shown depend on the company and the permissions assigned to the user.</p>
        <div className="callout important"><strong>Need a new workflow?</strong><p>Custom modules are created and modified with Module Builder. Access must then be reviewed for the relevant company and user roles.</p></div>
      </section>
      <section>
        <h2>Continue with Module Builder</h2>
        <p>See the dedicated guide for the custom-module creation workflow.</p>
        <Link className="secondary-action inline-action" href="/module-builder">Open Module Builder guide →</Link>
      </section>
    </DocArticle>
  );
}
