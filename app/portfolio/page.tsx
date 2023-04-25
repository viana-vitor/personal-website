import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col">
        <a>
          <div className="flex justify-center">
            <Image
              src={"/images/handie.png"}
              alt="Project page"
              width={128}
              height={128}
              className="w-32 h-32"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl text-neutral-800 dark:text-neutral-200">
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
  );
}
