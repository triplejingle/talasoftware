'use client'

import * as yup from "yup"
import emailjs from '@emailjs/browser';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useRef} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {PrimaryButton} from "@/components/uicomponents/buttons/PrimaryButtons";
import {LabelTag} from "@/components/content/LabelTag";
import {H1} from "@/components/content/HTag";

interface ContactProps {
  firstName?: string,
  lastName?:string
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
    formState: {errors,   isDirty, isSubmitted}
  } = useForm<ContactProps>({resolver: yupResolver(schema), mode: "onChange", defaultValues:{firstName:"", lastName:"", email:"", message:""}})

  const onSubmit: SubmitHandler<ContactProps> = (data) => {
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form?.current, {
        publicKey: process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY!,
      })
      .then(
        () => {
          toast('Succesvol verzonden', {
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

  return (<div>
      <div className="mx-auto max-w-2xl text-center">
        <H1 className="font-bold text-gray-300">Vertel mij jouw idee!</H1>
      </div>
      <form id={"myForm"} onSubmit={handleSubmit(onSubmit)} ref={form} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <LabelTag htmlFor="firstName" className="block text-black">
              Voornaam
            </LabelTag>
            <div className="mt-2.5">
              <input
                {...register("firstName")}
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-xl border-0 px-3.5 py-2 text-black shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>
          <div>
            <LabelTag htmlFor="lastName" className="block text-black">
              Achternaam
            </LabelTag>
            <div className="mt-2.5">
              <input
                {...register("lastName")}
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-xl border-0 px-3.5 py-2 text-black shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <LabelTag htmlFor="email" className="block text-black">
              Email *
            </LabelTag>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-xl border-0 px-3.5 py-2 text-black shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-xl sm:leading-6"
                {...register("email")}
              />
              {errors.email ? <p className="text-red-500 text-xs italic">Voer hier je email in.</p> : <></>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <LabelTag htmlFor="message" className="block text-black">
              Bericht *
            </LabelTag>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-xl border-0 px-3.5 py-2 text-black shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-xl sm:leading-6"
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
          {/*      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 data-checked:bg-yellow-600"*/}
          {/*    >*/}
          {/*      <span className="sr-only">Agree to policies</span>*/}
          {/*      <span*/}
          {/*        aria-hidden="true"*/}
          {/*        className="h-4 w-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"*/}
          {/*      />*/}
          {/*    </Switch>*/}
          {/*  </div>*/}
          {/*  <Label className="text-xl leading-6 text-gray-600">*/}
          {/*    By selecting this, you agree to our{' '}*/}
          {/*    <a href="#" className="font-semibold text-yellow-600">*/}
          {/*      privacy&nbsp;policy*/}
          {/*    </a>*/}
          {/*    .*/}
          {/*  </Label>*/}
          {/*</Field>*/}

          <ToastContainer/>
        </div>
        <div className="mt-10 flex justify-end">
          {!isSubmitted ?
            <PrimaryButton disabled={isSubmitted} className={" px-10 py-3 text-center  text-black shadow-xs"}>
              Versturen
            </PrimaryButton>
            :
            <PrimaryButton disabled={!isDirty} className={"  px-10 py-3 text-center  text-black shadow-xs"}>
              Opnieuw versturen
            </PrimaryButton>

          }
        </div>
      </form>
    </div>
  )
}