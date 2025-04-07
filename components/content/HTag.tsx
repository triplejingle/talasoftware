import React from "react";

interface HProps{
  children:React.ReactNode;
  className?: string;
}
export function H1 (props : HProps){
  return <h1 className={"text-2xl md:text-3xl leading-7 line-length-sm "+ props?.className}>{props.children}</h1>
}

export function H2 (props : HProps){
  return <h2 className={"text-xl md:text-2xl leading-5 "+ props?.className}>{props.children}</h2>
}