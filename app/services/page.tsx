"use client"
import React from "react";
import {LabelTag} from "@/components/content/LabelTag";
import {P} from "@/components/content/PTag";
import {H2} from "@/components/content/HTag";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
export default function Page() {
  //onderstaande services zijn geordent op basis van hoe moeilijk ze zijn.

  return <div className="">
    <div className={"pt-20 pb-40"}>
      <div className={"text-white"}>
        <div className={"flex justify-around mb-40 leading-6 font-semibold text-4xl"}>Welke problemen ik oplos</div>
        <div className={"flex justify-around mb-20 "}>
          <div className={"px-6 sm:w-1/2"}>
            <H2 className={"mb-10 font-bold"}>Handmatig werk kost tijd en zorgt voor fouten.</H2>
            <P className={"lg:pr-8"}>
              Er moet veel informatie worden ingevoerd. Gegevens worden handmatig overgetypt van het ene systeem naar het andere.
              Zodra alles klaar lijkt, ontdek je een fout. Dan denk je: "Zijn er misschien nog meer fouten gemaakt?"

              Nog een keer alles nalopen, vergelijken en corrigeren.
              Niet omdat het waarde toevoegt, maar omdat het moet.
              Dat kost tijd, energie en zorgt voor frustratie.

              Dat kan slimmer. Ik automatiseer terugkerende werkzaamheden met slimme software.
              Zo worden gegevens automatisch verwerkt, voorkom je fouten en houd je meer tijd over voor werkzaamheden die echt waarde toevoegen aan je bedrijf.
            </P>
          </div>
        </div>
      </div>
    </div>

    <div className={"-mt-20"}>
      <WaveUp/>
      <div className={"flex justify-around bg-neutral-200 py-30 -mt-2"}>
        <div className={"px-6 sm:w-1/2"}>
          <H2 className={"mb-10 font-bold"}>Je hoort één administratie te hebben, maar hebt er twee of meer</H2>
          <P className={"lg:pr-8"}>

            Veel bedrijven voeren dezelfde informatie in meerdere systemen in.
            Dat kost niet alleen tijd, maar vergroot ook de kans op fouten.
            Door systemen met elkaar te verbinden zorg ik ervoor dat gegevens automatisch worden uitgewisseld en altijd up-to-date blijven.
          </P>
        </div>
      </div>
      <WaveDown/>
    </div>

    <div className={"flex justify-around my-30"}>

      <div className={"w-1/2 text-white"}>
        <H2 className={"mb-10"}>Belangrijke informatie hoort op één plek beschikbaar te zijn.</H2>
      <P>Wanneer gegevens verspreid staan over meerdere programma's verlies je tijd met zoeken.
        Ik help bij het centraliseren van informatie, zodat jij en je team sneller de juiste gegevens kunnen vinden en betere beslissingen kunnen nemen.
      </P>
    </div>
  </div>

  <div className="mt-20">
    <WaveUp/>
    <div className={"flex justify-around bg-neutral-200 py-20 "}>
      <div className={"w-1/2"}>
        <H2 className={"mb-10 font-bold"}>Systemen die niet samenwerken zorgt voor frustratie.</H2>
        <P>Gebruik je verschillende applicaties die los van elkaar werken?
          Ik ontwikkel koppelingen en dashboards die alles samenbrengen in één overzichtelijke werkomgeving.
          Zo krijg je meer inzicht en controle over je processen.</P>
      </div>
    </div>
    <WaveDown/>
  </div>

  <div className={"flex justify-around py-52  text-white"}>
    <PrimaryLinkButton href={"/softwaredevelopment"} className={" py-4 px-32 mt-10"}>
      tmp
    </PrimaryLinkButton>
    <div className={"w-1/2"}>
      <H2 className={"mb-10 font-bold"}>Wat vandaag werkt, moet morgen ook nog passen.</H2>
      <P>
        Naarmate je bedrijf groeit, veranderen ook je processen en behoeften.
        Ik bouw schaalbare softwareoplossingen die kunnen meegroeien met jouw organisatie,
        zodat je niet steeds opnieuw hoeft te beginnen.
      </P>
    </div>
  </div>


  <div className="mt-20">
    <WaveUp/>
    <div className={"flex justify-around bg-neutral-200 py-20 "}>
      <div className={"w-1/2"}>
        <H2 className={"mb-10"}>Verouderde software kost meer dan je denkt.</H2>
        <P>Trage systemen, omslachtige processen en beperkte mogelijkheden remmen de groei van je bedrijf.
          Ik help met het moderniseren van bestaande software of het ontwikkelen van een toekomstbestendige oplossing die sneller, gebruiksvriendelijker en makkelijker te onderhouden is.
        </P>
      </div>
      <div>a</div>
    </div>
    <WaveDown/>
  </div>

  <div className={"text-white"}>
    {/*<WaveUp/>*/}
    <div className={"flex justify-around  pt-20"}>
      <div className={"px-6 sm:w-1/2"}>
        <H2 className={"mb-10 font-bold"}>🤔 Iets in je hoofd?</H2>
        <P  className={" lg:pr-8"}>Wil je iets bouwen, verbeteren of weten wat er technisch mogelijk is? Stuur een bericht. Ik help je
          graag
          verder!</P>

      </div>

    </div>
    <div className={"flex justify-center py-20"}>
      <PrimaryLinkButton href={"/backupcontact"} className={"py-4 mt-10"}>
        Vertel me je idee!
      </PrimaryLinkButton>
    </div>
  </div>
    {/*⚙️ De tools waar ik mee werk*/}
    {/*👍 Wat ik gebruik	🧰 Voorbeelden*/}
    {/*Voorkant van je site (frontend)	React, Next.js*/}
    {/*Achterkant (backend)	C#/.NET*/}
    {/*Databases	PostgreSQL*/}
    {/*Cloud & hosting	Microsoft Azure*/}
    {/*Extra’s*/}
  </div>
}

function WaveUp() {

  return <div className="w-full ">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
        className="fill-current text-neutral-200 w-full"
      />
    </svg>
  </div>
}

function WaveDown() {
  return <div className="w-full ">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(1, -1) translate(0, -100)">
        <path
          d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
          className="fill-current text-neutral-200"
        />
      </g>
    </svg>
  </div>
}
