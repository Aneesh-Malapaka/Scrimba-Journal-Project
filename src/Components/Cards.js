import React from "react";

export default function Cards(props) {
  return (
      
      <div className="cards">
          {console.log(props.item)}
          <img className="card--image" src={process.env.PUBLIC_URL+`/Images3/${props.item.imageUrl}`} alt="Fuji" />
          <div className="card--info">
              <p className="card--location"><i class="fas fa-map-marker-alt"></i>{props.item.location}<span className="maps"><a href={props.item.MapsUrl}>View on google maps</a></span></p>
              <h1 className="card--title">{props.item.title}</h1>
              <p className="card--date">{props.item.startDate+" - "+ props.item.endDate}</p>

              <p className="card--description">{props.item.description}</p>
              <hr className="card--divi" />
          </div>
      </div>
  );
}
