import Layout from "../../components/Layout";
import styles from '@/styles/People/People.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import { useRouter } from "next/router";
import React, {MouseEventHandler, useEffect, useRef, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

// Images should be in a 4:5 ratio
const Board: BoardMemberProps[] = [
    {
        name: "Gustavo Nicoletti",
        role: "Recording Secretary",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Serena Canavero",
        role: "President",
        imageSrc: "/People/Board/Serena Canavero.png",
        linkedIn: "https://www.linkedin.com/in/serenacanavero/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Francesco Anzoino",
        role: "Treasurer",
        imageSrc: "/People/Board/Francesco Anzoino.png",
        linkedIn: "",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Claudio Fantasia",
        role: "Vice President",
        imageSrc: "/People/Board/Claudio Fantasia.png",
        linkedIn: "https://www.linkedin.com/in/claudio-fantasia-120560224/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Dario Gosmar",
        role: "Web Correspondent",
        imageSrc: "/People/Board/Dario Gosmar.png",
        linkedIn: "https://www.linkedin.com/in/dario-gosmar/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Alberto Castrignanò",
        role: "Corresponding Secretary",
        imageSrc: "/People/Board/Alberto Castrignano.png",
        linkedIn: "https://www.linkedin.com/in/albertocastrignano2/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
];

// Images work well in a 3:5 ratio
const Teams: TeamProps[] = [
    {
        area: "Comms",
        longName: "Communications",
        description: "Informing, engaging, motivating and creating: we constitute the link between the chapter and the student community",
        imageSrc: "/People/Resp/resp-comms.png",
        managers: [
            {
                name: "Dario Gosmar",
                imageSrc: "/People/Areas/Comms/Dario Gosmar.png",
            }
        ],
        members: [
            {
                name: "Alessia Scardi",
                imageSrc: "/People/Areas/Comms/Alessia Scardi.png",
            },
            {
                name: "Riccardo Alfonso Cerrone",
                imageSrc: "/People/Areas/Comms/Riccardo Alfonso Cerrone.png",
            },
            {
                name: "Vittoria Drago",
                imageSrc: "/People/Areas/Comms/Vittoria Drago.png",
            },
            {
                name: "Antonio Capece",
                imageSrc: "/People/Areas/Comms/Antonio Capece.png",
            },
            {
                name: "Francesco Di Stefano",
                imageSrc: "/People/Areas/Comms/Francesco Di Stefano.png",
            },
            {
                name: "Lorenzo Fezza",
                imageSrc: "/People/Areas/Comms/Lorenzo Fezza.png",
            },
            {
                name: "Marco Rosa Gobbo",
            },
            {
                name: "Lucrezia Marcovaldi",
            },
            {
                name: "Alex Martinelli",
                imageSrc: "/People/Areas/Comms/Alex Martinelli.png",
            },
            {
                name: "Andrea Minardi",
            },

        ]
    },
    {
        area: "HR",
        longName: "Human Resources",
        description: "Networking is our keyword: we manage the recruitment and organize any event/activity regarding the chapter",
        imageSrc: "/People/Resp/resp-hr.png",
        managers: [
            {
                name: "Francesca Portadibasso",
                imageSrc: "/People/Areas/HR/Francesca Portadibasso.png",
            },
            {
                name: "Luca Filippetti",
                imageSrc: "/People/Areas/HR/Luca Filippetti.png",
            }
        ],
        members: [
            {
                name: "Edoardo Demichelis",
                imageSrc: "/People/Areas/HR/Edoardo Demichelis.png",
            },
            {
                name: "Renata De Gennaro",
                imageSrc: "/People/Areas/HR/Renata De Gennaro.png",
            },
            {
                name: "Giacomo Maino",
                imageSrc: "/People/Areas/HR/Giacomo Maino.png",
            },
            {
                name: "Rosario Francesco Cavelli",
            },
            {
                name: "Stefano Cerutti",
            },
            {
                name: "Edoardo Colella",
                imageSrc: "/People/Areas/HR/Edoardo Colella.png",
            },
            {
                name: "Marco Del Core",
                imageSrc: "/People/Areas/HR/Marco Del Core.png",
            },
            {
                name: "Alessandro Gasbarri",
                imageSrc: "/People/Areas/HR/Alessandro Gasbarri.png",
            },
            {
                name: "Kaliroi Mignone",
                imageSrc: "/People/Areas/HR/Kaliroi Mignone.png",
            },
            {
                name: "Andrea Pignata",
                imageSrc: "/People/Areas/HR/Andrea Pignata.png",
            },
        ]
    },
    {
        area: "Corporate Training",
        longName: "Corporate Training",
        description: "We are responsible for the talks and the workshops that constitute the interfaces with the professionals  ",
        imageSrc: "/People/Resp/resp-fi.png",
        managers: [
            {
                name: "Elena Favero",
                imageSrc: "/People/Areas/Corporate Training/Elena Favero.png",
            }
        ],
        members: [
            {
                name: "Benedetta Perrone",
                imageSrc: "/People/Areas/Corporate Training/Benedetta Perrone.png",
            },
            {
                name: "Lorenzo Barbati",
                imageSrc: "/People/Areas/Corporate Training/Lorenzo Barbati.png",
            },
            {
                name: "Riccardo Bracciale",
                imageSrc: "/People/Areas/Corporate Training/Riccardo Bracciale.png",
            },
            {
                name: "Ismaele Bahti",
                imageSrc: "/People/Areas/Corporate Training/Ismaele Bahati.png",
            },
            {
                name: "Marco Canavero",
                imageSrc: "/People/Areas/Corporate Training/Marco Canavero.png",
            },
            {
                name: "Marco D'Andria",
                imageSrc: "/People/Areas/Corporate Training/Marco Dandria.png",
            },
            {
                name: "Arber Kryeziu",
                imageSrc: "/People/Areas/Corporate Training/Arber Kryeziu.png",
            },
            {
                name: "Vittorio Macripò",
            },
            {
                name: "Stefano Negri Merlo",
            },
            {
                name: "Gustavo Ramirez",
                imageSrc: "/People/Areas/Corporate Training/Gustavo Ramirez.png",
            },
            {
                name: "Sofia Russo",
                imageSrc: "/People/Areas/Corporate Training/Sofia Russo.png",
            },
            {
                name: "Paolo Molino",
                imageSrc: "/People/Areas/Corporate Training/Paolo Molino.png",
            },

        ]
    },
    {
        area: "Tutoring",
        longName: "Tutoring",
        description: "We put at the first place the networking between the students, organizing masterclasses and study groups open to everyone who wants to join",
        imageSrc: "/People/Resp/resp-tutoring.png",
        managers: [
            {
                name: "Orlando Zaccaria",
                imageSrc: "/People/Areas/Tutoring/Orlando Zaccaria.png",
            }
        ],
        members: [
            {
                name: "Eduard Antonovic Occhipinti",
                imageSrc: "/People/Areas/Tutoring/Eduard Antonovic Occhipinti.png",
            },
            {
                name: "Erik Scolaro",
                imageSrc: "/People/Areas/Tutoring/Erik Scolaro.png",
            },
            {
                name: "Jad Sarkis",
                imageSrc: "/People/Areas/Tutoring/Jad Sarkis.png",
            },
            {
                name: "Sabina Sarcuni",
                imageSrc: "/People/Areas/Tutoring/Sabina Sarcuni.png",
            },
            {
                name: "Lorenza Bonfanti Posta",
                imageSrc: "/People/Areas/Tutoring/Lorenza Bonfanti Posta.png",
            },
            {
                name: "Alessia De Crescenzo",
                imageSrc: "/People/Areas/Tutoring/Alessia De Crescenzo.png",
            },
            {
                name: "Leonardo Gallina",
                imageSrc: "/People/Areas/Tutoring/Leonardo Gallina.png",
            },
            {
                name: "Mattia Molinari",
                imageSrc: "/People/Areas/Tutoring/Mattia Molinari.png",
            },
            {
                name: "Marco Donnarumma",
                imageSrc: "/People/Areas/Tutoring/Marco Donnarumma.png",
            },
        ]
    },
    {
        area: "Events",
        longName: "Events",
        description: "We organize hackathons & competitions related to the areas of interest of the students community",
        imageSrc: "/People/Resp/resp-eventi.png",
        managers: [
            {
                name: "Sebastiano Guzzone",
                imageSrc: "/People/Areas/Events/Sebastiano Guzzone.png",
            }
        ],
        members: [
            {
                name: "Alessio Melone",
                imageSrc: "/People/Areas/Events/Alessio Melone.png",
            },
            {
                name: "Elisa Misuri",
                imageSrc: "/People/Areas/Events/Elisa Misuri.png",
            },
            {
                name: "Nicolo Benso",
                imageSrc: "/People/Areas/Events/Nicolo Benso.png",
            },
            {
                name: "Davide Arcolini",
            },
            {
                name: "Daniele De Rossi",
                imageSrc: "/People/Areas/Events/Daniele De Rossi.png",
            },
            {
                name: "Freddy Dongue Dongmo Yann",
            },
            {
                name: "Francesca Fusco",
            },
            {
                name: "Gabriele Iurlaro",
            },
            {
                name: "Raffaele Negri",
                imageSrc: "/People/Areas/Events/Raffaele Negri.png",
            },
            {
                name: "Mina Nikolova",
            },
            {
                name: "Marco Pascarella",
            },
            {
                name: "Stefano Ravera",
                imageSrc: "/People/Areas/Events/Stefano Ravera.png",
            },
        ]
    },
    {
        area: "IT",
        longName: "IT",
        description: "We manage IT-related projects for the chapter, such as our own website or the recruitment software",
        imageSrc: "/People/Resp/resp-it.png",
        managers: [
            {
                name: "Alberto Baroso",
                imageSrc: "/People/Areas/IT/Alberto Baroso.png",
            },
            {
                name: "Francesco Baldini",
                imageSrc: "/People/Areas/IT/Francesco Baldini.png",
            }
        ],
        members: [
            {
                name: "Alessio Menichinelli",
                imageSrc: "/People/Areas/IT/Alessio Menichinelli.png",
            },
            {
                name: "Filippo Goffredo",
                imageSrc: "/People/Areas/IT/Filippo Goffredo.png",
            },
            {
                name: "Isabella Lombardi",
                imageSrc: "/People/Areas/IT/Isabella Lombardi.png",
            },
            {
                name: "Massimo Aresca",
                imageSrc: "/People/Areas/IT/Massimo Aresca.png",
            },
            {
                name: "Pasquale Bianco",
                imageSrc: "/People/Areas/IT/Pasquale Bianco.png",
            },
            {
                name: "Damiano Bonaccorsi",
                imageSrc: "/People/Areas/IT/Damiano Bonaccorsi.png",
            },
            {
                name: "Marco De Luca",
            },
            {
                name: "Elti Gjiriti",
                imageSrc: "/People/Areas/IT/Elti Gjiriti.png",
            },
            {
                name: "Matteo Mugnai",
                imageSrc: "/People/Areas/IT/Matteo Mugnai.png",
            },
            {
                name: "Marco Pappalardo",
            }
        ]
    },
];

export default function People() {
    const router = useRouter();
    const [boardIndex, setBoardIndex] = useState(0);
    const [teamIndex, setTeamIndex] = useState(0);
    const [boardPopUpVisible, setBoardPopUpVisible] = useState(false);
    const [teamPopUpVisible, setTeamPopUpVisible] = useState(false);

    const handleBoardMemberClick = (index: number) => {
        setBoardIndex(index);
        setBoardPopUpVisible(true);
    }

    const handleTeamMemberClick = (index: number) => {
        setTeamIndex(index);
        setTeamPopUpVisible(true);
        document.body.style.overflow = 'hidden';
    }

    const handleHideBoardPopUp = () => {
        setBoardPopUpVisible(false);
    }

    const handleHideTeamPopUp = () => {
        setTeamPopUpVisible(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <Layout triangles>
            {/*<BoardPopUp index={boardIndex} visible={false} disablePopUp={handleHideBoardPopUp}/>*/}
            <div className={styles.boardContainer}>
                <text className={styles.theBoard}>THE BOARD</text>
                <text className={styles.managementArea}>Management Area</text>
                <div className={styles.boardGrid}>
                    {Board.map((bmp, index) => (
                        <BoardMember boardMemberProps={bmp} index={index} key={index}
                            onClick={() => handleBoardMemberClick(index)} />
                    ))}
                </div>
            </div>

            <TeamPopUp index={teamIndex} visible={teamPopUpVisible} disablePopUp={handleHideTeamPopUp} />
            <div className={styles.teamsContainer}>
                <text className={styles.theTeams}>THE TEAMS</text>
                <text className={styles.joinOurTeams}>Our Teams</text>
                <div className={styles.teamsGrid}>
                    {Teams.map((team, index) => (
                        <Team teamProps={team} key={team.area} onClick={() => handleTeamMemberClick(index)} />
                    ))}
                </div>
            </div>

            <div className={styles.discover}>
                <div className={styles.discover__coming}>coming soon</div>
                <div className={styles.discover__title}>discover</div>
                <div className={styles.discover__title}>past boards and alumni</div>
            </div>
        </Layout>
    )
}

function BoardMember({ boardMemberProps, index, onClick }: {
    boardMemberProps: BoardMemberProps,
    index: number,
    onClick: MouseEventHandler<HTMLDivElement>
}) {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.boardMember} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            onClick={onClick}>
            <div className={styles.boardImageContainer}>
                <div className={styles.boardCard} />
                <img className={styles.boardMemberImage} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy" />
            </div>
            <text className={styles.boardMemberName}>{boardMemberProps.name}</text>
            <text className={styles.boardMemberRole}>{boardMemberProps.role}</text>
        </div>
    );
}

function Team({ teamProps, onClick }: { teamProps: TeamProps, onClick: () => void }) {
    return (
        <div className={styles.team} onClick={onClick}>
            <img className={styles.teamRespImage} src={teamProps.imageSrc} alt={teamProps.imageSrc} />
            <div className={styles.teamTextBox}>
                <text className={styles.peopleOf}>people of</text>
                <text className={styles.teamArea}>{teamProps.area}</text>
                <text className={styles.teamDescription}>{teamProps.description}</text>
            </div>
        </div>
    )
}

function TeamPopUp({ index, visible, disablePopUp }: { index: number, visible: Boolean, disablePopUp: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRefFirst = useRef<HTMLDivElement>(null);
    const contentRefSecond = useRef<HTMLDivElement>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const [firstRow, setFirstRow] = useState<TeamMemberProps[]>([]);
    const [secondRow, setSecondRow] = useState<TeamMemberProps[]>([]);
    const [team, setTeam] = useState(Teams[index]);
    const [numPeople, setNumPeople] = useState(4);

    useEffect(() => {
        let newTeam = Teams[index];
        let fRow: TeamMemberProps[] = [];
        let sRow: TeamMemberProps[] = [];
        const memberswithpictures = newTeam.members.filter(member => member.imageSrc !== undefined);
        const memberswithoutpictures = newTeam.members.filter(member => member.imageSrc === undefined);

        const sortedMembers = [...memberswithpictures, ...memberswithoutpictures];

        if (newTeam.members.length <= numPeople) {
            fRow = sortedMembers;
        } else if (newTeam.members.length <= numPeople*2) {
            fRow = sortedMembers.slice(0, numPeople);
            sRow = sortedMembers.slice(numPeople);
        } else {
            let n = Math.ceil(sortedMembers.length / 2);
            if (memberswithpictures.length > numPeople*2) {
                fRow = memberswithpictures.slice(0, Math.ceil(memberswithpictures.length / 2));
                sRow = memberswithpictures.slice(Math.ceil(memberswithpictures.length / 2));
                let l = fRow.length;
                fRow = [...fRow, ...memberswithoutpictures.slice(0, n - l)];
                sRow = [...sRow, ...memberswithoutpictures.slice(n - l)];
            } else {
                fRow = memberswithpictures.slice(0, numPeople);
                sRow = memberswithpictures.slice(numPeople);
                let l = fRow.length;
                fRow = [...fRow, ...memberswithoutpictures.slice(0, n - l)];
                sRow = [...sRow, ...memberswithoutpictures.slice(n - l)];
            }
        }

        if (contentRefFirst.current && contentRefSecond.current) {
            contentRefFirst.current.style.left = `30px`;
            contentRefSecond.current.style.left = `30px`;
        }
        setTeam(newTeam);
        setFirstRow(fRow);
        setSecondRow(sRow);
        setNumPages(Math.ceil(fRow.length / numPeople));
        setPageIndex(0);
    }, [index, visible, numPeople]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1050) {
                setNumPeople(4);
            } else if (window.innerWidth > 800) {
                setNumPeople(3);
            } else {
                setNumPeople(2);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeftClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
            contentRefFirst.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex - 1))}px`;
            contentRefSecond.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex - 1))}px`;
            setPageIndex(pageIndex - 1);
        }
    }

    const handleRightClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
            contentRefFirst.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex + 1))}px`;
            contentRefSecond.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex + 1))}px`;
            setPageIndex(pageIndex + 1);
        }
    }

    const handleClosePupUp = () => {
        if (contentRefFirst.current && contentRefSecond.current) {
            contentRefFirst.current.style.left = `30px`;
            contentRefSecond.current.style.left = `30px`;
        }
        setPageIndex(0);
        disablePopUp();
    }

    return (
        <div className={styles.popUpBackground} onClick={handleClosePupUp} style={{ visibility: visible ? 'visible' : 'hidden' }}>
            <div className={styles.teamPopUp}>
                <div className={styles.teamHeader}>
                    <div className={styles.teamHeaderLeft}>
                        <div className={styles.managerPopUpImageContainer}>
                            <img className={styles.managerImage} alt={`Coordinators of ${team.area} area`}
                                 src={team.imageSrc} width={'100px'} height={'100px'}/>
                        </div>
                        <div className={styles.managerName}>{team.managers[0].name + (team.managers.length > 1 ? ' &' : '')}</div>
                        {team.managers.length > 1 &&
                            <div className={styles.managerName}>{team.managers[1].name}</div>
                        }
                        <div className={styles.managerTitleLink}>
                            <div className={styles.managerTitle}>Area manager{team.managers.length > 1 ? 's' : ''}</div>
                            <div className={styles.managersLinkedin}>
                                {team.managers.map(manager => {
                                        return (manager.linkedIn &&
                                            <div className={styles.linkIcon}>
                                                <a className={styles.linkIcon} href={manager.linkedIn}>
                                                    <img className={styles.linkIcon__icon} src={"/Icons/linkedin_logo_blue.png"}
                                                         alt="LinkedIn Icon"/>
                                                </a>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamHeaderRight}>
                        <h2 className={styles.teamPopUp__Title}>We are {team.area}</h2>
                        <text className={styles.teamPopUp__Description}>{team.description}</text>
                    </div>
                </div>
                <div className={styles.teamContainer} ref={containerRef}>
                    {pageIndex > 0  && <ArrowButton className={`${styles.teamContainer__button} ${styles.teamContainer__button__left}`} size={37} onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleLeftClick(e)} color={'#FFFFFF'} left/>}
                    <div className={styles.teamRow} ref={contentRefFirst}>
                        {firstRow.map((member: TeamMemberProps) =>
                            <TeamMember key={member.name} member={member}/>
                        )}
                    </div>
                    <div className={styles.teamRowTwo} ref={contentRefSecond}>
                        {secondRow.map((member: TeamMemberProps) =>
                            <TeamMember key={member.name} member={member}/>
                        )}
                    </div>
                    {pageIndex < numPages-1 && <ArrowButton className={`${styles.teamContainer__button} ${styles.teamContainer__button__right}`} size={37} onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleRightClick(e)} color={'#FFFFFF'} right/>}
                </div>
            </div>
        </div>
    )
}

