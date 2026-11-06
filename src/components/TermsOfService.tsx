import React from 'react';
import { ArrowLeft, FileText, AlertCircle, ShieldCheck, Mail, Phone, CheckCircle2, UserX, MapPin, Scale } from 'lucide-react';
import { InbblLogo } from './InbblLogo';

interface TermsOfServiceProps {
  onBack: () => void;
  onOpenPrivacy?: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack, onOpenPrivacy }) => {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased selection:bg-inbbl-purple selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-black transition bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-full cursor-pointer"
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
            <FileText className="w-3.5 h-3.5" />
            <span>DPDP Act 2023 & IT Act 2000 (India) Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500 font-medium">
            <span>Company: <strong>Friend Universe</strong></span>
            <span>•</span>
            <span>Platform: <strong>INBBL (India Bubble)</strong></span>
            <span>•</span>
            <span>Effective Date: <strong>November 6, 2026</strong></span>
          </div>
        </div>

        {/* 1. Acceptance of Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            1. Acceptance of Terms
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            By accessing, downloading, or using the <strong>INBBL (India Bubble)</strong> mobile application (Android/iOS) or associated websites (collectively, the "Platform"), you agree to be bound by these Terms of Service ("Terms") and our{' '}
            <button 
              onClick={onOpenPrivacy} 
              className="text-inbbl-purple font-bold underline hover:text-black transition cursor-pointer"
            >
              Privacy Policy
            </button>
            . If you do not agree to these Terms, you must not access or use the Platform.
          </p>
        </section>

        {/* 2. Eligibility & Age Restriction */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            2. Eligibility & Age Restriction
          </h2>
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs font-bold text-rose-800 flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>Minimum Age: You must be at least 18 years of age to register an account or use the Platform.</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            <strong>Account Termination:</strong> We do not knowingly permit individuals under the age of 18 to create accounts. If we discover an account belongs to an underage user, we reserve the right to suspend or delete it immediately.
          </p>
        </section>

        {/* 3. Account Registration & Security */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            3. Account Registration & Security
          </h2>
          <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-inbbl-purple shrink-0 mt-0.5" />
              <span><strong>OTP Authentication:</strong> You register and log in using a mobile number and One-Time Password (OTP).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-inbbl-purple shrink-0 mt-0.5" />
              <span><strong>Accuracy:</strong> You agree to provide accurate and current profile information.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-inbbl-purple shrink-0 mt-0.5" />
              <span><strong>Account Responsibility:</strong> You are solely responsible for maintaining the confidentiality of your sign-in tokens and device security. Any activity occurring under your account is your responsibility.</span>
            </li>
          </ul>
        </section>

        {/* 4. Platform Services & Free Usage */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            4. Platform Services & Free Usage
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            <strong>Core Features:</strong> INBBL provides free social networking features, including profile creation, posting text/media, sharing Stories and Sneaks (short videos), messaging/chat, and an opt-in Map feature.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-1.5">
            <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              100% Free Consumer Social App
            </p>
            <p className="text-xs text-emerald-800 leading-relaxed font-medium">
              <strong>No Fees or Purchases:</strong> INBBL is a free social application. We do not charge fees, process in-app purchases, maintain wallet balances, or process user-to-user monetary transactions.
            </p>
          </div>
        </section>

        {/* 5. User Conduct & Content Guidelines */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            5. User Conduct & Content Guidelines
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            You retain ownership of the content (posts, stories, short videos, messages, captions, comments) you submit or post on the Platform. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to host, display, and distribute your content solely for operating the Platform.
          </p>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-black">Prohibited Conduct</h3>
            <ul className="space-y-2 text-xs text-stone-700 leading-relaxed font-medium">
              <li>• <strong>Unlawful Content:</strong> You may not post content that is unlawful, harmful, abusive, harassing, defamatory, obscene, or hateful.</li>
              <li>• <strong>Intellectual Property:</strong> You may not infringe on any intellectual property or third-party privacy rights.</li>
              <li>• <strong>Security & Automation:</strong> You may not transmit viruses, malware, spam, or use automated bot scripts on the Platform.</li>
              <li>• <strong>Impersonation:</strong> You may not impersonate any person or misrepresent your identity or affiliation.</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl text-xs text-purple-900 space-y-1 leading-relaxed">
            <p className="font-bold">Automated Moderation & Human Review</p>
            <p>We utilize automated screening tools and human review to detect prohibited content. Content flagged by these systems may be restricted, hidden, or removed, and offending accounts may be suspended or terminated.</p>
          </div>
        </section>

        {/* 6. Location & Map Features */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            6. Location & Map Features
          </h2>
          <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
            <p><strong>Optional Permissions:</strong> The Map feature relies on device location permissions granted by you.</p>
            <p><strong>User Control:</strong> You can grant or withdraw location permissions at any time via your device settings. We do not track your location continuously in the background.</p>
          </div>
        </section>

        {/* 7. Account Termination & Deletion */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            7. Account Termination & Deletion
          </h2>
          <ul className="space-y-2 text-sm text-stone-700 leading-relaxed font-medium">
            <li>• <strong>Termination by You:</strong> You may stop using the Platform or request account deletion through the App settings or by contacting our Grievance Officer.</li>
            <li>• <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account at any time for violations of these Terms or legal obligations.</li>
            <li>• <strong>Effect of Deletion:</strong> Content saved, shared, or copied by other users prior to your account deletion cannot be removed from their accounts or devices.</li>
          </ul>
        </section>

        {/* 8. Limitation of Liability & Disclaimers */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            8. Limitation of Liability & Disclaimers
          </h2>
          <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
            <p><strong>As-Is Service:</strong> The Platform is provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied.</p>
            <p><strong>Liability Cap:</strong> To the fullest extent permitted by law, Friend Universe is not liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the Platform.</p>
          </div>
        </section>

        {/* 9. Governing Law & Dispute Resolution */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            9. Governing Law & Dispute Resolution
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms or the Platform shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>

        {/* 10. Grievance Redressal */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black">
            10. Grievance Redressal
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023, you can address any complaints, grievances, or legal inquiries to our designated Grievance Officer:
          </p>

          <div className="bg-black text-white p-6 sm:p-8 rounded-3xl space-y-4 max-w-md shadow-xl">
            <div>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">Designated Official</p>
              <h3 className="text-xl font-extrabold text-white mt-0.5">Shrikan Patel</h3>
              <p className="text-xs text-stone-400">Grievance Officer • Friend Universe (INBBL Platform)</p>
            </div>
            
            <div className="pt-3 border-t border-stone-800 space-y-2 text-xs">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-inbbl-purple shrink-0" />
                <span>Email: <a href="mailto:Shrikant@frienduniverse.in" className="text-white hover:text-inbbl-purple underline font-semibold transition">Shrikant@frienduniverse.in</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-inbbl-purple shrink-0" />
                <span>Phone: <a href="tel:+918087763470" className="text-white hover:text-inbbl-purple underline font-semibold transition">+91 8087763470</a></span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Changes to Terms */}
        <section className="space-y-4 border-t border-stone-200 pt-8 pb-12">
          <h2 className="text-xl font-extrabold text-black">
            11. Changes to Terms
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            We may update these Terms periodically. We will notify you of material changes by posting the updated Terms on the Platform or through essential service communications. Continued use of the Platform after changes take effect constitutes your acceptance of the revised Terms.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={onBack}
              className="bg-black hover:bg-stone-800 text-white text-xs font-bold px-6 py-3 rounded-full transition cursor-pointer"
            >
              Return to INBBL Home
            </button>
            <button 
              onClick={onOpenPrivacy}
              className="bg-stone-100 hover:bg-stone-200 text-black text-xs font-bold px-6 py-3 rounded-full transition cursor-pointer"
            >
              View Privacy Policy
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200 text-center text-xs text-stone-500 bg-white">
        <p>© 2026 Friends Universe Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};
