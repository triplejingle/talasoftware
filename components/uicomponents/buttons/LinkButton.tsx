
import React from "react";
import {BaseButton, ButtonProps} from "@/components/uicomponents/buttons/BaseButton";
import Link from "next/link";
import {useRouter} from "next/navigation";
export interface LinkButtonProps extends ButtonProps{
  href:string;
}
export function PrimaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: " bg-primary-500 hover:bg-primary-400 text-white rounded-full px-4 py-2 "+properties.className};
  const router = useRouter();
  function navigate(href: string) {
    router.push(href);
  }
  return <Link href={props.href} onClick={() => navigate(props.href)}>
    <BaseButton {...props}  >
      {props.children}
    </BaseButton>
  </Link>
}

export function SecondaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: "text-primary-500  border-primary-500 "+properties.className};

  const router = useRouter();
  function navigate(href: string) {
    router.push(href);
  }
  return <Link href={props.href} onClick={() => navigate(props.href)}>
    <BaseButton {...props}  >
      {props.children}
    </BaseButton>
  </Link>
}

export function TertiaryLinkButton(properties:LinkButtonProps) {
  const props = {...properties, className: "text-neutral-500 hover:text-primary-500 "+properties.className};
  const router = useRouter();
  function navigate(href: string) {
    router.push(href);
  }
  return <Link href={props.href} onClick={() => navigate(props.href)}>
    <BaseButton {...props}  >
      {props.children}
    </BaseButton>
  </Link>
}

