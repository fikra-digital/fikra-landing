import type { StaticImageData } from "next/image";

import youthcare from '@/assets/Images/youthcare.png';
import fikra from '@/assets/Images/fikra.png';

export interface Project {
    id: number;
    img: StaticImageData;
    title: string;
    cat: string;
    description: string;
    technologies: string[];
    linkWeb: string;
    linkGithub: string;
    repoType: 'public' | 'private';
}

export const ProjectData: Project[] =[
    {
        id: 1,
        img: youthcare,
        title: "Youth Care",
        cat: "Site Web ONG",
        description: "Une plateforme web pour une ONG qui fournit des informations sur sa mission, ses programmes et ses services, ainsi que des ressources pour l’autonomisation et le développement des jeunes.",
        technologies: ['typescript', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        linkWeb: 'https://youthcarerdc.org/',
        linkGithub: 'https://github.com/fikra-digital/youth-care',
        repoType: 'private',
    },
    {
        id: 4,
        img: fikra,
        title: "Fikra Digital",
        cat: "Site Web d’Entreprise",
        description: "Un site web corporate pour Fikra Digital, une agence digitale qui fournit des services de développement web, de design et de conseil IT aux clients à travers l’Afrique.",
        technologies: ['typescript', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        linkWeb: 'https://fikra.digital/',
        linkGithub: 'https://github.com/fikra-digital/fikra-landing',
        repoType: 'private',
    },
]