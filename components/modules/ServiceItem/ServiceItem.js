import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons"; // Import the icon you need
config.autoAddCss = false;

export default function ServiceItem({ title, desc, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
          <h4 style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                height: "35px",
                width: "40px",
                backgroundColor: "#da9f5b",
                borderRadius: "100%",
                textAlign: "center",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <FontAwesomeIcon icon={Icons[icon]} />
            </div>
            <p className="ml-3">{title}</p>
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}
