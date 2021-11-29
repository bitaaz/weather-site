import React from "react";

export function RecentLocationItems({ recentLocations }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {recentLocations.reverse().map((item, id) => (
          <div
            key={id}
            className="col-12"
            style={{
              width: "max-content",
              borderRadius: "10px",
              margin: "5px",
              textAlign: "center",
              background: "rgba(0,0,0,0.5)",
              color: "#d0cdcd",
            }}
          >
            <p className="mt-3" style={{ fontSize: "14px" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
