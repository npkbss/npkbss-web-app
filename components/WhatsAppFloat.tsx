"use client";

import Image from "next/image";

const WhatsAppFloat = () => {
  const whatsappNumber = "+8147707125";
  const defaultMessage =
    "Hi! I’m interested in your business automation and digital solutions. I’d like to understand the next steps.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
        className="group-hover:scale-110 transition-transform duration-200"
      />
    </button>
  );
};

export default WhatsAppFloat;
