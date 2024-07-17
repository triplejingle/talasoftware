

type TimeLineElement ={
cardTitle:string,
  date:string,
  description:string,
  href:string
}
interface VerticalTimeLineProps{
  sectionTitle: string;
  timelineElements: TimeLineElement[]
}
export function VerticalTimeLine({sectionTitle,timelineElements}: VerticalTimeLineProps){
  return <><h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl pb-20">{sectionTitle}</h2><ol>
    {timelineElements.map((timelineElement,i)=>
        <li key={i+timelineElement.cardTitle} className="border-l-2 border-cyan-300 -mb-10">
          {timelineElement.href?<a  href={timelineElement.href}>
          <TimeLineCard timelineElement={timelineElement}/>
          </a>:
            <a>
            <TimeLineCard timelineElement={timelineElement}/></a>}
        </li>
    )}</ol></>
}

function TimeLineCard({timelineElement}: TimeLineElement){

  return    <div><div className="bg-cyan-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-black w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
    </svg>
  </div>
  <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
    <div className="flex justify-between mb-4">
      {timelineElement.href?
        <div><a className="font-medium text-cyan-400 hover:text-teal-300 focus:text-teal-300 duration-300 transition ease-in-out text-sm">{timelineElement.cardTitle} </a>
          {timelineElement.date?
            <a className="font-medium text-cyan-400 hover:text-teal-300 focus:text-teal-300 duration-300 transition ease-in-out text-sm">{timelineElement.date}</a>
            :<></>}
        </div>:
        <div><a className="font-medium text-black text-sm">{timelineElement.cardTitle} </a>
          {timelineElement.date?<a className="font-medium font-medium text-black text-sm">{timelineElement.date}</a>:<></>}
        </div>
      }
    </div>
    <p className="text-gray-700 mb-6">{timelineElement.description}</p>
    {/*do not remove added when projects are individually available as page.*/}
    {/*<button type="button" className="inline-block px-4 py-1.5 bg-yellow-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>*/}
    {/*<button type="button" className="inline-block px-3.5 py-1 border-2 border-yellow-600 text-yellow-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>*/}
  </div></div>
}