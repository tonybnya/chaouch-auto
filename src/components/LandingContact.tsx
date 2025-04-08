import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import WhatsApp from "./WhatsApp";
import OrDivider from "./OrDivider";

// TODO: add WhatsApp button

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z
    .string()
    .email({ message: "Veuillez saisir une adresse email valide." }),
  phone: z
    .string()
    .min(10, { message: "Veuillez saisir un numéro de téléphone valide." }),
  preferredVehicle: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Le message doit comporter au moins 10 caractères." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
  onSubmit?: (values: FormValues) => void;
}

const LandingContact = ({
  className = "",
  onSubmit,
}: ContactFormProps = {}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredVehicle: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", values);
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <div
      className={`text-white w-full max-w-4xl mx-auto p-6 bg-[#09090b] rounded-lg shadow-md border border-gray-800 ${className}`}
    >
      <div className="flex items-center justify-center">
        <WhatsApp />
      </div>

      <OrDivider />
      {/* <h2 className="text-md text-gray-400 font-light my-6 text-center uppercase"> */}
      {/*   ou */}
      {/* </h2> */}

      <p className="mb-8 text-center">
        Remplissez le formulaire ci-dessous et nous vous répondrons dans les
        plus brefs délais.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Pierre Ndoumbe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ndoumbe.pierre@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="(+237) 699 12 34 56"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville de résidence</FormLabel>
                  <FormControl>
                    <Input placeholder="Douala" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="N'hésitez pas à indiquer vos besoins ou à poser des questions..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-full md:w-[50%] bg-[#ec6d51] hover:cursor-pointer hover:scale-105"
            >
              <Send className="mr-2 h-4 w-4" /> Envoyer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LandingContact;
