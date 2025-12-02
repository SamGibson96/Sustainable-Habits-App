import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import Dirt from "./Images/Dirt.png";
import Seed from "./Images/Seed.png";
import Sprout from "./Images/Sprout.png";

function Flower() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "75vh",
          width: "100%",
        }}
      >
        <div className="bg-info" style={{ height: "40%" }}></div>
        <div className="bg-grass" style={{ height: "20%" }}></div>
        <div className="bg-brown" style={{ height: "50%" }}></div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "30%",
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

          {
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
          {
            // <img
            //   src={Sprout}
            //   style={{
            //     position: "absolute",
            //     height: "auto",
            //     width: "40px",
            //     bottom: "110px",
            //     left: "50%",
            //     transform: "translateX(-50%)",
            //     zIndex: 5,
            //     animation: "sprout-wiggle",
            //     animationDuration: "6s",
            //     animationTimingFunction: "ease-in-out",
            //     animationIterationCount: "infinite",
            //   }}
            //   alt="Sprout"
            // />
          }
        </div>
      </div>
    </>
  );
}

export default Flower;
