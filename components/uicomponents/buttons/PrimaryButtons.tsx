import Link from "next/link";
import React from "react";
import {BaseButton, ButtonProps} from "@/components/uicomponents/buttons/BaseButton";
// interface NavigationButtonProps{
//   text:string;
//   href:string;
// }
//
// export function NavigationButton(props: NavigationButtonProps){
//   return (<Link className={"rounded-full bg-action-300 hover:bg-action-400  text-black px-10 "} href={props.href}>{props.text}</Link>)
// }
// interface DownloadFileButton{
//   text:string;
//   href:string;
// }
// export function DownloadFileButton(props: DownloadFileButton){
//   return (<a className={"rounded-full  border hover:border-action-300 text-action-500 hover:text-action-300 px-5"} href={props.href} download>{props.text}</a>)
// }

interface NavBarButton{
  text:string;
  href:string;
  pathname:string;
  onClick: ()=> void
}
export function NavBarbutton(props: NavBarButton){
   return<>
       {props.pathname==props.href?<Link onClick={()=>props.onClick()} className={"text-action-500 mt-1 border-b-4 border-action-500  mr-12"} href={props.href}>
             {props.text}
         </Link>:
         <Link  onClick={()=>props.onClick()}  className={"text-neutral-500 hover:text-action-500 mr-12"} href={props.href}>
       {props.text}
   </Link>}</>
}

export function PrimaryButton(properties:ButtonProps) {
  const props = {...properties, className:" bg-action-500 hover:bg-action-600 text-white rounded-full "+properties.className};
  return <BaseButton {...props}>
            {props.children}
        </BaseButton>
}

export function SecondaryButton(properties:ButtonProps) {
  const props = {...properties, className:" text-action-500 border-action-300 border-2 rounded-full "+properties.className};
  return <BaseButton {...props}>
          {props.children}
        </BaseButton>
}

export function TertiaryButton(properties:ButtonProps) {
  const props = {...properties, className:"  text-neutral-500 "+properties.className};
  return <BaseButton  {...props}>
    {props.children}
  </BaseButton>
}

