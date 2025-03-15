'use client'
import {PrimaryButton} from "@/components/uicomponents/buttons/Buttons";
import React from "react";
import Link from "next/link";
import {H1, H2} from "@/components/content/HTag";
import {P} from "@/components/content/PTag";

export default function Page() {

  return<div className="overflow-hidden ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className={"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  text-black"}>
        <div className="lg:pt-4 lg:pr-8">
          <div>
            <H1 className={"pt-4 pb-8 font-bold "}>Van idee naar software oplossing</H1>
            <H2 className={"mt-4 mb-2 font-bold"}>🎨💡 Idee </H2><br/>
            <P className={"mb-2 text-black "}>
              Het begint allemaal met een idee! Heb je een briljant plan en wil je weten of het haalbaar is? Wij
              denken met je mee, dagen je uit en kijken hoe we jouw idee kunnen omzetten in iets geweldigs.
            </P>
            <br/>
            <H2 className={"mt-4 mb-2 font-bold"}>🤝🎉 Contact </H2><br/>
            <P className={"mb-2 text-black "}>
              Tijd om kennis te maken! In een gezellig gesprek kijken we samen naar jouw wensen en onze werkwijze. Jij
              leert ons kennen, wij leren jou kennen – zo leggen we een sterke basis voor een geweldige samenwerking.
            </P>
            <br/>
            <H2 className={"mt-4 mb-2 font-bold"}>📝🕵️‍♂️ Wensen </H2><br/>
            <P className={"mb-2 text-black "}>
              De blauwdruk van jouw droomsoftware! We duiken in de details en bepalen precies wat er nodig is om jouw
              idee werkelijkheid te maken. Functionaliteiten, techniek en slimme oplossingen – we zetten alles op
              papier om straks vliegend van start te gaan.
            </P>

            <br/>
            <H2 className={"mt-4 mb-2 font-bold"}>🚀🔥 Uitvoeren </H2><br/>
            <P className={"mb-2 text-black "}>
              Let’s go! We gaan all-in en starten met bouwen. Verwacht een rit vol innovatie, samenwerking en gewoon
              heel veel toffe resultaten. Stap voor stap brengen we jouw idee tot leven!
            </P>
          </div>
        </div>

        <div className={"hidden sm:block"}>
          <img
            alt="Product screenshot"
            src="https://plus.unsplash.com/premium_photo-1661687254326-bcacaa1fa47e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-full ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 "
          />
        </div>
      </div>
      <div className={"w-full mb-8 flex justify-center"}>
        <PrimaryButton className={"py-4 px-8 mt-10"} >
          <Link href={"/contact"}>Vertel ons je idee!</Link>
        </PrimaryButton>
      </div>
    </div>
  </div>
}