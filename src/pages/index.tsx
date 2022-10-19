import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Hero, { PinnedRepo } from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const Home: NextPage<{
	pinnedRepos: PinnedRepo[]
}> = ({pinnedRepos}) => {
	return (
		<div>
            <Head>
				<title>Home | PointyKone</title>
                <meta name="og:title" content="Home | PointyKone" />
                <meta name="og:url" content="https://www.pointykone.com" />
			</Head>
			<Hero pinnedRepos={pinnedRepos}/>
            <h3 className="text-2xl my-3 font-semibold">Here are some of my favourite projects:</h3>
			<div className="flex flex-wrap max-w-[916px] gap-[8px] justify-center">
                {pinnedRepos.map((project) => (
                    <ProjectCard
                    key={project.repo}
                    repo={project.repo}
                    url={`https://github.com/${project.owner}/${project.repo}`}
                    description={project.description}
                    language={project.language}
                    languageColor={project.languageColor}
                    />
                ))}
            </div>
		</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const pinnedRepos = await fetch(
        "https://gh-pinned-repos.egoist.sh/?username=pointykone"
    ).then(async (response) => {
        return await response.json();
    });

    

    return {
        props: {
            pinnedRepos
        }
    }
};

export default Home
