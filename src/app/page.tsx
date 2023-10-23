'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { motion } from "framer-motion";
import headshotWebp from "/public/images/headshotWebp.webp";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full md:max-w-5xl p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-12">
          <div className="rounded-full relative w-48 h-44 overflow-hidden mb-6 md:mb-0 md:w-60">
            <Image
              src={headshotWebp}
              alt="Stephen Puthenpurackal"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl mb-4 text-purple-600 text-right">Hi, I&apos;m Stephen Puthenpurackal</h1>
            <p className="text-gray-700 text-right">
                I&apos;m a full stack web developer, Computer science major, Fabricator, engineer, software developer, and much more. I&apos;ve been
                spending all my time building and maintaining several different projects. {" "} <br/>Take a look around, you might see something you like!
                <br />
                <br />
                Before you leave, don&apos;t forget to sign my guestbook!
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
          <h2 className="text-2xl mb-6 text-blue-500 font-semibold ">Current Projects</h2>
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
      </motion.div>
    </main>
  );
}
