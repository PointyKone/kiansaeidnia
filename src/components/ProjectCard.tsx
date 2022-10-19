import { FC, useEffect, useRef } from "react";
import styles from "../styles/card.module.css"

const ProjectCard: FC<{
    url: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
}> = ({ url, repo, description, language, languageColor }) => {

    const card = useRef<HTMLDivElement>(null);

    const handleOnMouseMove = (e: MouseEvent) => {
        const { currentTarget } = e

        const rect = (currentTarget as HTMLDivElement).getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
        (currentTarget as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
        (currentTarget as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
    }

    useEffect(() => {
        if (card !== null) {
            card.current!.onmousemove = e => handleOnMouseMove(e);
        }
    }, [card])
     {/* <div className="flex flex-col p-4 transition-transform duration-300 border-2 rounded-lg h-40 border-t-pink dark:bg-[#1c1c1c] bg-[#d47fff] hover:bg-[hsl(280,100%,70%)] text-white place-content-evenly transform hover:scale-[104%]">
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-medium medium-text">{repo}</p>
                    <p className="text-sm">{description}</p>
                </div>
  
                <div className="flex flex-col pt-4 text-sm gap-0.5">
                    <span className="flex items-center gap-1.5">
                    <span style={{ color: languageColor }}>⬤</span>
                        {language}
                    </span>
                </div>
            </div> */}

    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div ref={card} className={`${styles.card} card h-[120px] w-[282px] rounded-[10px] cursor-pointer relative flex justify-center align-middle`}>
                <div className={`${styles.cardBorder}`}></div>
                <div className={`${styles.cardContent} card-content p-3`}>
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-medium medium-text">{repo}</p>
                        <p className="text-sm">{description}</p>
                    </div>
    
                    <div className="flex flex-col pt-4 text-sm gap-0.5">
                        <span className="flex items-center gap-1.5">
                        <span style={{ color: languageColor }}>⬤</span>
                            {language}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;