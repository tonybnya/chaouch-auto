import { Send } from "lucide-react";
import { useRef, useEffect } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import WhatsApp from "./WhatsApp";
import OrDivider from "./OrDivider";

interface ContactFormProps {
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LandingContact = ({
  className = "",
  onSubmit,
}: ContactFormProps = {}) => {
  // Create a ref for the redirect input field
  const redirectInputRef = useRef<HTMLInputElement>(null);

  // Set the complete URL for redirection when component mounts
  useEffect(() => {
    if (redirectInputRef.current && typeof window !== 'undefined') {
      redirectInputRef.current.value = `${window.location.origin}/merci`;
    }
  }, []);

  // Note: First submission to FormSubmit.co will send a confirmation email to the form owner's email
  // The form owner must click the confirmation link before emails will be delivered
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Log form submission for debugging
    console.log("Form submitted");
    
    // Call the onSubmit prop if provided
    if (onSubmit) {
      onSubmit(event);
    }
    
    // Allow the default form submission to proceed - do not prevent default
  };
  return (
    <div
      id="contact"
      className={`text-white w-full max-w-4xl mx-auto p-6 bg-[#09090b] rounded-lg shadow-md border border-gray-800 ${className}`}
    >
      <div className="flex items-center justify-center">
        <WhatsApp />
      </div>

      <OrDivider />

      <p className="mb-8 text-center">
        Remplissez le formulaire ci-dessous et nous vous répondrons dans les
        plus brefs délais.
      </p>

      <form
        method="POST"
        action="https://formsubmit.co/arounachaouch@gmail.com"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nom
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Pierre Ndoumbe"
              required
              minLength={3}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="ndoumbe.pierre@gmail.com"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Numéro de téléphone
            </label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="(+237) 699 12 34 56"
              required
              minLength={9}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ville de résidence
            </label>
            <Input
              id="city"
              name="city"
              placeholder="Douala"
              required
              minLength={3}
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="N'hésitez pas à indiquer vos besoins ou à poser des questions..."
            className="min-h-[120px] bg-background"
            required
            minLength={10}
          />
        </div>

        {/* FormSubmit.co configuration fields */}
        <input
          type="hidden"
          name="_subject"
          value="Chaouch Auto - Nouveau message arrivé !!!"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input 
          type="hidden" 
          name="_next" 
          ref={redirectInputRef}
          defaultValue="/merci" 
        />
        {/* Honeypot field to prevent spam */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        {/* Disable email auto-response */}
        <input type="hidden" name="_autoresponse" value="Merci pour votre message. Nous vous contacterons dans les plus brefs délais." />
        {/* Disable email template */}
        <input type="hidden" name="_template" value="table" />

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="w-full md:w-[50%] bg-[#ec6d51] hover:cursor-pointer hover:scale-105"
          >
            <Send className="mr-2 h-4 w-4" /> Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingContact;
