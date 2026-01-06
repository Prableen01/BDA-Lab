import React from "react";
import "../styles/DatasetsPage.css";

const DatasetsPage = () => {
  return (
    <div className="datasets-wrapper">

      <h1 className="datasets-title">DATASETS</h1>

      <div className="datasets-box">

        <h2 className="datasets-heading">Multimodal Biometrics Dataset</h2>
        <hr />

        {/* -------- ROW 1 -------- */}
        <div className="dataset-row">
          <div className="dataset-name">
            Thermal Images and Corresponding Face Images
          </div>

          <div className="dataset-desc">
            Thermal images for faces along with the corresponding RGB images for each thermal image.
            The dataset contains the thermal and RGB facial images of 125 individuals.
            Each individual has at least 20 image pairs.
            <br /><br />
            Total thermal images: <b>2500+</b><br />
            Total RGB images: <b>2500+</b><br />
            <b>Sensor used</b> – FLIR E40
          </div>
        </div>

        {/* -------- ROW 2 -------- */}
        <div className="dataset-row">
          <div className="dataset-name">
            Finger Print
          </div>

          <div className="dataset-desc">
            Contains 5 fingerprint impressions of each finger (left + right hand)
            for 105 individuals.
            <br /><br />
            Total impressions: <b>5250</b><br />
            <b>Sensor used</b> – 3M COGENT FINGERPRINT SENSOR
          </div>
        </div>

        {/* -------- ROW 3 -------- */}
        <div className="dataset-row">
          <div className="dataset-name">
            Iris Images
          </div>

          <div className="dataset-desc">
            Contains at least 5 iris scan images for left and right eyes
            for each of 125 individuals.
            <br /><br />
            Total iris images: <b>1250</b><br />
            <b>Sensor used</b> – 3M COGENT IRIS SCANNER CIS202
          </div>
        </div>

        {/* -------- ROW 4 -------- */}
        <div className="dataset-row">
          <div className="dataset-name">
            Facial Videos
          </div>

          <div className="dataset-desc">
            Contains 625 facial videos from 125 individuals.
            Each person has 5 videos covering face and torso.
            <br /><br />
            <b>Resolution</b>: HD<br />
            <b>Frame Rate</b>: Standard Lab Recording Setup
          </div>
        </div>

      </div>
    </div>
  );
};

export default DatasetsPage;
