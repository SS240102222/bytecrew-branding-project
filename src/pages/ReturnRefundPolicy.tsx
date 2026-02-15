import PolicyPage from "@/components/PolicyPage";

const ReturnRefundPolicy = () => (
  <PolicyPage title="Return & Refund Policy">
    <p><strong className="text-foreground">Effective Date:</strong> February 13, 2026<br /><strong className="text-foreground">Last Updated:</strong> February 13, 2026</p>

    <p>At ByteCrew, we stand behind the quality of our work. This policy outlines how refunds and returns work across our different service categories. We've designed these terms to be fair to both you and our business while accounting for the unique nature of tech services and custom builds.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Computer Repair & Upgrade Services</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Refund Eligibility</h3>
    <p><strong className="text-foreground">You're eligible for a full refund if:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We cannot diagnose or resolve the issue you brought to us</li>
      <li>The agreed-upon repair or upgrade cannot be completed</li>
      <li>You cancel the service <em>before</em> we begin work on your device</li>
    </ul>
    <p><strong className="text-foreground">You're eligible for a partial refund if:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>The repair fails within our warranty period (see Warranty section below)</li>
      <li>Work performed doesn't match the service agreement</li>
      <li>Parts installed are defective or incorrect</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Refund Timeframe</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Request a refund within <strong className="text-foreground">30 days</strong> of service completion</li>
      <li>Warranty-related issues can be reported during the applicable warranty period</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Non-Refundable Scenarios</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Diagnostic fees (if repair is declined after diagnosis)</li>
      <li>Services already completed to your satisfaction</li>
      <li>Issues caused by misuse, accidents, or unauthorized modifications after service</li>
      <li>Software installations where licenses have been activated</li>
      <li>Labor costs for services you approved and we successfully completed</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to Request a Refund</h3>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Contact us at bytecrew.team@gmail.com or call us within the refund window</li>
      <li>Provide your service order number and explain the issue</li>
      <li>We'll arrange to inspect the device if needed (remote or in-person)</li>
      <li>Approved refunds are processed within <strong className="text-foreground">7-10 business days</strong> to your original payment method</li>
    </ol>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Custom PC Builds</h2>
    <p>Custom PC builds are made to your specifications, so different refund terms apply:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Before Build Starts</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Full refund</strong> available if you cancel before we order parts</li>
      <li><strong className="text-foreground">90% refund</strong> (10% restocking fee) if parts have been ordered but build hasn't started</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">During Build Process</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">No refunds</strong> once assembly begins, but you can request modifications to the build plan (additional costs may apply for new parts)</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">After Build Completion</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">No refunds</strong> on completed custom builds, as they're built to your unique specifications</li>
      <li><strong className="text-foreground">Hardware warranty</strong> applies to defective components (see Warranty section)</li>
      <li>We'll repair or replace defective parts at no charge during warranty period</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Build Cancellation by ByteCrew</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Full refund</strong> if we determine we cannot complete your build as specified</li>
      <li>No cancellation fees if ByteCrew initiates the cancellation</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Parts Returns</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Unopened, unused parts may be returned within <strong className="text-foreground">14 days</strong> of delivery for a refund minus restocking fees (typically 15-20%)</li>
      <li>Opened components must be exchanged directly with manufacturers under warranty</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Web Development Services</h2>
    <p>Web projects involve time, expertise, and custom work, so these terms reflect that reality:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Deposit and Payment Structure</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Most web projects require a <strong className="text-foreground">50% deposit</strong> to begin work</li>
      <li>Deposits are <strong className="text-foreground">non-refundable</strong> once development starts, as they compensate for work already performed</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Refund Eligibility</h3>
    <p><strong className="text-foreground">You may receive a refund if:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We fail to deliver the agreed-upon project scope</li>
      <li>The website doesn't meet the functional requirements outlined in our contract</li>
      <li>We cancel the project or miss agreed deadlines without justification</li>
    </ul>
    <p><strong className="text-foreground">Partial refunds calculated as:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Total project cost minus completed work (based on project milestones)</li>
      <li>Determined on a case-by-case basis with transparent breakdown</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Refund Timeframe</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Refund requests must be made within <strong className="text-foreground">30 days</strong> of final project delivery</li>
      <li>Requests after this period will be evaluated on a case-by-case basis</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Non-Refundable Scenarios</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Change of mind after project begins</li>
      <li>Delays caused by client (late feedback, missing content, unclear requirements)</li>
      <li>Third-party costs (domain registration, hosting, premium plugins/themes, stock images)</li>
      <li>Completed milestones you've already approved</li>
      <li>Monthly management fees for work already performed</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ongoing Management Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Billed monthly and can be cancelled anytime</li>
      <li>Cancellations apply to <em>future</em> billing cycles (no refund for current month)</li>
      <li>Must provide <strong className="text-foreground">14 days notice</strong> before cancellation takes effect</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Hardware Purchases & Parts</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">New Parts and Components</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">30-day return window</strong> from date of purchase for unused, unopened items</li>
      <li>Must include original packaging and all accessories</li>
      <li><strong className="text-foreground">15% restocking fee</strong> applies to opened items in resalable condition</li>
      <li>Defective parts exchanged at no cost within manufacturer warranty period</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Used or Refurbished Parts</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">14-day return window</strong> for testing</li>
      <li>Must be in same condition as received</li>
      <li><strong className="text-foreground">No refunds</strong> on parts marked "as-is" or "for parts/repair"</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Software Licenses</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">No refunds</strong> once license keys are provided or activated</li>
      <li>This includes operating systems, productivity software, and digital downloads</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Warranty Coverage</h2>
    <p>Our warranty terms vary by service type:</p>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Repair Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">90-day warranty</strong> on labor for repair work</li>
      <li>Replacement parts covered by manufacturer warranty (typically 1-3 years)</li>
      <li>Warranty covers defects and failures related to our work only</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Custom PC Builds</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">1-year labor warranty</strong> on builds</li>
      <li>Individual components covered by manufacturer warranties (varies by part: 1-10 years)</li>
      <li>We'll troubleshoot and coordinate warranty claims at no charge during warranty period</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Web Development</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">90-day bug fix warranty</strong> on custom code after project delivery</li>
      <li>Covers functionality bugs and errors, not feature additions or design changes</li>
      <li>Hosting issues covered separately under management agreements</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Warranty Exclusions</h3>
    <p>Warranties do not cover:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Damage from accidents, spills, power surges, or physical abuse</li>
      <li>Viruses, malware, or issues from unsafe browsing/downloads</li>
      <li>Problems caused by unauthorized repairs or modifications</li>
      <li>Normal wear and tear</li>
      <li>Software conflicts from third-party installations</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Refund Process</h2>
    <p><strong className="text-foreground">Standard Timeline:</strong></p>
    <ol className="list-decimal pl-6 space-y-2">
      <li>Refund request received and reviewed: <strong className="text-foreground">1-3 business days</strong></li>
      <li>Device inspection (if required): <strong className="text-foreground">3-5 business days</strong></li>
      <li>Refund approval decision: <strong className="text-foreground">1-2 business days</strong></li>
      <li>Refund processing: <strong className="text-foreground">7-10 business days</strong> to original payment method</li>
    </ol>
    <p><strong className="text-foreground">Methods:</strong></p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Original payment method (credit card, debit card, PayPal)</li>
      <li>Store credit if preferred (no expiration date)</li>
    </ul>
    <p><strong className="text-foreground">Note:</strong> Bank processing times vary. Credit card refunds typically appear in 5-10 business days; ACH/bank transfers may take up to 14 business days.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Exchanges and Replacements</h2>
    <p>Instead of a refund, you may prefer:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong className="text-foreground">Exchange</strong> a defective part for the same model</li>
      <li><strong className="text-foreground">Upgrade</strong> to a better component (pay the difference)</li>
      <li><strong className="text-foreground">Store credit</strong> for future services or parts purchases</li>
      <li><strong className="text-foreground">Re-service</strong> if the original repair wasn't successful</li>
    </ul>
    <p>Exchanges often process faster than refunds and don't incur restocking fees.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Special Circumstances</h2>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mail-In Repairs</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Return shipping costs covered by ByteCrew for warranty repairs</li>
      <li>Customer responsible for return shipping if requesting a refund for non-warranty reasons</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Remote Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Refunds available if we cannot resolve your issue remotely</li>
      <li>Session fees may be non-refundable if the issue was resolved or if problem was outside our scope</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emergency/Rush Services</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Rush fees are non-refundable even if you later cancel the service</li>
      <li>Standard refund policy applies to the service itself</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Disputes and Exceptions</h2>
    <p>We handle each situation individually:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>If you're unhappy with a refund decision, request to speak with a manager</li>
      <li>Refunds outside these terms may be granted at ByteCrew's discretion</li>
      <li>We'll always work with you to find a fair solution</li>
    </ul>
    <p>Good communication prevents most issues. If something's not right, let us know immediately—we're here to help.</p>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Related Policies</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>See our <strong className="text-foreground">Shipping & Service Policy</strong> for timelines and delivery methods</li>
      <li>Review our <strong className="text-foreground">Terms & Conditions</strong> for cancellation and payment terms</li>
      <li>Check our <strong className="text-foreground">Privacy Policy</strong> for data handling during service delivery</li>
    </ul>

    <hr className="border-border" />

    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
    <p>Questions about refunds or returns?</p>
    <p>
      <strong className="text-foreground">ByteCrew</strong><br />
      Email: bytecrew.team@gmail.com<br />
      Phone: +92 339-0053646<br />
      Hours: Monday - Friday: 10:00 AM - 8:00 PM | Saturday: 11:00 AM - 6:00 PM
    </p>
    <p>We typically respond to refund requests within one business day.</p>

    <hr className="border-border" />

    <p className="italic">This policy applies to all services and products sold by ByteCrew. Terms may be modified with notice. Your continued use of our services indicates acceptance of updated terms.</p>
  </PolicyPage>
);

export default ReturnRefundPolicy;
