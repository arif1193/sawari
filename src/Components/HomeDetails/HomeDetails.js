import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDetails.css';

const HomeDetails = (props) => {
    const data = props.data;
    return (
        <div className="col-md-3">
            <div className="view-style">
                <div className="style">
                    <img className="img-fluid" src={data.imgUrl} alt="" />
                    <h4>Name: {data.name}</h4>
                    <p>Details: {data.details}</p>
                    <Link to={`/book/${data.id}`}><button className="btn-success">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;
