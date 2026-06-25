import { useMemo } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppBotWidget = ({
  whatsappNumber = "9084486898",
  greeting = "Hello! I need help with Sundram Agri products.",
}) => {
  const { chatUrl, callUrl, waDisplay } = useMemo(() => {
    // wa.me expects number without + and without spaces.
    const clean = String(whatsappNumber).replace(/[^0-9]/g, "");
    const encodedGreeting = encodeURIComponent(greeting);

    // Click to open WhatsApp chat with prefilled text
    const chat = `https://wa.me/${clean}?text=${encodedGreeting}`;

    // NOTE: WhatsApp Calling deep-links are not consistently supported via plain links.
    // We still provide a WhatsApp option that asks for a call.
    const callText = encodeURIComponent(
      `Hi! Please call me. My number is... (write here)\nRegarding: ${greeting}`
    );
    const call = `https://wa.me/${clean}?text=${callText}`;

    const display = clean.length >= 10 ? `+${clean}` : clean;

    return { chatUrl: chat, callUrl: call, waDisplay: display };
  }, [whatsappNumber, greeting]);

  const containerStyle =
    "fixed right-4 bottom-6 z-50 flex flex-col gap-3 items-end";

  const bubbleStyle =
    "flex items-center gap-2 px-4 py-3 rounded-full shadow-xl text-sm font-semibold transition transform hover:scale-[1.02]";

  return (
    <div className={containerStyle}>
      {/* WhatsApp Chat */}
      <a
        href={chatUrl}
        target="_blank"
        rel="noreferrer"
        className={`${bubbleStyle} bg-green-700 text-white`}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>

      {/* Bot Chat (uses WhatsApp chat with a bot-style greeting) */}
      <a
        href={chatUrl}
        target="_blank"
        rel="noreferrer"
        className={`${bubbleStyle} bg-emerald-600 text-white`}
        aria-label="Bot chat on WhatsApp"
        title="Bot chat"
      >
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
          <span className="text-white text-xs font-bold">BOT</span>
        </span>
        Bot Chat
      </a>

      {/* WhatsApp Call (opens WhatsApp with request message) */}
      <a
        href={callUrl}
        target="_blank"
        rel="noreferrer"
        className={`${bubbleStyle} bg-green-800 text-white`}
        aria-label="Request call on WhatsApp"
        title={`Request a call on WhatsApp (${waDisplay})`}
      >
        <Phone size={18} />
        Call via WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppBotWidget;

