import type { StaticImageData } from "next/image";

import cashIcon from '@/assets/Icons/cash.svg';
import heartIcon from '@/assets/Icons/heart.svg';
import verifyIcon from '@/assets/Icons/verify.svg';

interface ImpactStat {
  id: number;
  title: string;
  value: number;
  currencyValue?: string;
  description: string;
  icon: StaticImageData;
}

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    title: "Systèmes Développés",
    value: 13,
    currencyValue: "+",
    description:
      "Solutions logicielles conçues et déployées pour accompagner la transformation digitale de nos clients.",
    icon: cashIcon,
  },
  {
    id: 2,
    title: "Infrastructures Optimisées",
    value: 95,
    currencyValue: "%",
    description:
      "Taux de satisfaction lié à la maintenance, l’optimisation et la performance des systèmes informatiques gérés.",
    icon: heartIcon,
  },
  {
    id: 4,
    title: "Incidents Sécurisés",
    value: 10,
    currencyValue: "+",
    description:
      "Interventions en cybersécurité, incluant audits, protection, détection et réponse aux incidents.",
    icon: verifyIcon,
  }
];
