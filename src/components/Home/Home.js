const Home = () => {


    return (
        <div className= "pb-8 relative flex flex-col p-2  mt-5 ml-1 h-full mr-2 mb-2 space-y-8" >
            <div>
                <h1 className="font-mono animate-fade-right animate-once animate-duration-[2300ms] 
                    animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards 
                    h-62 m-20 ms-5 pt-1 text-7xl 
                    text-Color1 mt-3 sm:w-2/12 border-l-4 border-t-4 border-Color2 pl-5">
                    Hello, I'm Demian Cortes </h1>
            </div>
            <div className="mr-8" dir="rtl">
                <p className="font-mono animate-fade-left animate-once animate-duration-[2300ms] animate-delay-50 
                    animate-ease-linear animate-normal animate-fill-forwards text-2xl text-Color1 w-full sm:w-7/12
                    border-r-4 border-b-4 border-Color2 pr-5 pb-3 ">
                    A Full Stack Web Developer with a strong background in Web Design.
                    I have accumulated experience working with technologies such as Node.js, React, Redux,
                    SQL, Vite, Express, Next.js, and agile methodologies like Scrum, using tools like Trello,
                    among others. My track record includes contributions to both individual and team projects,
                    strengthening my skills in creative thinking, problem-solving, effective 
                    collaboration, communication, and autonomy</p>
            </div>
       </div>
    )
}

export default Home