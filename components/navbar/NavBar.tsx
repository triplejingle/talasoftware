'use client'
import {NavBarbutton, PrimaryButton, SecondaryButton} from "@/components/uicomponents/buttons/Buttons";
import {Dialog, DialogPanel} from '@headlessui/react'
import React, {useState} from "react";
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const navigation = [
  {name: '(logo)', href: "/"},
  // {name: 'Over mij', href: '/about'},
  {name: 'Software ontwikkeling', href: '/test'},
  // {name: 'Team', href: '/projects'},
  // {name: 'Roadmap', href: '#'},
  // {name: 'Availability', href: '#'},
]


export function NavBar() {
  const pathname = usePathname()
  const router = useRouter();

  function navigate(href: string) {
    router.push(href);
  }
    return <div className={"top-0 sticky z-0 bg-gray-200  md:py-5"}>
    <div className={"md:flex md:justify-between  md:mx-16 "}>
      <div className={"mr-5 md:flex hidden items-center"}>
        {navigation.map((url) =>

            <NavBarbutton key={url.name} text={url.name} href={url.href} pathname={pathname} onClick={() => navigate(url.href)}/>

        )}
      </div>
      <div className={" "}>
        <SecondaryButton className={" hidden md:block  px-4 py-2 hover:bg-amber-500 hover:text-white"}>
          <Link href="/contact">Contact</Link>
        </SecondaryButton>
      </div>
      <MobileNavBar/>
    </div>
  </div>
    }


    function MobileNavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter();
    function navigate(href:string){
    router.push(href);
  }
    const pathname = usePathname()
    return <div className={" block md:hidden "}>
    <div className={"flex justify-end justify-items-center my-6 mr-6"}>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6 group-data-open:hidden"/>
      </button>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
      <div className="fixed inset-0 z-50 bg-gray-300"/>
      <DialogPanel
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              width={400}
              height={400}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6 "/>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((url) =>
                <div className={"mr-12 visible md:invisible"} key={url.name}>
                  <NavBarbutton text={url.name} href={url.href} pathname={pathname} onClick={() => navigate(url.href)}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>;
}
