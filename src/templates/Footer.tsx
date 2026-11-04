import { AppConfig } from '@/utils/AppConfig';
import { waLink } from '@/utils/whatsapp';
import { SocialMedia } from '@/templates/SocialMedia';

const Footer = () => (
  <footer className="border-t border-line py-14 pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
    <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <a href="#top" className="font-display text-3xl" aria-label="Kembali ke atas">RYNPRB</a>
        <p className="mt-3 max-w-xs text-sm text-muted">Fullstack Web Developer untuk UMKM, sekolah, dan bisnis. Jasa pembuatan website lewat <a href={AppConfig.studio.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">{AppConfig.studio.name}</a>.</p>
      </div>
      <div className="text-sm">
        {/* <p className="font-semibold text-accent">Kontak</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-3 block text-muted hover:text-accent">WhatsApp: +62 821-3752-7284</a> */}
      </div>
      <div className="text-sm">
        <p className="font-semibold text-accent">Ikuti saya</p>
        <SocialMedia childClass="mt-3 flex gap-5" />
      </div>
    </div>
    <p className="wrap mt-12 border-t border-line pt-6 text-sm text-muted">© {new Date().getFullYear()} {AppConfig.author}. All Right Reserved.</p>
  </footer>
);

export { Footer };
