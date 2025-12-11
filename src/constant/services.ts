import type { StaticImageData } from "next/image";

import developmentImg from '@/assets/Images/development.jpeg';
import maintenanceImg from '@/assets/Images/maintenance.png';
import cloudImg from '@/assets/Images/cloud-computing.jpg';
import cybersecurityImg from '@/assets/Images/Cybersécurité.jpg';
import businessImg from '@/assets/Images/points-reguliers.jpg';
import operationsImg from '@/assets/Images/operation.jpg';

interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export const services = [
  {
    title: "Développement des systèmes informatiques",
    description:
      "Conception et création de solutions logicielles adaptées aux besoins des entreprises.",
    image: developmentImg
  },
  {
    title: "Maintenance et optimisation des systèmes informatiques",
    description:
      "Support technique, optimisation de performances, gestion et mise à jour d’infrastructures.",
    image: maintenanceImg
  },
  {
    title: "Cloud Computing et Développement",
    description:
      "Mise en place de solutions cloud, migration, gestion d’environnements distribués.",
    image: cloudImg
  },
  {
    title: "Cybersécurité",
    description:
      "Protection des systèmes, audit de sécurité, surveillance et gestion des incidents.",
    image: cybersecurityImg
  },
  {
    title: "Opérations pour compte propre ou pour tiers",
    description:
      "Création de sociétés, fusions, apports, participations, gestion ou acquisition de biens.",
    image: businessImg
  },
  {
    title: "Opérations commerciales, industrielles et financières",
    description:
      "Activités mobilières ou immobilières liées directement ou indirectement à l’objet social.",
    image: operationsImg
  }
];
