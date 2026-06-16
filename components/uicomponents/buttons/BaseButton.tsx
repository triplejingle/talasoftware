import React from "react";

export interface ButtonProps {
  onClick?: ()=> void;
  children: React.ReactNode
  disabled?:boolean
  className?:string
}

export function BaseButton(props:ButtonProps) {
  return <a
                 onClick={() => props.onClick ? props.onClick() : undefined}
                 className={props.className}>
    {props.children}
  </a>;
}