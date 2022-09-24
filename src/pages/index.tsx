import type { GetStaticProps, NextPage } from 'next'
import Hero, { PinnedRepo } from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const Home: NextPage<{
	pinnedRepos: PinnedRepo[]
}> = ({pinnedRepos}) => {
	return (
		<div>
			<Hero pinnedRepos={pinnedRepos}/>
			<div className="grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3">
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
