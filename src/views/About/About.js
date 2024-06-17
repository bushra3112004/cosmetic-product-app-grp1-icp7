import "./About.css"
import bg1 from "./img/bg1.jpg"
import nailPaints from "./img/about-image-2.jpg"
import fruit from "./img/fruit.png"
import floral from "./img/floral.png"
import ocean from "./img/ocean.png"
import { theme } from "../../configData"
import { cosmetic_sold,happy_client,countries,employee } from "./AboutData"
import TeamCard from "../../component/TeamCard/TeamCard"
import ButtonBox from "./../../component/ButtonBox/ButtonBox"
import RJ from "./img/RJ.jpeg"
import TD from "./img/TD.jpeg"
import SS from "./img/SS.jpeg"
import SP from "./img/SP.jpeg"
import BP from "./img/BP.jpeg"
import { Link } from "react-router-dom"
import { Toaster,toast } from "react-hot-toast"
import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"



function About() {
  return (
    <>
    <Navbar/>
        <div>
            <div className="section1">
                <div>
                    <img src={bg1} className="title-bg" alt="background" />
                </div>
                <div className="text-on-image">
                    <h3 style={{color: theme.primaryColor}} className="subHeadingFont">Organic Cosmetic</h3>
                    <h1 style={{color: theme.Heading}} className="headingFont">About US</h1>
                </div>
            </div>
            <div className="cosmetic-types-data">
                <div className="cosmetic-types-data-1">
                    <img src={nailPaints} alt="nailpaint" className="cosmetic-types-data-1-img"/>
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}} className="headingFont"> Use of NATURAL ORGANIC COSMETICS</h1>
                        <p style={{color: theme.description}} className="descriptionFont">Using natural organic cosmetics offers numerous advantages for both your skin and the environment. These products are formulated without harmful chemicals, synthetic additives, or artificial fragrances, making them gentler and safer for your skin, particularly if you have sensitivities or allergies. Rich in natural vitamins, minerals, and antioxidants, organic cosmetics nourish and rejuvenate your skin, promoting a healthy and radiant complexion. Environmentally, organic farming practices used to produce these ingredients are more sustainable and eco-friendly, reducing pollution and conserving resources. </p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img" alt="fresh type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img" alt="floral type"/>
                            <p className="img-text" style={{color: theme.Heading}}  >Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img" alt="ocean type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3-sub">
                    <h1 style={{color: theme.Heading}} className="headingFont">Our Achievements</h1>
                    <p style={{color: theme.description}} className="section3-description descriptionFont">Highlighting our achievements showcases our commitment to excellence, innovation, and sustainability. </p>
                </div>
                <div className="section3-sub2">
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{cosmetic_sold}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">COSMETICS SOLD</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{happy_client}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">HAPPY CLIENTS</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{countries}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">COUNTRIES</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{employee}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">EMPLOYEES</p>
                    </div>
                </div>
            </div>
            <div className="section4">
                <iframe className="video" src="https://www.youtube-nocookie.com/embed/NbVAgoJUb04?si=D3wTI4mTYFKqSw9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="section5">
                <h1 style={{color: theme.Heading}} className="headingFont ">Our Team</h1>
                <div className="section5-1">
                    <div style={{color: theme.description}}  className="descriptionFont team-description">
                    Our team is the heart and soul of our company, bringing together a diverse group of dedicated professionals who are passionate about natural organic cosmetics. Each member of our team plays a vital role in our mission to create high-quality, sustainable products that enhance beauty and well-being.
                    </div>
                    <div className="btn-div">
                    <Toaster />
                    <Link to="/about" onClick={() => toast('Welcome to About Page')} >
                        <ButtonBox
                            text="View More"
                        />
                    </Link>
                    </div>
                </div>
                <div className="team-img-div">
                        <TeamCard 
                            TeamName="Bushra Pathan" 
                            TeamImage={BP} 
                            TeamPosition="CEO"
                        />
                        <TeamCard 
                            TeamName="Rutuja Jadhav" 
                            TeamImage={RJ}
                            TeamPosition="Devloper"
                        />
                        <TeamCard 
                            TeamName="Shashikant Surve" 
                            TeamImage={SS}
                            TeamPosition="Designer"
                        />
                    </div>
                    <div className="team-img-div">
                         <TeamCard 
                            TeamName="Tejas Dongare" 
                            TeamImage={TD}
                            TeamPosition="Product Manager"
                        />
                         <TeamCard 
                            TeamName="Shubhangi Pawar" 
                            TeamImage={SP}
                            TeamPosition="Service Manager"
                        />
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default About