import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 60

export default function Home() {
  
  
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif'>Vitor Viana</h1>
      <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
        About
      </p>
      <div className='flex flex-col md:flex-row items-start md:items-center my-8 '>
        <Image 
          alt='name'
          src="/images/avatar.jpeg "
          className="rounded-full grayscale"
          width={100}
          height={100}
          priority
        />
        <div className='mt-8 md:mt-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'>

        </div>
      </div>
    </section>
  )
}
