'use client'

import * as yup from "yup"
import emailjs from '@emailjs/browser';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRef} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ContactProps {
  email: string;
  message: string;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().required("please enter your email"),
    message: yup.string().required("contacting me without sending a message he?"),
  })
  .required()
export default function Page() {
  const form = useRef<string | HTMLFormElement | any>();

  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isSubmitted}
  } = useForm<ContactProps>({resolver: yupResolver(schema), mode: "onChange"})

  const onSubmit: SubmitHandler<ContactProps> = () => {
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form?.current, {
        publicKey: process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY!,
      })
      .then(
        () => {
          toast('Message send', {
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
        }
      );
  };

  return (<div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Contact me</h2>
      </div>
      <form id={"myForm"} onSubmit={handleSubmit(onSubmit)} ref={form} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-black">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-black">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
              Email *

            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                {...register("email")}
              />
              {errors.email ? <p className="text-red-500 text-xs italic">Please enter your email.</p> : <></>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-black">
              Message *
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                {...register("message")}
              />
              {errors.message ? <p className="text-red-500 text-xs italic">Please enter a message.</p> : <></>}
            </div>
          </div>
          {/*<Field className="flex gap-x-4 sm:col-span-2">*/}
          {/*  <div className="flex h-6 items-center">*/}
          {/*    <Switch*/}
          {/*      checked={agreed}*/}
          {/*      onChange={setAgreed}*/}
          {/*      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 data-[checked]:bg-yellow-600"*/}
          {/*    >*/}
          {/*      <span className="sr-only">Agree to policies</span>*/}
          {/*      <span*/}
          {/*        aria-hidden="true"*/}
          {/*        className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"*/}
          {/*      />*/}
          {/*    </Switch>*/}
          {/*  </div>*/}
          {/*  <Label className="text-sm leading-6 text-gray-600">*/}
          {/*    By selecting this, you agree to our{' '}*/}
          {/*    <a href="#" className="font-semibold text-yellow-600">*/}
          {/*      privacy&nbsp;policy*/}
          {/*    </a>*/}
          {/*    .*/}
          {/*  </Label>*/}
          {/*</Field>*/}

          <ToastContainer/>
        </div>
        <div className="mt-10">
          {!isSubmitted ? <button
              disabled={isSubmitted}
              type="submit"
              className="block w-full rounded-md bg-teal-300 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Send
            </button> :
            <button
              disabled={!isDirty || !!errors}
              type="submit"
              className="block w-full rounded-md bg-cyan-400 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Send again
            </button>}
        </div>
      </form>
    </div>
  )
}