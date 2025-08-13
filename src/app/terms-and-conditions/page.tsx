import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="legal-page dark-mode">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="legal-content dark-mode">
              <h1 className="mb-4">Terms and Conditions</h1>
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="legal-section mb-4">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using The X Media&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>2. Services Description</h2>
                <p>
                  The X Media provides digital marketing services including but not limited to:
                </p>
                <ul>
                  <li>AI Content Creation</li>
                  <li>SEO & Local Marketing</li>
                  <li>Business Consultancy</li>
                  <li>Performance Marketing</li>
                  <li>Web Development</li>
                  <li>Content Strategy</li>
                </ul>
              </div>

              <div className="legal-section mb-4">
                <h2>3. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use our services for lawful purposes only</li>
                  <li>Not interfere with the proper working of our services</li>
                </ul>
              </div>

              <div className="legal-section mb-4">
                <h2>4. Payment Terms</h2>
                <p>
                  Payment terms are as agreed upon in individual service agreements. All fees are non-refundable unless otherwise specified. Late payments may result in service suspension.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>5. Intellectual Property</h2>
                <p>
                  All content, designs, and materials created by The X Media remain our property until full payment is received. You retain rights to your original content and brand materials.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>6. Limitation of Liability</h2>
                <p>
                  The X Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>7. Termination</h2>
                <p>
                  Either party may terminate services with written notice. Upon termination, you remain responsible for any outstanding payments and we will deliver any completed work.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which The X Media operates.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>10. Contact Information</h2>
                <p>
                  For questions about these terms, please contact us at{" "}
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
