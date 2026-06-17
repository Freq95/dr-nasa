"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  Star,
  Shield,
  Clock,
  Award,
  Users,
  Calendar,
  Smile,
  Heart,
  Activity,
  Baby,
  BriefcaseMedical,
  Facebook,
  Instagram,
  Music2,
  ArrowRight,
  Menu,
  Scissors,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Syringe,
  X as XIcon,
} from "lucide-react";

// Utility function
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

// Button Component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const variants = {
    default: "border border-gold/50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:border-gold",
    outline:
      "border border-input bg-background hover:border-gold/60 hover:bg-gold-soft/40 hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Card Components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Accordion Component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-2 px-4 py-4 text-left transition-colors hover:bg-muted/50"
        aria-expanded={isOpen}
      >
        <h3 className="font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  duration: 0.3,
                },
                opacity: { duration: 0.25 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25 },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Dentistry Website Component
const DentistryWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const dentistPhone = "+40767161774";
  const displayPhone = "+40 767 161 774";
  const whatsappPhone = "40767161774";
  const whatsappMessage =
    "Buna ziua! As dori sa programez o consultatie stomatologica. Ma puteti ajuta cu un interval disponibil?";

  const openAppointmentModal = () => {
    setAppointmentModalOpen(true);
    setMobileMenuOpen(false);
  };

  const callDentist = () => {
    window.location.href = `tel:${dentistPhone}`;
    setAppointmentModalOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setAppointmentModalOpen(false);
  };

  const testimonials = [
    {
      text: "Echipa clinicii este extraordinara. M-am simtit in siguranta pe tot parcursul vizitei, iar rezultatele au depasit asteptarile mele.",
      name: "Sarah Ionescu",
      role: "Pacient",
      rating: 5,
    },
    {
      text: "Profesionalism, grija si eficienta. Vin aici de ani buni si nu mi-as incredinta sanatatea dentara altcuiva.",
      name: "Mihai Popescu",
      role: "Pacient",
      rating: 5,
    },
    {
      text: "De la detartraje de rutina pana la proceduri complexe, totul este facut cu atentie si empatie. Recomand cu incredere!",
      name: "Elena Radu",
      role: "Pacient",
      rating: 5,
    },
    {
      text: "Aparatura moderna si abordarea blanda fac vizitele la dentist mult mai relaxante. Acum vine aici toata familia mea.",
      name: "David Marinescu",
      role: "Pacient",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Cat de des ar trebui sa merg la dentist?",
      answer:
        "Recomandam un control stomatologic o data la 6 luni, impreuna cu igienizarea profesionala. In functie de nevoile fiecarui pacient, vizitele pot fi mai frecvente.",
    },
    {
      question: "Acceptati asigurari dentare?",
      answer:
        "Da, acceptam mai multe tipuri de asigurari dentare. Echipa noastra va poate ajuta sa intelegeti acoperirea si optiunile de plata disponibile.",
    },
    {
      question: "Ce fac in cazul unei urgente dentare?",
      answer:
        "Contactati-ne imediat daca aveti durere puternica, traumatism sau sangerare. Oferim programari rapide pentru urgente si va ghidam cu pasii de ingrijire initiala.",
    },
    {
      question: "Tratamentele sunt dureroase?",
      answer:
        "Confortul pacientului este prioritar. Folosim tehnici moderne si anestezie pentru a reduce disconfortul, iar tratamentul incepe doar cand sunteti pregatit.",
    },
    {
      question: "Cat dureaza o programare obisnuita?",
      answer:
        "O igienizare de rutina dureaza de obicei 45-60 de minute. Procedurile complexe variaza ca durata, iar timpul estimat este comunicat la programare.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Smile className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold">
                CM<span className="font-script text-3xl font-normal leading-none text-gold">Art</span>{" "}
                <span className="tracking-[0.18em]">Dent</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Servicii
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                Despre
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                Pareri
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                Intrebari
              </a>
              <Button size="sm" onClick={openAppointmentModal}>Fa o programare</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors">
                Servicii
              </a>
              <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
                Despre
              </a>
              <a href="#testimonials" className="block text-sm font-medium hover:text-primary transition-colors">
                Pareri
              </a>
              <a href="#faq" className="block text-sm font-medium hover:text-primary transition-colors">
                Intrebari
              </a>
              <Button size="sm" className="w-full" onClick={openAppointmentModal}>Fa o programare</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gold/10 bg-gradient-to-b from-ivory/50 to-background py-16 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 xl:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Zambetul tau merita{" "}
                <span className="text-gold">cea mai buna ingrijire</span>
              </h1>
              <div className="mb-6 h-px w-32 bg-gold/60" />
              <p className="text-lg text-muted-foreground mb-8">
                Servicii stomatologice profesionale pentru pacienti si familii.
                Bucura-te de tratamente blande, complete si orientate spre confortul tau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" onClick={openAppointmentModal}>
                  Programeaza-te <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Afla mai multe
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-gold">15+</div>
                  <div className="text-sm text-muted-foreground">Ani experienta</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">5000+</div>
                  <div className="text-sm text-muted-foreground">Pacienti multumiti</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">98%</div>
                  <div className="text-sm text-muted-foreground">Rata satisfactie</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-2xl border border-gold/30 bg-muted shadow-lg ring-1 ring-gold/20 lg:mx-0 lg:ml-auto">
                <img
                  src={`${import.meta.env.BASE_URL}dr-andreea.png`}
                  alt="Dr. Andreea de la CMArt Dent"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="border-b border-gold/10 bg-ivory/40 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-2xl font-bold">Premiata</div>
              <div className="text-sm text-muted-foreground">Excelenta in ingrijire</div>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-2xl font-bold">Certificata</div>
              <div className="text-sm text-muted-foreground">Specialisti autorizati</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-2xl font-bold">Suport 24/7</div>
              <div className="text-sm text-muted-foreground">Ingrijire de urgenta</div>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-2xl font-bold">Pacientul primul</div>
              <div className="text-sm text-muted-foreground">Grija si empatie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicii stomatologice complete
            </h2>
            <div className="mx-auto mb-6 h-px w-24 bg-gold/60" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la controale de rutina la tratamente avansate, oferim tot ce ai nevoie pentru sanatatea orala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Syringe,
                title: "Implanturi",
                description: "Solutii moderne pentru inlocuirea dintilor lipsa si refacerea confortului la masticatie.",
              },
              {
                icon: Scissors,
                title: "Chirurgie",
                description: "Interventii chirurgicale orale realizate cu atentie, planificare si control al disconfortului.",
              },
              {
                icon: Sparkles,
                title: "Albire Dentară",
                description: "Tratamente de albire pentru un zambet mai luminos, cu evaluare si recomandari personalizate.",
              },
              {
                icon: Stethoscope,
                title: "Endodonție",
                description: "Tratamentul canalelor radiculare pentru salvarea dintilor afectati si eliminarea durerii.",
              },
              {
                icon: Activity,
                title: "Parodontologie",
                description: "Diagnostic si tratament pentru afectiunile gingivale si sanatatea tesuturilor de sustinere.",
              },
              {
                icon: BriefcaseMedical,
                title: "Protetica Dentara",
                description: "Coroane, punti si lucrari protetice pentru functie, estetica si stabilitate pe termen lung.",
              },
              {
                icon: Baby,
                title: "Pedodonție",
                description: "Ingrijire stomatologica pentru copii, intr-un ritm bland si adaptat varstei lor.",
              },
              {
                icon: ShieldPlus,
                title: "Odontoterapie",
                description: "Tratamente pentru carii si restaurari dentare menite sa pastreze structura naturala a dintelui.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gold/20 hover:border-gold/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-gold mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-ivory/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce spun pacientii nostri
            </h2>
            <div className="mx-auto mb-6 h-px w-24 bg-gold/60" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experientele pacientilor vorbesc cel mai bine despre grija si atentia noastra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gold/20">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intrebari frecvente
            </h2>
            <div className="mx-auto mb-6 h-px w-24 bg-gold/60" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ai intrebari? Gasesti mai jos raspunsurile principale sau ne poti contacta direct.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-border rounded-lg border border-gold/20 bg-background">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={expandedFaq === index}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 xl:gap-16 mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact
              </h2>
              <div className="mb-6 h-px w-24 bg-gold/60" />
              <p className="text-lg text-muted-foreground mb-8">
                Esti gata pentru o programare? Contacteaza-ne si fa primul pas catre un zambet mai sanatos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <div className="text-muted-foreground">{displayPhone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">drandreeanicolescu@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Adresa</div>
                    <div className="text-muted-foreground">
                      Strada Republicii 6, sc.1, ap.3<br />
                      210152 Târgu Jiu
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Program</div>
                    <div className="text-muted-foreground">
                      Luni: 10-18<br />
                      Marti: 12-20<br />
                      Miercuri: 10-18<br />
                      Joi: 12-20<br />
                      Vineri: 10-18<br />
                      Sambata: inchis<br />
                      Duminica: inchis
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle>Locatia noastra</CardTitle>
                <CardDescription>
                  Gaseste-ne rapid pe harta in Tg. Jiu.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-gold/20">
                  <iframe
                    title="Harta CMArt Dent Tg. Jiu"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5638.9659441496415!2d23.27316091233962!3d45.03542017094953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d8bf2c8ad2bd9%3A0xd8d48f283505b7cb!2sCMart%20Dent%20Dr.%20Nicolescu%20(Ciobanoiu)%20Andreea!5e0!3m2!1sen!2sus!4v1781728464928!5m2!1sen!2sus"
                    className="h-[360px] w-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/6yhmrr7wLqSZpoRE7",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Deschide in Google Maps <MapPin className="h-4 w-4" />
                </Button>
                <Button type="button" className="w-full gap-2" onClick={openAppointmentModal}>
                  Programeaza-te <Calendar className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-ivory/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_0.85fr_0.85fr]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Smile className="h-6 w-6 text-gold" />
                <span className="font-bold">
                  CM<span className="font-script text-2xl font-normal text-gold">Art</span>{" "}
                  <span className="tracking-[0.14em]">Dent</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ingrijire stomatologica pentru intreaga familie. Zambetul tau este prioritatea noastra.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Linkuri rapide</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Servicii</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Despre noi</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicii</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Implanturi</li>
                <li className="text-muted-foreground">Chirurgie</li>
                <li className="text-muted-foreground">Albire Dentară</li>
                <li className="text-muted-foreground">Endodonție</li>
                <li className="text-muted-foreground">Parodontologie</li>
                <li className="text-muted-foreground">Protetica Dentara</li>
                <li className="text-muted-foreground">Pedodonție</li>
                <li className="text-muted-foreground">Odontoterapie</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Program</h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <dt>Luni</dt>
                <dd>10-18</dd>
                <dt>Marti</dt>
                <dd>12-20</dd>
                <dt>Miercuri</dt>
                <dd>10-18</dd>
                <dt>Joi</dt>
                <dd>12-20</dd>
                <dt>Vineri</dt>
                <dd>10-18</dd>
                <dt>Sambata</dt>
                <dd>inchis</dd>
                <dt>Duminica</dt>
                <dd>inchis</dd>
              </dl>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Urmareste-ne</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/dr.andreea.nicolescu.ciobanoiu?mibextid=wwXIfr&rdid=cpsk7Gre4OqJakeV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BPPVmHGpc%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook CMArt Dent"
                  className="rounded-full bg-gold/10 p-2 transition-colors hover:bg-gold/20"
                >
                  <Facebook className="h-5 w-5 text-gold" />
                </a>
                <a
                  href="https://www.instagram.com/dr.andreea_nicolescu_ciobanoiu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram CMArt Dent"
                  className="rounded-full bg-gold/10 p-2 transition-colors hover:bg-gold/20"
                >
                  <Instagram className="h-5 w-5 text-gold" />
                </a>
                <a
                  href="https://www.tiktok.com/@cmart917?_r=1&_t=ZN-97IOHjczBJv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok CMArt Dent"
                  className="rounded-full bg-gold/10 p-2 transition-colors hover:bg-gold/20"
                >
                  <Music2 className="h-5 w-5 text-gold" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CMArt Dent. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {appointmentModalOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-modal-title"
          >
            <motion.div
              className="w-full max-w-md rounded-lg border bg-background p-6 text-foreground shadow-lg"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2 id="appointment-modal-title" className="text-2xl font-bold">
                    Alege metoda de contact
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Programeaza o consultatie prin apel telefonic sau trimite rapid un mesaj pe WhatsApp.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(false)}
                  className="rounded-md p-2 transition-colors hover:bg-muted"
                  aria-label="Inchide fereastra"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                <Button type="button" className="w-full gap-2" onClick={callDentist}>
                  <Phone className="h-4 w-4" />
                  Suna la {displayPhone}
                </Button>
                <Button type="button" variant="outline" className="w-full gap-2" onClick={openWhatsApp}>
                  <MessageCircle className="h-4 w-4" />
                  Deschide WhatsApp
                </Button>
              </div>

              <p className="mt-4 rounded-md bg-muted p-3 text-sm text-muted-foreground">
                Mesaj pregatit: "{whatsappMessage}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DentistryWebsite;
