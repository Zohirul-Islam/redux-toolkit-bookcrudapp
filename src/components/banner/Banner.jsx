import React from "react";
import banner from "../../assets/banner.jpg";
function Banner() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-between py-5 my-5">
          <div className="col-lg-5 d-flex justify-content-end flex-column">
            <h3 className="text-primary py-3 mt-3 ">Tasker</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              maxime tempora aliquam perferendis assumenda odit consequatur
              dolorum doloremque provident harum.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <img src={banner} alt="banner" style={{ width: "220px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
