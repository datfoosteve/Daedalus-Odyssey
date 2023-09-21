import { FC } from 'react'
import {allDocs} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import { Mdx } from "@/components/Mdx";
import Link from "next/link";
import Footer from "@/components/Footer";

interface PageProps {
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string) {
    const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    if(!doc) notFound();

    return doc;
}
const DocPage = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug);
  
    return (
      <>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
            {doc.title}
          </h1>
          <Link
            href="/blog"
            className="text-[#8e8f93] text-sm underline hover:text-white"
          >
            Back to blog
          </Link>
        </div>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-[#8e8f93]">{doc.publishedAt}</p>
        </div>
        <div className="mb-8">
          <Mdx code={doc.body.code} />
        </div>
        <Footer />
      </>
    );
  };
  
  export default DocPage;
  