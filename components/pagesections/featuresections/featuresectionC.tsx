import React from "react";
import beforeafteroverzicht from '@/public/beforeafteroverzicht.png'
import Image from "next/image";
import beforeafterexcel from "@/public/beforeafterexcel.png";

interface PageSectionCProps{
    title: string,
    description: string,
    features:{name: string, description: string, href?:string, hrefText?:string , icon: any}[]
}
export default function FeatureSectionC(props: PageSectionCProps) {

  return (<div className="relative mx-auto max-w-7xl md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                      {props.title}
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-300">
                      {props.description}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                      {props.features.map((feature) => (
                          <div key={feature.name} className="relative pl-9">
                              <dt className="inline font-semibold text-white">
                                  <feature.icon aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-icon-400"/>
                                  {feature.name}
                              </dt>
                              {' '}
                              <dd className="inline">{feature.description}</dd>
                          </div>
                      ))}
                  </dl>
              </div>
          </div>
          <div className="sm:px-6 lg:px-0">

                  <div
                      aria-hidden="true"
                  />
                  {/*<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">*/}
                  <div className="ml-5 visible md:hidden max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                      <Image
                          alt="App screenshot"
                          src={beforeafteroverzicht}
                          width={425}
                          height={800}
                          className="sm:w-50 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                      />
                  </div>

                  <div className="hidden invisible md:visible md:block max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                      <Image
                          alt="App screenshot"
                          src={beforeafteroverzicht}
                          width={800}
                          height={1600}
                          className=" rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                      />
                  </div>
                  {/*</div>*/}
                  <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 ring-1 ring-white/10 ring-inset sm:rounded-3xl"
                  />
              </div>
      </div>
  </div>)
}