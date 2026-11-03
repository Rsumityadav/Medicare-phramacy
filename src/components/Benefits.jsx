
function Benefits() {
  const benefits = [
    {
      icon: "🚚",
      title: "Convenient Shopping",
      description: "Explore products in one place.",
    },
    {
      icon: "🛡️",
      title: "Quality Focus",
      description: "Choose products from trusted sources.",
    },
    {
      icon: "💚",
      title: "Customer Care",
      description: "Your shopping experience matters.",
    },
  ];

  return (
    <section className="benefits">
      {benefits.map((benefit) => (
        <div className="benefit-card" key={benefit.title}>
          <span className="benefit-icon">{benefit.icon}</span>

          <div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
