import React from "react";
import "../styles/DatasetsPage.css";

const datasets = [
  {
    name: "Icentia 11k ECG Dataset",
    link: "https://physionet.org/content/icentia11k-continuous-ecg/1.0/",
    source: "PhysioNet",
    info: "Large-scale continuous ECG recordings annotated for arrhythmia analysis.",
  },
  {
    name: "St Petersburg Arrhythmia Dataset",
    link: "https://physionet.org/content/incartdb/1.0.0/",
    source: "PhysioNet",
    info: "12-lead ECG recordings with expert-labeled arrhythmia events.",
  },
  {
    name: "MODMA Dataset",
    link: "https://modma.lzu.edu.cn/data/index/",
    source: "MODMA",
    info: "Multimodal dataset for mental disorder analysis using EEG, ECG, and behavioral data.",
  },
  {
    name: "D1NAMO Dataset",
    link: "https://www.kaggle.com/datasets/sarabhian/d1namo-ecg-glucose-data",
    source: "Kaggle",
    info: "Physiological signals including ECG and glucose measurements for health monitoring.",
  },
  {
    name: "CIFAR-10 and CIFAR-100 Dataset",
    link: "https://www.cs.toronto.edu/~kriz/cifar.html",
    source: "University of Toronto",
    info: "Benchmark image datasets widely used for object recognition and deep learning research.",
  },
];



const DatasetsPage = () => {
  return (
    <div className="datasets-wrapper">
      <h1 className="datasets-title">DATASETS</h1>

      <div className="datasets-box">
        {datasets.map((dataset, index) => (
          <div className="dataset-row" key={index}>
            <div className="dataset-left">
              <a
                href={dataset.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dataset-link"
              >
                {dataset.name}
              </a>

              <p className="dataset-info">{dataset.info}</p>
            </div>

            <span className="dataset-source">{dataset.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatasetsPage;
