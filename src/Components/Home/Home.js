import React from 'react';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css';

const fakeData = [
    {
        id: 1,
        name: "BUS",
        imgUrl:"https://i.ibb.co/3sdR4Hb/Bus.png",
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
    },
    {  
         imgUrl:"https://i.ibb.co/pytYYWf/train.png",
        id: 2,
        name: "Train",
        details:' Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {   
        imgUrl:"https://i.ibb.co/tYh4WQd/Frame.png",
        id: 3,
        name: "Bike",
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {   
        imgUrl:"https://i.ibb.co/19HxsbF/car.png",
        id: 4,
        name: "Car",
        details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
]
const Home = () => {
    return (
        <div>
            <div className="row">
             
             {
                 fakeData.map(td =><HomeDetails data={td} key={td.id}></HomeDetails>)
             }
         </div>
        </div>
    );
};

export default Home;