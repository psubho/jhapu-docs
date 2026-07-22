import type { Metadata } from "next";
import { DocArticle } from "../components/DocArticle";

export const metadata: Metadata = {
  title: "Post-Save Actions",
  description: "Configure Jhapu ERP to send email or call a customer-managed API after a record is created or updated.",
};

export default function PostSaveActionsPage() {
  return (
    <DocArticle
      activePath="/post-save-actions"
      category="Customise"
      title="Post-Save Actions"
      description="Automatically send an email or call a secure API after an ERP record is created or updated. Delivery happens after the record has been saved successfully."
      next={{ title: "Module Builder", href: "/module-builder" }}
    >
      <section>
        <h2>What a post-save action does</h2>
        <p>A post-save action connects a module event to an external action. For example, Jhapu can email a customer after a Sale is created, notify an internal team after a Purchase is updated, or call a customer-managed SMS or WhatsApp API.</p>
        <div className="callout important">
          <strong>The saved record stays safe</strong>
          <p>Jhapu queues the action with the saved record and delivers it after the database transaction commits. A temporary email or API failure does not undo the ERP record.</p>
        </div>
        <div className="three-column">
          <div><span>Event</span><strong>After Create</strong><p>Runs only after a new record has been saved.</p></div>
          <div><span>Event</span><strong>After Update</strong><p>Runs only after changes to an existing record have been saved.</p></div>
          <div><span>Actions</span><strong>Email or API</strong><p>Use Amazon SES email or a secure HTTPS endpoint.</p></div>
        </div>
      </section>

      <section>
        <h2>Before you begin</h2>
        <ul>
          <li>You must sign in as an ERP Administrator.</li>
          <li>Lifecycle Actions must be included and enabled for the selected company.</li>
          <li>For email, the sender address must be verified in Amazon SES and the Jhapu server must have permission to send through SES.</li>
          <li>For an API action, obtain the HTTPS endpoint and authentication secret from the customer or service provider.</li>
        </ul>
        <div className="callout"><strong>SMS and WhatsApp remain customer-managed</strong><p>Jhapu does not manage telecom or WhatsApp template approval. Configure the provider outside Jhapu, then use an API action to send the required JSON to that provider or to the customer’s middleware.</p></div>
      </section>

      <section>
        <h2>Configure an action</h2>
        <ol className="steps">
          <li><span>01</span><div><strong>Select the company</strong><p>Open Modules → Post-save Actions, then choose the company whose records will trigger the action.</p></div></li>
          <li><span>02</span><div><strong>Create an integration</strong><p>Open Integrations and configure either Amazon SES email or an HTTP API. Save and keep the integration Active.</p></div></li>
          <li><span>03</span><div><strong>Create the lifecycle action</strong><p>Open Actions, choose the module, After Create or After Update, action type and matching integration.</p></div></li>
          <li><span>04</span><div><strong>Add recipients or a JSON body</strong><p>For email, enter fixed recipients or record fields containing email addresses. For API, provide a valid JSON object.</p></div></li>
          <li><span>05</span><div><strong>Add optional conditions</strong><p>Limit delivery to records that match your business rule, then choose attempts, initial delay and status.</p></div></li>
          <li><span>06</span><div><strong>Save and verify</strong><p>Create or update a test record, then check Delivery history for its status, attempts, provider ID or error.</p></div></li>
        </ol>
      </section>

      <section>
        <h2>Amazon SES email</h2>
        <p>Create an Amazon SES integration with the AWS region, verified sender email, sender name and optional reply-to address. An SES configuration set is optional and can be used for delivery, bounce or complaint tracking.</p>
        <p>An email action accepts fixed recipients and recipient fields. A recipient field is the exact module field name that contains an email address—for example, <code>Email</code> or <code>ContactEmail</code>. At least one fixed recipient or recipient field is required.</p>
        <div className="callout"><strong>AWS credentials are not entered on this page</strong><p>Jhapu uses the AWS permissions configured securely on the application server. Do not paste AWS access keys into the action, message or recipient fields.</p></div>
      </section>

      <section>
        <h2>HTTP API for SMS, WhatsApp or another service</h2>
        <p>The endpoint must use HTTPS. Jhapu blocks endpoints that resolve to private or reserved network addresses and does not follow redirects. The available authentication modes are HMAC SHA-256, bearer token, custom header and none.</p>
        <ul>
          <li><strong>HMAC SHA-256:</strong> Jhapu signs the exact JSON body and sends the signature in <code>X-Jhapu-Signature</code>.</li>
          <li><strong>Bearer token:</strong> the secret is sent in the standard Authorization header.</li>
          <li><strong>Custom header:</strong> choose the provider’s header name; Jhapu sends the stored secret as its value.</li>
          <li><strong>None:</strong> use only when the endpoint safely authenticates the request by another controlled method.</li>
        </ul>
        <p>Every API request also includes <code>X-Jhapu-Event-Id</code> and <code>X-Jhapu-Idempotency-Key</code>. The receiving service should use the idempotency key to avoid sending the same message twice when a delivery is retried.</p>
      </section>

      <section>
        <h2>Use record values in messages</h2>
        <p>Placeholders can be used in an email subject, email message and API JSON string values. Jhapu replaces them when the action is delivered.</p>
        <ul>
          <li><code>{"{{record.Email}}"}</code> — a value from the saved module record.</li>
          <li><code>{"{{record.CustomerName}}"}</code> — another record field, using its exact field name.</li>
          <li><code>{"{{context.recordId}}"}</code> — the saved record ID.</li>
          <li><code>{"{{event.type}}"}</code> — the lifecycle event, such as AFTER_CREATE.</li>
        </ul>
        <div className="callout"><strong>Missing values become blank</strong><p>Use the exact field name shown by the module definition. If a placeholder cannot be resolved, Jhapu replaces it with an empty value.</p></div>
      </section>

      <section>
        <h2>Conditions and delivery history</h2>
        <p>Conditions let an action run only for matching records. Available comparisons include equals, does not equal, list membership, numeric comparisons, contains, is empty and is not empty. When several conditions are present, the record must satisfy all of them.</p>
        <p>Use Delivery history to confirm whether a job is queued, delivered, retrying, failed or cancelled. The history also shows the attempt count, provider message ID and the latest error. Correct the integration or action configuration before retrying with another test record.</p>
      </section>

      <section>
        <h2>Common problems</h2>
        <ul>
          <li><strong>Delivery is paused:</strong> the feature is enabled but its configuration is not yet marked ready. Contact Jhapu support.</li>
          <li><strong>The page is read-only:</strong> Lifecycle Actions is not available for the company or subscription.</li>
          <li><strong>No valid email recipient:</strong> check the fixed address and confirm that each recipient field contains a valid email address.</li>
          <li><strong>SES delivery failed:</strong> verify the sender, AWS region, SES permissions and whether the SES account is still in sandbox mode.</li>
          <li><strong>API delivery failed:</strong> confirm HTTPS, public DNS, authentication details, expected JSON and the provider’s response status.</li>
        </ul>
      </section>
    </DocArticle>
  );
}
