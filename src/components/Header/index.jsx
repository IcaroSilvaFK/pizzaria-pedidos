import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <FaPizzaSlice size={25} color="#ffd152" />
        <strong>Pizzaria</strong>
      </div>
      <nav>
        <button>
          <RiShoppingCart2Fill size={25} color="#38A169" />
        </button>
      </nav>
    </Container>
  );
}
