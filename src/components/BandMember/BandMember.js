import React from 'react';
import "./BandMember.css";

const BandMember = props => (
	<div 
		className="cardStyle"
		onClick={() => props.setClicked(props.id)}>
	    <div className="imgContainer">
	      <img
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
	    <div className="content">	
	    	{props.name}
	    </div>
  </div>
);

export default BandMember;