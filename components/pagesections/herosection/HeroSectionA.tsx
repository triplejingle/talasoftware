import React from "react";

interface HeroSectionAProps{
    header: string,
    description: string,
    socialproofs: { icon:any, name: string}[]
    children?: React.ReactNode
}

export default function HeroSectionA(props: HeroSectionAProps){
    return <div className="relative isolate overflow-hidden ">
        <div
            aria-hidden="true"
            className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
            <div
                style={{
                    clipPath:
                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                    {props.header}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                    {props.description}
                </p>
                <div className={"flex flex-row justify-between mt-5"}>
                    {props.socialproofs.map((socialproof, index) =>
                    <div key={index} className={"flex flex-row gap-x-4"}>
                        <socialproof.icon aria-hidden="true"     className="mt-1 size-5 flex-none text-icon-400"/>
                        <strong className="font-semibold text-white">{socialproof.name}</strong>
                    </div>)}

                    {/*<div className={"flex flex-row gap-x-4"}>*/}
                    {/*    <ClockIcon aria-hidden="true"*/}
                    {/*               className="mt-1 size-5 flex-none text-indigo-400"/>*/}
                    {/*    <strong className="font-semibold text-white">11+ jaar ervaring</strong>*/}
                    {/*</div>*/}

                    {/*<div className={"flex flex-row gap-x-4"}>*/}
                    {/*    <BanknotesIcon aria-hidden="true"*/}
                    {/*                   className="mt-1 size-5 flex-none text-indigo-400"/>*/}
                    {/*    <strong className="font-semibold text-white">10+ systemen gebouwd</strong>*/}
                    {/*</div>*/}

                    {/*<div className={"flex flex-row gap-x-4"}>*/}
                    {/*    <EyeIcon aria-hidden="true"*/}
                    {/*             className="mt-1 size-5 flex-none text-indigo-400"/>*/}
                    {/*    <strong className="font-semibold text-white">8000+ gebruikers</strong>*/}
                    {/*</div>*/}
                </div>

                <div className="mt-10 flex items-center gap-x-6">
                    {props.children && props.children}
                </div>
            </div>
            <div
                className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <img
                        alt="App screenshot"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        width={2432}
                        height={1442}
                        className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                    />
                </div>

            </div>
        </div>
    </div>
}






























