import yentlPhoto from "@/assets/yentl-photo.jpeg";
import oliveBranch from "@/assets/olive-branch-hero.png";
import oliveDecoration from "@/assets/olive-decoration.png";
import brandLogo from "@/assets/brand-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Heart, Users, Sparkles, Leaf } from "lucide-react";

const WHATSAPP_NUMBER = "34666314321";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola!, quería agendar mi consulta gratuita.");
const INSTAGRAM_URL = "https://www.instagram.com/volver.a_ti?igsh=MTNxMDA2cTVrdTAwYw==";

const Index = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-foreground">Volver a Ti</span>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-olive transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="olive" size="sm" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-hero">
        {/* Decorative olive branch */}
        <img
          src={oliveBranch}
          alt=""
          className="absolute top-20 right-0 w-64 md:w-96 opacity-30 transform translate-x-1/4 animate-float pointer-events-none"
          aria-hidden="true"
        />
        <img
          src={oliveDecoration}
          alt=""
          className="absolute bottom-10 left-0 w-32 md:w-48 opacity-20 transform -translate-x-1/4 rotate-45 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-medium border-4 border-cream-dark">
                <img
                  src={yentlPhoto}
                  alt="Yentl Pérez Berros - Especialista en inteligencia emocional"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-olive" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-slide-up">
                Yentl Pérez Berros
              </h1>
              <p className="text-lg md:text-xl text-olive font-medium mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Especialista en inteligencia emocional
              </p>
              <p className="text-muted-foreground text-lg mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Más de 4 años acompañando a padres y madres a soltar, respirar y reconectar consigo mismos
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Agendar consulta gratuita
                  </a>
                </Button>
                <Button variant="olive-outline" size="lg" asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                    Sígueme en Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-16 md:py-24 bg-cream-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Acompañamiento emocional para la maternidad y paternidad
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un espacio seguro donde puedes soltar el peso, ser escuchada/o sin juicio y reconectar con tu esencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ServiceCard
              icon={<Heart className="w-8 h-8" />}
              title="Descarga emocional"
              description="Habla sin juicio, libera lo que llevas dentro y siente el alivio de ser comprendida/o"
            />
            <ServiceCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Validación"
              description="Lo que sientes es válido: la culpa, el cansancio, la ambivalencia. Aquí todo tiene espacio"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Reconexión"
              description="Recupera un poco de centro, calma y vuelve a conectar con tu identidad más allá del rol"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                ¿Cómo funciona una sesión?
              </h2>
              <p className="text-muted-foreground text-lg">
                60 minutos dedicados completamente a ti
              </p>
            </div>

            <div className="space-y-6">
              <SessionStep
                number="1"
                title="Llegada"
                description="¿Cómo estás hoy? Nos conectamos y creamos un espacio seguro"
              />
              <SessionStep
                number="2"
                title="Espacio de palabra"
                description="Espacio libre para hablar, con preguntas suaves que ayudan a profundizar"
              />
              <SessionStep
                number="3"
                title="Cierre e integración"
                description="Integramos lo compartido y te llevas una pequeña reflexión"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-cream-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Opciones de acompañamiento
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              title="Sesión individual"
              price="50€"
              duration="60 minutos"
              features={[
                "Espacio de escucha consciente",
                "Acompañamiento personalizado",
                "Reflexión para llevar"
              ]}
            />
            <PricingCard
              title="Pack 3 sesiones"
              price="135€"
              duration="3 × 60 minutos"
              featured
              features={[
                "Continuidad y profundidad",
                "Proceso de transformación",
                "Ahorro de 15€"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-olive/5 relative overflow-hidden">
        <img
          src={oliveBranch}
          alt=""
          className="absolute top-0 left-0 w-48 opacity-15 transform -translate-x-1/3 rotate-180 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Escríbeme para agendar tu primera sesión gratuita
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              20 minutos para conocernos y ver si este espacio puede servirte. Sin compromiso, solo con calma.
            </p>
            <Button variant="whatsapp" size="xl" asChild className="shadow-glow">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Agendar mi consulta gratuita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="font-serif text-lg font-semibold text-foreground">Volver a Ti</span>
              <p className="text-sm text-muted-foreground">Acompañamiento emocional para madres y padres</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-olive transition-smooth flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@volver.a_ti</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-olive transition-smooth flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth group">
    <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mb-4 text-olive group-hover:bg-olive group-hover:text-primary-foreground transition-smooth">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

// Session Step Component
interface SessionStepProps {
  number: string;
  title: string;
  description: string;
}

const SessionStep = ({ number, title, description }: SessionStepProps) => (
  <div className="flex items-start gap-4 bg-cream-dark/50 rounded-xl p-6 shadow-soft">
    <div className="w-12 h-12 rounded-full bg-olive flex items-center justify-center text-primary-foreground font-serif text-xl font-semibold flex-shrink-0">
      {number}
    </div>
    <div className="flex-1">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

// Pricing Card Component
interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

const PricingCard = ({ title, price, duration, features, featured = false }: PricingCardProps) => (
  <div className={`rounded-2xl p-8 ${featured ? 'bg-olive text-primary-foreground shadow-glow scale-105' : 'bg-background shadow-medium'} transition-smooth hover:scale-[1.02]`}>
    {featured && (
      <span className="inline-block text-xs font-semibold bg-primary-foreground/20 px-3 py-1 rounded-full mb-4">
        Más popular
      </span>
    )}
    <h3 className={`font-serif text-2xl font-semibold mb-2 ${featured ? '' : 'text-foreground'}`}>{title}</h3>
    <p className={`text-sm mb-4 ${featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{duration}</p>
    <p className="font-serif text-4xl font-bold mb-6">{price}</p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Leaf className={`w-4 h-4 flex-shrink-0 ${featured ? '' : 'text-olive'}`} />
          <span className={`text-sm ${featured ? '' : 'text-muted-foreground'}`}>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
