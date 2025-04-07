'use client'

import React from "react";

import {H1, H2} from "@/components/content/HTag";
import {P} from "@/components/content/PTag";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
import Image from "next/image";
import notes from "../../source/notes.avif"
export default function Page() {
  return <div className="overflow-hidden  pt-20  text-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className={"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"}>
        <div className="lg:pt-4 lg:pr-8">
          <div>
            <H2 className={"pt-4 pb-8 font-bold "}>Van idee naar software oplossing</H2>
            <H1 className={"mt-4 mb-2 font-bold"}>🎨💡 Idee </H1><br/>
            <P className={"mb-2  "}>
              Het begint allemaal met een idee! Heb je een briljant plan en wil je weten of het haalbaar is? Ik
              denk met je mee, daag je uit en kijk hoe ik jouw idee kan omzetten in iets geweldigs.
            </P>
            <PrimaryLinkButton className={"mt-8"} href={"/services"}>
              Wat is er mogelijk?
            </PrimaryLinkButton>
            <br/>
            <H1 className={"mt-4 mb-2 font-bold"}>🤝🎉 Contact </H1><br/>
            <P className={"mb-2  "}>
              Tijd om kennis te maken! In een gezellig gesprek kijken we samen naar jouw wensen en mijn werkwijze. Jij
              leert mij kennen, ik leer jou kennen – zo leggen we een sterke basis voor een geweldige samenwerking.
            </P>
            <br/>
            <H1 className={"mt-4 mb-2 font-bold"}>📝🕵️‍♂️ Wensen </H1><br/>
            <P className={"mb-2  "}>
              De blauwdruk van jouw droomsoftware! Ik duik in de details en bepaal precies wat er nodig is om jouw
              idee werkelijkheid te maken. Functionaliteiten, techniek en slimme oplossingen – ik zet alles op
              papier om straks vliegend van start te gaan.
            </P>
            <br/>
            <H1 className={"mt-4 mb-2 font-bold"}>🚀🔥 Uitvoeren </H1><br/>
            <P className={"mb-2  "}>
              Let’s go! Ik ga all-in en start met bouwen. Verwacht een rit vol innovatie, samenwerking en gewoon
              heel veel toffe resultaten. Stap voor stap breng ik jouw idee tot leven!
            </P>
          </div>
        </div>

        <div className={"hidden sm:block"}>
          <Image
            alt="Notes"
            src={notes}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-full ring-1 shadow-xl ring-neutral-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 "
            priority
          />
        </div>
      </div>
      <div className={"w-full mb-8 flex justify-center"}>
        <PrimaryLinkButton href={"/contact"} className={"py-4 px-8 mt-10"} >
          Laten we over je idee praten!
        </PrimaryLinkButton>
      </div>
    </div>
  </div>
  // return<div className="overflow-hidden ">
  //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //     <div
  //       className={"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  "}>
  //       <div className="lg:pt-4 lg:pr-8">
  //         <div>
  //           <H2 className={"pt-4 pb-8 font-bold text-neutral-300 "}>Van idee naar software oplossing</H2>
  //           <H1 className={"mt-4 mb-2 font-bold"}>🎨💡 Idee </H1><br/>
  //           <P className={"mb-2  "}>
  //             Het begint allemaal met een idee! Heb je een briljant plan en wil je weten of het haalbaar is? Wij
  //             denken met je mee, dagen je uit en kijken hoe we jouw idee kunnen omzetten in iets geweldigs.
  //           </P>
  //           <br/>
  //           <H1 className={"mt-4 mb-2 font-bold"}>🤝🎉 Contact </H1><br/>
  //           <P className={"mb-2  "}>
  //             Tijd om kennis te maken! In een gezellig gesprek kijken we samen naar jouw wensen en onze werkwijze. Jij
  //             leert ons kennen, wij leren jou kennen – zo leggen we een sterke basis voor een geweldige samenwerking.
  //           </P>
  //           <br/>
  //           <H1 className={"mt-4 mb-2 font-bold"}>📝🕵️‍♂️ Wensen </H1><br/>
  //           <P className={"mb-2  "}>
  //             De blauwdruk van jouw droomsoftware! We duiken in de details en bepalen precies wat er nodig is om jouw
  //             idee werkelijkheid te maken. Functionaliteiten, techniek en slimme oplossingen – we zetten alles op
  //             papier om straks vliegend van start te gaan.
  //           </P>
  //
  //           <br/>
  //           <H1 className={"mt-4 mb-2 font-bold"}>🚀🔥 Uitvoeren </H1><br/>
  //           <P className={"mb-2  "}>
  //             Let’s go! We gaan all-in en starten met bouwen. Verwacht een rit vol innovatie, samenwerking en gewoon
  //             heel veel toffe resultaten. Stap voor stap brengen we jouw idee tot leven!
  //           </P>
  //         </div>
  //       </div>
  //
  //       <div className={"hidden sm:block"}>
  //         <img
  //           alt="Product screenshot"
  //           src="https://plus.unsplash.com/premium_photo-1661687254326-bcacaa1fa47e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //           width={2432}
  //           height={1442}
  //           className="w-[48rem] max-w-none rounded-full ring-1 shadow-xl ring-neutral-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 "
  //         />
  //       </div>
  //     </div>
  //     <div className={"w-full mb-8 flex justify-center"}>
  //       <Link href={"/contact"}>
  //         <PrimaryButton className={"py-4 px-8 mt-10"} >
  //           Vertel ons je idee!
  //         </PrimaryButton>
  //       </Link>
  //     </div>
  //   </div>
  // </div>
}