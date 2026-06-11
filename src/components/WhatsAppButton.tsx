import { whatsappLink } from '@/data/site';
import { WhatsAppIcon } from '@/components/icons';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Silvacal Technologies on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric text-white shadow-lg transition hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}
