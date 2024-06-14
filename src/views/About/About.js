import "./About.css"
import bg1 from "./bg1.jpg"
import nailPaints from "./about-image-2.jpg"
import fruit from "./fruit.png"
import floral from "./floral.png"
import ocean from "./ocean.png"

function About() {
  return (
    <>
        <div>
            <div>
                <img src={bg1} className="title-bg" />
            </div>
            <div className="cosmetic-types-data">
                <div className="cosmetic-types-data-1">
                    <img src={nailPaints} />
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1>NATURAL ORGANIC COSMETICS PROMOTES REJUVENATION</h1>
                        <p>Bleak cod cutthroat eel sargassum fish panga sucker beardfish lionfish batfish eulachon Raccoon butterfly fish tetra. Pejerrey combtooth blenny Sundaland Noodlefish pipefish zebra shark beaked salmon hillstream loach New Zealand smelt salmon false moray pelican eel stoneroller minnow.</p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img"/>
                            <p className="img-text">Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img"/>
                            <p className="img-text">Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img"/>
                            <p className="img-text">Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <h1>Our Achievements</h1>
            </div>
        </div>
    </>
  )
}

export default About