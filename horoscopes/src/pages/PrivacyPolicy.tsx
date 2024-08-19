
import { Helmet } from 'react-helmet';
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Helmet>
        <title>Privacy & Policy | horozest.com</title>
        <meta
          name="description"
          content={`Our privacy policy rules. | horozest.com`}
        />
      </Helmet>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          <strong>Effective Date:</strong> 8/19/2024
        </p>
      </div>

      <main className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Personal Data Collection
          </h2>
          <p className="text-gray-700">
            We do not collect any personal data from users of our website. You
            can browse our website without providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Data Usage</h2>
          <p className="text-gray-700">
            As we do not collect any personal data, we do not use your
            information for any purposes such as analytics, marketing, or
            personalization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Cookies and Tracking
          </h2>
          <p className="text-gray-700">
            Our website does not use cookies or any other tracking technologies.
            However, we do display advertisements through Google Ads, which may
            use cookies or similar tracking technologies to serve personalized
            ads. Please refer to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              Google’s Privacy Policy
            </a>{" "}
            for more details on how Google Ads collects and uses data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Third-Party Data Sharing
          </h2>
          <p className="text-gray-700">
            We do not share any personal data with third parties, as we do not
            collect any. However, third-party services like Google Ads may
            collect information about your visit to our website in order to
            serve ads.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. User Rights</h2>
          <p className="text-gray-700">
            Since we do not collect any personal data, there are no data rights
            that need to be managed. If this policy changes, we will update this
            page to reflect the new practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Policy Changes</h2>
          <p className="text-gray-700">
            We reserve the right to update this privacy policy at any time. When
            we do, we will revise the "Effective Date" at the top of this page.
            We encourage you to review this policy periodically to stay informed
            about how we are protecting your privacy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Contact Information
          </h2>
          <p className="text-gray-700">
            For privacy-related inquiries, please refer to the updated
            information on this page, as we do not offer direct contact options
            regarding privacy issues.
          </p>
        </section>
      </main>
    </div>
  );
}

export default PrivacyPolicy
