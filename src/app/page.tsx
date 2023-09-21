import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import styles from "src/styles/HeadShotResponsive.module.css";
// import headshotWebp from "/images/headshotWebp.webp";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl">
        <div className="content-start flex-col">
          <h1 className="mb-8">Hi, I&apos;m Stephen</h1>
          <div className="flex content-center space-x-3">
           <div className={styles.featuredImageWrapper}>
            <Image
              src="/images/headshotWebp.webp"
              alt="Stephen Puthenpurackal"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              priority
              className={`${styles.featuredImageWrapper} rounded`}
            />
            </div>
            <div className="flex items-center">
              <p className="text-white">
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
              title="AIWA"
              description="All In with Arlie. Fitness-App designed to be intuitive and a PWA to track ."
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
          </div>
          <Footer />
        </div> 
      </div>
    </main>
  );
}
