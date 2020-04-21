import React from "react";
import InventoryList from "./InventoryList";

// This is the highest level component for the inventory display on the dashboard.
// The inventory displays all saved products from the user
function Inventory({ history }) {
  const addNewItem = (e) => {
    e.preventDefault();
    history.push("/designshirt");
  };

  return (
    <div>
      <span style={headerStyle}>
        <h1 style={inventoryH1Style}>Inventory</h1>
        <button onClick={addNewItem} style={buttonStyle}>
          Add new item
        </button>
      </span>
      <div style={inventoryStyle}>
        <InventoryList history={history} />
      </div>
    </div>
  );
}

export default Inventory;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const inventoryH1Style = {
  fontFamily: "Lato",
  fontSize: "30px",
  fontWeight: "bold",
};

const buttonStyle = {
  color: "white",
  width: "160px",
  height: "48px",
  left: "1120px",
  top: "526px",
  background: "#4455EE",
  borderRadius: "8px",
};

const inventoryStyle = {
  margin: "0 auto",
  // backgroundColor: "#E5E5E5",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
