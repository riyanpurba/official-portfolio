import { useRef, useState } from 'react';
import * as emailjs from 'emailjs-com';

import { Reveal, Section } from '@/components/ui/Reveal';
import { AppConfig } from '@/utils/AppConfig';
import { track } from '@/utils/analytics';
import { SocialMedia } from '@/templates/SocialMedia';
import { waLink } from '@/utils/whatsapp';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const sendEmail: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm('service_am1leeb', 'template_nooe1od', e.currentTarget, '46bzyeP_kxcN8XJoy');
      setStatus('ok');
      track('generate_lead', { method: 'email_form' });
      formRef.current?.reset();
    } catch {
      setStatus('error');
    }
  };

  const sendWhatsApp = () => {
    if (!formRef.current) return;
    const d = new FormData(formRef.current);
    track('generate_lead', { method: 'whatsapp_form' });
    window.open(waLink(`Halo Riyan, saya ${d.get('nama') || ''}.\nTopik: ${d.get('layanan')}.\n\n${d.get('message') || ''}`), '_blank', 'noopener');
  };

  return (
    <Section id="kontak" eyebrow="Kontak" title="Hubungi saya" sub="Untuk kolaborasi, peluang kerja, atau pertanyaan teknis. Biasanya saya membalas dalam satu hari kerja.">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" data-cursor="Chat" className="font-display text-4xl transition-colors hover:text-accent md:text-5xl">Chat Me ↗</a>
          <p className="mt-6 text-muted">Butuh website untuk bisnis atau sekolah Anda? Kirim brief lewat <a href={AppConfig.studio.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">{AppConfig.studio.name}</a>. Atau temukan saya di:</p>
          <SocialMedia childClass="mt-5 flex gap-5" />
        </Reveal>
        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={sendEmail} className="grid gap-5">
            <label className="grid gap-2 text-sm text-muted">Nama
              <input name="nama" required autoComplete="name" className="field" placeholder="Nama Anda" />
            </label>
            <label className="grid gap-2 text-sm text-muted">Email
              <input name="email" type="email" required autoComplete="email" className="field" placeholder="nama@domain.com" />
            </label>
            <label className="grid gap-2 text-sm text-muted">Topik
              <select name="layanan" className="field">
                <option>Proyek website atau aplikasi web</option><option>Perawatan website</option><option>Kolaborasi</option>
                <option>Peluang kerja</option><option>Pertanyaan lainnya</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-muted">Pesan
              <textarea name="message" required rows={5} className="field" placeholder="Ceritakan singkat kebutuhan Anda" />
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={sendWhatsApp} className="btn btn-primary">Kirim</button>
              {/* <button type="submit" disabled={status === 'loading'} className="btn btn-ghost disabled:opacity-60">
                {status === 'loading' ? 'Mengirim...' : 'Kirim email'}
              </button> */}
            </div>
            <p role="status" aria-live="polite" className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-accent'}`}>
              {status === 'ok' && 'Pesan terkirim. Terima kasih, saya segera membalas.'}
              {status === 'error' && 'Gagal mengirim email. Coba lagi atau gunakan WhatsApp.'}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export { Contact };
