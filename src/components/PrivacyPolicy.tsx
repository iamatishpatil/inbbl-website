import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, UserCheck, AlertCircle } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased selection:bg-inbbl-purple selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-black transition bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-2">
            <InbblLogo variant="mark" size="xs" className="w-6 h-7" />
            <span className="font-extrabold text-black text-sm">INBBL</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* Document Title Header */}
        <div className="space-y-4 border-b border-stone-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-inbbl-purple/10 text-inbbl-purple text-xs font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>Digital Personal Data Protection Act (DPDP Act, 2023) Notice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Privacy Policy
          </h1>
          <p className="text-sm text-stone-500 font-medium">
            Friend Universe • INBBL (India Bubble) Platform
          </p>
        </div>

        {/* 1. Who we are and what this covers */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            1. Who we are and what this covers
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            This Privacy Policy explains what personal data <strong>Friend Universe</strong> ("we", "us") collects when you use the <strong>INBBL (India Bubble)</strong> mobile app on Android and iOS (the "App") and our websites (the "Website"). Together these are the "Platform". "You" means anyone who visits or uses the Platform.
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            We are the <strong>Data Fiduciary</strong> for your personal data under India's <strong>Digital Personal Data Protection Act, 2023 ("DPDP Act")</strong> and the <strong>Information Technology Act, 2000</strong> and its rules. This policy is our notice to you under those laws. It should be read with our Terms of Service. Where the two conflict on how we handle personal data, this policy wins.
          </p>
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs font-bold text-rose-800 flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>You must be 18 or older to use the Platform. We do not knowingly allow anyone under 18 to create an account (see section 9).</span>
          </div>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-3xl space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-black">Summary in plain words</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs text-stone-600 leading-relaxed font-medium">
              <li>We collect the information needed to operate your account and profile, let you create and share posts, stories and Sneaks (short videos), provide chat functionality and the Map feature when you grant location permission, and keep the Platform safe.</li>
              <li>We do not sell your personal data.</li>
              <li><strong>INBBL is a free social app.</strong> We do not charge users for using the App and do not process in-app purchases, wallet balances or user-to-user money transactions.</li>
              <li>Optional analytics, session replay, personalisation and marketing require separate consent where applicable. You can withdraw that consent at any time.</li>
              <li>You can request account deletion through the App or by contacting us. Data is deleted or retained in line with the periods and legal requirements described in section 6.</li>
              <li>Questions or complaints can be sent to our Grievance Officer (section 11).</li>
            </ul>
          </div>
        </section>

        {/* 2. Information we collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            2. Information we collect
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            We collect information you provide, information generated when you use the Platform, and limited information from service providers.
          </p>

          <div className="overflow-x-auto border border-stone-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-stone-900 uppercase font-black tracking-wider border-b border-stone-200">
                <tr>
                  <th className="p-4">Category</th>
                  <th className="p-4">What it includes</th>
                  <th className="p-4">Where it comes from</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-4 font-bold text-black">Account</td>
                  <td className="p-4">Mobile number, one-time passwords (OTP) used to sign in, user ID, sign-in sessions and tokens</td>
                  <td className="p-4">You, at sign-up and sign-in</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Profile</td>
                  <td className="p-4">Name, username, profile photo, date of birth or birth year, gender, bio, interests, languages and city</td>
                  <td className="p-4">You</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Content</td>
                  <td className="p-4">Posts, stories, Sneaks (short videos), photos, videos, captions, status updates, likes and comments that you create or submit</td>
                  <td className="p-4">You</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Map and location</td>
                  <td className="p-4">Location information made available when you grant location permission and use the Map feature; this may include device location to show or position map-related information</td>
                  <td className="p-4">Your device, with your permission</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Device and log data</td>
                  <td className="p-4">Device model, operating system, app version, language, IP address, device and advertising identifiers, push notification token, crash logs and performance traces</td>
                  <td className="p-4">Your device</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Usage</td>
                  <td className="p-4">Screens viewed, features used, taps and session events, searches and interactions with posts, stories, Sneaks and chats</td>
                  <td className="p-4">Your device</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Support and safety</td>
                  <td className="p-4">Messages to our support team, reports you file, reports filed about you and blocks</td>
                  <td className="p-4">You and other users</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-1.5 text-xs text-stone-600">
            <h4 className="font-bold text-black uppercase tracking-wider">Location permission and control</h4>
            <p className="leading-relaxed">
              The Map feature uses location information only when you grant the relevant permission and use the feature. You can deny or withdraw location permission through your device settings. If you do, location-based parts of the Map feature may not work. We do not use this permission to track your location continuously in the background.
            </p>
          </div>
        </section>

        {/* 3. How we use your information */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            3. How we use your information
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            We use personal data for the purposes below. Where a purpose requires consent, we ask for it separately and you can withdraw it as described in the App or this policy.
          </p>

          <div className="overflow-x-auto border border-stone-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-stone-900 uppercase font-black tracking-wider border-b border-stone-200">
                <tr>
                  <th className="p-4">Purpose</th>
                  <th className="p-4">Examples</th>
                  <th className="p-4">Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-4 font-bold text-black">Operate accounts and profiles</td>
                  <td className="p-4">Create your account, sign you in by OTP, display your profile and provide core Platform functions</td>
                  <td className="p-4">Your consent to use the service and performance of our Terms</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Create and share content</td>
                  <td className="p-4">Upload, store, display and distribute posts, stories, Sneaks, photos, videos, captions, likes and comments according to your settings</td>
                  <td className="p-4">Your consent to use the service and performance of our Terms</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Chat</td>
                  <td className="p-4">Send, deliver and display chat messages between users and provide message-related safety and support functions</td>
                  <td className="p-4">Your consent to use the feature and performance of our Terms</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Map feature</td>
                  <td className="p-4">Use location permission to provide map-related features and show location-based information you request</td>
                  <td className="p-4">Your device permission and your use of the feature</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Safety and trust</td>
                  <td className="p-4">Review reports, moderate content, prevent spam, fraud and abuse, and enforce our Terms</td>
                  <td className="p-4">Legitimate uses under the DPDP Act and legal duties</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Analytics</td>
                  <td className="p-4">Understand feature usage, fix crashes and measure performance</td>
                  <td className="p-4">Your separate consent, where required</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Session replay</td>
                  <td className="p-4">Review anonymised or pseudonymised screen interactions to identify usability issues and bugs</td>
                  <td className="p-4">Your separate consent, where enabled</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Personalisation</td>
                  <td className="p-4">Personalise or recommend content based on your settings and activity</td>
                  <td className="p-4">Your separate consent, where enabled</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Marketing</td>
                  <td className="p-4">Measure campaigns and send promotional communications</td>
                  <td className="p-4">Your separate marketing consent</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Legal</td>
                  <td className="p-4">Respond to lawful requests and keep records required by law</td>
                  <td className="p-4">Legal duty</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-1.5 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">Automated content review</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Images and videos you upload or broadcast may be checked using automated tools to identify content that is prohibited under our Terms. Content flagged by these tools may be restricted, hidden or sent for human review. If you believe a moderation decision is wrong, contact us using the details in section 11 for review.
            </p>
          </div>
        </section>

        {/* 4. Who we share it with */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            4. Who we share it with
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            We do not sell your personal data. We share it only as described below:
          </p>
          <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-medium">
            <li><strong>Other users:</strong> Depending on your privacy settings and the nature of the feature, other users may be able to see your name, username, profile photo, profile information and content you make available through posts, stories, Sneaks and chats. Chat messages are visible to the users participating in the relevant conversation. Content shared publicly may be viewed, saved or reshared by others. You can use available privacy, block and report controls.</li>
            <li><strong>Service providers (Data Processors):</strong> We may use service providers for hosting, storage, content delivery, chat infrastructure, security, moderation, analytics, notifications and technical support. They may process personal data only to provide services to us and under appropriate contractual arrangements. The specific providers should be identified in this policy once the production vendor list is confirmed.</li>
            <li><strong>Legal and safety:</strong> We may disclose information when required by law, court order or lawful government request, or when reasonably necessary to protect users, prevent fraud or abuse, or defend our rights.</li>
            <li><strong>Transfers outside India:</strong> If a service provider processes or stores personal data outside India, we will do so in accordance with applicable Indian data-protection requirements and contractual safeguards.</li>
          </ul>
        </section>

        {/* 5. App permissions, cookies and tracking */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            5. App permissions, cookies and tracking
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            The App requests device permissions when you use a feature that needs them. You can manage or withdraw permissions through your device settings. If you deny a permission, the related feature may not work.
          </p>

          <div className="overflow-x-auto border border-stone-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-stone-900 uppercase font-black tracking-wider border-b border-stone-200">
                <tr>
                  <th className="p-4">Permission</th>
                  <th className="p-4">Why we ask</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-4 font-bold text-black">Camera</td>
                  <td className="p-4">Take photos or record videos for your profile, posts, stories and Sneaks</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Photos and videos / media access</td>
                  <td className="p-4">Select photos and videos to upload as posts, stories or Sneaks, or use as your profile photo</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Location</td>
                  <td className="p-4">Provide the Map feature when you choose to grant location access and use the feature</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Notifications</td>
                  <td className="p-4">Account and security updates, new chat messages, activity related to your content and other Platform updates</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">App Tracking Transparency (iOS), where enabled</td>
                  <td className="p-4">Ad measurement, subject to your choice and applicable consent requirements</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-1.5 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">Cookies on the Website</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              The Website may use cookies and similar technologies to keep you signed in, remember settings and protect the site. Analytics or advertising cookies, where used, will be enabled according to your consent choices and applicable law.
            </p>
          </div>
        </section>

        {/* 6. How long we keep it, deletion and security */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            6. How long we keep it, deletion and security
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            We keep personal data only for as long as reasonably necessary for the purposes described in this policy or as required by law.
          </p>

          <div className="overflow-x-auto border border-stone-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-stone-900 uppercase font-black tracking-wider border-b border-stone-200">
                <tr>
                  <th className="p-4">Data</th>
                  <th className="p-4">Retention approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-4 font-bold text-black">Account and profile data</td>
                  <td className="p-4">Kept while your account is active and deleted or anonymised after account deletion, subject to legal requirements</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Posts, stories, Sneaks, chat messages and other uploaded content</td>
                  <td className="p-4">Kept while available on the Platform and deleted or anonymised after account deletion, subject to backups, reports, legal holds and content already saved or shared by other users</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Device, usage and security logs</td>
                  <td className="p-4">Kept for a limited period needed for security, troubleshooting, analytics and legal compliance</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black">Support and safety records</td>
                  <td className="p-4">Kept as needed to investigate reports, resolve issues, protect users and comply with law</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3 pt-2 text-xs text-stone-600 leading-relaxed">
            <p><strong>Deleting your account:</strong> You may request account deletion through the App, if the option is available, or by contacting us using section 11. We will process the request in accordance with applicable law and the retention periods above. Some information may remain for a limited period in backups or where retention is legally required, needed to resolve disputes, prevent fraud or protect safety. Deleting your account cannot remove content that other users have already saved, copied or shared outside your account.</p>
            <p><strong>Where we store it:</strong> Personal data may be stored on our hosting and service-provider systems in India or other locations described in section 4, subject to applicable law.</p>
            <p><strong>Security:</strong> We use appropriate technical and organisational measures designed to protect personal data, such as access controls, encryption where appropriate, secure media access and administrative safeguards. No system is completely secure. If a personal-data breach occurs, we will take the steps required by applicable law.</p>
          </div>
        </section>

        {/* 7. Your rights */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            7. Your rights
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            Subject to applicable law, you may have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600 leading-relaxed font-medium">
            <li>Access information about the personal data we process and how we use it.</li>
            <li>Request correction or updating of inaccurate or incomplete personal data.</li>
            <li>Request erasure of personal data, subject to legal retention requirements.</li>
            <li>Withdraw consent where processing is based on consent. Withdrawal does not affect processing already carried out.</li>
            <li>Nominate another person to exercise your rights in accordance with applicable law.</li>
            <li>Raise a grievance with us and, where available under law, approach the relevant authority.</li>
          </ul>
          <p className="text-xs text-stone-500">
            To exercise a right, contact the Grievance Officer using the details in section 11. We may need to verify your identity before responding.
          </p>
        </section>

        {/* 8. Communications & 9. Children & 10. Links */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-black">8. Communications</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              We may send essential service communications such as OTPs, security alerts, important account notices and changes to this policy. Promotional communications will be sent only where required consent has been obtained and will include an available way to opt out.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-black">9. Children</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              The Platform is intended only for people aged 18 and over. We do not knowingly allow anyone under 18 to create an account. If we become aware that an underage person has created an account, we will take appropriate steps in accordance with applicable law. If you believe a child is using the Platform, contact us using section 11.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-black">10. Links and third-party services</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              The Platform may contain links to third-party websites or allow you to share content through other apps. Their own terms and privacy policies apply when you use those third-party services.
            </p>
          </div>
        </section>

        {/* 11. Grievance Officer and contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            11. Grievance Officer and contact
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            In line with applicable Indian data-protection and information-technology requirements, our Grievance Officer is:
          </p>

          <div className="bg-black text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-inbbl-purple">
                <UserCheck className="w-6 h-6 text-inbbl-purple" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Grievance Officer</p>
                <h3 className="text-lg font-extrabold text-white">Shrikan Patel</h3>
                <p className="text-xs text-stone-400">Friend Universe (INBBL Platform)</p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800 space-y-2.5 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-inbbl-cyan shrink-0" />
                <a href="mailto:Shrikant@frienduniverse.in" className="text-stone-300 hover:text-white transition font-medium">
                  Shrikant@frienduniverse.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-inbbl-emerald shrink-0" />
                <a href="tel:+918087763470" className="text-stone-300 hover:text-white transition font-medium">
                  +91 8087763470
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Changes to this policy */}
        <section className="space-y-4 border-t border-stone-200 pt-8 pb-12">
          <h2 className="text-xl font-extrabold text-black">
            12. Changes to this policy
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            We may update this policy when our Platform, data practices or legal requirements change. We will publish the updated version with its effective date and provide notice of material changes where required by law.
          </p>
          <div className="pt-4">
            <button 
              onClick={onBack}
              className="bg-black hover:bg-stone-800 text-white font-extrabold text-xs px-6 py-3 rounded-full transition shadow-md inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to INBBL Home</span>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};
