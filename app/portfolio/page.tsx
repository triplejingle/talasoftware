import {VerticalTimeLine} from "@/components/TimeLine";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
import React from "react";


export default function Page(){


  const TimeLineElements = [
    {cardTitle:"Project do365 at Triniti Solutions", date:"2024 - current",description:"An office addin which extends the abilities of office applications. My role is to developing new features and fix bugs. (C#, React, scrum) ", href:"https://trinitisolutions.nl/"},
    {cardTitle:"Project Appset at Triniti Solutions", date:"2023", description:"An app to create webapplications. My role is to develope microservices, research and implement new technology and fixing bugs. (C#, React)", href:"https://trinitisolutions.nl/" },
    {cardTitle:"Small Project Calipso at Triniti Solutions", date:"2022", description:"An application to keep track of your companies workhours. My role is to add pagination to application, fix bugs in the application and develop new features.(C#, React) ", href:"https://trinitisolutions.nl/" },
    {cardTitle:"Project Robot maatje at Triniti Solutions", date:"2021", description:"An robot application to support patients who live by themselfes and need structure. My role is develop new features, fix bugs in the application and fix small bugs in robot. (C#, React, Kotlin, scrum)", href:"https://trinitisolutions.nl/" },
    {cardTitle:"HBO-ict graduated at HAN in Arnhem)", date:"2022", description:"During the education i learned software development. I learned the following: Scrum, Use Cases, UML, architectuur analysis and design, Object oriented analysis en design, Java, SOLID, design patterns, refactoring, unit tests, integrated softwaredevelopment, databases, Triggers, stored procedures and user defined functions. ", href:"https://www.han.nl/opleidingen/hbo/hbo-ict/voltijd/dit-is-je-studie/" }
  ]
  // wat kan jij betekenen voor mijn bedrijf?
  // rol
  //
  return<div className={"flex flex-col items-center"}>
      {/*<VerticalTimeLine sectionTitle={"My work related [project] history"} timelineElements={TimeLineElements}/>*/}
    Volgende projecten
    Technologie gebruikt: C#, React, Vercel, Azure
    Methodes
    Rol: full stack software ontwikkelaar

    Project in de maak
    Voor wie
    x project in de maak

    Projecten in onderhoud
    Projectnaam: robot maatje
    Afbeelding: x
    korte beschrijving: korte beschrijving wat het project is.
    Technologie gebruikt: C#, React, Vercel, Azure
    In productie sinds 2020
    <PrimaryLinkButton href={"/portfolio/[project]"}>
      Klik hier om te navigeren
    </PrimaryLinkButton>


  </div>
}