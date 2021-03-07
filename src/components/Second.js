import React from "react";
import Particles from "react-particles-js";

const Second = () => {
  return (
    <div style={{ background: "hotpink" }}>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 4,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Second;
