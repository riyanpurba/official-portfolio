export interface Tech {
  name: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  tech: Tech[];
}

export const project: Project[] = [
  {
    id: 1,
    title: "CodeCert",
    slug: "codecert",
    description: "A digital system that enables certificate information to be stored in a two-dimensional code and easily verified.",
    image: "/mockup/codecert_thumb.jpg",
    url: 'https://www.code-cert.com/',
    tech: [
      {
        name: "NuxtJS",
        slug: "nuxt3"
      },
      {
        name: "TypeScript",
        slug: "typescript"
      },
      {
        name: "Tailwindcss",
        slug: "tailwind"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  },
  {
    id: 2,
    title: "ChatNews",
    slug: "chatnews",
    description: "Developed the news portal www.chatnews.id which became one of the features in the Indochat messenger application. I worked with the UI/UX design team to create a user-friendly website.",
    image: "/mockup/chatnews_thumb.jpg",
    url: 'https://chatnews.id/',
    tech: [
      {
        name: "NuxtJS",
        slug: "nuxt3"
      },
      {
        name: "TypeScript",
        slug: "typescript"
      },
      {
        name: "Tailwindcss",
        slug: "tailwind"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  },
  {
    id: 3,
    title: "QToko - Reward Card",
    slug: "qtoko-reward-card",
    description: "The details of the rewards that customers will receive can be customized by merchants. Counting down from the total number of points, the minimum transaction amount required to earn points, and the terms and conditions of the reward.",
    image: "/mockup/qtoko_thumb.jpg",
    url: 'https://qtoko.co.id/',
    tech: [
      {
        name: "NuxtJS",
        slug: "nuxtjs"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Tailwindcss",
        slug: "tailwind"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  },
  {
    id: 4,
    title: "IndoChat",
    slug: "indochat",
    description: "working with the UI/UX team to develop the official IndoChat website and contributing a number of ideas to their work. Additionally, add multiple animations and dual language functionality to the website to improve its aesthetic, responsiveness, and usability.",
    image: "/mockup/indochat_thumb.jpg",
    url: 'https://indochat.co.id/',
    tech: [
      {
        name: "NuxtJS",
        slug: "nuxtjs"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Tailwindcss",
        slug: "tailwind"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  },
  {
    id: 5,
    title: "Cumicumi",
    slug: "cumicumi",
    description: "Creating the CMS portal, creating the portal website, creating the UI/UX design for the cumicumi portal, and creating the database. and creating a user-friendly, responsive portal website",
    image: "/mockup/cumicumi_thumb.jpg",
    url: 'https://cumicumi.com/',
    tech: [
      {
        name: "ReactJS",
        slug: "react"
      },
      {
        name: "Laravel",
        slug: "laravel"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "MongoDB",
        slug: "mongodb"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  },
  {
    id: 6,
    title: "Optoloft",
    slug: "optoloft",
    description: "Optoloft is the Best Transceivers & Patch Cables Connectivity Guide Company, to fulfill your important needs of data wiring infrastructures.",
    image: "/mockup/optoloft_thumb.jpg",
    url: 'https://www.optoloft.com/',
    tech: [
      {
        name: "Laravel",
        slug: "laravel"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Sketch",
        slug: "sketch"
      },
    ]
  },
  {
    id: 7,
    title: "ZeeWork",
    slug: "zeework",
    description: "Zeework provide creative & productive coworking space in Jakarta & virtual office address, we also extend our service to legal, tax, finance and branding solution for your business",
    image: "/mockup/zeework_thumb.jpg",
    url: 'https://zeework.id/',
    tech: [
      {
        name: "Laravel",
        slug: "laravel"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Sketch",
        slug: "sketch"
      },
    ]
  },
  {
    id: 8,
    title: "The Ayoma",
    slug: "the-ayoma",
    description: "The Ayoma is a residential with an apartment concept in Serpong developed by PT PP Properti, Tbk. The Ayoma will be a hidden & peaceful housing with an oasis garden inside which located near the the city center.",
    image: "/mockup/theayoma_thumb.jpg",
    url: 'https://theayoma.co.id/',
    tech: [
      {
        name: "Laravel",
        slug: "laravel"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Sketch",
        slug: "sketch"
      },
    ]
  },
  {
    id: 9,
    title: "DomaDona",
    slug: "domadona",
    description: "Doma Dona Coffee is the best Coffee Shop in South Jakarta, we committed to give the best experience to enjoy Indonesian unique coffee beans that we roasted ourself.",
    image: "/mockup/domadona_thumb.jpg",
    url: 'https://www.domadona.com/',
    tech: [
      {
        name: "Laravel",
        slug: "laravel"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Sketch",
        slug: "sketch"
      },
    ]
  },
  {
    id: 10,
    title: "Grand Slipi Tower",
    slug: "grand-slipi-tower",
    description: "Grand Slipi Tower is an office building with an exclusive and modern concept in the Palmerah area, West Jakarta.",
    image: "/mockup/gst_thumb.jpg",
    url: 'https://grandslipi.com/',
    tech: [
      {
        name: "ReactJS",
        slug: "react"
      },
      {
        name: "JavaScript",
        slug: "javascript"
      },
      {
        name: "Bootstrap",
        slug: "bootstrap"
      },
      {
        name: "Figma",
        slug: "figma"
      },
    ]
  }
];