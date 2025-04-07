import React from "react";

interface PProps{
  children:React.ReactNode;
  className?: string;
}
export function P (props : PProps){
  return <p className={"leading-6 text-lg md:text-xl line-length-sm "+ props?.className}>{props.children}</p>
}

