const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Your <span className="text-primary">Fitness Journey?</span>
        </h2>
        <a
          href="#contact"
          className="btn-glow inline-block bg-primary text-primary-foreground px-12 py-4 rounded font-condensed text-lg tracking-widest uppercase animate-glow-pulse"
        >
          Join Trio Fitness Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;
