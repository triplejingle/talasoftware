import Link from "next/link";
import React from "react";
import {BaseButton, ButtonProps} from "@/components/uicomponents/buttons/BaseButton";
// interface NavigationButtonProps{
//   text:string;
//   href:string;
// }
//
// export function NavigationButton(props: NavigationButtonProps){
//   return (<Link className={"rounded-full bg-amber-300 hover:bg-amber-400  text-black px-10 "} href={props.href}>{props.text}</Link>)
// }
// interface DownloadFileButton{
//   text:string;
//   href:string;
// }
// export function DownloadFileButton(props: DownloadFileButton){
//   return (<a className={"rounded-full  border hover:border-amber-300 text-amber-500 hover:text-amber-300 px-5"} href={props.href} download>{props.text}</a>)
// }

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

export function PrimaryButton(properties:ButtonProps) {
  const props = {...properties, className:"bg-amber-500 hover:bg-amber-700 text-white rounded-full "+properties.className};
  return <BaseButton {...props}>
            {props.children}
        </BaseButton>
}

export function SecondaryButton(properties:ButtonProps) {
  const props = {...properties, className:"text-amber-500 border-amber-300 border-2 rounded-full "+properties.className};
  return <BaseButton {...props}>
          {props.children}
        </BaseButton>
}

export function TertiaryButton(properties:ButtonProps) {
  const props = {...properties, className:"text-gray-500 "+properties.className};
  return <BaseButton  {...props}>
    {props.children}
  </BaseButton>
}

