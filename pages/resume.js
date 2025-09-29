import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import {useTheme} from "next-themes";
import data, {name, resume, showResume} from "../data/portfolio.json";
import SkillSection from "../components/SkillSection";

const Resume = () => {
    const router = useRouter();
    const theme = useTheme();
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
        if (!showResume) {
            router.push("/");
        }
    }, [router]);

    return (
        <>
            <div
                className={`container mx-auto mb-10 ${
                    data.showCursor && "cursor-none"
                }`}
            >
                <Header/>
                {mount && (
                    <div className="mt-10 w-full flex flex-col items-center">
                        <div
                            className={`w-full ${
                                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                            } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
                        >
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <h2 className="text-xl mt-5">{resume.tagline}</h2>
                            <h2 className="w-4/5 text-xl mt-5 opacity-50">
                                {resume.description}
                            </h2>
                            <div className="mt-2">
                                <Socials/>
                            </div>

                            <div className="mt-8">
                                <h1 className="text-2xl font-bold">Experience</h1>
                                {resume.experiences.map(
                                    ({id, dates, type, position, bullets}) => (
                                        <ProjectResume
                                            key={id}
                                            dates={dates}
                                            type={type}
                                            position={position}
                                            bullets={bullets}
                                        ></ProjectResume>
                                    )
                                )}
                            </div>

                            <div className="mt-8">
                                <h1 className="text-2xl font-bold">Education</h1>
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold">{resume.education.universityName}</h2>
                                    <h3 className="text-sm opacity-75">
                                        {resume.education.universityDate}
                                    </h3>
                                    <p className="text-sm mt-1 opacity-70">
                                        {resume.education.universityPara}
                                    </p>
                                </div>
                                {resume.education.masters && (
                                    <div className="mt-4">
                                        <h2 className="text-lg font-semibold">{resume.education.masters.name}</h2>
                                        <h3 className="text-sm opacity-75">
                                            {resume.education.masters.date}
                                        </h3>
                                        <p className="text-sm mt-1 opacity-70">
                                            {resume.education.masters.program}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {resume.projects && (
                                <div className="mt-8">
                                    <h1 className="text-2xl font-bold">Projects</h1>
                                    {resume.projects.map((project) => (
                                        <div key={project.id}
                                             className="mt-4 p-4 border-l-4 border-blue-500 bg-opacity-50">
                                            <h2 className="text-lg font-semibold">{project.name}</h2>
                                            <p className="text-sm mt-2 opacity-70">{project.description}</p>
                                            {project.features && (
                                                <ul className="list-disc ml-5 mt-2">
                                                    {project.features.map((feature, index) => (
                                                        <li key={index} className="text-sm opacity-70 py-1">
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index}
                                                          className="text-sm border opacity-80 border-gray-400 px-2 py-1 rounded">
                                                      {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-8">
                                <h1 className="text-2xl font-bold">Skills</h1>
                                <div className="flex flex-wrap justify-between gap-6 mt-4">
                                    <SkillSection data={resume.languages} name={"Languages"}></SkillSection>

                                    <SkillSection data={resume.mobile} name={"Mobile"}></SkillSection>

                                    <SkillSection data={resume.frontend} name={"Frontend"}></SkillSection>

                                    <SkillSection data={resume.backend} name={"Backend"}></SkillSection>

                                    <SkillSection data={resume.database} name={"Database"}></SkillSection>

                                    <SkillSection data={resume.tools} name={"Tools"}></SkillSection>
                                </div>
                            </div>

                            {resume.spokenLanguages && (
                                <div className="mt-8">
                                    <h1 className="text-2xl font-bold">Languages</h1>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {resume.spokenLanguages.map((lang, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="font-semibold">{lang.language}:</span>
                                                <span
                                                    className="ml-2 text-lg font-medium opacity-80">{lang.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Resume;