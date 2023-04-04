import React from "react";

function ProductWidth() {
  return (
    <div className="input-filters">
      <strong> Product Width </strong>
      <input type="number" name="width_f" placeholder="Min" />
      <input type="number" name="width_t" placeholder="Max" />
    </div>
  );
}

export default ProductWidth;
