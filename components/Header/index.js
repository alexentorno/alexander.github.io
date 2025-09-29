import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({handleWorkScroll, handleAboutScroll}) => {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    const {name, showResume} = data;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div
                className={`mt-10 hidden flex-row items-center justify-between sticky ${
                    theme === "light" && "bg-white"
                } dark:text-white top-0 z-10 tablet:flex`}
            >
                <button
                    onClick={() => router.push("/")}
                    className={`font-medium text-lg tablet:text-lg laptop:text-lg laptopl:text-xl rounded-lg
          transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link`}
                >
                    {name + "'s portfolio"}
                </button>

                <div className="flex">
                    <Button onClick={handleWorkScroll}>Projects</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showResume && (
                        <Button
                            onClick={() => router.push("/resume")}
                            classes="first:ml-1"
                        >
                            Resume
                        </Button>
                    )}

                    <Button onClick={() => window.open("mailto:alexpekhenko@gmail.com")}>
                        Contact
                    </Button>
                    {mounted && theme && data.darkMode && (
                        <Button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <img
                                className="h-6"
                                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                            ></img>
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
