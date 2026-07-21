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
        <p>You need your organisation’s Tenant Code, your email address and password. The Tenant Code identifies the customer database; it is not the same as a company or branch.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/login-screen.png" alt="Jhapu ERP login form with Tenant Code, Email ID and Password fields" />
          <figcaption>Enter the Tenant Code, email address and password assigned to your account.</figcaption>
        </figure>
        <div className="callout important"><strong>Your first access details</strong><p>Your Tenant Code is provided when your trial or subscription is activated. When a subscription is created, Jhapu automatically creates the first Administrator user using the email address entered during subscription.</p></div>
      </section>
      <section>
        <h2>Sign in and select a company</h2>
        <p>After a successful sign-in, Jhapu opens the company-selection page. All companies are visible, but only companies for which your user account has access are enabled and can be selected.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-selection.png" alt="Example Jhapu company-selection page after sign-in" />
          <figcaption>Example only: select an enabled company in which you want to work before opening the ERP dashboard.</figcaption>
        </figure>
        <div className="callout"><strong>Default company for a new tenant</strong><p>During tenant setup, Jhapu creates one company by default. Additional companies can be created later and made available to the appropriate users.</p></div>
        <ol className="steps">
          <li><span>1</span><div><strong>Open the ERP login page</strong><p>Enter the Tenant Code, Email ID and password assigned to you.</p></div></li>
          <li><span>2</span><div><strong>Select your company or branch</strong><p>All companies are visible, but only the companies assigned to your user account are enabled for selection.</p></div></li>
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
