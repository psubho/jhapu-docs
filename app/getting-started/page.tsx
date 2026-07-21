import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <DocArticle
      activePath="/getting-started"
      category="Start here"
      title="Getting started with Jhapu"
      description="Sign in to the correct tenant, choose your working company and prepare the ERP for everyday use."
      next={{ title: "ERP basics", href: "/erp-basics" }}
    >
      <section>
        <h2>Before you sign in</h2>
        <p>You need your organisation’s Tenant Code, your User ID and password. The Tenant Code identifies the customer database; it is not the same as a company or branch.</p>
        <div className="callout important"><strong>Keep the Tenant Code safe</strong><p>Use only the code supplied by your Jhapu administrator. Never enter database names, server addresses or database credentials in the browser.</p></div>
      </section>
      <section>
        <h2>Sign in and select a company</h2>
        <ol className="steps">
          <li><span>1</span><div><strong>Open the ERP login page</strong><p>Enter the Tenant Code, User ID and password assigned to you.</p></div></li>
          <li><span>2</span><div><strong>Select your company or branch</strong><p>Jhapu shows only companies available to your user account.</p></div></li>
          <li><span>3</span><div><strong>Confirm the financial year</strong><p>Choose the year in which transactions should be created and reports should be viewed.</p></div></li>
          <li><span>4</span><div><strong>Check the dashboard</strong><p>Confirm that your name, company and access level are correct before entering data.</p></div></li>
        </ol>
      </section>
      <section>
        <h2>Recommended first-time setup</h2>
        <ul>
          <li>Create or verify companies, stores and financial years.</li>
          <li>Create users and give access only to required modules.</li>
          <li>Review GST states, GST rates, HSN/SAC and TDS sections.</li>
          <li>Prepare Ledger, Item, Unit, Category and Store masters.</li>
          <li>Enter opening balances and verify the Trial Balance.</li>
        </ul>
      </section>
    </DocArticle>
  );
}
