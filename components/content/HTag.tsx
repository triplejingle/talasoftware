import React from "react";

interface H1Props{
  children:React.ReactNode;
  className?: string;
}
export function H1 (props : H1Props){
  return <h1 className={"text-2xl leading-5 "+ props?.className}>{props.children}</h1>
}

interface H1Props{
  children:React.ReactNode;
  className?: string;
}
export function H2 (props : H1Props){


  return <h1 className={"text-3xl leading-5 "+ props?.className}>{props.children}</h1>
}