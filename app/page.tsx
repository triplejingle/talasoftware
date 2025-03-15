'use client'

import {P} from "@/components/content/PTag";
import {H1} from "@/components/content/HTag";
import {PrimaryLinkButton} from "@/components/uicomponents/buttons/LinkButton";

export default function Home() {
  return (
    <main >
      <div className={"text-black "}>
        <H1 className={"flex justify-around md:flex md:justify-around  font-bold text-black mb-1"}>
         Hi,
        </H1>
        <H1 className={"flex justify-around md:flex md:justify-around font-bold text-black mb-4"}>
         Ik ben Djimaro Talahatu
        </H1>

        <P className={"flex justify-around text-gray-300 "}>Freelance Software developer</P>
        <div className={"flex justify-around  my-20"}>
              <PrimaryLinkButton href={"/softwareontwikkeling"} className={""}>
                Software developer nodig?
              </PrimaryLinkButton>
              {/*<SecondaryLinkButton href={"/DjimaroTalahatuCV.docx"} className={"ml-2 px-5"}>*/}
              {/*  Download resume*/}
              {/*</SecondaryLinkButton>*/}

        </div>
        {/*<div>Linked in</div>*/}
      </div>
    </main>);
}
