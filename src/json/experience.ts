export type EmploymentType = "permanent" | "contract" | "project";

/** Bentuk data mentah. Tanggal memakai format "YYYY-MM"; endDate null = masih berjalan. */
interface ExperienceRecord {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  employmentType: EmploymentType;
  technologies: string[];
  description: string[];
}

/** Bentuk yang dipakai komponen: data mentah + label siap tampil. */
export interface Experience extends ExperienceRecord {
  period: string;
  status: string;
}

const STATUS_LABEL: Record<EmploymentType, string> = {
  permanent: "Permanent",
  contract: "Contract",
  project: "Project Base",
};

function formatMonth(yearMonth: string, locale: string): string {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
    new Date(year, month - 1, 1)
  );
}

export function formatPeriod(
  startDate: string,
  endDate: string | null,
  locale = "en-US"
): string {
  const end = endDate ? formatMonth(endDate, locale) : "Present";
  return `${formatMonth(startDate, locale)} - ${end}`;
}

const records: ExperienceRecord[] = [
  {
    id: "tilaka",
    company: "PT Tilaka Nusa Teknologi",
    position: "Senior Front End Engineer",
    startDate: "2025-06",
    endDate: "2025-10",
    employmentType: "contract",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: [
      "Developed the StarSign web interface (starsign.id), Tilaka's electronic signature service, using Next.js, TypeScript, and Tailwind CSS.",
      "Built user account flows: sign-in with a Tilaka account, registration, and password and Tilaka Name recovery.",
      "Implemented bilingual support (Indonesian and English) across the application pages.",
      "Maintained and enhanced the existing codebase, primarily using Next.js.",
      "Built responsive, user-friendly interfaces and delivered frontend features aligned with client requirements.",
      "Collaborated on secure API integrations and frontend feature development.",
      "Used AI-assisted development tools (Cursor) day to day for prototyping, code review, and refactoring.",
    ],
  },
  {
    id: "inovasi-karya-batam",
    company: "PT Inovasi Karya Batam",
    position: "Frontend Developer",
    startDate: "2024-06",
    endDate: "2025-03",
    employmentType: "project",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Docker"],
    description: [
      "Collaborated with the UI/UX team to translate business requirements into intuitive and responsive user interfaces.",
      "Developed the company profile website for PT Xing Yatu Indonesia using React.js and TypeScript, focusing on performance and scalability.",
      "Transformed Figma designs into clean, responsive layouts using Tailwind CSS.",
      "Deployed the application to a VPS using Docker, ensuring a stable and maintainable production environment.",
      "Set up and configured the VPS server from scratch, including dependency installation and performance optimization.",
    ],
  },
  {
    id: "ice-messenger",
    company: "PT ICE Messenger Indonesia",
    position: "Senior Frontend Developer",
    startDate: "2022-01",
    endDate: "2023-11",
    employmentType: "permanent",
    technologies: ["Nuxt.js (v2 & v3)", "JavaScript", "TypeScript", "Tailwind CSS", "Pinia", "Vuex", "SCSS", "HTML", "CSS", "PHP"],
    description: [
      "Responsible for the development and improvement of the IndoChat website, ChatNews portal, Qtoko web application, and CodeCert platform.",
      "Led a development team in enhancing the appearance and performance of the websites.",
      "Integrated modern technology and best practices to enhance user experience.",
      "Designed and developed the appearance and functionality of the ChatNews portal.",
      "Implemented interactive solutions to improve how users navigate news and content.",
      "Ensured compliance with web accessibility standards and SEO optimization.",
      "Built and maintained the Qtoko web application with a focus on ease of point redemption and rewards.",
      "Managed the CodeCert platform for code verification and certification, implementing new features and improving user interfaces.",
    ],
  },
  {
    id: "creative-indigo",
    company: "Creative Indigo Production",
    position: "Programmer",
    startDate: "2020-11",
    endDate: "2022-01",
    employmentType: "contract",
    technologies: ["React.js", "Redux", "JavaScript", "Laravel", "MongoDB", "Bootstrap", "SCSS", "HTML", "CSS", "PHP"],
    description: [
      "Designed website interfaces using Figma.",
      "Developed and maintained the Cumicumi.com news portal.",
      "Managed the Cumicumi.com CMS for efficient content publishing.",
      "Contributed to both creative design and technical development.",
    ],
  },
  {
    id: "cari-aja",
    company: "PT Cari Aja Indonesia",
    position: "Software Engineer - Frontend",
    startDate: "2020-01",
    endDate: "2020-09",
    employmentType: "contract",
    technologies: ["Laravel", "Bootstrap", "jQuery", "HTML", "CSS", "PHP"],
    description: [
      "Responsible for the development and maintenance of several client websites.",
      "Implemented technical solutions to meet client needs and ensured the quality and performance of the websites.",
      "Applied web development best practices to deliver effective and efficient solutions.",
      "Maintained positive client relationships through responsive communication.",
    ],
  },
  {
    id: "pulau-sambu",
    company: "PT Pulau Sambu (Sambu Group)",
    position: "Programmer",
    startDate: "2017-05",
    endDate: "2019-11",
    employmentType: "contract",
    technologies: ["CodeIgniter", "Bootstrap", "jQuery", "HTML", "CSS", "PHP", "SQL Server", "PostgreSQL"],
    description: [
      "Maintained internal web applications, resolving technical issues and optimizing performance to keep operations running smoothly.",
      "Developed and integrated custom modules into existing web applications, addressing user requests and project-specific requirements.",
      "Collaborated with cross-functional teams to add new features and align web application changes with company goals.",
      "Identified and resolved application issues to minimize downtime and improve reliability.",
      "Updated web applications regularly to match evolving user needs, and maintained documentation for future reference.",
      "Conducted testing and quality assurance after every change to ensure the integrity and reliability of the applications.",
    ],
  },
];

export const experience: Experience[] = records
  .map((item) => ({
    ...item,
    period: formatPeriod(item.startDate, item.endDate),
    status: STATUS_LABEL[item.employmentType],
  }))
  .sort((a, b) => b.startDate.localeCompare(a.startDate)); // terbaru di atas