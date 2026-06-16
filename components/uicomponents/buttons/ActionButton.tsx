import React from "react";
import {BaseButton, ButtonProps} from "@/components/uicomponents/buttons/BaseButton";

interface NavBarButton{
  text:string;
  href:string;
  pathname:string;
  onClick: ()=> void
}

export function PrimaryActionButton(properties:ButtonProps) {
  const props = {...properties, className:" bg-action-500 hover:bg-action-600 text-white rounded-md "+properties.className};
  return <BaseButton {...props}>
            {props.children}
        </BaseButton>
}

export function SecondaryActionButton(properties:ButtonProps) {
  const props = {...properties, className:" text-action-300 border-action-500 border-2 rounded-md "+properties.className};
  return <BaseButton {...props}>
          {props.children}
        </BaseButton>
}

export function TertiaryActionButton(properties:ButtonProps) {
  const props = {...properties, className:"  text-neutral-500 "+properties.className};
  return <BaseButton  {...props}>
    {props.children}
  </BaseButton>
}

