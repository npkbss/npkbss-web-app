"use client";

import Image from "next/image";

const WhatsAppFloat = () => {
  const whatsappNumber = "+8147707125";
  const defaultMessage =
    "Hi! I'd like to know more about your business automation services.";

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
