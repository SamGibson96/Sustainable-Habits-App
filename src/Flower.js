import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";


// Image imports
import Appbackground from "./Images/AppBackground.png";
import Dirt from "./Images/Dirt.png";
import Seed from "./Images/Seed.png";
import Sprout from "./Images/Sprout.png";
import StemStage2 from "./Images/StemStage2.png";
import Bud from "./Images/Bud.png";
import Leaf1 from "./Images/Leaf1.png";
import Leaf2 from "./Images/leaf2.png";
import Leaf3 from "./Images/leaf3.png";
import FlowerMiddle from "./Images/FlowerMiddle.png";
import Petals from "./Images/Petals.png";



function Flower(props) {

  // Determine flower growth stage based on dailyScorePD
  const stage1 = props.dailyScorePD < 10;
  const stage2 = props.dailyScorePD >= 10 && props.dailyScorePD < 20;
  const StemAppearance = props.dailyScorePD >=20;
  const stage3 = props.dailyScorePD >= 20 && props.dailyScorePD < 30;
  const stage4 = props.dailyScorePD >= 30;
  return (
    <>
      <div className = "flower-bg"
        style={{ backgroundImage: `url(${Appbackground})`,
          position: "relative",
          height: "75vh",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "20%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "400px",
            zIndex: 20,
          }}
        >
          <img
            src={Dirt}
            style={{
              position: "absolute",
              width: "400px",
              height: "auto",
              bottom: 0,
              left: 0,
              zIndex: 20,
            }}
            alt="Dirt"
          />

          {stage1 &&
            <img
              src={Seed}
              style={{
                position: "absolute",
                width: "40px",
                height: "auto",
                bottom: "110px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
                animation: "seed-wiggle",
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
              alt="Seed"
            />
          }
          { stage2 &&
            <img
              src={Sprout}
              style={{
                position: "absolute",
                height: "auto",
                width: "40px",
                bottom: "110px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
                animation: "sprout-wiggle",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
              alt="Sprout"
            />
          }
          <div className="stem-group">
          {StemAppearance &&
            <img
              src={StemStage2}
              style={{
                position: "absolute",
                height: "500px",
                width: "auto",
                bottom: "110px",
                left: "45%",
                transform: "translateX(-50%)",
                zIndex: 5,
              }}
              alt="StemStage2"
            />
          }
            { stage3 &&
            <img
              src={Bud}
              style={{
                position: "absolute",
                height: "400px",
                width: "auto",
                bottom: "105px",
                left: "48%",
                transform: "translateX(-50%)",
                zIndex: 5,
              }}
              alt="Bud"
            />
          } 
          { StemAppearance &&
            <img
              src={Leaf1}
              style={{
                position: "absolute",
                height: "400px",
                width: "auto",
                bottom: "110px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                animation: "sway-left",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
              alt="Leaf1"
            />
          }
          { StemAppearance &&
            <img
              src={Leaf2}
              style={{
                position: "absolute",
                height: "400px",
                width: "auto",
                bottom: "110px",
                left: "44%",
                transform: "translateX(-50%)",
                zIndex: 2,
                animation: "sway-right",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
              alt="Leaf2"
            />
          }
          { StemAppearance &&
            <img
              src={Leaf3}
              style={{
                position: "absolute",
                height: "400px",
                width: "auto",
                bottom: "110px",
                left: "43%",
                transform: "translateX(-50%)",
                zIndex: 2,
                animation: "sway-right",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
              alt="Leaf3"
            />
          }
          
           { stage4 &&
            <img
              src={FlowerMiddle}
              style={{
                position: "absolute",
                height: "250px",
                width: "auto",
                bottom: "340px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
              }}
              alt="FlowerMiddle"
            />
          }
           { stage4 &&
            <img
              src={Petals}
              style={{
                position: "absolute",
                height: "250px",
                width: "auto",
                bottom: "340px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5,
              }}
              alt="Petals"
            />
          }

          </div>
        </div>
      </div>
    </>
  );
}

export default Flower;
