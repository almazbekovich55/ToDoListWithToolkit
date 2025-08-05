import React from "react";
import { useSelector } from "react-redux";
import "./Points.scss";

const Points = () => {
  const points = useSelector((state) => state.points.points);

  return (
    <div className="points">
      <h2>Баллы: {points}</h2>
    </div>
  );
};

export default Points;
