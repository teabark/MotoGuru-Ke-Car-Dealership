import FeaturesLogo from "./FeaturesLogo";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  function handleLink(model){
    navigate(`/${model}`);
   console.log(model);
  }

  return (
    <section id="features" className="my-5 py-5">
      <div className="features-paragraph font1">
        <p>Choose your Brand:</p>
      </div>
      <div className="brand-logos">
        <div className="links" onClick={()=>{handleLink("mercedes")}}>    
          <FeaturesLogo
            src={`${process.env.PUBLIC_URL}/assets/logos/mercedeslogo.png`}
            alt={"audi logo"}
            className={"mercedes"}
          /></div>


        <div className="links" onClick={()=>{handleLink("audi")}}>
          <FeaturesLogo
            src={`${process.env.PUBLIC_URL}/assets/logos/audilogo.png`}
            alt={"audi logo"}
            className={"audi"}
          />
        </div>

        <div className="links" onClick={()=>{handleLink("bmw")}}>
          <FeaturesLogo
            src={`${process.env.PUBLIC_URL}/assets/logos/bmwlogo.png`}
            alt={"bmw logo"}
            className={"bmw"}
          />
        </div>

        <div className="links" onClick={()=>{handleLink("toyota")}}>
          <FeaturesLogo
            src={`${process.env.PUBLIC_URL}/assets/logos/toyotalogo.png`}
            alt={"toyota logo"}
          />
        </div>

        <div className="links" onClick={()=>{handleLink("range")}}>
          <FeaturesLogo
            src={`${process.env.PUBLIC_URL}/assets/logos/landroverlogo.png`}
            alt={"Land Rover logo"}
            className={"range"}
          />
        </div>

      </div>
    </section>
  );
}
