import React from "react";
import "../styles/Publications.css";
import { journals } from "../data/journals";
import { conferences } from "../data/conferences";
import { workshops } from "../data/workshops";

export default function Publications() {
  return (
    <div className="publications-page">

      <h1 className="page-title">PUBLICATIONS</h1>

      {/* Journals Section */}
      <section id="journals">
        <h2 className="section-title">Transactions and Journals</h2>
        <hr />

        {journals.map((pub, index) => (
          <div className="pub-item" key={pub.id}>
            <b>{index+1}.</b>{" "}
            {pub.citation}
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noreferrer">
                {" "} [link]
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Conferences Section */}
      <section id="conferences">
        <h2 className="section-title">Conference Publications</h2>
        <hr />

        {conferences.map((pub, index) => (
          <div className="pub-item" key={pub.id}>
            <b>{index+1}.</b>{" "}
            {pub.citation}
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noreferrer">
                {" "} [link]
              </a>
            )}
          </div>
        ))}
      </section>

      <section id="workshops">
        <h2 className="section-title">Workshops</h2>
        <hr />

        {workshops.map((pub, index) => (
          <div className="pub-item" key={pub.id}>
            <b>{index+1}.</b>{" "}
            {pub.citation}
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noreferrer">
                {" "} [link]
              </a>
            )}
          </div>
        ))}
      </section>

    </div>
  );
}
