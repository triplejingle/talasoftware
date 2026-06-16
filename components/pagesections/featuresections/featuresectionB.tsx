import React from "react";


interface PageSectionBProps{
    header: string,
    title: string,
    description: string,
    features:{name: string, description: string, href?:string, hrefText?:string , icon: any}[]
}
export default function FeatureSectionB(props: PageSectionBProps) {

  return (<div className="relative mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">{props.header}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {props.title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
              {props.description}
          </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {props.features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                      <dt className="text-base/7 font-semibold text-white">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-icon-500">
                              <feature.icon aria-hidden="true" className="size-6 text-white" />
                          </div>
                          {feature.name}
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
                  </div>
              ))}
          </dl>
      </div>
  </div>)
}