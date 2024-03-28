import React from 'react';
import NavBar from '../NavBar/NavBar';
import correo from '../../assets/correo.png'
import instagram from '../../assets/instagram.png'

const Contact = () => {

      const handleDemianClickGh = () => {
    window.location.href = "https://github.com/DemianCortes1250";
  };

  const handleDemianClickLk = () => {
    window.location.href = "https://www.linkedin.com/in/demian-cortés-a8362525b/";
  };

  const handleDemianClickIn = () => {
    window.location.href = "https://www.instagram.com/demianacortes/";
  };

  const handleDemianClickMl = () => {
    window.open("mailto:demian.a.cortes1250@gmail.com");
  };

  return (
    <div>
      <NavBar />
      <div className=" flex flex-col items-center mt-20">
        <p className="pl-3 animate-fade-down animate-once animate-duration-[2000ms] animate-delay-[10ms] animate-ease-linear animate-normal 
            animate-fill-forwards w-full lg:w-1/2 font-mono leading-normal tracking-normal antialiased fond-bold text-2xl text-orange-200">
            Thank you for taking the time to explore my portfolio. As an aspiring programmer, I'm dedicated to delivering innovative, 
            high-quality solutions to technological challenges. I hope that my work and skills align with what you're seeking.
            I'm committed to continuous learning and professional growth to ensure outstanding results on any project I undertake.
            To make communication easier, I've provided links to my social media profiles and other contact methods below.
            Feel free to reach out to discuss collaboration opportunities, exciting projects, or simply to chat about technology.
            I'm eager to learn about your projects and how I can contribute to their success. Looking forward to hearing from you soon!
        </p>
        <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[10ms] animate-ease-linear animate-normal
    animate-fill-forwards flex justify-center items-center lg:justify-between mt-4 pt-20">
    <div className="w-1/2 sm:w-auto">
        <img className="cursor-pointer w-20 h-20 rounded-full m-1" alt="GitHub" onClick={handleDemianClickGh} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
    </div>
    <div className="w-1/2 sm:w-auto">
        <img className="cursor-pointer w-20 h-20 rounded-full m-1" alt="Linkedin" onClick={handleDemianClickLk} src="https://cdn-icons-png.flaticon.com/256/61/61109.png" />
    </div>
    <div className="w-1/2 sm:w-auto">
        <img className="cursor-pointer w-20 h-20 rounded-full m-1" alt="Ml" onClick={handleDemianClickMl} src={correo} />
    </div>
    <div className="w-1/2 sm:w-auto">
        <img className="cursor-pointer w-20 h-20 rounded-full m-1" alt="Ml" onClick={handleDemianClickIn} src={instagram}/>
    </div>
</div>
      </div>
    </div>
  );
}


export default Contact;