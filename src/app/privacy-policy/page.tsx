import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page dark-mode">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="legal-content dark-mode">
              <h1 className="mb-4">Privacy Policy</h1>
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="legal-section mb-4">
                <h2>1. Information We Collect</h2>
                <p>
                  The X Media collects information you provide directly to us, such as when you:
                </p>
                <ul>
                  <li>Fill out our contact forms</li>
                  <li>Request a quote or consultation</li>
                  <li>Sign up for our newsletter</li>
                  <li>Engage with our services</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, company information, and project details.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="legal-section mb-4">
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul>
                  <li>To trusted service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>

              <div className="legal-section mb-4">
                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our{" "}
                  <Link href="/cookies-policy" className="text-primary">Cookies Policy</Link>.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="legal-section mb-4">
                <h2>7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>8. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>9. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>11. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or our data practices, please contact us at{" "}
                  <Link href="/contact" className="text-primary">our contact page</Link>.
                </p>
              </div>

              <div className="text-center mt-5">
                <Link href="/contact" className="btn btn-primary">
                  Back to Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
