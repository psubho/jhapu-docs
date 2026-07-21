import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "Company Management" };

export default function CompanyManagementPage() {
  return (
    <DocArticle
      activePath="/administration/companies"
      category="Administration"
      title="Company Management"
      description="Maintain companies, system configuration and account sub-groups with care, because these settings affect daily ERP work."
      next={{ title: "Module Management", href: "/administration/modules" }}
    >
      <section>
        <h2>Companies and system settings</h2>
        <p>The <strong>Companies</strong> menu is available only to administrator users. Companies represent the organisation, head office or branches inside one tenant. Verify the active company and financial year before importing, posting or reporting data.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/companies-menu.png" alt="Example Companies menu available to a Jhapu administrator" />
          <figcaption>Example only: the Companies menu is shown to administrators, not normal users.</figcaption>
        </figure>
        <ul>
          <li><strong>Create New Company:</strong> add a company for the tenant.</li>
          <li><strong>View/Search Companies:</strong> find an existing company and review or edit its details.</li>
          <li><strong>System Configuration:</strong> manage the tenant’s system configuration settings.</li>
          <li><strong>Account Sub Group:</strong> manage account sub-group definitions.</li>
        </ul>
      </section>
      <section>
        <h2>Edit company details</h2>
        <p>The Edit Company page contains several groups of information. The guide uses separate screenshots so each group remains readable. All values shown below are examples.</p>

        <h3>Primary Details</h3>
        <p>Maintain the company name, company code, company type and, where applicable, the mother company relationship.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-edit-primary-details.png" alt="Example Edit Company Primary Details section" />
          <figcaption>Primary Details identifies the company and its position in the company structure.</figcaption>
        </figure>

        <h3>Location &amp; Contact</h3>
        <p>Record the business address and location details used for company information and operational documents.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-edit-location-contact.png" alt="Example Edit Company Location and Contact section" />
          <figcaption>Location &amp; Contact includes address, country, state, city and PIN code.</figcaption>
        </figure>

        <h3>Statutory &amp; Financial</h3>
        <p>Enter applicable registration details such as GST, PAN, VAT, BRN and IEC carefully. These values affect statutory documents and reports.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-edit-statutory-financial.png" alt="Example Edit Company Statutory and Financial section" />
          <figcaption>Statutory &amp; Financial holds the company’s tax and registration details.</figcaption>
        </figure>

        <h3>Settings</h3>
        <p>Set the company’s transaction period, optional logo, stock-entry preference, inventory availability and Cash at User option.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-edit-settings.png" alt="Example Edit Company Settings section" />
          <figcaption>Settings controls operational options that apply to the company.</figcaption>
        </figure>

        <h3>Voucher Footers &amp; Bank Details</h3>
        <p>Configure the text shown on cash and bank voucher printouts. Keep this wording accurate and review it after any business or banking change.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/company-edit-voucher-footers.png" alt="Example Edit Company Voucher Footers and Bank Details section" />
          <figcaption>Voucher footers let the company maintain print content for voucher types.</figcaption>
        </figure>
      </section>
      <section>
        <h2>Configuration discipline</h2>
        <div className="three-column">
          <div><span>Before change</span><strong>Understand impact</strong><p>Identify affected companies, users, transactions and reports.</p></div>
          <div><span>During change</span><strong>Keep scope narrow</strong><p>Change one setting at a time and record the reason.</p></div>
          <div><span>After change</span><strong>Verify behaviour</strong><p>Test with the intended role and review resulting reports.</p></div>
        </div>
      </section>
      <section>
        <h2>Sensitive information</h2>
        <p>Database passwords, API secrets, SMTP credentials, GST provider credentials and signing keys must never be placed in screenshots, support messages or ordinary application logs.</p>
      </section>
    </DocArticle>
  );
}
