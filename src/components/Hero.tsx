import Link from "next/link";
import Button from "./Button";
import ScrollDownArrow from "./ScrollDownArrow";

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
        <section className="mt-16 h-[90vh] flex flex-col">
            <div className="flex-1 max-h-[80vh]">
                <h1 className="text-7xl font-bold">Hi I am Kian</h1>
                <h3 className="text-4xl my-3">I like to develop stuff.</h3>
                <p className="gray-700 mb-8"></p>
                <Link href="https://github.com/pointykone" passHref><Button className="lg:max-w-[20%] md:max-w-[50%] bg-[#d47fff] text-white px-6 hover:bg-[hsl(280,100%,70%)]">Have A Look!</Button></Link>
            </div>
            <div className="flex-2 ">
                <ScrollDownArrow/>
            </div>
        </section>
    )
}


export default Hero