'use client'
import {BuildingOffice2Icon} from "@heroicons/react/16/solid";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";
import React, {useEffect, useRef, useState} from "react";
import NavBar from "@/components/navbar/NavBar";
import {PrimaryActionButton} from "@/components/uicomponents/buttons/ActionButton";
import {LabelTag} from "@/components/content/LabelTag";
import {Bounce, toast, ToastContainer} from "react-toastify";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
interface ContactProps {
  firstName?: string,
  lastName?: string
  email: string;
  message: string;
}

const schema = yup
    .object()
    .shape({
      firstName: yup.string(),
      lastName: yup.string(),
      email: yup.string().required("voer hier je email in"),
      message: yup.string().required("contacting me without sending a message he?"),
    })
    .required()
export default function Page() {


  const form = useRef<string | HTMLFormElement | any>();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isDirty, isSubmitted}
  } = useForm<ContactProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {firstName: "", lastName: "", email: "", message: ""}
  })

  const onSubmit: SubmitHandler<ContactProps> = (data) => {
    emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form?.current, {
          publicKey: process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY!,
        })
        .then(
            () => {
              toast('Jouw bericht is verzonden, tot snel!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
              reset(data);
            }
        );
  };
  return (
      <div className={"bg-[url('../public/servicesapi2.png')] bg-cover bg-center bg-no-repeat  bg-primary-400 bg-blend-multiply  md:bg-transparent"}>
        <div className="absolute inset-0 overflow-hidden -scale-x-100 ">
          <div className="absolute inset-0 bg-[url('../public/servicesapi2.png')] bg-cover bg-center bg-no-repeat -scale-x-100 bg-primary-400 bg-blend-multiply"></div>
        </div>
        <NavBar/>
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Get in touch</h2>
              <p className="mt-6 text-lg/8 text-gray-400">
                Neem gerust contact met ons op. We reageren zo snel mogelijk op je bericht.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adres</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    Newtonstraat 18
                    <br/>
                    7316 EX, Apeldoorn
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telefoon</span>
                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="tel:+31619583777" className="hover:text-white">
                      +31619583777
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">E-mail</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="mailto:info@talasoftware.nl" className="hover:text-white">
                      info@talasoftware.nl
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-10 md:mx-auto max-w-2xl px-3 lg:px-8 ">
            <form id={"myForm"} onSubmit={handleSubmit(onSubmit)} ref={form}
                  className="md:mx-auto mt-16 max-w-xl sm:mt-20 text-white font-semibold ">
              <div className="md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2 space-x-0 sm:space-y-8 ">
                <div>
                  <LabelTag htmlFor="firstName" className="block ">
                    Voornaam
                  </LabelTag>
                  <div className="mt-2.5">
                    <input
                        {...register("firstName")}
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        className="inset-shadow-top shadow-bot  rounded-md bg-primary-700/80 block w-full  border-0 px-3.5 py-2  shadow-xs  placeholder:text-primary-400 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <LabelTag htmlFor="lastName" className="block ">
                    Achternaam
                  </LabelTag>
                  <div className="mt-2.5">
                    <input
                        {...register("lastName")}
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        className="inset-shadow-top shadow-bot rounded-md bg-primary-700/80  block w-full border-0 px-3.5 py-2  shadow-xs  placeholder:text-primary-400 sm:text-xl sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <LabelTag htmlFor="email" className="block ">
                    Email *
                  </LabelTag>
                  <div className="mt-2.5 ">
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="inset-shadow-top shadow-bot rounded-md bg-primary-700/80  block w-full  border-0 px-3.5 py-2  shadow-xs  placeholder:text-primary-400 sm:text-xl sm:leading-6"
                        {...register("email")}
                    />
                    {errors.email ? <p className="py-3 text-red-500 text-xs italic">Voer hier je email in.</p> : <p className={"py-3 text-xs"}> &nbsp;</p>}
                  </div>
                </div>

                <div className="sm:col-span-2 ">
                  <LabelTag htmlFor="message" className="block ">
                    Bericht *
                  </LabelTag>
                  <div className="mt-2.5">
              <textarea
                  id="message"
                  rows={4}
                  className="inset-shadow-top shadow-bot  bg-primary-700/80 block w-full border-0 px-3.5 py-2  placeholder:text-primary-400  sm:text-xl sm:leading-6 rounded-md"
                  {...register("message")}
              />
                    {errors.message ? <p className="py-3 text-red-500 text-xs italic">Voer hier je bericht in.</p> : <p className={"py-3 text-xs"}> &nbsp;</p>}
                  </div>
                </div>
                {/*<Field className="flex gap-x-4 sm:col-span-2">*/}
                {/*  <div className="flex h-6 items-center">*/}
                {/*    <Switch*/}
                {/*      checked={agreed}*/}
                {/*      onChange={setAgreed}*/}
                {/*      className="group flex w-8 flex-none cursor-pointer rounded-full bg-primary-200 p-px ring-1 ring-inset ring-primary-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 data-checked:bg-primary-600"*/}
                {/*    >*/}
                {/*      <span className="sr-only">Agree to policies</span>*/}
                {/*      <span*/}
                {/*        aria-hidden="true"*/}
                {/*        className="h-4 w-4 transform rounded-full bg-white shadow-xs ring-1 ring-primary-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"*/}
                {/*      />*/}
                {/*    </Switch>*/}
                {/*  </div>*/}
                {/*  <Label className="text-xl leading-6 text-primary-600">*/}
                {/*    By selecting this, you agree to our{' '}*/}
                {/*    <a href="#" className="font-semibold text-primary-600">*/}
                {/*      privacy&nbsp;policy*/}
                {/*    </a>*/}
                {/*    .*/}
                {/*  </Label>*/}
                {/*</Field>*/}
                <ToastContainer/>
              </div>
              <div className="mt-10 flex justify-center py-10 sm:px-0 sm:justify-end">
                {!isSubmitted ?
                    <PrimaryActionButton disabled={isSubmitted} className={" px-10 py-3 text-center   shadow-xs"}>
                      Versturen
                    </PrimaryActionButton>
                    :
                    <PrimaryActionButton disabled={!isDirty} className={"  px-10 py-3 text-center   shadow-xs"}>
                      Opnieuw versturen
                    </PrimaryActionButton>
                }
              </div>
            </form>
          </div>
          {/*<form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">*/}
          {/*  <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">*/}
          {/*    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">*/}
          {/*      <div>*/}
          {/*        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">*/}
          {/*          First name*/}
          {/*        </label>*/}
          {/*        <div className="mt-2.5">*/}
          {/*          <input*/}
          {/*              id="first-name"*/}
          {/*              name="first-name"*/}
          {/*              type="text"*/}
          {/*              autoComplete="given-name"*/}
          {/*              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">*/}
          {/*          Last name*/}
          {/*        </label>*/}
          {/*        <div className="mt-2.5">*/}
          {/*          <input*/}
          {/*              id="last-name"*/}
          {/*              name="last-name"*/}
          {/*              type="text"*/}
          {/*              autoComplete="family-name"*/}
          {/*              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="sm:col-span-2">*/}
          {/*        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">*/}
          {/*          Email*/}
          {/*        </label>*/}
          {/*        <div className="mt-2.5">*/}
          {/*          <input*/}
          {/*              id="email"*/}
          {/*              name="email"*/}
          {/*              type="email"*/}
          {/*              autoComplete="email"*/}
          {/*              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="sm:col-span-2">*/}
          {/*        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">*/}
          {/*          Phone number*/}
          {/*        </label>*/}
          {/*        <div className="mt-2.5">*/}
          {/*          <input*/}
          {/*              id="phone-number"*/}
          {/*              name="phone-number"*/}
          {/*              type="tel"*/}
          {/*              autoComplete="tel"*/}
          {/*              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="sm:col-span-2">*/}
          {/*        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">*/}
          {/*          Message*/}
          {/*        </label>*/}
          {/*        <div className="mt-2.5">*/}
          {/*        <textarea*/}
          {/*            id="message"*/}
          {/*            name="message"*/}
          {/*            rows={4}*/}
          {/*            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"*/}
          {/*            defaultValue={''}*/}
          {/*        />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="mt-8 flex justify-end">*/}
          {/*      <PrimaryActionButton*/}

          {/*          className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs 400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"*/}
          {/*      >*/}
          {/*        Send message*/}
          {/*      </PrimaryActionButton>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</form>*/}
        </div>
      </div>
      </div>
  )
}
