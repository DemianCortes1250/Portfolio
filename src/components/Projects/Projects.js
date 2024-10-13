import React from 'react';
import NavBar from '../NavBar/NavBar';
import Pi from '../../assets/Pi.png'

const Projects = () => {

    const handleClickPF = () => {
        window.location.href = "https://pf-e-latam.netlify.app/";
    };
    
    const handleClickPi = () => {
        window.location.href = "https://github.com/DemianCortes1250/Pi_Country";
    };
   
    return (
        <div>
          <NavBar/>
          <div className="pr-2 justify-items-center mt-10 mx-auto grid lg:grid-cols-2 gap-8 justify-center">
            <div className="grid justify-items-start w-full lg:w-3/5 flex flex-col lg:items-end pl-3">
              <div>
                <h1 className='font-mono animate-fade-right animate-once animate-duration-[2000ms] 
                    animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards text-4xl mb-3 text-Color2'>E-latam commerce</h1>
                <h3 className='font-mono animate-fade-right animate-once animate-duration-[2300ms] 
                    animate-delay-50 animate-ease-linear animate-normal animate-fill-forwardsmb-6 text-Color2'>An e-commerce of electronic products that consumes its own database allows users to register, browse, filter, order and add products to the cart. They can also modify their profile and make payments securely through an integration with Stripe. In addition, the administrator is provided with a control panel where he can modify products, hide products, grant privileges, delete user reviews and use sales statistics to manage trade efficiently.</h3>
              </div>
              <div className='animate-fade-right animate-once animate-duration-[2600ms] 
                    animate-delay-50 animate-ease-linear animate-normal animate-fill-forwards bg-gradient-to-r from-Color4 via-Color4 to-Color3 shadow-2xl p-3 rounded-xl'>
                <img className=" cursor-pointer max-w-full h-auto object-cover" alt="eLatam" onClick={handleClickPF} src="https://i.postimg.cc/tT55Dg5j/e-latam.png" />
              </div>
            </div>
            <div className="w-full lg:w-3/5  flex flex-col lg:items-end pl-3">
              <div>
                <h1 className='font-mono animate-fade-left animate-once animate-duration-[2000ms] animate-delay-50 
                    animate-ease-linear animate-normal animate-fill-forwards text-4xl mb-3 text-Color2'>Countrys App</h1>
                <h3 className='font-mono animate-fade-left animate-once animate-duration-[2300ms] animate-delay-50 
                    animate-ease-linear animate-normal animate-fill-forwards text-Color2 mb-6'>A SPA that consumes data from an external API, and allows the visualization of general and detailed information of more than 100 countrys, among the functionalities that this APP has available is filtering and ordering countrys by Name, Continent, Activity and Population, in addition of the creation of new Activity, through a controlled form.</h3>
              </div>
              <div  className='animate-fade-left animate-once animate-duration-[2600ms] animate-delay-50 
                    animate-ease-linear animate-normal animate-fill-forwards bg-gradient-to-r from-Color4 via-Color4 to-Color3 shadow-2xl p-3 rounded-xl'>
                <img className="py-10 cursor-pointer" alt="Pi" onClick={handleClickPi} src={Pi} />
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Projects;