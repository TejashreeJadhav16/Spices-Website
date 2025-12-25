import { Leaf, Globe, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our spices are certified organic and free from additives.",
  },
  {
    icon: Globe,
    title: "Ethically Sourced",
    description: "Direct partnerships with farmers ensure fair trade practices.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous testing ensures only the finest spices reach you.",
  },
  {
    icon: Heart,
    title: "Freshly Packed",
    description: "Small batch processing preserves maximum flavor and aroma.",
  },
];

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Promise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
              From Farm to Your Kitchen
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Spice Haven, we believe that great cooking starts with exceptional ingredients. 
              Our journey began with a simple mission: to bring the world's finest spices directly 
              to home cooks and professional chefs alike.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with small-scale farmers across 25 countries, ensuring fair prices 
              and sustainable practices. Every spice is carefully selected, tested for purity, 
              and packaged to preserve its natural essence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-background rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
