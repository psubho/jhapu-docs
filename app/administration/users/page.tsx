import type { Metadata } from "next";
import { DocArticle } from "../../components/DocArticle";

export const metadata: Metadata = { title: "User Management" };

export default function UserManagementPage() {
  return (
    <DocArticle
      activePath="/administration/users"
      category="Administration"
      title="User Management"
      description="Create individual accounts, enable the right companies, and grant only the access each person needs."
      next={{ title: "Company Management", href: "/administration/companies" }}
    >
      <section>
        <h2>System User menu</h2>
        <p>The <strong>System User</strong> menu is available only to administrator users. It is the central place for managing users and their access.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/administrator-menu.png" alt="Example System User menu available to a Jhapu administrator" />
          <figcaption>Example only: the System User menu is shown to administrators, not normal users.</figcaption>
        </figure>
        <ul>
          <li><strong>Create New User:</strong> create an individual account for a new user.</li>
          <li><strong>View/Search User:</strong> find an existing user and review or edit their details.</li>
          <li><strong>Manage User Roles:</strong> manage roles and the permissions associated with each role.</li>
          <li><strong>Assign Companies to User:</strong> control which companies are enabled for each user.</li>
          <li><strong>User Activity/Log:</strong> review recorded user activity and log entries.</li>
        </ul>
      </section>
      <section>
        <h2>Users and company access</h2>
        <p>Users can see all companies in the tenant, but only companies assigned to them remain enabled for their work. A new tenant normally starts with one company created during setup.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/user-company-access.png" alt="Example User Company Access screen with Cash at User ledger configuration" />
          <figcaption>Example only: enable a company for the selected user, then configure the Cash at User ledgers when required.</figcaption>
        </figure>
        <ul>
          <li>Use an individual account for each person; do not share passwords.</li>
          <li>Assign only the companies required for that person’s work.</li>
          <li>Review access when responsibilities change or a user leaves.</li>
          <li>Use Change Password immediately if credentials may have been exposed.</li>
        </ul>
      </section>
      <section>
        <h2>Review user activity and snapshots</h2>
        <p>User Activity/Log records activity with its timestamp, user ID, description and IP address. Use it to understand what action was performed and when.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/user-activity-log.png" alt="Example User Activity Log with an activity snapshot displayed after selecting View" />
          <figcaption>Example only: clicking View opens the saved snapshot for that activity, so an administrator can review the record state associated with the log entry.</figcaption>
        </figure>
        <div className="callout"><strong>Use View to inspect the recorded state</strong><p>Click <strong>View</strong> beside a log entry to display its snapshot. The snapshot helps an administrator investigate the state that was captured for that recorded activity.</p></div>
      </section>
      <section>
        <h2>Cash at User for voucher posting</h2>
        <p>Cash at User lets an administrator select the ledgers a user will use when posting vouchers. This makes it possible to keep a user’s cash posting connected to the appropriate main ledger and sub-ledger.</p>
        <ol className="steps">
          <li><span>01</span><div><strong>Select the user</strong><p>Choose the user whose company access and voucher posting setup you want to manage.</p></div></li>
          <li><span>02</span><div><strong>Enable the company</strong><p>Select the company in which the user should be allowed to work.</p></div></li>
          <li><span>03</span><div><strong>Configure Cash at User</strong><p>Select the Cash at User main ledger and the appropriate Cash at User sub-ledger.</p></div></li>
          <li><span>04</span><div><strong>Save and verify</strong><p>Save the configuration, then verify voucher posting with the intended user and company.</p></div></li>
        </ol>
      </section>
      <section>
        <h2>Managing detailed module permissions</h2>
        <p>In User Role Management, select the user whose permissions you want to review. The permission grid lets an administrator manage Create, Edit, Delete and View access for individual modules.</p>
        <figure className="doc-screenshot">
          <img src="/screenshots/user-role-management.png" alt="Example Jhapu User Role Management permission grid" />
          <figcaption>Example only: select a user, optionally select a company, then review module-level Create, Edit, Delete and View access.</figcaption>
        </figure>
        <div className="callout important"><strong>When to select a company</strong><p>Company selection is optional for the core built-in modules. If no company is selected, Jhapu shows those core modules. Select a company when managing permissions for custom modules created for that company.</p></div>
      </section>
    </DocArticle>
  );
}
