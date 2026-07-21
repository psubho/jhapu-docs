import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Troubleshooting" };

export default function TroubleshootingPage() {
  return (
    <DocArticle
      activePath="/troubleshooting"
      category="Manage"
      title="Troubleshoot common issues"
      description="Use these checks to identify the problem without changing data unnecessarily."
      next={{ title: "Release notes", href: "/release-notes" }}
    >
      <section>
        <h2>Login is rejected</h2>
        <ol>
          <li>Confirm the Tenant Code belongs to the intended organisation.</li>
          <li>Check the User ID carefully; it may differ from an email address.</li>
          <li>Confirm Caps Lock and keyboard layout before retrying.</li>
          <li>Ask an administrator whether the user is active and has company access.</li>
          <li>Use the approved password reset process instead of creating a shared account.</li>
        </ol>
      </section>
      <section>
        <h2>A menu or page is unavailable</h2>
        <p>Confirm the selected company, user access level and module permission. If a custom module was newly generated, verify that it is installed for the tenant and enabled in local permissions.</p>
      </section>
      <section>
        <h2>Report totals look unexpected</h2>
        <ul>
          <li>Recheck date range, company and financial year.</li>
          <li>Clear unintended filters and compare with the relevant register.</li>
          <li>Open the source vouchers and confirm debit, credit, tax and stock values.</li>
          <li>Record the exact filter values and document IDs before contacting support.</li>
        </ul>
      </section>
      <section>
        <h2>Information to provide support</h2>
        <div className="callout"><strong>Useful and safe context</strong><p>Provide Tenant Code, company name, module, record ID, approximate time, expected result, actual result and a redacted screenshot. Never send passwords, tokens or database credentials.</p></div>
      </section>
    </DocArticle>
  );
}
