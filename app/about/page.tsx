import {VerticalTimeLine} from "@/components/TimeLine";
import AboutMeSection from "@/app/contact/AboutMeSection";

export default function Page(){

  const TimeLineElements = [
    {cardTitle:"Software engineer at Triniti Solutions", date:"2022 - currently", description:"Working on multiple project, analysing requirements, implementing features, fixing bugs, scrum ",href:"https://trinitisolutions.nl/solutions" },
    {cardTitle:"hbo-ict (software development) at HAN in Arnhem", date:"2022", description:"Scrum, Use Cases, UML, architectuur analysis and design, Object oriented analysis en design, Java, SOLID, design patterns, refactoring, unit tests, integrated test, databases, Triggers, stored procedures and user defined functions. ", href:"https://www.han.nl/opleidingen/hbo/hbo-ict/voltijd/dit-is-je-studie/"},
    {cardTitle:"minor iot at HAN", date:"2020", description:"Learning about internet of things.", href:"" },
    {cardTitle:"mbo toerism and recreation at ROC Apeldoorn", date:"2014", description:"", href:"" },
    {cardTitle:"vmbo kader", date:"2010", description:"", href:"" }
  ]

  return<div className={"flex flex-col items-center"}>
          <AboutMeSection/>
          <VerticalTimeLine sectionTitle={"My History"} timelineElements={TimeLineElements}/>
        </div>
}