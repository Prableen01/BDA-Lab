import React from "react";
import "../styles/Publications.css";

export default function Publications() {
  return (
    <div className="publications-page">
      
      <h1 className="page-title">PUBLICATIONS</h1>

      {/* Journals Section */}
      <section id="journals">
        <h2 className="section-title">Transactions and Journals</h2>
        <hr />

        <div className="pub-item">
          <b>66.</b> Author names … <a href="#">[link]</a>
        </div>

        <div className="pub-item">
          <b>65.</b> Author names … <a href="#">[link]</a>
        </div>

      </section>


      {/* Conferences Section */}
      <section id="conferences">
        <h2 className="section-title">Conference Publications</h2>
        <hr />

        <div className="pub-item">
          <b>20.</b> Author names … <a href="#">[link]</a>
        </div>

      </section>

    </div>
  );
}
