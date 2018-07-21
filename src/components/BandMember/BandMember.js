import React from 'react';
import "./BandMember.css";

const BandMember = props => (
	<div className="card">
	    <div className="imageContainer">
	      <img
	        alt={props.name}
	        src={props.image}
					id={props.id}
					onClick={() => props.shuffleScore(props.id)} className='shuffleScore'
	      />
	    </div>
  </div>
);

export default BandMember;