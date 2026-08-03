const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hola@chatre.io";
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || `mailto:${contactEmail}?subject=Solicitud%20de%20diagn%C3%B3stico`;
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() || `mailto:${contactEmail}?subject=Quiero%20hablar%20con%20Chatre`;

export const siteConfig = {
  name: "Chatre",
  url: "https://chatre.io",
  contactEmail,
  bookingUrl,
  whatsappUrl,
  whatsappAvailable: Boolean(process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim()),
} as const;
