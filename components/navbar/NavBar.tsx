'use client'
import {NavBarbutton} from "@/components/uicomponents/buttons/Buttons";
import {Dialog, DialogPanel} from '@headlessui/react'
import {useState} from "react";
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";


const navigation = [
  {name: 'Home', href: "/"},
  {name: 'About', href: '/about'},
  {name: 'Skills', href: '/skills'},
  {name: 'Projects', href: '/projects'},
  // {name: 'Roadmap', href: '#'},
  // {name: 'Availability', href: '#'},
  {name: 'Contact', href: '/contact'}
]


export function NavBar() {
  const pathname = usePathname()
  const router = useRouter();
  function navigate(href:string){
    router.push(href);
  }
  return <div className={"top-0 sticky z-999 bg-white"}>
    <div className={"flex justify-end mr-5 md:rounded-full md:flex md:justify-around  md:border md:border-teal-300 md:py-2 md:mx-36 "}>
      {navigation.map((url)=>
        <div key={url.name}>
        <NavBarbutton text={url.name} href={url.href} pathname={pathname} onClick={()=>navigate(url.href)}/>
        </div>
      )}
      <MobileNavBar/>
    </div>
  </div>
}


function MobileNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <div className={"md:absolute md:hidden "}>
    <div className="visible flex ">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50"/>
      <DialogPanel
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
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
            <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>;
}
