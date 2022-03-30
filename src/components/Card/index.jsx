import React from "react";
import { Container, Box } from "./styles";

export function Card() {
  return (
    <Container>
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthehouseandhomemagazine.com%2Fdownloads%2F253%2Fdownload%2FiStock-595336248.jpg%3Fcb%3D0edd4dc04c871b3b015b9b957aa78dd9%26w%3D1200&f=1&nofb=1"
          alt=""
          width={250}
          height={180}
        />
      </div>
      <Box>
        <div className="title--price">
          <strong>Chicago Pizza</strong>
          <span className="price">$9</span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
          doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="containerButton">
          <button>Order Pizza</button>
        </div>
      </Box>
    </Container>
  );
}
