import React from "react";

export interface ButtonProps {
  onClick?: ()=> void;
  children: React.ReactNode
  disabled?:boolean
  className?:string
}

export function BaseButton(props:ButtonProps) {
  return <button disabled={props.disabled ? props.disabled : false}
                 onClick={() => props.onClick ? props.onClick() : undefined}
                 className={"text-lg md:text-xl "+props.className}>
    {props.children}
  </button>;
}