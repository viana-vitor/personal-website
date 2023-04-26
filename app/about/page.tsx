import { TwitterIcon, ArrowIcon, GitHubIcon } from "@/components/icons";

export const metadata = {
  title: "About",
  description: "A little about my journey.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-serif font-bold">About me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi I'm Vitor, a software developer and entrepeneur.
      </p>
      <div className="text-neutral-800 dark:text-neutral-200 space-y-5">
        <p>
          Currently I'm working on Iscicle, which will be a community where
          international students can connect, ask questions, and get guidance on
          their international student journey.
        </p>
        <hr />
        <p>
          I discovered my love for programming with a python class that I took
          in college. Since then, I've been learning everything else that I know
          by myself. I believe the best way to learn is by doing, and that's why
          I love to build.
        </p>
        <p>
          I've always been interested in bussiness, and after moving to the Bay
          Area, I got immersed in the tech and startup environment. I love the
          idea of building something that can have an impact in people's lives.
          This led me to the journey of building Iscicle.
        </p>
        <p>
          Iscicle is my second big project, but nothing like my first (Handie),
          and much more than just a project. I believe Iscicle can have a real
          impact and be a huge help for international students. I was an
          international student, so I know the hardships that this group go
          through. I hope Iscicle will be the support these students need.
        </p>
        <div className="flex flex-col gap-2 md:flex-row">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/vitoroliviana"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <span className="ml-3">Twitter</span>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/viana-vitor"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <span className="ml-3">Github</span>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
