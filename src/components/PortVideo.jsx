import React from "react";

export default function PortVideo({ children }) {
  return (
    <video className="h-[300px] shadow-lg" controls>
      {children}
    </video>
  );
}
