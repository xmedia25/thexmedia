import React from "react";
import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <div className="legal-page dark-mode">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="legal-content dark-mode">
              <h1 className="mb-4">Cookies Policy</h1>
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="legal-section mb-4">
                <h2>1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>2. Types of Cookies We Use</h2>
                
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                </p>
                
                <h3>Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website. This helps us improve our site and provide better services.
                </p>
                
                <h3>Marketing Cookies</h3>
                <p>
                  These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                </p>
                
                <h3>Preference Cookies</h3>
                <p>
                  These cookies remember your choices and preferences to provide you with a personalized experience.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>3. Specific Cookies We Use</h2>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Cookie Name</th>
                        <th>Purpose</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>session_id</td>
                        <td>Maintains your session while browsing</td>
                        <td>Session</td>
                      </tr>
                      <tr>
                        <td>user_preferences</td>
                        <td>Stores your preferences and settings</td>
                        <td>1 year</td>
                      </tr>
                      <tr>
                        <td>analytics_id</td>
                        <td>Helps us analyze website traffic</td>
                        <td>2 years</td>
                      </tr>
                      <tr>
                        <td>marketing_tracker</td>
                        <td>Tracks marketing campaign effectiveness</td>
                        <td>90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="legal-section mb-4">
                <h2>4. Third-Party Cookies</h2>
                <p>
                  We may use third-party services that place cookies on your device. These services include:
                </p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Marketing tools for campaign tracking</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie practices.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>5. Managing Your Cookie Preferences</h2>
                <p>You can control and manage cookies in several ways:</p>
                <ul>
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them</li>
                  <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                  <li><strong>Third-Party Opt-outs:</strong> Visit third-party websites to opt out of their cookies</li>
                </ul>
                <p>
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>6. Cookie Consent</h2>
                <p>
                  When you first visit our website, you&apos;ll see a cookie consent banner. By clicking &quot;Accept&quot; or continuing to use our site, you consent to our use of cookies as described in this policy.
                </p>
                <p>
                  You can change your cookie preferences at any time by clicking the cookie settings link in our footer.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>7. Updates to This Policy</h2>
                <p>
                  We may update this cookies policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>

              <div className="legal-section mb-4">
                <h2>8. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this policy, please contact us at{" "}
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
