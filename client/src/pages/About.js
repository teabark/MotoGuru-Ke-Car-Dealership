import BillBoard from "../components/BillBoard/BillBoard";
import Header from "../components/Header/Header";
import AboutCard from "../components/Card/AboutCard";
import Footer from "../components/Footer/Footer"
import axios from "axios";
import { useEffect, useState } from "react";

function About(){

    const [details, setDetails] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get("http://localhost:5000/staff");
                console.log("API response:", response.data)
                setDetails(response.data)
            }catch(error){
                console.log("Error fetching data", error)
            }
        }

        fetchData()
    }, [])

    return <div>
        <Header/>
        <BillBoard/>
        <div className="about_1">
            {details.map((detail)=>(
                <AboutCard
                img={detail.staff_img}
                name={detail.staff_name}
                description={detail.staff_description}
                role={detail.role}
                />
            ))}
        </div>
        <Footer/>
    </div>
}

export default About;