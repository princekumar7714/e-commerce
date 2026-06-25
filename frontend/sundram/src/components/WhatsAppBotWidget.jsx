import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppBotWidget = ({
  whatsappNumber = "9084486898",
  greeting = "Hello! I need help with Sundram Agri products.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

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

  useEffect(() => {
    const onDown = (e) => {
      if (!isOpen) return;
      const el = wrapperRef.current;
      if (!el) return;
      if (el.contains(e.target)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className={containerStyle}>
      {/* Floating trigger */}
      <button
        type="button"
        className={triggerStyle}
        aria-label={isOpen ? "Close chat options" : "Open chat options"}
        title="Chat with us"
        onClick={() => setIsOpen((v) => !v)}
      >
        <MessageCircle size={20} />
      </button>

      {/* Bottom sheet / popup */}
      {isOpen && (
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} className="text-green-800" />
              Missed call / Request call
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppBotWidget;

