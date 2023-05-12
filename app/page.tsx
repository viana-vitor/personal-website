import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { TwitterIcon, GitHubIcon } from "@/components/icons"
import { getTwitterMetrics, getYearContributions } from "@/lib/metrics"

const inter = Inter({ subsets: ["latin"] })

export const revalidate = 60

export default async function Home() {
  let tweetCount, contributionCount

  try {
    tweetCount = await getTwitterMetrics()
    contributionCount = await getYearContributions()
  } catch (error) {
    console.log(error)
  }

  return (
    <section>
      <div className='flex flex-col md:flex-row items-start'>
        <Image
          alt='name'
          src='/images/avatar_1.jpg '
          className='aspect-video rounded-2xl h-[500px] w-[400px] object-cover'
          width={400}
          height={500}
          quality={100}
          priority
        />
        <div className='mt-8 md:mt-0 md:ml-6 text-neutral-500 dark:text-neutral-400'>
          <div>
            <h1 className='font-bold text-3xl font-serif text-black dark:text-neutral-200'>
              Vitor Viana
            </h1>
            <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
              Hi I'm Vitor, a freelance developer and start up founder.
            </p>
            <blockquote className='border-l-2 pl-6 italic my-12 max-w-[460px] text-neutral-500 dark:text-neutral-200'>
              Life is a process of exploration and discovery, rather than simply
              a destination to be reached.
            </blockquote>
          </div>
          <div className='flex flex-col mt-14 gap-2'>
            <a
              target='_blank'
              href='https://twitter.com/vitoroliviana'
              className='flex items-center gap-2'
            >
              <TwitterIcon />
              {`${tweetCount?.toLocaleString()} total tweets`}
            </a>
            <a
              target='_blank'
              href='https://github.com/viana-vitor'
              className='flex flex-wrap items-center gap-2'
            >
              <GitHubIcon />
              {`${contributionCount} contributions in the past year`}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
