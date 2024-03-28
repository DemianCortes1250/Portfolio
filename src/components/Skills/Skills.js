import React from 'react';
import NavBar from '../NavBar/NavBar';

const Skills = () => {


    return (
        <div>
            <NavBar/>
            <div className="flex justify-center items-center">
                <div className="font-mono animate-fade-down animate-once animate-duration-[1800ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards w-1/4 mt-4 pt-4">
                    <h1 className="text-4xl font-bold inline border-b-4 border-Color3 w-full sm:w-96 text-2xl text-Color1">Skills</h1>
                </div>
            </div>
            <div className="pl-5 mt-10 max-w-[550px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
                <div className=" animate-fade-down animate-once animate-duration-[1000ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="Javascript" src="https://portfolio-parzybaal.vercel.app/assets/javascript.d04a05c4.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1000ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">    
                    <img alt="react" src="https://portfolio-parzybaal.vercel.app/assets/react.e00184ba.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1000ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="redux" src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png"/>        
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1200ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2  border-solid border-2 w-44">
                    <img alt="sequelize" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_wordmark_logo_icon_146349.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1200ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="express" src="https://portfolio-parzybaal.vercel.app/assets/express.22a36cd4.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1200ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="node" src="https://www.svgrepo.com/show/376337/node-js.svg"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1400ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="next" src="https://damiandeluca.com.ar/wp-content/uploads/2019/07/next-js.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1400ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="vite" src="https://portfolio-parzybaal.vercel.app/assets/vite.9f000615.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1400ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="postgreSql" src="https://portfolio-parzybaal.vercel.app/assets/postgres.8e58ad2c.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1600ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="html" src="https://portfolio-parzybaal.vercel.app/assets/html.d20c9482.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1600ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="css" src="https://portfolio-parzybaal.vercel.app/assets/css.4040bdba.png"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1600ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="git" src="data:image/png;base64,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"/>
                </div>
                <div className="animate-fade-down animate-once animate-duration-[1800ms] animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards p-8 border-Color2 border-solid border-2 w-44">
                    <img alt="tailwindcss" src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;