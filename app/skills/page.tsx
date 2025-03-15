import {StarIcon} from '@heroicons/react/20/solid'
import {getYears} from "@/utilities/dateHelpers";

const frontendSkills = [
  {
    skill: 'React',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'NextJS',
    rating: 3,
    experience: getYears("2022-01-01")
  },

  {
    skill: 'Redux',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'React hook form',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'Json',
    rating: 4,
    experience: getYears("2015-01-01")
  },
  {
    skill: 'Axios',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'Tailwind',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'Typescript',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'JsonForms',
    rating: 3,
    experience: getYears("2023-02-01")
  },
]

const backendSkills = [
  {
    skill: 'C#',
    rating: 4,
    experience: getYears("2021-06-01")
  },
  {
    skill: 'MVC',
    rating: 3,
    experience: getYears("2021-06-01")
  },

  {
    skill: '.NET Core',
    rating: 3,
    experience: getYears("2021-06-01")
  },

  {
    skill: 'Entity Framework',
    rating: 3,
    experience: getYears("2021-06-01")
  },
  {
    skill: 'JSON',
    rating: 4,
    experience:  getYears("2015-01-01")
  },
  {
    skill: 'REST',
    rating: 4,
    experience: getYears("2016-06-01")
  },
  {
    skill: 'API design',
    rating: 3,
    experience:  getYears("2021-06-01")
  },
]

const databaseSkills = [
  {
    skill: 'SQL',
    rating: 3,
    experience: getYears("2015-06-01")
  },
  {
    skill: 'Triggers',
    rating: 3,
    experience: getYears("2015-06-01")
  },
  {
    skill: 'Stored procedure',
    rating: 3,
    experience: getYears("2015-06-01")
  }
]

const devOpsSkills = [
  {
    skill: 'Azure devops',
    rating: 3,
    experience: getYears("2022-01-01")
  }
]

const toolsSkills = [
  {
    skill: 'Rider',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'Webstorm',
    rating: 3,
    experience: getYears("2022-01-01")
  },
  {
    skill: 'Intellij',
    rating: 3,
    experience:  getYears("2016-06-01")
  }
]

type Skill = {
  skill: string,
  rating: number
  experience: string
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export default function Page() {
  return <div className={""}>
    <div className={"flex flex-row justify-center"}>
      <h1 className={" text-3xl font-bold tracking-tight text-black sm:text-6xl"}>Skills</h1>
    </div>
    {/*<SkillsSection skills={skills} sectionTitle={"Architecture"}/>*/}
    <SkillsSection skills={backendSkills} sectionTitle={"Backend development"}/>
    <SkillsSection skills={frontendSkills} sectionTitle={"Frontend development"}/>
    <SkillsSection skills={databaseSkills} sectionTitle={"Database"}/>
    <SkillsSection skills={devOpsSkills} sectionTitle={"Devops"}/>
    <SkillsSection skills={toolsSkills} sectionTitle={"Tools"}/>
  </div>
}

export interface SkillSection {
  skills: Skill[]
  sectionTitle: string
}

function SkillsSection(props: SkillSection) {
  return <div className={"mt-20 space-y-10"}>
    <div className="flex flex-col items-center  border-b border-teal-300 pb-5 w-1/2 mx-auto">
      <h2 className="text-base font-semibold leading-6 text-black">{props.sectionTitle}</h2>
    </div>
    <ul role="list"
      // className="grid mt-10 grid-cols-2 gap-x-6 sm:grid-cols-8 mx-5 sm:mx-20"
        className={"flex justify-center flex-row flex-wrap sm:mx-auto"}
    >
      {props.skills.map((skill, i) => (
        <div key={i} className={"my-2 mx-2 sm:mx-5 "}>
          <Skills skill={skill}/>
        </div>
      ))}
    </ul>
  </div>
}

export interface SkillsProps {
  skill: Skill
}

function Skills(props: SkillsProps) {
  return <li key={props.skill.skill} className="col-span-1 divide-y divide-cyan-300 rounded-lg bg-white shadow-sm">
    <div className="flex justify-between space-x-6 p-6">
      <div className="flex-1 truncate just">
        <div className="flex justify-center items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-black">{props.skill.skill}</h3>
        </div>
        <p className="flex justify-center mt-1 truncate text-sm text-wrap text-gray-300">{props.skill.experience}</p>
      </div>

    </div>
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="-ml-px flex w-0 flex-1">
          <div
            className=" flex flex-row flex-wrap inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                aria-hidden="true"
                className={classNames(
                  props.skill.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                  'h-3 w-3 sm:h-5 sm:w-5 shrink-0',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </li>
}