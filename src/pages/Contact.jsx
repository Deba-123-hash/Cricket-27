import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import {
  ContactHero,
  ContactIntroduction,
  ContactInfoCards,
  ContactForm,
  ContactProcess,
  ContactSocialSection,
  ContactFAQCTA,
  ContactFinalCTA,
} from '../sections/contact';

/**
 * CRICKET27 — Official Contact Page & Interactive Inquiry Experience
 * Phase 16 Master Experience
 * Route: /contact
 */
export const Contact = () => {
  usePageTitle('Contact — Connect & Inquire | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Contact Us | Connect & Inquire | CRICKET27"
        description="Get in touch with the CRICKET27 studio team — submit general inquiries, partnership proposals, media requests, or creator applications."
        canonical="/contact"
        ogImage="/assets/contact/contact-hero.webp"
      />
      <div className="relative w-full bg-midnight min-h-screen text-warm-white">
        {/* Section 1: Contact Hero */}
        <ContactHero />

        {/* Section 2: Contact Introduction */}
        <ContactIntroduction />

        {/* Section 3: Contact Information Cards */}
        <ContactInfoCards />

        {/* Section 4: Interactive Contact Form */}
        <ContactForm />

        {/* Section 5: Contact Process */}
        <ContactProcess />

        {/* Section 6: Social Connection */}
        <ContactSocialSection />

        {/* Section 7: FAQ Support CTA */}
        <ContactFAQCTA />

        {/* Section 8: Final CTA */}
        <ContactFinalCTA />
      </div>
    </PageTransition>
  );
};

export default Contact;
