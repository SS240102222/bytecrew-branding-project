import PolicyPage from "@/components/PolicyPage";

const TermsConditions = () => (
  <PolicyPage title="Terms & Conditions">
    <p><strong className="text-foreground">Effective Date:</strong> February 13, 2026<br /><strong className="text-foreground">Last Updated:</strong> February 13, 2026</p>

    <p>Welcome to ByteCrew! These Terms & Conditions govern your use of our services and establish the agreement between you (the customer) and ByteCrew. By using our services—whether computer repair, custom PC builds, or web development—you agree to these terms.</p>

    <p>Please read them carefully. They're written in plain language to help you understand your rights and responsibilities when working with us.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
    <p>By engaging ByteCrew for any service, you confirm that:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You're at least <strong className="text-foreground">18 years old</strong> or have parental/guardian consent</li>
      <li>You have the authority to enter into this agreement</li>
      <li>You've read and agree to these Terms & Conditions</li>
      <li>You also agree to our Privacy Policy, Refund Policy, and Shipping/Service Policy</li>
    </ul>
    <p>If you don't agree with these terms, please don't use our services.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Provided</h2>
    <p>ByteCrew offers the following services:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Computer Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Laptop and desktop repair</li>
      <li>Hardware diagnostics and troubleshooting</li>
      <li>Component upgrades (RAM, storage, graphics cards, etc.)</li>
      <li>Custom PC builds</li>
      <li>Operating system installation and configuration</li>
      <li>Software installation and optimization</li>
      <li>Virus and malware removal</li>
      <li>Data backup and recovery</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Web Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Website design and development</li>
      <li>Front-end development and user interface design</li>
      <li>Website consultation and strategy</li>
      <li>Website management and maintenance</li>
      <li>Content updates and technical support</li>
      <li>Hosting setup and configuration</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Service Delivery Formats</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">On-site service</strong> at your location</li>
      <li><strong className="text-foreground">Drop-off service</strong> at our shop</li>
      <li><strong className="text-foreground">Remote support</strong> via secure connection</li>
      <li><strong className="text-foreground">Mail-in service</strong> for devices shipped to us</li>
    </ul>
    <p>We reserve the right to modify, suspend, or discontinue any service at any time with notice.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Service Scope and Estimates</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quotes and Estimates</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Estimates are provided in good faith based on initial assessment</li>
      <li>Final costs may vary if additional issues are discovered</li>
      <li>We'll contact you for approval before performing additional work</li>
      <li>Diagnostic fees may apply to determine scope of repair</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Changes to Service Scope</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You may request changes at any time</li>
      <li>Changes may affect timeline and cost</li>
      <li>We'll provide updated estimates for your approval</li>
      <li>Web development changes follow the change request process outlined in project contracts</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Right to Refuse Service</h3>
    <p>We reserve the right to refuse or cancel service if:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>The device contains illegal content or materials</li>
      <li>The requested service violates laws or regulations</li>
      <li>Safety concerns prevent us from working on the device</li>
      <li>Payment issues arise</li>
      <li>Customer behavior is abusive or threatening to our staff</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Customer Responsibilities</h2>
    <p>To ensure we can serve you well, you agree to:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Backup</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Back up all important data</strong> before service—we're not responsible for data loss</li>
      <li>While we take precautions, repairs and upgrades carry inherent risk of data loss</li>
      <li>We strongly recommend external backups before any hardware or software service</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Accurate Information</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Provide truthful and complete information about issues</li>
      <li>Disclose relevant history (prior repairs, damage, modifications)</li>
      <li>Provide necessary passwords, PINs, or access credentials</li>
      <li>Keep contact information current</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Device Preparation</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Remove personal accessories not needed for service</li>
      <li>Disable security features when possible (or provide credentials)</li>
      <li>For laptops: include power adapter if issue relates to charging</li>
      <li>For web projects: provide content, images, and credentials as needed</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Timely Communication</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Respond to approval requests and questions promptly</li>
      <li>Delays in client communication may extend project timelines</li>
      <li>Devices abandoned beyond storage periods may be disposed of (see Shipping/Service Policy)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Payment Obligations</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Pay all invoices within stated terms</li>
      <li>Provide valid payment information</li>
      <li>Notify us immediately of billing errors</li>
      <li>Disputed charges don't excuse payment obligations</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Payment Terms</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pricing</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Prices listed on our website and quotes are in USD</li>
      <li>Prices subject to change without notice (quoted prices honored for 30 days)</li>
      <li>Taxes calculated based on service location and applicable rates</li>
      <li>Additional fees (rush service, travel, shipping) disclosed upfront</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Payment Methods</h3>
    <p>We accept:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Credit and debit cards (Visa, MasterCard, American Express, Discover)</li>
      <li>PayPal and digital payment platforms</li>
      <li>Cash (for in-person transactions)</li>
      <li>Business checks (with prior approval)</li>
      <li>Net-30 terms (for established business accounts)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Payment Schedule</h3>
    <p><strong className="text-foreground">Computer Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Payment due upon completion (drop-off and on-site)</li>
      <li>Diagnostic fees may be charged upfront</li>
      <li>Payment required before device release</li>
    </ul>
    <p><strong className="text-foreground">Custom PC Builds:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">50% deposit</strong> required when parts are ordered</li>
      <li><strong className="text-foreground">Remaining 50%</strong> due upon completion before pickup/shipping</li>
    </ul>
    <p><strong className="text-foreground">Web Development:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">50% deposit</strong> to begin project</li>
      <li><strong className="text-foreground">50% upon completion</strong> and before site goes live</li>
      <li>Monthly management billed at beginning of each month</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Late Payments</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Late fees of <strong className="text-foreground">1.5% per month</strong> (18% annual) on overdue balances</li>
      <li>Services suspended for accounts over 30 days past due</li>
      <li>Collection costs added to unpaid balances</li>
      <li>We reserve the right to repossess devices for non-payment</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Warranties and Guarantees</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Workmanship Warranty</h3>
    <p><strong className="text-foreground">Repair Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">90-day warranty</strong> on labor</li>
      <li>Warranty covers defects in our workmanship only</li>
      <li>Does not cover new issues or unrelated problems</li>
    </ul>
    <p><strong className="text-foreground">Custom PC Builds:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">1-year labor warranty</strong> on builds</li>
      <li>We'll troubleshoot and resolve build-related issues at no charge</li>
      <li>Does not cover damage, misuse, or user modifications</li>
    </ul>
    <p><strong className="text-foreground">Web Development:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">90-day bug fix warranty</strong> on custom code</li>
      <li>Covers functionality errors and broken features</li>
      <li>Does not cover new features, design changes, or hosting issues</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Component Warranties</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Parts and components covered by manufacturer warranties</li>
      <li>Warranty periods vary (1-10 years depending on component)</li>
      <li>We facilitate warranty claims but manufacturers handle approval</li>
      <li>Warranty work may require return shipping to manufacturer</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Warranty Exclusions</h3>
    <p>Warranties do NOT cover:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Damage from accidents, spills, drops, or physical abuse</li>
      <li>Viruses, malware, or security breaches</li>
      <li>Unauthorized repairs or modifications after our service</li>
      <li>Software conflicts from third-party installations</li>
      <li>Normal wear and tear</li>
      <li>Force majeure events (acts of God, natural disasters)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Warranty Claims</h3>
    <p>To claim warranty service:</p>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Contact us within the warranty period</li>
      <li>Describe the issue clearly</li>
      <li>Bring device in for evaluation (or ship for mail-in service)</li>
      <li>If covered, we'll repair at no charge</li>
      <li>If not covered, we'll provide a quote for paid repair</li>
    </ol>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Loss</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">We are not responsible for data loss</strong> under any circumstances</li>
      <li>Always back up data before service</li>
      <li>Data recovery is a separate service with no guarantee of success</li>
      <li>We'll make reasonable efforts to preserve data but cannot guarantee it</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Device Value</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Our liability for damage to your device is limited to the <strong className="text-foreground">lesser of</strong>: repair cost or current market value</li>
      <li>We're not responsible for sentimental or special value</li>
      <li>Maximum liability: <strong className="text-foreground">$2,500</strong> per incident</li>
      <li>Insure high-value devices before shipping to us</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Indirect Damages</h3>
    <p>We're not liable for:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Lost profits or business income</li>
      <li>Data or productivity losses</li>
      <li>Consequential or incidental damages</li>
      <li>Third-party claims</li>
      <li>Damages exceeding the amount you paid for the service</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Third-Party Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We're not responsible for third-party software, services, or hosting</li>
      <li>Issues with manufacturers, ISPs, or hosting providers are outside our control</li>
      <li>We'll assist where possible but cannot guarantee third-party resolution</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Best Efforts</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We provide services using reasonable skill and care</li>
      <li>We don't guarantee specific results or outcomes</li>
      <li>Some issues may be unrepairable or beyond our technical capability</li>
      <li>No refund obligation if we make good-faith effort but cannot resolve issue (except as stated in Refund Policy)</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Intellectual Property</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Your Content</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You retain ownership of all content you provide (text, images, logos, data)</li>
      <li>You grant us license to use your content solely to complete your project</li>
      <li>You represent that you have rights to all content provided</li>
      <li>You're responsible for any copyright or trademark infringement</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Work Product</h3>
    <p><strong className="text-foreground">Web Development:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You own the final website and custom code upon full payment</li>
      <li>You may use, modify, and transfer the website</li>
      <li>We retain right to showcase work in portfolio (with your permission)</li>
      <li>Third-party components (themes, plugins) remain subject to their licenses</li>
    </ul>
    <p><strong className="text-foreground">Pre-existing Materials:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Templates, frameworks, and tools we use remain our property</li>
      <li>You receive a license to use them as part of your project</li>
      <li>You cannot resell or redistribute our proprietary tools or templates</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Confidential Information</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We keep your business information confidential</li>
      <li>You agree to keep our proprietary processes and pricing confidential</li>
      <li>Confidentiality survives termination of service</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Cancellation and Termination</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">You Can Cancel:</h3>
    <p><strong className="text-foreground">Before Service Begins:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Full refund (minus diagnostic fees if incurred)</li>
      <li>Custom builds: see Refund Policy for deposit rules</li>
    </ul>
    <p><strong className="text-foreground">During Service:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You may cancel ongoing work</li>
      <li>Payment due for work already completed</li>
      <li>Parts ordered but not installed may incur restocking fees</li>
    </ul>
    <p><strong className="text-foreground">Web Projects:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Deposits non-refundable once work begins</li>
      <li>Payment due for completed milestones</li>
      <li>Termination handled per project contract</li>
    </ul>
    <p><strong className="text-foreground">Monthly Services:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Cancel anytime with <strong className="text-foreground">14 days notice</strong></li>
      <li>Access continues through end of billing period</li>
      <li>No refund for current month</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">We May Cancel:</h3>
    <p><strong className="text-foreground">Immediate Termination:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Violation of these terms</li>
      <li>Abusive or threatening behavior toward staff</li>
      <li>Illegal activity or content</li>
      <li>Non-payment or fraud</li>
      <li>Device poses safety risk</li>
    </ul>
    <p><strong className="text-foreground">Termination Process:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We'll notify you of termination</li>
      <li>You must collect device/materials within 14 days</li>
      <li>Payment still due for services rendered</li>
      <li>Refunds handled per Refund Policy</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Privacy and Data Security</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Collection</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We collect information necessary to provide services</li>
      <li>See our Privacy Policy for complete details</li>
      <li>We don't sell or share your personal information</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Remote Access</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Remote sessions require your explicit permission</li>
      <li>All connections are encrypted</li>
      <li>We access only what's necessary for service</li>
      <li>You can terminate sessions at any time</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Device Security</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Devices stored in secure, monitored facilities</li>
      <li>Access limited to authorized technicians</li>
      <li>We respect your privacy and don't browse personal files</li>
      <li>Temporary files and diagnostic data removed after service</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Website Data</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Development sites password-protected until launch</li>
      <li>Client credentials stored securely</li>
      <li>We follow industry-standard security practices</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Dispute Resolution</h2>
    <p>We prefer to resolve issues directly:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Contact Us First</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Email: bytecrew.team@gmail.com</li>
      <li>Phone: +92 339-0053646</li>
      <li>We'll respond within <strong className="text-foreground">1-2 business days</strong></li>
      <li>Most disputes resolved through good-faith discussion</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Escalation Process</h3>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Initial customer service contact</li>
      <li>Manager review if unresolved</li>
      <li>Owner review for final internal resolution</li>
    </ol>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mediation</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>If direct resolution fails, we agree to mediation before litigation</li>
      <li>Mediation costs split equally</li>
      <li>Conducted in Lahore, Pakistan</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Arbitration and Legal</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Disputes not resolved through mediation subject to binding arbitration</li>
      <li>Governed by laws of Pakistan</li>
      <li>Venue: Lahore, Pakistan</li>
      <li>Each party responsible for own legal fees unless otherwise awarded</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Class Action Waiver</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Disputes handled individually, not as class actions</li>
      <li>You waive rights to participate in class action lawsuits</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Force Majeure</h2>
    <p>We're not liable for delays or failures due to circumstances beyond reasonable control:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Natural disasters (fires, floods, earthquakes)</li>
      <li>Pandemics or public health emergencies</li>
      <li>Government actions or regulations</li>
      <li>Strikes or labor disputes</li>
      <li>Supplier failures or parts shortages</li>
      <li>Utility failures or telecommunications outages</li>
    </ul>
    <p>We'll make reasonable efforts to mitigate impacts and keep you informed.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Miscellaneous Provisions</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Entire Agreement</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>These terms, along with our other policies, constitute the complete agreement</li>
      <li>Supersedes all prior verbal or written agreements</li>
      <li>Project-specific contracts supplement but don't replace these terms</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Modifications</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We may update these terms periodically</li>
      <li>Changes posted on website with "Last Updated" date</li>
      <li>Continued use after changes constitutes acceptance</li>
      <li>Material changes communicated via email</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Severability</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>If any provision is found unenforceable, others remain valid</li>
      <li>Invalid provisions replaced with enforceable equivalent</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">No Waiver</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Failure to enforce any term doesn't waive future enforcement</li>
      <li>All rights and remedies remain available</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Assignment</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You cannot transfer your rights or obligations without our consent</li>
      <li>We may assign this agreement to successors or related entities</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Survival</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Terms that naturally survive termination remain in effect (warranties, liability limitations, intellectual property, dispute resolution)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Headings</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Section headings for convenience only</li>
      <li>Don't limit or affect interpretation of terms</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">14. Contact Information</h2>
    <p>Questions about these Terms & Conditions?</p>
    <p>
      <strong className="text-foreground">ByteCrew</strong><br />
      Lahore, Pakistan<br />
      Email: bytecrew.team@gmail.com<br />
      Phone: +92 339-0053646
    </p>
    <p><strong className="text-foreground">Business Hours:</strong><br />
      Monday - Friday: 10:00 AM - 8:00 PM<br />
      Saturday: 11:00 AM - 6:00 PM<br />
      Sunday: Closed
    </p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">15. Acknowledgment</h2>
    <p>By using ByteCrew's services, you acknowledge that:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You've read and understood these Terms & Conditions</li>
      <li>You agree to be bound by these terms</li>
      <li>You've had opportunity to ask questions or seek legal advice</li>
      <li>You accept the risks and limitations outlined above</li>
    </ul>
    <p>We appreciate your business and look forward to serving you!</p>

    <hr className="border-border" />

    <p><strong className="text-foreground">Related Policies:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Privacy Policy</li>
      <li>Return & Refund Policy</li>
      <li>Shipping & Service Policy</li>
    </ul>

    <hr className="border-border" />

    <p className="italic">These Terms & Conditions apply to all services provided by ByteCrew. For project-specific terms, please refer to your service agreement or contract. Last updated: February 13, 2026.</p>
  </PolicyPage>
);

export default TermsConditions;
