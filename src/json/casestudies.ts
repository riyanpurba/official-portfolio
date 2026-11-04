export interface CaseStudy {
  short: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  url?: string;
}

export const casestudies: CaseStudy[] = [
  {
    short: 'Cumicumi',
    title: 'Cumicumi — Portal Berita dengan CMS',
    client: 'Creative Indigo Production',
    problem: 'Redaksi membutuhkan portal berita yang nyaman dibaca pengunjung dan mudah dikelola untuk publikasi konten rutin.',
    solution: 'Membangun portal berita responsif beserta CMS dan database, lalu merancang UI/UX-nya di Figma agar penerbitan konten berjalan efisien.',
    role: 'Programmer: desain antarmuka, pengembangan portal, CMS, dan database.',
    tech: ['React', 'Laravel', 'MongoDB', 'Bootstrap', 'Figma'],
    url: 'https://cumicumi.com/',
  },
  {
    short: 'Xing Yatu',
    title: 'Company Profile PT. Xing Yatu Indonesia',
    client: 'PT. Xing Yatu Indonesia',
    problem: 'Perusahaan membutuhkan website profil yang tampil profesional, performa baik, dan siap dipakai di server produksi.',
    solution: 'Mengubah desain Figma menjadi layout responsif, lalu men-deploy aplikasi ke VPS dengan Docker, termasuk setup server dan optimasi performa.',
    role: 'Frontend Developer: pengembangan website, kolaborasi dengan tim UI/UX, deployment dan setup VPS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Docker', 'VPS'],
  },
];
