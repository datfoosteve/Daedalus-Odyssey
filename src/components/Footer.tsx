import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr></hr>
      <footer className="flex content-center space-x-4 mt-4">
        <Link
          href="https://twitter.com/"
          target="_blank"
          className="text-[#8e8f93] hover:text-white underline"
        >
          Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/in/datfoosteve/"
          target="_blank"
          className="text-[#8e8f93] hover:text-white underline"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/datfoosteve"
          target="_blank"
          className="text-[#8e8f93] hover:text-white underline"
        >
          Github
        </Link>
      </footer>
      <br></br>
    </>
  );
}
