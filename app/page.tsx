'use client'
import {
    ArrowPathIcon,
    ArrowTrendingUpIcon,
    BanknotesIcon,
    ChatBubbleLeftRightIcon,
    CircleStackIcon,
    ClockIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    EyeIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
    UserCircleIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

import Link from "next/link";
import Image from "next/image";
import vattenfal from "@/public/vattenfal.svg";
import triniti from "@/public/trinitsolutions.webp";
import tennet from "@/public/tennet.svg";
import thinkproject from "@/public/thinkproject.png";
import smartrobotsolutions from "@/public/smartrobotsolutions.png";
import dotoffice from "@/public/dotoffice.png";
import React, {useEffect, useRef, useState} from "react";
import {ArrowsRightLeftIcon, CodeBracketIcon, MagnifyingGlassIcon, RocketLaunchIcon} from "@heroicons/react/16/solid";
import FeatureSectionA from "@/components/pagesections/featuresections/featuresectionA";
import FeatureSectionB from "@/components/pagesections/featuresections/featuresectionB";
import HeroSectionA from "@/components/pagesections/herosection/HeroSectionA";
import FeatureSectionC from "@/components/pagesections/featuresections/featuresectionC";
import FeatureSectionD from "@/components/pagesections/featuresections/featuresectionD";
import {PrimaryLinkButton, SecondaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
import NavBar from "@/components/navbar/NavBar";

const primaryFeatures = [
    {
        name: 'Persoonlijk contact',
        description:
            'Er is direct backupcontact met de ontwikkelaar(s) die jouw software bouwt. Geen tussenpersonen, maar korte afstemming en duidelijke communicatie.',
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
    {
        name: 'Centraal overzicht van je data',
        description: 'Alle informatie komt samen in één systeem, in plaats van verspreid over Excel, e-mail en losse tools.'
    },
    {
        name: 'Op maat voor jouw werkwijze',
        description: 'Geen standaard software, maar een oplossing die precies aansluit op hoe jouw bedrijf werkt.',
    },
    {
        name: 'Schaalbaar met je groei',
        description: 'Het systeem groeit mee met je organisatie, nieuwe processen en extra medewerkers.'
    },
    {name: 'Realtime inzicht', description: 'Altijd actuele data en dashboards om snel beslissingen te nemen.'},
    {
        name: 'Betere samenwerking',
        description: 'Teams werken in één omgeving samen, zonder dubbel werk of miscommunicatie.'
    },
    {
        name: 'Snelle aanpassingen',
        description: 'Nieuwe functies of processen kunnen snel worden toegevoegd zonder compleet nieuwe software.'
    },
    {
        name: 'Mobiel en desktop toegankelijk',
        description: 'Werkt overal, zodat je team altijd toegang heeft tot de juiste informatie.'
    },
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
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY * 0.2);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const socialProofs = [{
        name: '11+ jaar ervaring',
        icon: ClockIcon
    },
        {
            name: '10+ systemen gebouwd',
            icon: BanknotesIcon
        },

        {
            name: '8000+ gebruikers',
            icon: EyeIcon
        }]

    const oplossingRef = useRef(null);
    const scrollTo = () => {
        oplossingRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <main className={"bg-zinc-800"}>
                <div className="absolute inset-0 overflow-hidden -scale-x-100">
                    <div
                        className="absolute inset-0 bg-[url('/servicesapi2.png')] bg-cover bg-center -scale-x-100 will-change-transform"
                        style={{
                            transform: `translateY(${offset}px) scaleX(-1)`,
                        }}
                    />
                </div>
                <NavBar/>
                <  div className="relative ">

                {/*<div className="relative  py-24 sm:py-32 ">*/}
                {/*    <div className="absolute inset-0 bg-[url('../public/servicesapi2.png')] bg-cover bg-center bg-no-repeat -scale-x-100 bg-primary-400 bg-blend-multiply"></div>*/}

                <HeroSectionA
                    header={"Bespaar tijd en creëer overzicht met software op maat voor mkb."}
                    description={"Onze software sluit perfect aan op jullie processen,\n" +
                        "waardoor er minder handmatig werk nodig is,\n" +
                        "minder fouten worden gemaakt en direct meer grip krijgen over jullie bedrijf."}
                    socialproofs={socialProofs}
                >
                    <PrimaryLinkButton  onClick={scrollTo}>
                        Ontdek hoe je jouw bedrijf efficiënter laat werken
                    </PrimaryLinkButton>
                    <SecondaryLinkButton href={""}>
                        Contact opnemen <span aria-hidden="true">→</span>
                        {/*gratis scan*/}
                    </SecondaryLinkButton>
                </HeroSectionA>
                </div>
                {/* vertrouwd door */}
                <div className={"relative py-24 sm:py-32 "}>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-lg/8 font-semibold text-white"> Onder andere vertrouwd door deze bedrijven</h2>
                        <div
                            className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">

                            <div className="bg-white/44 p-6 sm:p-10">
                                <Link href={"https://www.vattenfall.nl/"}>
                                    <Image
                                        alt="Reform"
                                        src={vattenfal}
                                        width={158}
                                        height={48}
                                        className="max-h-12 w-full object-contain"
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
                                <Link href={"https://www.tennet.eu/nl"}>
                                    <Image
                                        alt="Reform"
                                        src={tennet}
                                        width={158}
                                        height={48}
                                        className="max-h-12 w-full object-contain"
                                        priority
                                    />
                                </Link>
                            </div>
                            <div className="bg-white/44 p-6 sm:p-10">
                                <Link href={"https://www.thinkproject.com/"}>
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
                                <Link href={"https://smartrobot.solutions/"}>
                                    <Image
                                        alt="Reform"
                                        src={smartrobotsolutions}
                                        width={158}
                                        height={48}
                                        className="max-h-12 w-full object-contain"
                                        priority
                                    />
                                </Link>
                            </div>
                            {/*<div className={"col-span-2 max-h-12 w-full object-contain lg:col-span-1"}>*/}
                            {/*  <Tennet width={200}/>*/}
                            {/*</div>*/}
                            <div className="bg-white/44 p-6 sm:p-10">
                                <Link href={"https://www.dotoffice.info/"} >
                                    <Image
                                        alt="Reform"
                                        src={dotoffice}
                                        width={158}
                                        height={48}
                                        className="max-h-12 w-full object-contain"
                                        priority
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                {/* probleem */}
                <div
                    className="overflow-hidden py-24 sm:py-32 mt-32 bg-primary-400 bg-blend-multiply bg-[url(../public/servicesapi2.png)] inset-0 bg-cover bg-center bg-no-repeat">
                    <FeatureSectionC
                        title={"Wanneer software niet meegroeit, gaat je bedrijf onnodig langzamer werken." }
                        description={"Gegevens staan in Excel, e-mails en losse tools verspreid, waardoor je team\n" +
                            "constant moet zoeken, overtypen en corrigeren. Daardoor gaan er dagelijks tijd\n" +
                            "en overzicht verloren."}
                        features={problems}
                    />
                </div>

                {/* oplossing */}
                <section ref={oplossingRef}>
                <FeatureSectionD
                    title={"Breng je processen en systemen samen"}
                    description={"Geen standaardoplossing, maar wat jouw organisatie nodig heeft: een centraal platform, slimme integraties of een uitbreiding van bestaande software. Klaar voor vandaag én voor de groei van morgen."}
                    features={features}
                />
                </section>

                {/* hoe wij werken */}
                <div className="relative  py-24 sm:py-32 ">
                    <div className="absolute inset-0 bg-[url('../public/servicesapi2.png')] bg-cover bg-center bg-no-repeat -scale-x-100 bg-primary-400 bg-blend-multiply"></div>
                    <FeatureSectionB
                        header={"Onze aanpak"}
                        title={" Alles wat je nodig hebt om software succesvol in te voeren in jullie bedrijf"}
                        description={"We onderzoeken eerst wat je organisatie echt nodig heeft. Soms is dat nieuwe software, soms een uitbreiding of slimme koppeling met bestaande systemen. " +
                            "Vervolgens brengen we processen in kaart, bouwen stap voor stap en zorgen dat de oplossing direct bruikbaar is in de dagelijkse bedrijfsleven."}
                        features={werkwijzes}
                    />
                </div>
                {/* waarom wij */}
                <div className="relative py-24 sm:py-32 ">
                    <FeatureSectionA
                        header={"Van idee tot betrouwbare software"}
                        title={"Maatwerk software die je ontzorgt"}
                        description={"Van idee tot oplevering werken we direct met je samen om processen te automatiseren, " +
                            "overzicht te creëren en software te bouwen die echt past bij jouw organisatie."}
                        features={primaryFeatures}
                    />

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
                        <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%"
                              strokeWidth={0}/>
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
                            Bespaar tijd en voorkom dubbel werk door je processen slimmer in te richten en beter samen
                            te laten werken tussen teams.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <PrimaryLinkButton
                                href="#"
                                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Aan de slag
                            </PrimaryLinkButton>
                            {/*<a href="#" className="text-sm/6 font-semibold text-white">*/}
                            {/*    Learn more <span aria-hidden="true">→</span>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}

        </div>
    )
}