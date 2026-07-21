import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = { title: "Administration" };

export default function AdministrationPage() {
  return (
    <DocArticle
      activePath="/administration"
      category="Manage"
      title="Administer your organisation"
      description="Keep company context, user access and configuration accurate without exposing sensitive platform information."
      next={{ title: "Troubleshooting", href: "/troubleshooting" }}
    >
      <section>
        <h2>Companies and financial years</h2>
        <p>Companies represent the organisation, head office or branches inside one tenant. Verify the active company and financial year before importing, posting or reporting data.</p>
      </section>
      <section>
        <h2>Users, roles and module access</h2>
        <ul>
          <li>Create an individual account for each person; do not share passwords.</li>
          <li>Grant only the modules and actions needed for that person’s work.</li>
          <li>Review access when responsibilities change or a user leaves.</li>
          <li>Use Change Password immediately if credentials may have been exposed.</li>
        </ul>
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
