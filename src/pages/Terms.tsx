import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 font-body text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Last Updated:</strong> March 2026</p>

            <h2 className="font-display text-2xl text-foreground mt-8">1. Membership Terms</h2>
            <p>Membership is valid for the duration of the chosen plan. Members must follow gym rules and regulations at all times. Valid ID proof is required for registration.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">2. Payment & Fees</h2>
            <p>Membership fees are payable in advance. Prices are subject to change with prior notice. Late payments may result in suspension of membership privileges.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">3. Refund & Cancellation Policy</h2>
            <p>Membership fees are non-refundable once the membership period has started. Cancellation requests must be submitted in writing at least 7 days before the next billing cycle. Freeze options may be available for medical emergencies with valid documentation.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">4. Liability Disclaimer</h2>
            <p>Trio Fitness is not liable for injuries sustained during workouts. Members are advised to consult a physician before starting any fitness program. Personal belongings are the responsibility of the member. Use of equipment is at the member's own risk.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">5. Code of Conduct</h2>
            <p>Members must maintain decorum, use equipment responsibly, re-rack weights after use, and wear appropriate gym attire. Harassment of any kind will result in immediate termination of membership.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">6. Operating Hours</h2>
            <p>Monday – Saturday: 5:00 AM – 12:00 AM. Sunday: 8:00 AM – 4:00 PM. Hours may vary on public holidays.</p>

            <h2 className="font-display text-2xl text-foreground mt-8">7. Contact</h2>
            <p>Trio Fitness, First Floor, LA Square, Sierra Tower, Above Domino's, Lokhandwala Township, Kandivali East, Mumbai – 400101. Phone: 077383 80154</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
