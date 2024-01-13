import Link from '@/components/link'

export default function NotFound() {
  return (
    <div className="my-16 flex flex-col  items-center justify-start text-center md:mt-24">
      <div className="space-x-2 pb-4 md:space-y-5">
        <h1 className="md:leading-14 text-6xl font-extrabold leading-9 tracking-tight text-gray-900  md:text-8xl dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-xs sm:max-w-md ">
        <p className="mb-4 text-lg font-bold leading-normal sm:text-xl md:text-2xl">
          Sorry we couldn&apos;t find this page.
        </p>
        <p className="mb-8 text-sm sm:text-base">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-full border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
