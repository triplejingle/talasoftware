
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'

const painPoints = [
  {
    name: 'Handmatig werk en fouten',
    description: 'Processen die afhankelijk zijn van handmatige acties zorgen voor fouten en vertraging.',
    icon: BoltIcon,
  },
  {
    name: 'Dubbele administratie',
    description: 'Teams verliezen tijd aan hetzelfde werk in meerdere systemen.',
    icon: UsersIcon,
  },
  {
    name: 'Geen overzicht in systemen',
    description: 'Data en processen zitten verspreid over losse tools zonder centrale structuur.',
    icon: CalendarDaysIcon,
  },
]

const solutions = [
  {
    name: 'Automatisering van processen',
    description: 'Van handmatig werk naar betrouwbare en schaalbare workflows.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Stabiele systeemarchitectuur',
    description: 'C# / React systemen die meegroeien met je organisatie.',
    icon: ServerIcon,
  },
  {
    name: 'Monitoring & inzicht',
    description: 'Realtime inzicht in systemen zodat problemen vroeg worden opgelost.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Veilige en onderhoudbare software',
    description: 'Clean architecture en best practices voor lange termijn stabiliteit.',
    icon: FingerPrintIcon,
  },
  {
    name: 'API & integraties',
    description: 'Koppelingen tussen systemen zodat data niet langer versnipperd is.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Performance & schaalbaarheid',
    description: 'Software die blijft werken wanneer je bedrijf groeit.',
    icon: LockClosedIcon,
  },
]

const stats = [
  { id: 1, name: 'Enterprise klanten (o.a. energie & infra)', value: 'Vattenfall / TenneT' },
  { id: 2, name: 'Focus', value: 'C# + React' },
  { id: 3, name: 'Werkwijze', value: 'Agile / Scrum' },
  { id: 4, name: 'Doel', value: 'Schaalbare systemen' },
]

export default function Example() {
  return (
    <div className="bg-gray-900 text-white">
      <main>

        {/* HERO */}
        <div className="relative isolate overflow-hidden bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 lg:flex lg:px-8 lg:py-32">

            <div className="max-w-2xl">
              <p className="text-indigo-400 font-semibold">
                Freelance Software / Systems Engineer
              </p>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                Ik help bedrijven af van trage, foutgevoelige en onsamenhangende software
              </h1>

              <p className="mt-6 text-lg text-gray-300">
                Veel organisaties lopen vast door handmatig werk, dubbele administratie,
                losse systemen en software die niet meegroeit met hun bedrijf.
                Ik ontwerp en bouw C# en React systemen die dit oplossen.
              </p>

              <div className="mt-8 flex gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-400"
                >
                  Plan een gesprek
                </a>
                <a href="#cases" className="text-sm font-semibold text-white">
                  Bekijk werk →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* PROBLEMEN */}
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold">
            Waar bedrijven meestal vastlopen
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item.name}>
                <h3 className="font-semibold text-indigo-400">{item.name}</h3>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OPLOSSINGEN */}
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold">
            Wat ik bouw om dit op te lossen
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.name} className="rounded-lg border border-gray-800 p-6">
                <item.icon className="h-6 w-6 text-indigo-400" />
                <h3 className="mt-4 font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id}>
                <p className="text-indigo-400 text-sm">{stat.name}</p>
                <p className="text-xl font-semibold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl text-center py-32">
          <h2 className="text-4xl font-semibold">
            Wil je je systemen eindelijk stabiel en schaalbaar maken?
          </h2>
          <p className="mt-6 text-gray-300">
            Ik help bedrijven van losse tools naar één betrouwbare software-architectuur.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-md bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400"
          >
            Neem contact op
          </a>
        </div>

      </main>
    </div>
  )
}
