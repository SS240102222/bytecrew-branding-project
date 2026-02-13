import PolicyPage from "@/components/PolicyPage";

const PrivacyPolicy = () => (
  <PolicyPage title="Privacy Policy">
    <p><strong className="text-foreground">Effective Date:</strong> February 13, 2026<br /><strong className="text-foreground">Last Updated:</strong> February 13, 2026</p>

    <p>At ByteCrew, we take your privacy seriously. This policy explains how we collect, use, protect, and handle your personal information when you use our computer repair, custom PC building, and web development services.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
    <p>We collect information in several ways depending on how you interact with our services:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information You Provide Directly</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and mailing address when you request a quote, schedule a service, or contact us</li>
      <li><strong className="text-foreground">Service Details:</strong> Information about your device, technical issues, service preferences, and project requirements</li>
      <li><strong className="text-foreground">Payment Information:</strong> Billing details processed securely through our payment processors (we don't store complete credit card numbers)</li>
      <li><strong className="text-foreground">Account Information:</strong> Username, password, and preferences if you create an account on our website</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information Collected During Service Delivery</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Device Information:</strong> Hardware specifications, serial numbers, operating system details, and installed software when servicing your computer or laptop</li>
      <li><strong className="text-foreground">Remote Session Data:</strong> IP address, session logs, and system information during remote support sessions</li>
      <li><strong className="text-foreground">Diagnostic Data:</strong> Error logs, system performance data, and technical diagnostics necessary to resolve your issue</li>
      <li><strong className="text-foreground">Project Files:</strong> Website content, images, code, and other materials you provide for web development projects</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Website Usage:</strong> IP address, browser type, pages visited, and time spent on our site through cookies and analytics tools</li>
      <li><strong className="text-foreground">Communication Records:</strong> Records of email, phone, and chat conversations for service quality and support purposes</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
    <p>We use your information to:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Deliver Services:</strong> Repair your devices, build custom PCs, develop websites, and provide technical support</li>
      <li><strong className="text-foreground">Communicate:</strong> Send service updates, appointment confirmations, project progress reports, and respond to your inquiries</li>
      <li><strong className="text-foreground">Process Payments:</strong> Complete transactions and maintain billing records</li>
      <li><strong className="text-foreground">Improve Services:</strong> Analyze service performance, identify trends, and enhance customer experience</li>
      <li><strong className="text-foreground">Comply with Legal Obligations:</strong> Maintain records as required by law and respond to legal requests</li>
      <li><strong className="text-foreground">Marketing (with consent):</strong> Send occasional updates about new services or special offers (you can opt out anytime)</li>
    </ul>
    <p>We will never sell your personal information to third parties.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Protect Your Information</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Security Measures</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Encrypted Connections:</strong> All data transmitted through our website uses SSL/TLS encryption</li>
      <li><strong className="text-foreground">Secure Remote Access:</strong> Remote support sessions use encrypted, industry-standard tools with your explicit permission</li>
      <li><strong className="text-foreground">Physical Security:</strong> Devices in our shop are stored in secure, monitored areas with restricted access</li>
      <li><strong className="text-foreground">Data Access Controls:</strong> Only authorized technicians access customer information on a need-to-know basis</li>
      <li><strong className="text-foreground">Regular Backups:</strong> Secure backups with encryption to prevent data loss</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Handling During Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Device Privacy:</strong> We access only the files and settings necessary to complete your requested service</li>
      <li><strong className="text-foreground">Confidential Data:</strong> We don't browse your personal files, photos, or documents unless required for troubleshooting</li>
      <li><strong className="text-foreground">Data Removal:</strong> We securely wipe diagnostic tools and temporary files from your device after service completion</li>
      <li><strong className="text-foreground">Web Project Data:</strong> Development files are stored on secure servers and removed after project delivery (unless ongoing management is contracted)</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Sharing and Disclosure</h2>
    <p>We may share your information only in these limited circumstances:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Service Providers:</strong> Trusted partners who assist with payment processing, shipping, or cloud hosting (all bound by confidentiality agreements)</li>
      <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
      <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (you'll be notified of any changes)</li>
      <li><strong className="text-foreground">With Your Consent:</strong> Any other sharing will only occur with your explicit permission</li>
    </ul>
    <p>We do not share customer data with advertisers or marketing companies.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights and Choices</h2>
    <p>You have control over your personal information:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Access and Correction</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Request a copy of the personal information we hold about you</li>
      <li>Update or correct inaccurate information by contacting us</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Deletion</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Request deletion of your personal data (subject to legal retention requirements)</li>
      <li>Note: Service records may be retained for warranty, tax, and legal purposes</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing Opt-Out</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Unsubscribe from promotional emails using the link in any marketing message</li>
      <li>Contact us to opt out of other marketing communications</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cookie Controls</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Adjust your browser settings to block or delete cookies</li>
      <li>Note: Some website features may not function properly without cookies</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Remote Access</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You maintain full control during remote sessions and can terminate access at any time</li>
      <li>We always request explicit permission before initiating remote support</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Retention</h2>
    <p>We retain your information for as long as necessary:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Active Customers:</strong> While you use our services and for reasonable follow-up periods</li>
      <li><strong className="text-foreground">Service Records:</strong> Up to 7 years for warranty claims, tax records, and legal compliance</li>
      <li><strong className="text-foreground">Marketing Data:</strong> Until you opt out or request deletion</li>
      <li><strong className="text-foreground">Completed Projects:</strong> Web development files removed 30 days after final delivery (unless management services continue)</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cookies and Tracking Technologies</h2>
    <p>Our website uses cookies to:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Remember your preferences and settings</li>
      <li>Analyze website traffic and usage patterns</li>
      <li>Enable chat support and contact forms</li>
      <li>Improve website performance</li>
    </ul>
    <p>You can control cookies through your browser settings. For more details, see our Cookie Policy.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Links</h2>
    <p>Our website may contain links to third-party sites (software vendors, payment processors, etc.). We're not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children's Privacy</h2>
    <p>ByteCrew services are intended for individuals 18 years and older. We don't knowingly collect information from children under 18. If we discover we've inadvertently collected such data, we'll delete it immediately.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
    <p>We may update this policy periodically to reflect changes in our practices or legal requirements. We'll notify you of significant changes by:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Posting the updated policy on our website with a new "Last Updated" date</li>
      <li>Sending an email to registered customers for material changes</li>
    </ul>
    <p>Continued use of our services after changes constitutes acceptance of the updated policy.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
    <p>Questions or concerns about your privacy? We're here to help.</p>
    <p>
      <strong className="text-foreground">ByteCrew</strong><br />
      Email: privacy@bytecrew.com<br />
      Phone: [Your Phone Number]<br />
      Address: [Your Business Address]
    </p>
    <p>For data access, correction, or deletion requests, please contact us using the information above. We'll respond within 30 days.</p>

    <hr className="border-border" />

    <p className="italic">This privacy policy applies to all services provided by ByteCrew, including computer repair, custom PC builds, hardware upgrades, and web development services.</p>
  </PolicyPage>
);

export default PrivacyPolicy;
