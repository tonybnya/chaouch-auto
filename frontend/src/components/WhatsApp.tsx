const WhatsApp = () => {
  return (
    <div className="bg-[#25D366] text-white p-4 rounded-md hover:scale-110 cursor-pointer">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/237690310024"
        className="flex gap-2 items-center"
      >
        <img
          alt="Discuter sur WhatsApp"
          src="/whatsapp.svg"
          className="h-8 w-8"
        />
        <span className="font-bold">Ecrivez-nous sur WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsApp;
