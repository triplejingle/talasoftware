'use client'

import {P} from "@/components/content/PTag";
import {H1} from "@/components/content/HTag";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";
import triniti from "../public/trinitsolutions.webp"
import Image from "next/image"
import dotoffice from "../public/dotoffice.png"

import thinkproject from "../public/thinkproject.png"
import smartrobotsolutions from "../public/smartrobotsolutions.png"
import vattenfal from "../public/vattenfal.svg";
import tennet from "../public/tennet.svg";
import React from "react";
import Link from "next/link";

export default function Home() {
  return ( <div className={" pt-20 h-full pb-120 "}>
      <div className={"text-white "}>
        <P className={"flex justify-around md:flex md:justify-around text-white mb-1"}>
          Hi,
        </P>
        <P className={"flex justify-around md:flex md:justify-around text-white mb-4"}>
           Ik ben Djimaro Talahatu
        </P>
        <div className={"flex justify-around font-bold "}>
          <H1 >Freelance </H1>
        </div>
        <div className={"flex justify-around"}>
        < H1 className={"flex justify-around"}>Software developer </H1>
        </div>
        <div className={" flex justify-around my-4 "}>
          <PrimaryLinkButton href={"/softwaredevelopment"}>
            Software developer nodig?
          </PrimaryLinkButton>
          {/*<SecondaryLinkButton href={"/DjimaroTalahatuCV.docx"} className={"ml-2 px-5"}>*/}
          {/*  Download resume*/}
          {/*</SecondaryLinkButton>*/}

        </div>
        <div className="mt-24 sm:mt-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              <Link href={"https://www.vattenfall.nl/"} className={"col-span-2 lg:col-span-1 "}>
                <Image
                  alt="Reform"
                  src={vattenfal}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain "
                  priority
                />
              </Link>
              <Link href={"https://trinitisolutions.nl/"} className={"col-span-2 lg:col-span-1 "}>
              <Image
                alt="Reform"
                src={triniti}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
                priority
              />
              </Link>
              <Link href={"https://www.tennet.eu/nl"} className={"col-span-2 lg:col-span-1 "}>
              <Image
                alt="Reform"
                src={tennet}
                width={158}
                height={48}
                className=" max-h-12 w-full object-contain"
                priority
              />
              </Link>
              <Link href={"https://www.thinkproject.com/"} className={"col-span-2 lg:col-span-1 "}>
                <Image
                  alt="Reform"
                  src={thinkproject}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                  priority
                />
              </Link>
              <Link href={"https://smartrobot.solutions/"} className={"col-span-2 lg:col-span-1 "}>
                <Image
                  alt="Reform"
                  src={smartrobotsolutions}
                  width={158}
                  height={48}
                  className=" max-h-12 w-full object-contain "
                  priority
                />
              </Link>
              {/*<div className={"col-span-2 max-h-12 w-full object-contain lg:col-span-1"}>*/}
              {/*  <Tennet width={200}/>*/}
              {/*</div>*/}
              <Link href={"https://www.dotoffice.info/"} className={"col-span-2 lg:col-span-1 "}>
                <Image
                  alt="Reform"
                  src={dotoffice}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain "
                  priority
                />
              </Link>

            </div>
          </div>
        </div>
        {/*<div>Linked in</div>*/}
      </div>
    </div>);
}
