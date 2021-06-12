import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';
import './Book.css';



const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Book = () => {


    return (
        <div className="col-md-3">
            <div className="row">
                <div>
                    <form action="">
                        <div className="picker">
                            <p>Pic From</p>
                            <input style={{ borderRadius: "5px", backgroundColor: "#b0e0bd" }} type="text" placeholder="place from" required />
                            <br />
                            <br />
                            <p>Pic To</p>
                            <input style={{ borderRadius: "5px", backgroundColor: "#b0e0bd" }} type="text" placeholder="place to" required />
                            <br />
                            <br />
                            <input style={{ borderRadius: "10px", width: "150px", backgroundColor: "#e8e358de" }} type="submit" value="Search" />
                        </div>
                    </form>
                </div>


                <LoadScript
                    googleMapsApiKey="AIzaSyA1XJBHpDBAF-7Vgk_Y6refhsRpcJlFT8c"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={2}
                    >

                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>

    );
};

export default React.memo(Book);


