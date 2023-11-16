interface Experience {
  company: string;
  position: string;
  period: string;
  status?: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    company: "PT. ICE Messenger Indonesia",
    position: "Senior FrontEnd Developer",
    period: "Jan 2022 - Present",
    status: "Permanent",
    description: [
      "Responsible for the development and improvement of the IndoChat website, ChatNews portal, Qtoko web application, and CodeCert platform.",
      "Led a development team in enhancing the appearance and performance of the websites.",
      "Integrated cutting-edge technology and best practices to enhance user experience.",
      "Designed and developed the appearance and functionality of the ChatNews portal.",
      "Implemented interactive solutions to enhance how users navigate news and content.",
      "Ensured compliance with web accessibility standards and SEO optimization.",
      "Built and maintained the Qtoko web application with a focus on ease of point redemption and rewards.",
      "Managed the CodeCert platform for code verification and certification.",
      "Implemented new features and enhanced user interfaces.",
      "Actively participated in training and stayed updated on the latest web development technologies and practices.",
    ],
  },
  {
    company: "Creative Indigo Production",
    position: "Programmer",
    period: "November 2020 - January 2022",
    status: "Contract",
    description: [
      "Designed website interfaces using Figma.",
      "Developed and maintained the Cumicumi.com news portal.",
      "Managed the Cumicumi.com CMS for efficient content publishing.",
      "Contributed to both creative design and technical development.",
    ],
  },
  {
    company: "PT. Cari Aja Indonesia",
    position: "Software Engineer - FrontEnd",
    period: "January 2020 - September 2020",
    status: "Contract",
    description: [
      "Responsible for the development and maintenance of several client websites.",
      "Implemented technical solutions to meet client needs in web development.",
      "Ensured the quality and optimal performance of websites.",
      "Applied best practices in web development to deliver effective and efficient solutions.",
      "Actively contributed to supporting client satisfaction and maintaining positive relationships with them.",
    ],
  },
  {
    company: "PT. Pulau Sambu (Sambu Group)",
    position: "Programmer",
    period: "May 2017 - November 2019",
    status: "Contract",
    description: [
      "Maintained and ensured the smooth operation of various internal web applications within the company, resolving technical issues and optimizing performance.",
      "Developed and integrated custom modules into existing web applications, addressing user requests and project-specific requirements.",
      "Actively responded to user requests, collaborating with teams to implement new features and functionalities within web applications.",
      "Engaged in problem-solving activities related to web applications, identifying and efficiently resolving issues to minimize downtime and improve reliability.",
      "Collaborated closely with cross-functional teams to align web application changes and additions with company goals and objectives.",
      "Regularly updated web applications to meet changing user requirements and industry standards, and maintained comprehensive documentation for future reference.",
      "Conducted thorough testing and quality assurance to ensure the integrity and reliability of web applications following changes or additions.",
    ],
  },
];
