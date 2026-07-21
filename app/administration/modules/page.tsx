import type { Metadata } from "next";
import Link from "next/link";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Module Management" };

export default function ModuleManagementPage() {
  return (
    <DocArticle
      activePath="/administration/modules"
      category="Administration"
      title="Module Management"
      description="Create tenant-specific modules thoughtfully, then make them available to the right users and companies."
      next={{ title: "Troubleshooting", href: "/troubleshooting" }}
    >
      <section>
        <h2>Custom modules are company-aware</h2>
        <p>Core built-in modules can be managed without selecting a company in User Role Management. Custom modules are different: select the relevant company before managing user permissions for its custom modules.</p>
        <p>Modules can be created and modified using the <Link href="/module-builder">Module Builder</Link> tool. Please see the Module Builder documentation for details.</p>
        <div className="callout important"><strong>Access follows the company</strong><p>After a custom module is added, review both company assignment and the user’s module permissions. Users should receive only the access their role requires.</p></div>
      </section>
      <section>
        <h2>View and search modules</h2>
        <p>After a custom module is created, it appears in the Modules list together with the other modules available to the tenant. Use the filters to find a module by its ID, name or type.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/module-list.png" alt="Example View and Search Modules list showing module type, company and menu visibility" />
          <figcaption>Example only: the list shows each module’s ID, module name, menu text, type, company and whether it is displayed in the menu.</figcaption>
        </figure>
        <ul>
          <li><strong>Module Type:</strong> identifies whether the module is a Master or Transaction module.</li>
          <li><strong>Company:</strong> shows the company context for the module.</li>
          <li><strong>Show In Menu:</strong> indicates whether the module is visible in the ERP menu.</li>
        </ul>
      </section>
      <section>
        <h2>Build and publish carefully</h2>
        <ol className="steps">
          <li><span>01</span><div><strong>Define the requirement</strong><p>Decide what business information the module should capture and which company needs it.</p></div></li>
          <li><span>02</span><div><strong>Build the module</strong><p>Use Module Builder to design the data, form and print requirements.</p></div></li>
          <li><span>03</span><div><strong>Review user access</strong><p>Select the company in User Role Management, then grant only the required permissions.</p></div></li>
          <li><span>04</span><div><strong>Test with the intended role</strong><p>Verify the module behaves correctly for a user who has the intended level of access.</p></div></li>
        </ol>
      </section>
      <section>
        <h2>Continue with Module Builder</h2>
        <p>The dedicated Module Builder guide explains the design and generation workflow in more detail.</p>
        <Link className="secondary-action inline-action" href="/module-builder">Open Module Builder guide →</Link>
      </section>
    </DocArticle>
  );
}
