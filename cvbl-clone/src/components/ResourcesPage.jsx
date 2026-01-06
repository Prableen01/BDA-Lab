import React from "react";
import "../styles/ResourcePage.css";

const ResourcesPage = () => {
  return (
    <div className="resources-wrapper">

      {/* PAGE TITLE */}
      <h1 className="resources-title">LAB RESOURCES</h1>

      {/* ----------- COMPUTER WORKSTATIONS ----------- */}
      <section className="resources-section">
        <h2>Computer Workstations</h2>

        <table className="resource-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Make/Model/Description</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>High Performance Workstation</td>
              <td>
                High-End Multi-GPU Enabled System<br />
                Intel Core-i7-7820X Processor<br />
                3 NVIDIA GTX 1080TI 11GB Graphic Cards<br />
                64GB RAM<br />
                24 inch FHD/4K LG Monitor<br />
                Cooler Master Cosmos C700P Casing
              </td>
              <td>2</td>
            </tr>

            <tr>
              <td>2</td>
              <td>HP Desktop Computer</td>
              <td>HP RCTO 280 G3 PCI MT IND PC</td>
              <td>20</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Acer Desktop Computer</td>
              <td>Veriton M2640G</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ----------- HARDWARE SECTION ----------- */}
      <section className="resources-section">
        <h2>Hardware</h2>

        <table className="resource-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Make/Model/Description</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>GPU</td>
              <td>Nvidia Titan Xp 12GB</td>
              <td>1</td>
            </tr>

            <tr>
              <td>2</td>
              <td>GPU</td>
              <td>Nvidia GTX 1080TI 11GB</td>
              <td>2</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Raspberry Pi 7" Touch Screen Display</td>
              <td>Raspberry Pi</td>
              <td>1</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Raspberry Pi 3</td>
              <td>Model B</td>
              <td>1</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Raspberry Pi Camera</td>
              <td>Model V2</td>
              <td>1</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Projector</td>
              <td>Optoma X341 DLP Projection Display</td>
              <td>1</td>
            </tr>

            <tr>
              <td>7</td>
              <td>Samsung Multifunction Printer</td>
              <td>ProXpress CLX-6260FR</td>
              <td>1</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Thermal Camera</td>
              <td>FLIR E40</td>
              <td>1</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Palm Print Scanner</td>
              <td>3M Cogent CS500e</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ----------- IMPORTANT RESOURCES ----------- */}
      <section className="resources-section">
        <h2>Important Resources</h2>

        <p>
          1. IEEE Signal Processing Society’s
          <a href="https://signalprocessingsociety.org/" target="_blank" rel="noreferrer"> resources</a>.
        </p>
      </section>

    </div>
  );
};

export default ResourcesPage;
