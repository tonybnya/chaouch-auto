const WhatsApp = () => {
  return (
    <div className="bg-[#25D366] text-white px-2 py-4 rounded-md hover:scale-110 cursor-pointer">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/237690310024"
        className="flex gap-2 items-center"
      >
        <img
          alt="Discuter sur WhatsApp"
          src="/whatsapp.svg"
          className="h-6 w-6"
        />
        <span className="">Ecrivez-nous sur WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsApp;
