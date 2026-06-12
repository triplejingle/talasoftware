'use client'
import {
    ArrowPathIcon, ChatBubbleLeftRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon, UserCircleIcon, WrenchScrewdriverIcon,
    ClockIcon,
    BanknotesIcon,
    EyeIcon,
    CircleStackIcon,
    ArrowTrendingUpIcon,
} from '@heroicons/react/20/solid'

import Link from "next/link";
import Image from "next/image";
import vattenfal from "@/public/vattenfal.svg";
import triniti from "@/public/trinitsolutions.webp";
import tennet from "@/public/tennet.svg";
import thinkproject from "@/public/thinkproject.png";
import smartrobotsolutions from "@/public/smartrobotsolutions.png";
import dotoffice from "@/public/dotoffice.png";
import React, {useEffect, useState} from "react";
import {
    ArrowsRightLeftIcon,
    CheckIcon,
    CodeBracketIcon,
    MagnifyingGlassIcon,
    RocketLaunchIcon
} from "@heroicons/react/16/solid";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";

const primaryFeatures = [
    {
        name: 'Persoonlijk contact',
        description:
            'Er is direct contact met de ontwikkelaar(s) die jouw software bouwt. Geen tussenpersonen, maar korte afstemming en duidelijke communicatie.',
        href: '#',
        icon: UserCircleIcon,
    },
    {
        name: 'Korte lijnen',
        description:
            'Vragen, feedback en nieuwe ideeën worden snel opgepakt. Door korte communicatielijnen kunnen wijzigingen efficiënt worden doorgevoerd.',
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Technische expertise',
        description:
            'Met meer dan 11 jaar programmeerervaring ontwikkelen we betrouwbare, onderhoudbare en schaalbare software die aansluit op jouw bedrijfsprocessen.',
        href: '#',
        icon: WrenchScrewdriverIcon,
    },
]
const secondaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ServerIcon,
    },
]
const stats = [
    {id: 1, name: 'Jaren ervaring', value: '11+'},
    {id: 2, name: 'Systemen gebouwd & verbeterd', value: '10+'},
    {id: 3, name: 'Gebruikers', value: '8000+'}
]
const footerNavigation = {
    solutions: [
        {name: 'Hosting', href: '#'},
        {name: 'Data Services', href: '#'},
        {name: 'Uptime Monitoring', href: '#'},
        {name: 'Enterprise Services', href: '#'},
    ],
    support: [
        {name: 'Pricing', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
        {name: 'API Reference', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
        {name: 'Partners', href: '#'},
    ],
    legal: [
        {name: 'Claim', href: '#'},
        {name: 'Privacy', href: '#'},
        {name: 'Terms', href: '#'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}
const problems = [
    {
        name: 'Je team is veel tijd kwijt aan zoeken en overtypen',
        description:
            'Medewerkers werken vaak in meerdere systemen tegelijk om de juiste gegevens te vinden. Dat kost onnodig veel tijd, leidt regelmatig tot fouten en maakt samenwerken minder efficiënt dan nodig is.',
        icon: CircleStackIcon,
    },
    {
        name: 'Verouderde software maakt je werk onnodig traag.',
        description:
            'Oude systemen zijn vaak langzaam en passen niet meer bij hoe je bedrijf tegenwoordig werkt. Daardoor kosten zelfs simpele taken meer tijd dan nodig is.',
        icon: ClockIcon,
    },
    {
        name: 'Software die niet meegroeit met je bedrijf',
        description:
            'Wat eerst goed werkte, kan je groei later juist in de weg zitten. Nieuwe processen, extra medewerkers of meer klanten vragen om software die makkelijk kan worden aangepast en met je bedrijf kan meegroeien.”',
        icon: ArrowTrendingUpIcon,
    },
]

const features = [
    {
        name: 'Processen automatiseren',
        description: 'Handmatige handelingen worden vervangen door slimme workflows, zodat je team sneller werkt en minder fouten maakt.',
    },
    { name: 'Centraal overzicht van je data', description: 'Alle informatie komt samen in één systeem, in plaats van verspreid over Excel, e-mail en losse tools.' },
    {
        name: 'Op maat voor jouw werkwijze',
        description: 'Geen standaard software, maar een oplossing die precies aansluit op hoe jouw bedrijf werkt.',
    },
    { name: 'Schaalbaar met je groei', description: 'Het systeem groeit mee met je organisatie, nieuwe processen en extra medewerkers.' },
    { name: 'Realtime inzicht', description: 'Altijd actuele data en dashboards om snel beslissingen te nemen.' },
    { name: 'Betere samenwerking', description: 'Teams werken in één omgeving samen, zonder dubbel werk of miscommunicatie.' },
    { name: 'Snelle aanpassingen', description: 'Nieuwe functies of processen kunnen snel worden toegevoegd zonder compleet nieuwe software.' },
    { name: 'Mobiel en desktop toegankelijk', description: 'Werkt overal, zodat je team altijd toegang heeft tot de juiste informatie.' },
]

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const werkwijzes = [
    {
        name: 'Inzicht in jullie processen',
        description:
            'We starten met het begrijpen van hoe jullie bedrijf werkt. We brengen processen, afdelingen en knelpunten in kaart zodat we precies weten waar tijd verloren gaat en waar verbetering mogelijk is.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Vertaling naar een slimme oplossing',
        description:
            'We vertalen jullie manier van werken naar een logisch en overzichtelijk softwaresysteem dat aansluit op de praktijk, niet op losse tools of theorie.',
        icon: ArrowsRightLeftIcon,
    },
    {
        name: 'Bouwen in korte stappen',
        description:
            'We ontwikkelen de software stap voor stap. Tussentijds geven jullie feedback zodat het systeem precies aansluit op de dagelijkse werkwijze binnen jullie organisatie.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Livegang en optimalisatie',
        description:
            'We zorgen dat de software goed wordt geïntroduceerd in jullie organisatie en blijven verbeteren waar nodig zodat het systeem ook echt goed blijft werken in de praktijk.',
        icon: RocketLaunchIcon,
    },
];
export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY * 0.2);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (

        <div >

            <main className={"bg-zinc-800"}>
                {/* Hero section */}
                {/*<div*/}
                {/*    className="absolute inset-0  bg-[url(../public/servicesapi2.png)] bg-cover bg-center -scale-x-100"></div>*/}
                <div className="absolute inset-0 overflow-hidden -scale-x-100">
                    <div
                        className="absolute inset-0 bg-[url('/servicesapi2.png')] bg-cover bg-center -scale-x-100 will-change-transform"
                        style={{
                            transform: `translateY(${offset}px) scaleX(-1)`,
                        }}
                    />
                </div>
                <div className="relative isolate overflow-hidden ">
                    {/*<svg*/}
                    {/*    aria-hidden="true"*/}
                    {/*    className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"*/}
                    {/*>*/}
                    {/*  <defs>*/}
                    {/*    <pattern*/}
                    {/*        x="50%"*/}
                    {/*        y={-1}*/}
                    {/*        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"*/}
                    {/*        width={200}*/}
                    {/*        height={200}*/}
                    {/*        patternUnits="userSpaceOnUse"*/}
                    {/*    >*/}
                    {/*      <path d="M.5 200V.5H200" fill="none" />*/}
                    {/*    </pattern>*/}
                    {/*  </defs>*/}
                    {/*  <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">*/}
                    {/*    <path*/}
                    {/*        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"*/}
                    {/*        strokeWidth={0}*/}
                    {/*    />*/}
                    {/*  </svg>*/}
                    {/*  <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />*/}
                    {/*</svg>*/}
                    <div
                        aria-hidden="true"
                        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                            {/*<div className="mt-24 sm:mt-32 lg:mt-16">*/}
                            {/*  <a href="#" className="inline-flex space-x-6">*/}
                            {/*  <span*/}
                            {/*      className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/25 ring-inset">*/}
                            {/*    What's new*/}
                            {/*  </span>*/}
                            {/*    <span className="inline-flex items-cen ter space-x-2 text-sm/6 font-medium text-gray-300">*/}
                            {/*    <span>Just shipped v1.0</span>*/}
                            {/*    <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-500"/>*/}
                            {/*  </span>*/}
                            {/*  </a>*/}
                            {/*</div>*/}
                            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                                Bespaar tijd en creëer overzicht met software op maat voor mkb.
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                                Onze software sluit perfect aan op jullie processen,
                                waardoor er minder handmatig werk nodig is,
                                minder fouten worden gemaakt en direct meer grip krijgen over jullie bedrijf.
                            </p>
                            <div className={"flex flex-row justify-between mt-5"}>
                                <div className={"flex flex-row gap-x-4"}>
                                    <ClockIcon aria-hidden="true"
                                               className="mt-1 size-5 flex-none text-indigo-400"/>
                                    <strong className="font-semibold text-white">11+ jaar ervaring</strong>
                                </div>

                                <div className={"flex flex-row gap-x-4"}>
                                    <BanknotesIcon aria-hidden="true"
                                                   className="mt-1 size-5 flex-none text-indigo-400"/>
                                    <strong className="font-semibold text-white">10+ systemen gebouwd</strong>
                                </div>

                                <div className={"flex flex-row gap-x-4"}>
                                    <EyeIcon aria-hidden="true"
                                             className="mt-1 size-5 flex-none text-indigo-400"/>
                                    <strong className="font-semibold text-white">8000+ gebruikers</strong>
                                </div>

                            </div>


                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Ontdek hoe je jouw bedrijf efficiënter laat werken
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-white">
                                    Contact opnemen <span aria-hidden="true">→</span>
                                    {/*gratis scan*/}
                                </a>
                            </div>
                        </div>

                        <div
                            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <img
                                    alt="App screenshot"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                                    width={2432}
                                    height={1442}
                                    className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                                />
                            </div>

                        </div>
                    </div>

                </div>

                {/* vertrouwd door */}
                <div>
                <h2 className="text-center text-lg/8 font-semibold text-white">
                    Onder andere vertrouwd door deze bedrijven
                </h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
                    <div
                        className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 bg-white/30">
                        <div className="bg-white/44 p-8 sm:p-10">

                            <Link href={"https://www.vattenfall.nl/"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={vattenfal}
                                    width={158}
                                    height={48}
                                    className="max-h-12 w-full object-contain "
                                    priority
                                />

                            </Link>
                        </div>
                        <div className="bg-white/44 p-6 sm:p-10">
                            <Link href={"https://trinitisolutions.nl/"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={triniti}
                                    width={158}
                                    height={48}
                                    className="max-h-12 w-full object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        <div className="bg-white/44 p-6 sm:p-10">
                            <Link href={"https://www.tennet.eu/nl"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={tennet}
                                    width={158}
                                    height={48}
                                    className=" max-h-12 w-full object-contain"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="bg-white/44 p-6 sm:p-10">
                            <Link href={"https://www.thinkproject.com/"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={thinkproject}
                                    width={158}
                                    height={48}
                                    className="max-h-12 w-full object-contain"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="bg-white/44 p-6 sm:p-10">
                            <Link href={"https://smartrobot.solutions/"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={smartrobotsolutions}
                                    width={158}
                                    height={48}
                                    className=" max-h-12 w-full object-contain "
                                    priority
                                />
                            </Link>
                        </div>
                        {/*<div className={"col-span-2 max-h-12 w-full object-contain lg:col-span-1"}>*/}
                        {/*  <Tennet width={200}/>*/}
                        {/*</div>*/}
                        <div className="bg-white/44 p-6 sm:p-10">
                            <Link href={"https://www.dotoffice.info/"} className={"col-span-2 lg:col-span-1 "}>
                                <Image
                                    alt="Reform"
                                    src={dotoffice}
                                    width={158}
                                    height={48}
                                    className="max-h-12 w-full object-contain "
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                </div>

                {/* probleem */}
                <div className="overflow-hidden py-24 sm:py-32 mt-32 bg-primary-400 bg-blend-multiply bg-[url(../public/servicesapi2.png)] inset-0 bg-cover bg-center bg-no-repeat">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                        Herken je dit in je bedrijf?
                                    </p>
                                    <p className="mt-6 text-lg/8 text-gray-300">
                                        Gegevens staan in Excel, e-mails en losse tools verspreid, waardoor je team constant moet zoeken, overtypen en corrigeren. Daardoor gaan er dagelijks tijd en overzicht verloren.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                                        {problems.map((feature) => (
                                            <div key={feature.name} className="relative pl-9">
                                                <dt className="inline font-semibold text-white">
                                                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                                                    {feature.name}
                                                </dt>{' '}
                                                <dd className="inline">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:px-0">
                                <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
                                    <div
                                        aria-hidden="true"
                                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
                                    />
                                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                        <img
                                            alt="Product screenshot"
                                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                                            width={2432}
                                            height={1442}
                                            className="-mb-12 w-228 max-w-none rounded-tl-xl bg-gray-950 ring-1 ring-white/10"
                                        />
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 ring-1 ring-white/10 ring-inset sm:rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* oplossing */}

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-30  py-24 sm:py-32">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2">

                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    Één maatwerk platform voor je bedrijf
                                </p>
                                <p className="mt-6 text-base/7 text-gray-300">
                                    Wij bouwen één centraal systeem dat jouw processen, data en teams samenbrengt.
                                    Geen losse Excel-bestanden, geen versnipperde tools, maar volledige controle en overzicht.
                                </p>
                            </div>
                            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="font-semibold text-white">
                                            <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-indigo-400" />
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>


                {/* hoe wij werken */}
                <div className="relative  ">
                    <div className="absolute inset-0 bg-[url('../public/servicesapi2.png')] bg-cover bg-center bg-no-repeat -scale-x-100 bg-primary-400 bg-blend-multiply"></div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base/7 font-semibold text-indigo-400">Onze aanpak</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                                Alles wat je nodig hebt om software succesvol in te voeren in jullie bedrijf
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-300">
                                Wij zorgen ervoor dat nieuwe software niet iets losstaands wordt, maar echt aansluit op hoe jullie organisatie werkt.
                                We brengen processen in kaart, bouwen stap voor stap en zorgen dat het direct bruikbaar is in de dagelijkse praktijk.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {werkwijzes.map((werkwijze) => (
                                    <div key={werkwijze.name} className="relative pl-16">
                                        <dt className="text-base/7 font-semibold text-white">
                                            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                                <werkwijze.icon aria-hidden="true" className="size-6 text-white" />
                                            </div>
                                            {werkwijze.name}
                                        </dt>
                                        <dd className="mt-2 text-base/7 text-gray-400">{werkwijze.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                </div>
                {/* waarom wij */}
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">

                        <h2 className="text-base/7 font-semibold text-indigo-400">Van idee tot betrouwbare software</h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                            Maatwerk software die je ontzorgt
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            Van idee tot oplevering werken we direct met je samen om processen te automatiseren,
                            overzicht te creëren en software te bouwen die echt past bij jouw organisatie.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {primaryFeatures.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="text-base/7 font-semibold text-white">
                                        <div
                                            className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                            <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-400">
                                        <p className="flex-auto">{feature.description}</p>
                                        {/*<p className="mt-6">*/}
                                        {/*    <a href={feature.href}*/}
                                        {/*       className="text-sm/6 font-semibold text-indigo-400 hover:text-indigo-300">*/}
                                        {/*        Learn more <span aria-hidden="true">→</span>*/}
                                        {/*    </a>*/}
                                        {/*</p>*/}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* CTA section */}
                <div className="relative isolate mt-16 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
                    >
                      <defs>
                        <pattern
                            x="50%"
                            y={0}
                            id="1d4240dd-898f-445f-932d-e2872fd12de3"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                          <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                      </defs>
                      <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                      </svg>
                      <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%" strokeWidth={0}/>
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-1108/632 w-277 flex-none bg-linear-to-r from-primary-400 to-primary-800 opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                            Werk efficiënter in je bedrijf.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                            Bespaar tijd en voorkom dubbel werk door je processen slimmer in te richten en beter samen te laten werken tussen teams.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Aan de slag
                            </a>
                            {/*<a href="#" className="text-sm/6 font-semibold text-white">*/}
                            {/*    Learn more <span aria-hidden="true">→</span>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center gap-x-6 md:order-2">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6"/>
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
                        &copy; 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}