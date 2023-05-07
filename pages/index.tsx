import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Layout from "./Layout";
import HomeLogo from "../components/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";

export default function Home() {
    const router = useRouter();

    // @ts-ignore
    return (
        <Layout>

            <div className={styles.titleFlexContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleColumn}>
                        <text className={styles.drivenByPassion}>Driven By Passion</text>
                        <text className={styles.drivenByPassion}>Guided By Values</text>
                        <text className={styles.welcomeTo}>Welcome to our world, we are the Mu Nu Chapter of IEEE-HKN at the Polytechnic University of Turin.</text>
                        <div className={styles.titleButtons}>
                            <RoundButton className={styles.joinUsTitleButton} onClick={() => router.push('/JoinUs')} text={"JOIN US"}/>
                            <RoundButton style={{border: 'solid 1.5px #CA5B01'}} className={styles.aboutUsTitleButton} onClick={() => router.push('/AboutUs')} text={"ABOUT US"}/>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <HomeLogo/>
                    </div>
                </div>
            </div>

            <div className={styles.awardsContainer}>
                <div className={styles.awards}>
                    <Image className={styles.outstandingAward} src="/home/outstanding-2019.png" alt="Award" width={228} height={200}/>
                    <Image className={styles.outstandingAward} src="/home/outstanding-2020.png" alt="Award" width={228} height={200}/>
                    <Image className={styles.outstandingAward} src="/home/outstanding-2021.png" alt="Award" width={228} height={200}/>
                    <Image className={styles.outstandingAward} src="/home/outstanding-2022.png" alt="Award" width={228} height={200}/>
                </div>
            </div>

            <div className={styles.visionContainer}>
                <div className={styles.visionLeft}>
                    <text className={styles.visionText}>VISION</text>
                    <text className={styles.visionTitle}>Discover Mu Nu Chapter</text>
                    <text className={styles.vision}>Since 2017 we are dedicated to encouraging excellence in the IEEE-designated fields of interest, continuing to reinvent ourselves to meet the needs of our members and society overall</text>
                    <div className={styles.visionButtons}>
                        <RoundButton className={styles.peopleVisionButton} onClick={() => router.push('/People')} text={"PEOPLE"}/>
                        {/*TODO: add link*/}
                        <RoundButton style={{border: 'solid 1.5px #CA5B01'}} className={styles.galleryVisionButton} onClick={() => router.push('/404')} text={"PHOTO GALLERY"}/>
                    </div>
                </div>
                <img className={styles.visionImage} src="/home/vision.jpg" alt="Vision"/>
            </div>

            <div className={styles.originsContainer}>
                <img className={styles.originsImage} src="/home/origins.jpg" alt="Vision"/>
                <div className={styles.originsRight}>
                    <text className={styles.originsText}>ORIGINS</text>
                    <text className={styles.originsTitle}>Eta Kappa Nu, IEEE Honor Society</text>
                    <text className={styles.origins}>Founded in 1904, Eta Kappa Nu (IEEE-HKN), the honor society of IEEE, promotes the ideals of Scholarship, Character and Attitude. Catch a glimpse to our origins.</text>
                    <div className={styles.originsButtons}>
                        <RoundButton className={styles.readMeOriginsButton} onClick={() => router.push('/404')} text={"READ ME"}/>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>

            <div className={styles.projectsContainer}>
                <text className={styles.projectsText}>NEWS</text>
                <text className={styles.projectsTitle}>Our Latest</text>
                <text className={styles.projectsTitle}>Projects</text>
                <div className={styles.projectsCards}>
                    <div className={styles.projectsLeft} onClick={() => router.push('/404')}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/home/Projects/Sirius_vedere.jpg" alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>Sirius: Vedere il futuro con gli occhi del presente</text>
                        <text className={styles.project}>Per la prima volta sono i ragazzi di HKN a far visita ad un’azienda: la SIRIUS (Sirius | Home). Per i nuovi associati questa è stata la prima esperienza di formazione interna, ma la vera novità ha coinvolto i già associati: potersi recare in prima persona a visitare un’impresa si è rivelata un’esperienza ...</text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsCenter}>
                        <div className={styles.projectsImageClip} onClick={() => router.push('/404')}>
                            <img className={styles.projectsPicture} src="/home/Projects/Vivere_lassociazione.png" alt="project"/>
                        </div>
                            <text className={styles.projectTitle}>Vivere l’associazione Online: una guida per principianti</text>
                            <text className={styles.project}>Inizialmente l’idea è nata dalla solitudine. Starsene chiusi in casa e non vedere nessuno per via del lockdown era una condizione che se all’inizio poteva sembrare esaltante e quasi eroica, con l’andar del tempo era diventata devastante. Il pensiero di entrare a far parte di una honor society ...</text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsRight}>
                        <div className={styles.projectsImageClip} onClick={() => router.push('/404')}>
                            <img className={styles.projectsPicture} src="/home/Projects/Poli_covid.png" alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>POLITO, HKN e Covid-19: una riflessione</text>
                        <text className={styles.project}>Ore diciassette di una silenziosa domenica di marzo. Silenziosa perché le strade sono deserte e più forte che mai risuonano soltanto i nostri pensieri. In questi casi non resta che dar loro una forma proiettandoli in mondi molto più vasti rispetto alle mura in cui siamo confinati in questi ...</text>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>

            <div className={styles.applyCard}>
                <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                <text className={styles.textJoinOurChapter}>Join Our Chapter And</text>
                <text className={styles.textJoinOurChapter}>Become The Next HKNuer</text>
                <RoundButton className={styles.buttonJoinUs} text={"JOIN US"} onClick={() => router.push('/JoinUs')}/>
            </div>

        </Layout>
    )
}
