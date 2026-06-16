import React from "react";
import {CheckIcon} from "@heroicons/react/16/solid";


interface PageSectionDProps{
    title: string,
    description: string,
    features:{name: string, description: string}[]
}
export default function FeatureSectionD(props: PageSectionDProps) {

  return ( <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-30  py-24 sm:py-32">
      <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">

              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  {props.title}
              </p>
              <p className="mt-6 text-base/7 text-gray-300">
                  {props.description}
              </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:gap-y-16">
              {props.features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                      <dt className="font-semibold text-white">
                          <CheckIcon aria-hidden="true"
                                     className="absolute top-1 left-0 size-5 text-icon-400  "/>
                          {feature.name}
                      </dt>
                      <dd className="mt-2">{feature.description}</dd>
                  </div>
              ))}
          </dl>
      </div>
  </div>)
}