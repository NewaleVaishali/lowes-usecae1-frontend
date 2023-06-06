import React, { useContext, useState } from "react";

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Context from "../config/context";

export default function Navbar() {
  const context = useContext(Context);


  const path = "home";
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="categories"
        active={activeItem === "categories"}
        onClick={handleItemClick}
        as={Link}
        to="/categories"
      />
      <Menu.Item
        name="items"
        active={activeItem === "items"}
        onClick={handleItemClick}
        as={Link}
        to="/items"
      />
    </Menu>
  );
  return menuBar;
}