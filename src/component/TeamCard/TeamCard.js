import "./TeamCard.css"

function TeamCard({TeamImage,TeamName,TeamPosition}) {
  return (
    <div className="team-card-container">
        <img src={TeamImage} className="team-image"/>
        <span className="team-name-text">{TeamName}</span><br/>
        <span className="team-position-text">{TeamPosition}</span>
    </div>
  )
}

export default TeamCard