import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import car1 from "../images/toyotabanners/toyotabanner1.png";
import car2 from "../images/toyotabanners/toyotabanner2.png";
import car3 from "../images/toyotabanners/toyotabanner3.png";
import car4 from "../images/toyotabanners/toyotabanner4.png";
import car5 from "../images/toyotabanners/toyotabanner5.png";
import ImageSlider from "../components/ImgSlider/ImageSlider";
import Card from "../components/Card/Card";

const IMAGES = [car1, car2, car3, car4, car5];
console.log(IMAGES);

function Toyota() {

  const model = "toyota";
  const [cars, setCars] = useState([])

  async function handleFetch(){
    try {
      const response = await axios.post(
        "http://localhost:5000/cars",
        {
          model: model,
        },
        { headers: { "content-type": "application/x-www-form-urlencoded" }}
      );
      console.log("API response:", response.data);
      setCars(response.data);
    } catch (err){
      console.log("Error fetching data", err);
    }
  }

  useEffect(()=>{
    handleFetch()
  }, []);

  return (
    <div className="lunch-box">
      <Header />
      <div className="container">
      <div style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
        aspectRatio: "10 / 6"
      }}>
      <ImageSlider imageURLs={IMAGES}/>
      </div>

      <div className="box">
        {cars.map((car)=>(
          <Card
          key={car.id}
          id={car.id}
          img={car.image_url}
          availability={car.car_availability}
          year={car.car_year}
          name={car.car_name}
          transmission={car.transmission}
          cc={car.engine_size}
          mileage={car.track_record}
          description={car.vehicle_description}
          price={car.price}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Toyota;
