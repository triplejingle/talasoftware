export default function Footer() {


  return (<footer class=" flex flex-col justify-between dark:bg-white">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex flex-col items-center text-center">




        <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">

        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-700"/>

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

        <div class="flex mt-3 -mx-2 sm:mt-0">

          <a href="/privacy"
             class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
             aria-label="Reddit"> Privacy & cookie beleid </a>


        </div>
      </div>
    </div>
  </footer>);
}