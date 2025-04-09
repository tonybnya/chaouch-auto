import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="py-40 bg-[#09090b] text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#ec6d51] mb-4">
            <a href="contact">Prendre contact</a>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vous avez des questions sur nos véhicules ou vous souhaitez un
            accompagnement dans l'acquisition d'un véhicule ? Remplissez le
            formulaire ci-dessous et nous vous répondrons dès que possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
