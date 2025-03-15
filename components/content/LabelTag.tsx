import React from "react";

interface LabelProps{
  children:React.ReactNode;
  className?: string;
  htmlFor?: string;
}
export function LabelTag (props : LabelProps){
  return <label htmlFor={props.htmlFor} className={"text-xl leading-6 font-semibold "+props.className}>{props.children}</label>
}

