import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { TwitterIcon, GitHubIcon } from "@/components/icons";
import { getTwitterMetrics } from "@/lib/twitter";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default async function Home() {
  let tweetCount;

  try {
    tweetCount = await getTwitterMetrics();
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Vitor Viana</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        Hi I'm Vitor, a freelance developer and start up founder.
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center my-8 ">
        <Image
          alt="name"
          src="/images/avatar.jpeg "
          className="rounded-full grayscale h-28 w-28 object-cover"
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            target="_blank"
            href="https://twitter.com/vitoroliviana"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            {`${tweetCount?.toLocaleString()} total tweets`}
          </a>
          <a
            target="_blank"
            href="https://github.com/viana-vitor"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            Check out github
          </a>
        </div>
      </div>
    </section>
  );
}
