import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <div className="text-3xl mb-3 font-serif font-bold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 ">
        <div className="flex flex-col border rounded-md p-2 bg-neutral-100 dark:bg-neutral-800">
          <a href="https://github.com/viana-vitor/Handie" target="_blank">
            <div className="flex justify-center bg-neutral-200 rounded-lg shadow-md py-2">
              <Image
                src={"/images/handieicon.svg"}
                alt="Project page"
                width={128}
                height={128}
                className="w-32 h-32"
              />
            </div>
            <div className="mt-2">
              <h1 className="text-2xl font-semibold font-serif text-neutral-800 dark:text-neutral-200">
                Handie
              </h1>
              <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                Handie is an app for general contractors to manage clients,
                projects, and estimates. Created in Python using PySide6.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
