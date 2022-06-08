import React from "react";
import classNames from "classnames";
import { ReactSVG } from "react-svg";
import { IconBaseProps } from "react-icons";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaCode } from "react-icons/fa";

import {
  DataModel,
  LogoProps,
  Statut,
  ProjectType,
  Platform,
} from "../interfaces";

export enum Route {
  INTRO = "Intro",
  ABOUT = "À propos",
  CAREERS = "Formations",
  SKILLS = "Compétences",
  PROJECTS = "Projets",
  CONTACT = "Contact",
}

const data: DataModel = {
  firstName: "Nicolas",
  lastName: "MARRY",
  title: "Développeur full-stack / Mobile",
  personalDescription: [
    {
      description: "Passionné de sport",
      icon: () => "🏸",
    },
    {
      description: "Situé à la Réunion",
      icon: () => "🇷🇪",
      hasLink: "https://goo.gl/maps/dHsYDfaHf1ATLnHGA",
    },
    {
      description: "En recherche d'emploi",
      icon: () => "🖥️",
    },
    {
      description: "me@nmarry.fr",
      icon: () => "📧",
      hasLink: "mailto:me@nmarry.fr",
    },
  ],
  socials: [
    {
      social: "GitHub",
      link: "https://github.com/zygof",
      icon: <FaGithub size={32} />,
    },

    {
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/nmarry",
      icon: <FaLinkedin size={32} />,
    },
    {
      social: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=me@nmarry.fr",
      icon: <FaRegEnvelope size={32} />,
    },
  ],
  about: {
    descriptions: [
      {
        label: "pourquoi-dev",
        text: "Se réveiller chaque matin pour développer mon sens artistique est ce qui me met le plus en joie. Motivé par la satistaction du client et par le travail bien fait, je mettrai toute en oeuvre pour atteindre mes objectifs.",
      },
      {
        label: "pourquoi-moi",
        text: "Faites-moi confiance et je participerai à la croissance de l'entreprise et je saurai intégrer votre équipe d'experts. Je suis une personne engagée, passionnée par les nouvelles technologies.",
      },
      {
        label: "futur",
        text: "Mon plus grand bonheur serait de mettre tout mon expertise au profit de mon île la Réunion 😌😌",
      },
    ],
  },
  careers: [
    {
      from: new Date("2020-01-01"),
      to: new Date("2022-01-01"),
      diploma: "MASTER - Bac + 5",
      title: " Expert en Développement Mobile et IoT",
      location: "YNOV Campus (Bordeaux)",
      link: "https://ynov-bordeaux.com/mastere-developpement-mobile-iot",
    },
    {
      from: new Date("2018-01-01"),
      to: new Date("2020-01-01"),
      diploma: "RNCP NIVEAU 6 - Bac + 4",
      title: "Conception Développement d'Application",
      location: "Expernet (Le Port)",
      link: "https://expernet-campus.re/formation/cda-bac4",
    },
    {
      from: new Date("2016-01-01"),
      to: new Date("2018-01-01"),
      diploma: "BTS - Bac + 2",
      title: "Système Numérique",
      option: "Informatique et Réseau",
      location: "Lycée Roland Garros (Tampon)",
      link: "https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/La-Reunion/La-Reunion/lycee-polyvalent-roland-garros/bts-systemes-numeriques-option-a-informatique-et-reseaux",
    },
    {
      from: new Date("2015-01-01"),
      diploma: "BAC",
      title: "Scientifique Science Ingénieur",
      option: "Informatique et Science du Numérique",
      location: "Lycée George Brassens (St Denis)",
      link: "https://www.onisep.fr/Ressources/Univers-Lycee/Lycees/La-Reunion/La-Reunion/section-d-enseignement-professionnel-du-lycee-georges-brassens",
    },
  ],
  skills: [
    {
      type: "Frontend",
      elements: [
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
      ],
    },
    {
      type: "Backend",
      elements: [
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
      ],
    },
    {
      type: "Soft skill",
      elements: [
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
        {
          name: "React",
          icon: (props?: IconBaseProps) => <FaCode {...props} />,
        },
      ],
    },
  ],
  projects: [
    {
      name: "ISIS Diabète",
      statut: Statut.IN_PROGRESS,
      type: ProjectType.PRO,
      platforms: [Platform.WEB, Platform.ANDROID],
      description:
        "Gestion prescriptions des appareils médicaux destinés aux patients atteints du diabète.",
      technologies: ["React", "Express JS", "MongoDB"],
    },
    {
      name: "Influx",
      statut: Statut.IN_PROGRESS,
      type: ProjectType.SCHOOL,
      platforms: [Platform.IOS, Platform.ANDROID],
      description:
        "Application de rencontre entre des micro-influenceurs et entreprises. L'entreprise se fait connaître de tous par le biai d'influenceur en échange d'une contre partie.",
      technologies: ["React Native", "Firebase", "Express JS", "MongoDB"],
    },
    {
      name: "OUTTA Project",
      statut: Statut.DONED,
      type: ProjectType.PERSONAL,
      platforms: [Platform.IOS, Platform.ANDROID],
      description:
        "Application listant les reductions proposées par des restaurants à proximités pour la consommation sur place. Le but est de dynamisé le traffic client durant la periode post-confinement.",
      technologies: ["React Native", "Firebase", "Express JS", "MongoDB"],
    },

    {
      name: "MySeance",
      statut: Statut.IN_PROGRESS,
      type: ProjectType.PERSONAL,
      platforms: [Platform.ANDROID, Platform.IOS],
      description:
        "Gestion de pointage d'adhérent de club de sport. Intégration d'un système de statistique du trafic de présence.",
      technologies: ["C#", "MongoDB", "Kotlin"],
    },

    {
      name: "StatMag",
      statut: Statut.IN_PROGRESS,
      type: ProjectType.PERSONAL,
      platforms: [Platform.WEB, Platform.DESKTOP],
      description:
        "Consultation des statistiques de ventes magasin. Une partie application desktop est intégrée pour la partie administration.",
      technologies: ["Java FX", "Spring Boot", "PHP", "Javascript", "bash"],
    },

    {
      name: "InventaireDEE",
      statut: Statut.DEPLOYED,
      type: ProjectType.PRO,
      platforms: [Platform.DESKTOP],
      description:
        "Gestion d’inventaire matériel pour recyclage. Exportation format E-DECHET.",
      technologies: ["Java FX"],
    },

    {
      name: "MyStock",
      statut: Statut.TEST,
      type: ProjectType.PRO,
      platforms: [Platform.WEB],
      description: "Gestion de stock matériel informatique.",
      technologies: ["SQL Server", "PHP", "Javascript"],
    },

    {
      name: "QCMExpernet",
      statut: Statut.DONED,
      type: ProjectType.SCHOOL,
      platforms: [Platform.DESKTOP],
      description:
        "Gestion de questionnaire d'évaluation d'entrée. Consultation des statistiques questionnaires intégrées.",
      technologies: ["SQL Server", "Java FX"],
    },

    {
      name: "ANCA",
      statut: Statut.IN_PROGRESS,
      type: ProjectType.PERSONAL,
      platforms: [Platform.WEB],
      description:
        "Centralisation des données de tout les refuges animaux de île de la Réunion. Système de suivi médical des animaux.",
      technologies: ["Angular", "PostgreSQL", "TypeORM"],
    },

    {
      name: "GLPI Client",
      statut: Statut.TEST,
      type: ProjectType.PRO,
      platforms: [Platform.DESKTOP],
      description: "Système de gestion des tickets GLPI pour les employés.",
      technologies: ["JavaFX"],
    },

    {
      name: "NMARRY-Project",
      statut: Statut.DEPLOYED,
      type: ProjectType.PERSONAL,
      platforms: [Platform.WEB],
      description: "Portfolio PERSO.",
      technologies: ["VueJS", "Vuetify"],
    },

    {
      name: "CaddyRUN",
      statut: Statut.DONED,
      type: ProjectType.SCHOOL,
      platforms: [Platform.ARDUINO],
      description:
        "Projet Bac S SI : Conception d'un caddie électrique pour les personnes à mobilité réduite.",
      technologies: ["Arduino", "C#"],
    },

    {
      name: "Ball Balance",
      statut: Statut.DONED,
      type: ProjectType.SCHOOL,
      platforms: [Platform.ARDUINO],
      description:
        "BAC S Spécialité ISN : Conception d'un plateau à système d'asservissement.",
      technologies: ["Arduino", "C#"],
    },
  ],
  profile: "/profile.png",
  cv: "/CV-Nicolas MARRY.pdf",
};

export const Logo: React.FunctionComponent<LogoProps> = ({
  className,
  isDarkMode,
  onClick,
}) => (
  <span
    className={classNames(["flex flex-row items-center", className])}
    onClick={onClick}
  >
    <ReactSVG
      src="logo.svg"
      beforeInjection={(svg) => {
        svg.classList.add(
          "w-7",
          "logo",
          "transition-colors",
          "duration-300",
          isDarkMode ? "darkMode" : "default"
        );
      }}
    />
    <div className="flex text-2xl font-bold ml-2">
      <p className="text-gray-500 mr-2">{data.firstName}</p>{" "}
      <p className="text-gray-800">{data.lastName}</p>
    </div>
  </span>
);

export default data;