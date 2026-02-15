import PolicyPage from "@/components/PolicyPage";

const ShippingServicePolicy = () => (
  <PolicyPage title="Shipping & Service Policy">
    <p><strong className="text-foreground">Effective Date:</strong> February 13, 2026<br /><strong className="text-foreground">Last Updated:</strong> February 13, 2026</p>

    <p>ByteCrew offers flexible service delivery to fit your needs. Whether you prefer to bring your device to us, have us come to you, or handle everything remotely, we've got options. This policy explains how we deliver services, ship products, and keep you updated throughout the process.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Service Delivery Methods</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">On-Site Service (We Come to You)</h3>
    <p>Available for residential and business customers within our service area.</p>
    <p><strong className="text-foreground">What We Offer On-Site:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Computer and laptop setup and troubleshooting</li>
      <li>Network configuration and Wi-Fi setup</li>
      <li>Hardware installation (RAM, storage, peripherals)</li>
      <li>Software installation and updates</li>
      <li>Training and consultation</li>
    </ul>

    <p><strong className="text-foreground">How It Works:</strong></p>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Schedule an appointment via phone, email, or our website</li>
      <li>We'll provide an estimated arrival window (typically 2-4 hour blocks)</li>
      <li>Our technician arrives with tools and common parts</li>
      <li>Service is performed at your location</li>
      <li>Payment processed on-site or invoiced for business clients</li>
    </ol>

    <p><strong className="text-foreground">Scheduling:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Appointments typically available within <strong className="text-foreground">2-5 business days</strong></li>
      <li>Rush service available for urgent issues (additional fees apply)</li>
      <li>We'll confirm your appointment 24 hours in advance</li>
    </ul>

    <p><strong className="text-foreground">Service Area:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Within Lahore and surrounding areas</li>
      <li>Remote areas may incur travel fees (quoted upfront)</li>
    </ul>

    <p><strong className="text-foreground">Fees:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Standard service call: <strong className="text-foreground">PKR 2,000</strong> (may be waived if repair is completed)</li>
      <li>Travel outside standard area: <strong className="text-foreground">PKR 100 per additional kilometer</strong></li>
      <li>After-hours/weekend service: <strong className="text-foreground">1.5x standard rate</strong></li>
    </ul>

    <hr className="border-border" />

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Drop-Off Service (You Bring It to Us)</h3>
    <p>Our most popular option for repairs, upgrades, and custom builds.</p>

    <p><strong className="text-foreground">Drop-Off Hours:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
      <li>Saturday: 11:00 AM - 6:00 PM</li>
      <li>Sunday: Closed</li>
    </ul>

    <p><strong className="text-foreground">Process:</strong></p>
    <ol className="list-decimal pl-6 space-y-2">
      <li><strong className="text-foreground">Bring your device</strong> to our shop during business hours (appointment recommended but not required)</li>
      <li><strong className="text-foreground">Quick intake:</strong> We'll discuss the issue and provide a time estimate</li>
      <li><strong className="text-foreground">Diagnostic (if needed):</strong> We assess the problem and contact you with a quote</li>
      <li><strong className="text-foreground">Approval:</strong> You approve the quote and work begins</li>
      <li><strong className="text-foreground">Completion notice:</strong> We contact you when ready for pickup</li>
      <li><strong className="text-foreground">Pickup:</strong> Collect your device during business hours with payment</li>
    </ol>

    <p><strong className="text-foreground">Turnaround Times:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Simple repairs: <strong className="text-foreground">1-3 business days</strong></li>
      <li>Complex repairs: <strong className="text-foreground">3-7 business days</strong></li>
      <li>Hardware upgrades: <strong className="text-foreground">2-5 business days</strong></li>
      <li>Custom PC builds: <strong className="text-foreground">7-14 business days</strong> (depending on parts availability)</li>
      <li>Data recovery: <strong className="text-foreground">5-14 business days</strong> (varies by severity)</li>
    </ul>

    <p><strong className="text-foreground">Storage:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Completed devices held for <strong className="text-foreground">30 days</strong> free of charge</li>
      <li>After 30 days: <strong className="text-foreground">$10/day storage fee</strong></li>
      <li>Abandoned devices (90+ days): Disposed of per local regulations after attempted contact</li>
    </ul>

    <hr className="border-border" />

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Remote Support</h3>
    <p>For software issues, configuration, and web services that don't require physical access.</p>

    <p><strong className="text-foreground">Available Remote Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Software troubleshooting and virus removal</li>
      <li>Operating system installation and updates</li>
      <li>Performance optimization</li>
      <li>Web development consultation</li>
      <li>Website updates and management</li>
      <li>Technical support and training</li>
    </ul>

    <p><strong className="text-foreground">How Remote Sessions Work:</strong></p>
    <ol className="list-decimal pl-6 space-y-2">
      <li><strong className="text-foreground">Schedule</strong> a remote session or request immediate support</li>
      <li><strong className="text-foreground">Connect:</strong> We'll send you a secure link to grant access (we use TeamViewer, AnyDesk, or similar secure remote desktop software)</li>
      <li><strong className="text-foreground">Service:</strong> You can watch everything we do on your screen</li>
      <li><strong className="text-foreground">Complete:</strong> Session ends when issue is resolved; you maintain full control</li>
      <li><strong className="text-foreground">Follow-up:</strong> We send a summary of work performed</li>
    </ol>

    <p><strong className="text-foreground">Session Duration:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Billed in <strong className="text-foreground">30-minute increments</strong></li>
      <li>Most issues resolved within <strong className="text-foreground">1-2 hours</strong></li>
      <li>We'll provide a time estimate before starting</li>
    </ul>

    <p><strong className="text-foreground">Requirements:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Stable internet connection</li>
      <li>Ability to download/run remote access software</li>
      <li>Administrative access to your computer</li>
    </ul>

    <p><strong className="text-foreground">Security:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>All sessions are encrypted and password-protected</li>
      <li>We access only what's necessary to complete your request</li>
      <li>No data is stored on our systems unless needed for the service</li>
      <li>You can end the session at any time</li>
    </ul>

    <hr className="border-border" />

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mail-In Service</h3>
    <p>For customers outside our service area or those preferring to ship devices.</p>

    <p><strong className="text-foreground">Accepted Mail-In Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Laptop and PC repair</li>
      <li>Component testing and upgrades</li>
      <li>Data recovery</li>
      <li>Custom PC builds (we ship completed builds to you)</li>
    </ul>

    <p><strong className="text-foreground">Mail-In Process:</strong></p>
    <p><strong className="text-foreground">Step 1: Authorization</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Contact us to describe the issue and get authorization</li>
      <li>We'll provide a service ticket number and shipping instructions</li>
    </ul>
    <p><strong className="text-foreground">Step 2: Packing Your Device</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Back up your data before shipping (we're not responsible for data loss)</li>
      <li>Remove all personal accessories (power cords OK to include)</li>
      <li>Package securely in a sturdy box with ample padding</li>
      <li>Include a note with: your name, contact info, service ticket number, and description of the issue</li>
    </ul>
    <p><strong className="text-foreground">Step 3: Shipping to Us</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You're responsible for shipping costs to ByteCrew</li>
      <li>Use a trackable shipping method (UPS, FedEx, USPS with tracking)</li>
      <li>Insure valuable items—we're not liable for carrier damage</li>
      <li>Ship to: ByteCrew, Lahore, Pakistan (Contact us for specific address before shipping)</li>
    </ul>
    <p><strong className="text-foreground">Step 4: Service & Return</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We'll email you when device arrives</li>
      <li>Diagnosis completed within <strong className="text-foreground">2-3 business days</strong> of receipt</li>
      <li>You approve the quote; we complete the repair</li>
      <li>Standard return shipping included for warranty repairs (you pay shipping for paid repairs or if declining service)</li>
    </ul>

    <p><strong className="text-foreground">Return Shipping:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Free</strong> return shipping on warranty repairs</li>
      <li><strong className="text-foreground">PKR 1,500</strong> standard shipping on paid repairs (added to invoice)</li>
      <li>Expedited shipping available at your expense</li>
      <li>We pack items securely and insure shipments over $500</li>
    </ul>

    <p><strong className="text-foreground">Turnaround Including Shipping:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Total time: <strong className="text-foreground">7-14 business days</strong> (includes shipping both ways and service)</li>
      <li>We'll provide tracking info when device ships back to you</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Product Shipping (Parts, Custom Builds, Accessories)</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Shipping Methods</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Standard Ground:</strong> 5-7 business days</li>
      <li><strong className="text-foreground">Expedited:</strong> 2-3 business days</li>
      <li><strong className="text-foreground">Overnight:</strong> Next business day (order by 2 PM)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Shipping Costs</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Calculated based on weight, size, and destination</li>
      <li>Free standard shipping on orders over <strong className="text-foreground">PKR 50,000</strong></li>
      <li>Shipping costs displayed at checkout before you confirm</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Order Processing Time</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>In-stock items ship within <strong className="text-foreground">1-2 business days</strong></li>
      <li>Custom builds ship when complete (7-14 business days build time + shipping)</li>
      <li>Pre-orders ship within <strong className="text-foreground">3-5 business days</strong> of part arrival</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tracking and Delivery</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Tracking number provided via email once shipped</li>
      <li>Signature required for orders over <strong className="text-foreground">PKR 100,000</strong></li>
      <li>Packages typically delivered Monday-Saturday (carrier dependent)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Shipping Regions</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We ship throughout Pakistan</li>
      <li>International shipping available (contact us for quote)</li>
      <li>PO Boxes accepted for small items only</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Damaged Shipments</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Inspect packages upon delivery</li>
      <li>Report damage to carrier immediately (photos help)</li>
      <li>Contact us within <strong className="text-foreground">48 hours</strong> for replacement/resolution</li>
      <li>We'll file insurance claims and arrange replacements</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Estimated Timelines by Service</h2>
    <p>Here's a quick reference for typical turnaround times:</p>

    <p><strong className="text-foreground">Computer Repair Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Virus removal: 1-2 days</li>
      <li>Hardware repair: 3-5 days</li>
      <li>Screen replacement: 3-7 days</li>
      <li>Data recovery: 5-14 days</li>
      <li>Liquid damage: 5-10 days</li>
    </ul>

    <p><strong className="text-foreground">Upgrade Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>RAM upgrade: 1-2 days</li>
      <li>Storage upgrade: 1-3 days</li>
      <li>Graphics card installation: 1-2 days</li>
      <li>Complete overhaul: 3-7 days</li>
    </ul>

    <p><strong className="text-foreground">Custom Builds:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Parts ordering: 3-7 days</li>
      <li>Build and testing: 2-3 days</li>
      <li>Total: 7-14 days</li>
    </ul>

    <p><strong className="text-foreground">Web Development:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Simple site (1-5 pages): 2-3 weeks</li>
      <li>Business site (6-15 pages): 4-6 weeks</li>
      <li>Complex site/app: 8-12+ weeks</li>
      <li>Timelines vary based on scope and client feedback speed</li>
    </ul>

    <p><strong className="text-foreground">Web Management:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Content updates: 1-2 business days</li>
      <li>Security patches: Same day (for emergencies)</li>
      <li>Monthly maintenance: Scheduled on regular basis</li>
    </ul>

    <p className="italic">Note: These are estimates. We'll provide specific timelines for your project during consultation.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Service Delays</h2>
    <p>Sometimes delays happen. We'll keep you informed if:</p>

    <p><strong className="text-foreground">Parts Delays:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Manufacturer backorders or supply chain issues</li>
      <li>Rare/specialty components requiring special ordering</li>
      <li>We'll offer alternatives or estimated arrival dates</li>
    </ul>

    <p><strong className="text-foreground">Scope Changes:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You request additional work mid-service</li>
      <li>New issues discovered during repair</li>
      <li>We'll contact you for approval before proceeding</li>
    </ul>

    <p><strong className="text-foreground">External Factors:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Severe weather affecting shipping</li>
      <li>Manufacturer warranty claim processing times</li>
      <li>Shipping carrier delays</li>
    </ul>

    <p><strong className="text-foreground">Our Commitment:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We'll notify you immediately if timelines change</li>
      <li>You can cancel at any time if delays are unacceptable (see Refund Policy)</li>
      <li>Rush options available for urgent needs (additional fees apply)</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Communication and Updates</h2>
    <p>We keep you in the loop:</p>

    <p><strong className="text-foreground">Confirmation:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Appointment confirmations sent 24 hours prior</li>
      <li>Order confirmations sent immediately upon purchase</li>
    </ul>

    <p><strong className="text-foreground">Progress Updates:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Status updates when diagnostics are complete</li>
      <li>Notification when approval is needed</li>
      <li>Alert when service is complete and ready for pickup/shipping</li>
    </ul>

    <p><strong className="text-foreground">Preferred Contact Methods:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Email (primary)</li>
      <li>Phone/text (for urgent matters)</li>
      <li>You choose your preference during intake</li>
    </ul>

    <p><strong className="text-foreground">Business Hours:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
      <li>Saturday: 11:00 AM - 6:00 PM</li>
      <li>Sunday: Closed</li>
      <li>Emergency support available by appointment</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pickup and Device Collection</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Completed Repairs (Drop-Off Service)</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We'll notify you when ready via email or phone</li>
      <li>Pick up during business hours (no appointment needed)</li>
      <li>Bring your service ticket or ID</li>
      <li>Payment due at pickup (cash, card, or digital payment)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Uncollected Devices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">30 days free storage</strong> after completion notice</li>
      <li>After 30 days: <strong className="text-foreground">$10/day storage fee</strong> accrues</li>
      <li>After <strong className="text-foreground">90 days:</strong> Device considered abandoned; we may dispose of it per local laws after attempting final contact</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Address and Location</h3>
    <p>
      <strong className="text-foreground">ByteCrew</strong><br />
      Lahore, Pakistan<br />
      (Contact us for specific address and directions)
    </p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Customer Responsibilities</h2>
    <p>To ensure smooth service delivery:</p>

    <p><strong className="text-foreground">Before Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Back up important data (we're not responsible for data loss)</li>
      <li>Provide accurate contact information</li>
      <li>Describe issues clearly and completely</li>
      <li>Remove passwords/locks when possible (or provide them to us)</li>
    </ul>

    <p><strong className="text-foreground">During Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Respond promptly to requests for approval or information</li>
      <li>Be available during scheduled on-site appointments</li>
      <li>Review and approve estimates in a timely manner</li>
    </ul>

    <p><strong className="text-foreground">After Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Test your device promptly after pickup/delivery</li>
      <li>Report any issues within warranty period</li>
      <li>Provide feedback to help us improve</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Geographic Service Limitations</h2>

    <p><strong className="text-foreground">On-Site Service Area:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Within Lahore and surrounding areas</li>
      <li>Travel fees apply outside this range</li>
    </ul>

    <p><strong className="text-foreground">Drop-Off Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Available to anyone who can visit our physical location in Lahore</li>
    </ul>

    <p><strong className="text-foreground">Remote Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Available nationwide (internet required)</li>
      <li>International remote support on case-by-case basis</li>
    </ul>

    <p><strong className="text-foreground">Shipping:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Pakistan: All major cities</li>
      <li>International: Contact for availability and rates</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Related Policies</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Return & Refund Policy:</strong> Conditions for returns and refunds</li>
      <li><strong className="text-foreground">Terms & Conditions:</strong> Full service agreement and liability terms</li>
      <li><strong className="text-foreground">Privacy Policy:</strong> How we handle your data during service</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Questions?</h2>
    <p>
      <strong className="text-foreground">ByteCrew</strong><br />
      Email: bytecrew.team@gmail.com<br />
      Phone: +92 339-0053646
    </p>
    <p>We're happy to discuss service options, timelines, or shipping methods before you commit. Reach out anytime!</p>

    <hr className="border-border" />

    <p className="italic">This policy is subject to change with notice. Current version always available on our website. Questions about service delivery? Contact us—we're here to help.</p>
  </PolicyPage>
);

export default ShippingServicePolicy;
