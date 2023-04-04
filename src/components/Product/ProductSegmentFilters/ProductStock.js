import React from "react";

function ProductStock() {
  return (
    <div className="input-filters">
      <strong> Product Stock </strong>
      <input type="number" name="stock_f" placeholder="Min" />
      <input type="number" name="stock_t" placeholder="Max" />
    </div>
  );
}

export default ProductStock;
