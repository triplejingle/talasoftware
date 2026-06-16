import React from "react";

interface ActionButtonProps{
  onClick?: ()=> void;
  children?: React.ReactNode
  disabled?:boolean
  className?:string
}

export function PrimaryActionButton(properties:ActionButtonProps) {
  const props = {...properties, className:" bg-action-500 hover:bg-action-600 text-white rounded-md "+properties.className};
  return <button {...props}>
            {properties.children}
        </button>
}

export function SecondaryActionButton(properties:ActionButtonProps) {
  const props = {...properties, className:" text-action-300 border-action-500 border-2 rounded-md "+properties.className};
  return <button {...props}>
          {properties.children}
        </button>
}

export function TertiaryActionButton(properties:ActionButtonProps) {
  const props = {...properties, className:"  text-neutral-500 "+properties.className};
  return <button  {...props}>
    {properties.children}
  </button>
}

