import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";

const Details = props => {
  return (
    <div className="detail">
      <p>{props.hours}</p>
      <div className="detail-temp">
        <p id="high">{props.max_temp}</p>
        <p id="low">{props.min_temp}</p>
      </div>
    </div>
  );
};

export default Details;
