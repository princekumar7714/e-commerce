import { useMemo } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppBotWidget = ({
  whatsappNumber = "9084486898",
  greeting = "Hello! I need help with Sundram Agri products.",
}) => {
  const { chatUrl, callUrl } = useMemo(() => {
    // wa.me expects number without + and without spaces.
    const clean = String(whatsappNumber).replace(/[^0-9]/g, "");
    const encodedGreeting = encodeURIComponent(greeting);

    const chat = `https://wa.me/${clean}?text=${encodedGreeting}`;

    // WhatsApp link that contains a call-request message.
    const callText = encodeURIComponent(
      `Hi! Please call me. My number is... (write here)\nRegarding: ${greeting}`
    );
    const call = `https://wa.me/${clean}?text=${callText}`;

    return { chatUrl: chat, callUrl: call };
  }, [whatsappNumber, greeting]);

  const containerStyle = "fixed right-4 bottom-6 z-50";

  const triggerStyle =
    "flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white transition transform hover:scale-[1.04] bg-green-700";

  const sheetStyle =
    "mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden";

  return (
    <div className={containerStyle}>
      {/* Floating trigger (clicking just navigates via the sheet links) */}
      <button
        type="button"
        className={triggerStyle}
        aria-label="Open chat options"
        title="Chat with us"
      >
        <MessageCircle size={20} />
      </button>

      {/* Bottom sheet / popup */}
      <div className={sheetStyle}>
        <div className="p-3 text-sm font-semibold text-gray-800 border-b border-gray-100">
          Chat Options
        </div>

        <div className="p-3 flex flex-col gap-3">
          {/* 1) Chat with us */}
          <a
            href={chatUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-green-50 hover:bg-green-100 transition font-semibold text-green-800"
            aria-label="Chat with us"
            title="Chat with us"
          >
            <MessageCircle size={18} className="text-green-700" />
            Chat with us
          </a>

          {/* 2) Missed call / call request */}
          <a
            href={callUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-green-100 hover:bg-green-200 transition font-semibold text-green-900"
            aria-label="Missed call"
            title="Missed call / Request call"
          >
            <Phone size={18} className="text-green-800" />
            Missed call / Request call
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBotWidget;

