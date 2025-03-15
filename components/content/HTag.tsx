import React from "react";

interface HProps{
  children:React.ReactNode;
  className?: string;
}
export function H1 (props : HProps){
  return <h1 className={"text-3xl leading-7  "+ props?.className}>{props.children}</h1>
}

export function H2 (props : HProps){
  return <h2 className={"text-2xl leading-5 "+ props?.className}>{props.children}</h2>
}