'use client'

import * as yup from "yup"
import emailjs from '@emailjs/browser';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useRef} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {H2} from "@/components/content/HTag";
import {LabelTag} from "@/components/content/LabelTag";
import {PrimaryButton} from "@/components/uicomponents/buttons/PrimaryButtons";
import {BuildingOffice2Icon} from "@heroicons/react/16/solid";
import {P} from "@/components/content/PTag";
import {BuildingLibraryIcon, CurrencyEuroIcon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";

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

  return (<div className="text-white mt-10 sm:mt-50">
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className=" px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        {/*<div className="md:mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">*/}
        <div className=" inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
          {/*<svg*/}
          {/*  aria-hidden="true"*/}
          {/*  className="absolute inset-0 size-full stroke-primary-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
          {/*>*/}
          {/*  <defs>*/}
          {/*    <pattern*/}
          {/*      x="100%"*/}
          {/*      y={-1}*/}
          {/*      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
          {/*      width={200}*/}
          {/*      height={200}*/}
          {/*      patternUnits="userSpaceOnUse"*/}
          {/*    >*/}
          {/*      <path d="M130 200V.5M.5 .5H200" fill="none"/>*/}
          {/*    </pattern>*/}
          {/*  </defs>*/}
          {/*  <rect fill="white" width="100%" height="100%" strokeWidth={0}/>*/}
          {/*  <svg x="100%" y={-1} className="overflow-visible fill-primary-50">*/}
          {/*    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0}/>*/}
          {/*  </svg>*/}
          {/*  <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0}/>*/}
          {/*</svg>*/}
        </div>
        <H2 className="font-semibold tracking-tight text-pretty text-center ">
          Laten we in contact komen!
        </H2>
        <div className={"hidden sm:block"}>
          <ContactInfo/>
        </div>

      </div>

      {/*</div>*/}



    <div className="md:mx-auto max-w-2xl px-3 lg:px-8">

      <form id={"myForm"} onSubmit={handleSubmit(onSubmit)} ref={form}
            className="md:mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2 space-x-0 sm:space-y-8">
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
                className="block w-full rounded-xl border-0 px-3.5 py-2  shadow-xs ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-xl sm:leading-6"
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
                className="block w-full rounded-xl border-0 px-3.5 py-2 shadow-xs ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <LabelTag htmlFor="email" className="block ">
              Email *
            </LabelTag>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-xl border-0 px-3.5 py-2  shadow-xs ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-xl sm:leading-6"
                {...register("email")}
              />
              {errors.email ? <p className="text-red-500 text-xs italic">Voer hier je email in.</p> : <></>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <LabelTag htmlFor="message" className="block ">
              Bericht *
            </LabelTag>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-xl border-0 px-3.5 py-2  shadow-xs ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-xl sm:leading-6"
                {...register("message")}
              />
              {errors.message ? <p className="text-red-500 text-xs italic">Voer hier je bericht in.</p> : <></>}
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
            <PrimaryButton disabled={isSubmitted} className={" px-10 py-3 text-center   shadow-xs"}>
              Versturen
            </PrimaryButton>
            :
            <PrimaryButton disabled={!isDirty} className={"  px-10 py-3 text-center   shadow-xs"}>
              Opnieuw versturen
            </PrimaryButton>
          }
        </div>
      </form>
      <div className={"block sm:hidden flex justify-center pb-10"}>
        <ContactInfo/>
      </div>
    </div>
    </div>
  </div>)
}

function ContactInfo() {
  return <dl className=" mt-10 space-y-0 sm:space-y-4 text-base/7 sm:flex sm:justify-start ">
    <div className={"sm:mr-8"}>
      <div className="flex gap-x-4 mb-2">
        <dt className="flex-none">
          <span className="sr-only">Adres</span>
          <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-primary-400"/>
        </dt>
        <dd>
          <P>
            Newtonstraat 18
            <br/>
            7316 EX, Apeldoorn</P>
        </dd>
      </div>
      <div className="flex gap-x-4 mb-2">
        <dt className="flex-none">
          <span className="sr-only">Telephone</span>
          <PhoneIcon aria-hidden="true" className="h-7 w-6 text-primary-400"/>
        </dt>
        <dd>
          <a href="tel:+31619583777" className="hover:text-primary-900">
            <P>+31619583777</P>
          </a>
        </dd>
      </div>
      <div className="flex gap-x-4 mb-2">
        <dt className="flex-none">
          <span className="sr-only">Email</span>
          <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-primary-400"/>
        </dt>
        <dd>
          <a href="mailto:info@talasoftware.nl" className="hover:text-primary-900">
            <P>info@talasoftware.nl</P>
          </a>
        </dd>
      </div>
    </div>

    <div>
      <div className="flex gap-x-4 mb-2">
        <dt className="flex-none">
          <span className="sr-only">Email</span>
          <CurrencyEuroIcon aria-hidden="true" className="h-7 w-6 text-primary-400"/>
        </dt>
        <dd>
          <P>KvK: 86247743</P>
        </dd>
      </div>
      <div className="flex gap-x-4 mb-2">
        <dt className="flex-none">
          <span className="sr-only">Email</span>
          <BuildingLibraryIcon aria-hidden="true" className="h-7 w-6 text-primary-400"/>
        </dt>
        <dd>
          <P>Btw: NL004215999B57</P>
        </dd>
      </div>
    </div>
  </dl>
}