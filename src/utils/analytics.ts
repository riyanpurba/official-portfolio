// Semua event dikirim ke dataLayer; tag GA4 dikelola di Google Tag Manager.
type DL = Record<string, unknown>;
declare global { interface Window { dataLayer: DL[] } }

export const track = (event: string, params: DL = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

// Satu listener klik untuk seluruh situs: tidak perlu mengubah tiap komponen.
export const initClickTracking = () => {
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const label = (a.getAttribute('aria-label') || a.textContent || '').trim().slice(0, 80);
    if (href.includes('wa.me')) track('click_whatsapp', { link_text: label });
    else if (/\.pdf($|\?)/i.test(href)) track('download_cv', { file_name: href.split('/').pop() });
    else if (href.startsWith('mailto:')) track('click_email', { link_text: label });
    else if (/github\.com|linkedin\.com|instagram\.com/.test(href)) track('click_social', { network: a.title || href, link_url: href });
    else if (a.hostname && a.hostname !== location.hostname) track('click_outbound', { link_url: href, link_text: label });
  });
};
