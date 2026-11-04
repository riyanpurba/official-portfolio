export const WA_NUMBER = '6281385079843';
export const DEFAULT_WA_MESSAGE = 'Halo Riyan, saya tertarik dengan jasa pembuatan website Anda.';

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
