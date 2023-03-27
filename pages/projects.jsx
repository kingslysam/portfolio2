import styles from '../styles/ProjectsPage.module.css';
import Image from "next/image";
import finhub from '../public/currentWorks/finhubscreen.png'
import busycheck from '../public/currentWorks/busycheck.png'
import portfolio from '../public/currentWorks/portfolio.png'


const projs = [
    {
        id: 1,
        name: "FINHUB Website",
        image: finhub,
        description: "Build the FINHUB Website from Fintech Hub in collaboration with UDSM and CRDB",
        "tags": ["next", "tailwind", "framer-motion"],
        "demo": "finhub2.vercel.app"
    },
    {
        "id": 2,
        "name": "Personalized Simbanking",
        // To add picture
        "image": "",
        "description": "Innovating the current CRDB's Simbanking App by adding a curated experience for each user",
        "tags": ["flutter", "django", "python", "material-ui"],
        "source_code": "https://github.com/kingslysam/personalized_simbanking",
        "demo": ""
    },
    {
        "id": 3,
        "name": "BusyCheck",
        "image": busycheck,
        "description": "A Platform that assists SME Business owners in running their business by offering simple management" +
            "platform",
        "tags": ["next", "python", "sqlite", "django"],
        "source_code": "https://github.com/kingslysam/busycheck_website"+ " "+ "https://github.com/kingslysam/busycheck_mobile",
        "demo": ""
    },
    {
        "id": 4,
        "name": "Portfolio",
        "image": portfolio,
        "description": "My Base portfolio to showcase my skills and give a little bit of information about.",
        "tags": ["next", "tailwind"],
        "source_code": "https://github.com/kingslysam/portfolio",
        "demo": "http://killagane.vercel.app/"
    }
]


const ProjectsPage = () => {
  return (
    <>
      <h3>Stuff I'm working on</h3>
      <div className={styles.container}>
        {projs.map((project) => (
            <div className={styles.card}>
                <Image src={project.image} height={300} width={600} alt={project.name} />
                <div className={styles.content}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={tag}>
              {tag}
            </span>
                        ))}
                    </div>
                    <div className={styles.cta}>
                        {project.source_code && (
                            <a
                                href={project.source_code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.underline}
                            >
                                Source Code
                            </a>
                        )}
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {

  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
