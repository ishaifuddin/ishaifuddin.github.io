import React from 'react'

function ProductCurrentPrice() {
  return (
   
    <div className="input-filters">
        <strong>Current Price : </strong>
        <input type="number" name="price_f"  placeholder="Min"/>
        <input type="number" name="price_t"    placeholder="Max"/>
    </div>
    
  )
}

export default ProductCurrentPrice