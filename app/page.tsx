
import {DownloadFileButton, NavigationButton} from "@/components/uicomponents/buttons/Buttons";

export default function Home() {
  return (
    <main >
      <div className={"flex flex-col items-center text-black "}>
        <bold className={"text-black"} >
          Hi there, i am  <b className={"text-cyan-400"}> Djimaro Talahatu</b>
        </bold>
        <div className={"text-black"}> Software engineer & Full stack developer</div>
        <div className={"flex justify-around md:w-1/3 my-20"} >
          <NavigationButton text={"Let's meet"} href={"contact"}/>
          <DownloadFileButton text={"Download resume"} href={"/DjimaroTalahatuCV.docx"}/>
        </div>
        {/*<div>Linked in</div>*/}
      </div>
    </main>);
}
