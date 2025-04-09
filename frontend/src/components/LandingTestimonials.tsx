import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  name: string;
  photo: string;
  rating: number;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
}

const LandingTestimonials = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full py-32 bg-[#09090b] text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#ec6d51] mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ne nous croyez pas sur parole ! Lisez plutôt les témoignages des
            clients qui ont trouvé satifaction chez nous, après avoir fait une
            bonne affaire en s'offrant un très bon véhicule.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center p-6 h-full">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img
                            src={testimonial.photo}
                            alt={`${testimonial.name}'s photo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "text-[#f6d44c] fill-[#f6d44c]" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-500 italic mb-4 text-center">
                          "{testimonial.quote}"
                        </p>
                        <h4 className="font-semibold text-gray-400">
                          {testimonial.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-6" />
            <CarouselNext className="-right-4 lg:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const defaultTestimonials: TestimonialProps[] = [
  {
    name: "Solange Péka",
    photo: "/solange.jpeg",
    // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    rating: 5,
    quote:
      "J'ai trouvé la voiture de mes rêves à un prix incroyable. L'ensemble du processus s'est déroulé de manière fluide et transparente. Je suis satisfaite !",
  },
  {
    name: "Adamou Moussa",
    photo: "/adamou.jpeg",
    rating: 4,
    quote:
      "Grand choix de véhicules de qualité. Chaouch Auto était bien informé et m'a aidé à trouver exactement ce que je cherchais dans les limites de mon budget.",
  },
  {
    name: "Mamouda Tapon",
    photo: "/janvier.jpeg",
    rating: 5,
    quote:
      "C'était la première fois que j'achetais une voiture d'occasion au Cameroun et j'étais nerveux, mais l'équipe m'a facilité la tâche. Ils ont répondu à mes attentes.",
  },
  {
    name: "Jean Paul Tchoungui",
    photo: "jp.jpeg",
    rating: 5,
    quote:
      "J'y ai acheté plusieurs véhicules au fil des ans. Leur engagement envers la qualité et le service à la clientèle m'incite à revenir. Faites-leur confiance, ça vaut le détour.",
  },
  {
    name: "Tony Blondeau",
    photo: "tony.png",
    rating: 4,
    quote:
      "Les options de financement proposées étaient flexibles et m'ont permis d'obtenir la voiture que je voulais avec un rapport qualité-prix très intéressant.",
  },
];

export default LandingTestimonials;
