import "./About.css"
import bg1 from "./bg1.jpg"
import nailPaints from "./about-image-2.jpg"
import fruit from "./fruit.png"
import floral from "./floral.png"
import ocean from "./ocean.png"
import { theme } from "../../configData"

function About() {
  return (
    <>
        <div>
            <div className="section1">
                <div>
                    <img src={bg1} className="title-bg" alt="background" />
                </div>
                <div className="text-on-image">
                    <h3 style={{color: theme.primaryColor,fontStyle: "italic"}}>Organic Cosmetic</h3>
                    <h1 style={{color: theme.Heading}}>About US</h1>
                </div>
            </div>
            <div className="cosmetic-types-data">
                <div className="cosmetic-types-data-1">
                    <img src={nailPaints} alt="nailpaint" className="cosmetic-types-data-1-img"/>
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}}>NATURAL ORGANIC COSMETICS PROMOTES REJUVENATION</h1>
                        <p style={{color: theme.description}}>Bleak cod cutthroat eel sargassum fish panga sucker beardfish lionfish batfish eulachon Raccoon butterfly fish tetra. Pejerrey combtooth blenny Sundaland Noodlefish pipefish zebra shark beaked salmon hillstream loach New Zealand smelt salmon false moray pelican eel stoneroller minnow.</p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img" alt="fresh type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img" alt="floral type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img" alt="ocean type"/>
                            <p className="img-text" style={{color: theme.Heading}}>Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <h1 style={{color: theme.Heading}}>Our Achievements</h1>
                <p style={{color: theme.description}} className="section3-description">Black scabbardfish vimba, beaked salmon sandroller, firefish silver driftfish, golden dojo finback cat shark central uhylise</p>
            </div>
        </div>
    </>
  )
}

export default About