import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import Headshot from "../public/images/headshotWebp.webp"

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-8">Hi, I&apos;m Stephen</h1>
          <div className="flex content-center space-x-3">
            <Image
              src={Headshot}
              alt="Stephen Puthenpurackal"
              width={120}
              height={120}
              className="rounded"
            />
            <div className="flex items-center">
              <p className="text-[#D3D4D4]">
                I&apos;m a full stack web developer, Computer science major, Fabricator, engineer, software developer. and many more. I&apos;ve been
                spending my free time building and maintaining all the projects
                below!{" "}
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex justify-between mt-8 mb-8">
            <h1 className="">Projects</h1>
          </div>
          <div className="mb-8">
            <Project
              title="Freehand"
              description="open source illustrations designed to elevate your next project."
              wip
              link="https://github.com/"
            />

            <Project
              title="splatte.dev"
              description="my personal website built using next.js, tailwind css, prisma, and vercel."
              link="https://github.com/"
            />

            <Project
              title="splatte/ui"
              description="a collection of fully customizable ui components for next.js and react, just a copy and paste away."
              link="https://github.com/"
            />

            <Project
              title="License Generator"
              description="generate a license for your project on the terminal."
              link="https://github.com/"
            />

            <Project
              title="ez-ignore"
              description="create a custom .gitignore file straight from the terminal"
              link="https://github.com/"
            />

            <Project
              title="BeGroovy"
              description="a music sharing social media website to upgrade your music collection."
              link="https://github.com/"
            />
            <p className="mt-4 text-sm italic font-light">
              Course projects can be shown upon request.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
