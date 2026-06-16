import React from "react";
import {ButtonProps} from "@/components/uicomponents/buttons/BaseButton";
import Link from "next/link";

export interface LinkButtonProps extends ButtonProps{
  href?:string
  onClick?:()=>void
}
export function PrimaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: "rounded-md bg-link-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-link-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link-500 "+properties.className};

  return <Link {...props} href={props.href?props.href:""}>
      {props.children}
  </Link>
}

export function SecondaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: "rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs "+properties.className};

  return <Link {...props} href={props.href?props.href:""}>
      {props.children}
  </Link>
}

export function TertiaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: " shadow-2xl "+properties.className};
  return <Link {...props} href={props.href?props.href:""}>
      {props.children}
  </Link>
}

