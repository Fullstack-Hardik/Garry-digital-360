import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/919740044911";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 p-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] group overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <MessageCircle className="w-6 h-6 relative z-10" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 ease-in-out font-bold text-sm relative z-10">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
