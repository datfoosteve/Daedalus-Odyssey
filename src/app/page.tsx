import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
// import styles from "src/styles/HeadShotResponsive.module.css";
 import headshotWebp from "/public/images/headshotWebp.webp";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-8">Hi, I&apos;m Stephen Puthenpurackal</h1>
          <div className="flex content-center space-x-6">
           <div className="rounded-xl relative w-96 h-36 overflow-hidden">
            <Image
              // src="/images/headshotWebp.webp"
              src={headshotWebp}
              alt="Stephen Puthenpurackal"
              fill={true}
              sizes="(min-width: 740px) 114px, (min-width: 380px) calc(17.35vw - 10px), 52px"
              className="object-cover"
              priority={true}
            />
            </div>
            <div className="flex items-center">
              <p className="text-white">
                I&apos;m a full stack web developer, Computer science major, Fabricator, engineer, software developer, and much more. I&apos;ve been
                spending all my time building and maintaining several different projects. {" "} <br/>Take a look around, you might see something you like!
                <br />
                <br />
                Before you leave, don&apos;t forget to sign my guestbook!
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex justify-between mt-8 mb-8">
            <h1 className="">Projects</h1>
          </div>
          <div className="mb-8">
            <Project
              title="Artistic Portfolio"
              description="Designing this page as much as i can right now!"
              wip
              link="https://github.com/"
            />

            <Project
              title="ProjectforHackers"
              description="Music search engine with which users can search for their favorite artists, songs, and albums. Users can listen to songs, view lyrics, and view their favorite artists' upcoming concerts and events."
              link="https://github.com/colinmchale/ProjectforHackers"
            />

            <Project
              title="JATE - Just Another Text Editor"
              description="A PWA text editor in which users can create, edit, and save text files. Is a downloadable PWA."
              link="https://github.com/datfoosteve/textEditor"
            />

            <Project
              title="Mega Workbench"
              description="Still need to finish this old project"
              link="https://github.com/"
            />

            <Project
              title="CNC machine  "
              description="Custom fabrication machine needed for a project."
              link="https://github.com/"
            />

            <Project
              title="LIFE"
              description="hardest project i have ever worked on."
              link="https://github.com/"
            />
          </div>
          <Footer />
        </div> 
      </div>
    </main>
  );
}
