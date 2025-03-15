import Link from "next/link";
import React from "react";
interface NavigationButtonProps{
  text:string;
  href:string;
}

export function NavigationButton(props: NavigationButtonProps){
  return (<Link className={"rounded-full bg-amber-300 hover:bg-amber-400  text-black px-10 "} href={props.href}>{props.text}</Link>)
}
interface DownloadFileButton{
  text:string;
  href:string;
}
export function DownloadFileButton(props: DownloadFileButton){
  return (<a className={"rounded-full  border hover:border-amber-300 text-amber-500 hover:text-amber-300 px-5"} href={props.href} download>{props.text}</a>)
}

interface NavBarButton{
  text:string;
  href:string;
  pathname:string;
  onClick: ()=> void
}
export function NavBarbutton(props: NavBarButton){
   return<>
       {props.pathname==props.href?<Link onClick={()=>props.onClick()} className={"text-amber-500 mt-1 border-b-4 border-amber-500  mr-12 "} href={props.href}>
             {props.text}
         </Link>:
         <Link  onClick={()=>props.onClick()}  className={"text-gray-500 hover:text-amber-500 mr-12"} href={props.href}>
       {props.text}
   </Link>}</>

}
interface Button{
  onClick?: ()=> void;
  children: React.ReactNode
  disabled?:boolean
  className?:string
}
export function PrimaryButton(props:Button) {
  return <button disabled={props.disabled?props.disabled:false} onClick={()=> props.onClick ?props.onClick() : undefined}
                 className={"bg-amber-500 hover:bg-amber-700 text-white rounded-full "+props.className}>
        {props.children}
     </button>
}

export function SecondaryButton(props:Button) {
  return <button onClick={()=> props.onClick ?props.onClick() : undefined}
                 className={" text-amber-500 border-amber-500 border-2 rounded-full "+props.className}>
    {props.children}
  </button>
}

