import yentlPhoto from "@/assets/yentl-photo.jpeg";
import oliveBranch from "@/assets/olive-branch-hero.png";
import oliveDecoration from "@/assets/olive-decoration.png";
import brandLogo from "@/assets/brand-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Heart, Users, Sparkles, Leaf, ChevronDown } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "34666314321";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola!, quería agendar mi consulta gratuita.");
const INSTAGRAM_URL = "https://www.instagram.com/volver.a_ti?igsh=MTNxMDA2cTVrdTAwYw==";

const Index = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={brandLogo} alt="Volver a Ti" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-serif text-xl font-semibold text-foreground">Volver a Ti</span>
          </div>
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

      {/* About Me Section */}
      <section className="py-16 md:py-24 bg-cream-dark/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-medium border-4 border-olive/20 flex-shrink-0">
                <img
                  src={yentlPhoto}
                  alt="Yentl Pérez Berros"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Sobre mí
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Soy Yentl, mamá y especialista en inteligencia emocional. Después de experimentar en primera persona los retos de la maternidad, decidí formarme para acompañar a otras familias en este camino.
                </p>
                <p className="text-muted-foreground text-lg mb-4">
                  Llevo más de 4 años creando espacios de escucha consciente donde madres y padres pueden soltar el peso, expresarse sin juicio y reconectar con su esencia.
                </p>
                <p className="text-olive font-medium">
                  Mi misión es recordarte que no estás sola/o y que cuidarte también es cuidar a los tuyos.
                </p>
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Lo que dicen quienes han pasado por aquí
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Por fin encontré un espacio donde no me siento juzgada. Yentl me ayudó a entender que cuidarme no es egoísmo."
              author="María L."
              role="Mamá de 2"
            />
            <TestimonialCard
              quote="Después de cada sesión siento que respiro más hondo. Me ha cambiado la forma de relacionarme con mis hijos."
              author="Ana G."
              role="Mamá primeriza"
            />
            <TestimonialCard
              quote="Nunca pensé que hablar con alguien pudiera ayudarme tanto. Yentl tiene un don para escuchar."
              author="Carlos R."
              role="Papá de 1"
            />
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="¿Las sesiones son online o presenciales?"
                answer="Las sesiones son 100% online a través de videollamada. Así puedes conectar desde la comodidad de tu casa, sin tener que desplazarte."
              />
              <FAQItem
                question="¿Necesito prepararme antes de una sesión?"
                answer="No hace falta preparar nada. Solo ven como estés en ese momento. Este espacio es para ti, sin expectativas ni presiones."
              />
              <FAQItem
                question="¿Qué pasa si tengo que cancelar una sesión?"
                answer="Entiendo que la vida con peques es impredecible. Puedes cancelar o reprogramar con al menos 24 horas de antelación sin ningún problema."
              />
              <FAQItem
                question="¿Esto es terapia psicológica?"
                answer="No, esto es acompañamiento emocional basado en inteligencia emocional. No sustituye a la terapia psicológica, pero puede ser un complemento valioso o un primer paso para quien busca un espacio de escucha."
              />
              <FAQItem
                question="¿Cuántas sesiones necesito?"
                answer="Depende de cada persona. Algunas personas encuentran lo que necesitan en una sesión, otras prefieren un proceso más continuado. Tú decides el ritmo."
              />
            </div>
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

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <div className="bg-cream-dark/50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth">
    <div className="mb-4">
      <svg className="w-8 h-8 text-olive/40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <p className="text-foreground mb-4 italic">{quote}</p>
    <div>
      <p className="font-semibold text-foreground">{author}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  </div>
);

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-cream-dark/50 rounded-xl overflow-hidden shadow-soft">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-dark/70 transition-smooth"
      >
        <span className="font-serif text-lg font-medium text-foreground">{question}</span>
        <ChevronDown className={`w-5 h-5 text-olive transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-6 text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default Index;
