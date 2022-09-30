import Link from "next/link";
import Button from "./Button";

export type PinnedRepo = {
    owner: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
};

type Props = {
  pinnedRepos: PinnedRepo[]
}

const Hero = ({pinnedRepos}: Props) => {
    return (
        <section className="mt-16 h-screen">
            <h1 className="text-7xl font-bold">Hi I am Kian</h1>
            <h3 className="text-4xl my-3">I like to develop stuff.</h3>
            <p className="gray-700 mb-8"></p>
            <Link href="https://github.com/pointykone" passHref><Button className="bg-[#d47fff] text-white px-6">Have A Look!</Button></Link>
        </section>
    )
}


export default Hero