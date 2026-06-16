import React from "react";


interface PageSectionAProps{
    header?: string,
    title: string,
    description: string,
    features:{name: string, description: string, href?:string, hrefText?:string , icon: any}[]
}
export default function FeatureSectionA(props: PageSectionAProps) {

  return ( <div className=" relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
          {props.header && <h2 className="text-base/7 font-semibold text-amber-400">{props.header}</h2>}
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {props.title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
              {props.description}
          </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {props.features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                      <dt className="text-base/7 font-semibold text-white">
                          <div
                              className="mb-6 flex size-10 items-center justify-center rounded-lg bg-icon-500">
                              <feature.icon aria-hidden="true" className="size-6 text-white"/>
                          </div>
                          {feature.name}
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-400">
                          <p className="flex-auto">{feature.description}</p>
                          {feature.href&& feature.href != "#" && <p className="mt-6">
                            <a href={feature.href}
                                 className="text-sm/6 font-semibold text-indigo-400 hover:text-indigo-300">
                                  {feature.hrefText} <span aria-hidden="true">→</span>
                              </a>
                          </p>}
                      </dd>
                  </div>
              ))}
          </dl>
      </div>
  </div>)
}