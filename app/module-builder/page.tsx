import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Module Builder" };

export default function ModuleBuilderPage() {
  return (
    <DocArticle
      activePath="/module-builder"
      category="Customise"
      title="Create a custom module"
      description="Use the Module Builder to describe, review and generate a tenant-owned ERP module without changing the standard modules."
      next={{ title: "Administration", href: "/administration" }}
    >
      <section>
        <h2>Before using the AI Module Assistant</h2>
        <p>Select the Tenant, Module Type and Company first. The assistant needs this context before it can prepare a useful definition proposal.</p>
        <div className="callout important"><strong>AI proposes; you approve</strong><p>The assistant fills a draft form. It does not save the definition, allocate a Module ID, change a tenant database or generate source files by itself.</p></div>
      </section>
      <section>
        <h2>Recommended creation flow</h2>
        <ol className="steps">
          <li><span>1</span><div><strong>Describe the module</strong><p>State the business purpose, header fields, line items, calculations, reports and expected posting behaviour.</p></div></li>
          <li><span>2</span><div><strong>Review every section</strong><p>Check columns, lookups, child modules, validations, form layout, voucher rules, stock rules and reports.</p></div></li>
          <li><span>3</span><div><strong>Save a draft</strong><p>Save work safely while the definition is still changing.</p></div></li>
          <li><span>4</span><div><strong>Generate from a version</strong><p>Generation uses an immutable definition version and records the resulting job and installed files.</p></div></li>
          <li><span>5</span><div><strong>Test in the tenant ERP</strong><p>Verify create, edit, delete, calculations, reports and posting before giving users access.</p></div></li>
        </ol>
      </section>
      <section>
        <h2>Important design rules</h2>
        <ul>
          <li>Keep menu text concise—20 characters or fewer.</li>
          <li>Place entire child sections deliberately in the parent form layout.</li>
          <li>Use structured lookup filters; never enter arbitrary SQL or executable code.</li>
          <li>Ensure debit and credit posting balances before generation.</li>
          <li>Use stable source identifiers so updates and deletes can reverse old posting safely.</li>
        </ul>
      </section>
    </DocArticle>
  );
}
