import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <div className="text-3xl mb-3 font-serif font-bold">Projects</div>
      <a href="https://github.com/viana-vitor/Handie" target="_blank">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="flex justify-center shrink mt-4">
            <Image
              src={"/images/handieicon.svg"}
              alt="Project page"
              width={128}
              height={128}
              className="w-52 h-52 drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <h1 className="text-2xl font-semibold font-serif text-neutral-800 dark:text-neutral-200">
              Handie
            </h1>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">
              Handie is an app for general contractors to manage clients,
              projects, and estimates. Created in Python using PySide6.
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
