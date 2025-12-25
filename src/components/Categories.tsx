import { ArrowUpRight } from "lucide-react";
import turmericImg from "@/assets/turmeric.jpg";
import cinnamonImg from "@/assets/cinnamon.jpg";
import saffronImg from "@/assets/saffron.jpg";

const categoriesData = [
  {
    name: "Ground Spices",
    description: "Freshly ground for maximum flavor",
    image: turmericImg,
    count: 15,
  },
  {
    name: "Whole Spices",
    description: "Pure, unprocessed aromatics",
    image: cinnamonImg,
    count: 22,
  },
  {
    name: "Premium Spices",
    description: "The finest, rarest selections",
    image: saffronImg,
    count: 8,
  },
];

const Categories = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Browse by Category
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Explore Our Range
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map((category, index) => (
            <div
              key={category.name}
              className="group relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">
                      {category.name}
                    </h3>
                    <p className="text-primary-foreground/80 mt-1">
                      {category.description}
                    </p>
                    <p className="text-primary-foreground/60 text-sm mt-2">
                      {category.count} products
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