function TeamMember({member } : {member : TeamMemberProps}) {
    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = member.imageSrc || "";
        img.onload = () => setImageExists(true);
    }, []);

    return (
        <div className={styles.teamMember}>
            <div className={styles.memberPopUpImageContainer}>
                <img className={styles.memberPopUpImage} src={imageExists ? member.imageSrc : '/Icons/person.svg'}
                     alt={member.name} loading="lazy"/>
            </div>
            <text className={styles.memberName}>{member.name}</text>
            <div className={styles.memberRoleLink}>
                <text className={styles.memberTitle}>MEMBER</text>
                {member.linkedIn &&
                    <div className={styles.memberRoleLink__linkIcon}>
                        <a className={styles.memberRoleLink__linkIcon} href={member.linkedIn}>
                            <img className={styles.linkIcon__icon} src={"/Icons/linkedin_logo_blue.png"}
                                 alt="LinkedIn Icon"/>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}

export interface TeamMemberProps {
    name: string,
    imageSrc?: string,
    linkedIn?: string,
}

export interface BoardMemberProps {
    name: string;
    role: string;
    imageSrc: string;
    linkedIn?: string;
    roleDescription: string;
}

export interface TeamProps {
    area: string;
    longName: string;
    description: string;
    imageSrc: string;
    managers: TeamMemberProps[];
    members: TeamMemberProps[];
}
