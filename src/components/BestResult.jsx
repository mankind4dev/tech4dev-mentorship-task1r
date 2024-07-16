import React from "react";
import { results } from "../page";

export default function BestResult() {
  return (
    <>
      <div className="bestResult">
        <h3>our best result for the year</h3>
        {results.map((result, index) => (
          <div className="" key="index">
            {result.title}
          </div>
        ))}
      </div>
    </>
  );
}
