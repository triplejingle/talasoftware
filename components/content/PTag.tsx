import React from "react";

interface P1Props{
  children:React.ReactNode;
  className?: string;
}
export function P (props : P1Props){
  return <p className={"leading-6 text-xl line-length-sm "+ props?.className}>{props.children}</p>
}

