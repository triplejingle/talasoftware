import Link from "next/link";
interface NavigationButtonProps{
  text:string;
  href:string;
}

export function NavigationButton(props: NavigationButtonProps){
  return (<Link className={"rounded-full bg-teal-300 hover:bg-cyan-400  text-black px-10 "} href={props.href}>{props.text}</Link>)
}
interface DownloadFileButton{
  text:string;
  href:string;
}
export function DownloadFileButton(props: DownloadFileButton){
  return (<a className={"rounded-full  border hover:border-teal-300 text-cyan-500 hover:text-teal-300 px-5"} href={props.href} download>{props.text}</a>)
}

interface NavBarButton{
  text:string;
  href:string;
  pathname:string;
  onClick: ()=> void
}
export function NavBarbutton(props: NavBarButton){


   return <div className={"invisible md:visible"}>
       {props.pathname==props.href?<Link onClick={()=>props.onClick()} className={"text-black "} href={props.href}>
             {props.text}
         </Link>:
         <Link  onClick={()=>props.onClick()}  className={"text-cyan-300"} href={props.href}>
       {props.text}
   </Link>}
   </div>
}

