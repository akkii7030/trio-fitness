import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 font-body text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Last Updated:</strong> March 2026</p>

            <h2 className="font-display text-2xl text-foreground mt-8">1. Information We Collect</h2>
            <p>We collect personal information you provide when signing up for membership, including your name, phone number, email address, fitness goals, and health-related information necessary for creating personalized workout plans.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">2. How We Use Your Information</h2>
            <p>Your information is used to provide fitness services, communicate about your membership, send promotional offers (with consent), and improve our facilities and services.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">4. Third-Party Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at 077383 80154 for any privacy-related requests.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">6. Contact</h2>
            <p>Trio Fitness, First Floor, LA Square, Sierra Tower, Above Domino's, Lokhandwala Township, Kandivali East, Mumbai – 400101. Phone: 077383 80154</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
