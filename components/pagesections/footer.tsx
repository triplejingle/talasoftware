import React from "react";


interface FooterProps{
    social: {name:string, href:string, icon: (props:any) => JSX.Element}[]
}
export default function Footer(props: FooterProps) {

  return ( <footer className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
      <div className="flex justify-center gap-x-6 md:order-2">
        {/*{props.social.map((item) => (*/}
        {/*    <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">*/}
        {/*      <span className="sr-only">{item.name}</span>*/}
        {/*      <item.icon aria-hidden="true" className="size-6"/>*/}
        {/*    </a>*/}
        {/*))}*/}
      </div>
      <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
        &copy; 2026 Tala Software, Inc. All rights reserved.
      </p>
    </div>
  </footer>);
}