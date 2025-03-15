import {VerticalTimeLine} from "@/components/uicomponents/TimeLine";

export default function Page(){


  const TimeLineElements = [
    {cardTitle:"Project do365 at Triniti Solutions", date:"2024 - current",description:"An office addin which extends the abilities of office applications. My role is to developing new features and fix bugs. (C#, React, scrum) ", href:"https://trinitisolutions.nl/"},
    {cardTitle:"Project Appset at Triniti Solutions", date:"2023", description:"An app to create webapplications. My role is to develope microservices, research and implement new technology and fixing bugs. (C#, React)", href:"https://trinitisolutions.nl/" },
    {cardTitle:"Small Project Calipso at Triniti Solutions", date:"2022", description:"An application to keep track of your companies workhours. My role is to add pagination to application, fix bugs in the application and develop new features.(C#, React) ", href:"https://trinitisolutions.nl/" },
    {cardTitle:"Project Robot maatje at Triniti Solutions", date:"2021", description:"An robot application to support patients who live by themselfes and need structure. My role is develop new features, fix bugs in the application and fix small bugs in robot. (C#, React, Kotlin, scrum)", href:"https://trinitisolutions.nl/" },
    {cardTitle:"HBO-ict graduated at HAN in Arnhem)", date:"2022", description:"During the education i learned software development. I learned the following: Scrum, Use Cases, UML, architectuur analysis and design, Object oriented analysis en design, Java, SOLID, design patterns, refactoring, unit tests, integrated softwareontwikkeling, databases, Triggers, stored procedures and user defined functions. ", href:"https://www.han.nl/opleidingen/hbo/hbo-ict/voltijd/dit-is-je-studie/" }
  ]

  return<div className={"flex flex-col items-center"}>
      <VerticalTimeLine sectionTitle={"My work related project history"} timelineElements={TimeLineElements}/>
  </div>
}