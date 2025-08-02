export function openWhatsApp() {
    const phoneNumber = "+33644657615"; // Format international sans espaces
    const message = "Hello, I want free trial please.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

export function openTelegram() {
    const telegramUsername = "genuistv";
    const message = "Hello, I want free trial please.";
    const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
};
