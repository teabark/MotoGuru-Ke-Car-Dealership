import { MoveDown } from "lucide-react";

export default function Body(){
    return (
        <section id="body">
        <div className="home-text">
          <div className="wallpaper">
            <div className="wallpaper-text font2">MOTOR</div>
            <div className="wallpaper-text1 font2">GURU</div>
          </div>
          <div className="home-p">
            <p  className="font1">
              The <span className="safe-text">best place</span> to buy or sell your
              car in Kenya
            </p>
          </div>
          <div className="scroll-down">
            <p className="scroll-down-icon"><MoveDown /></p>
            <p className="font3"><a href="#features">Scroll Down</a></p>
          </div>
        </div>
        </section> 
    );
}