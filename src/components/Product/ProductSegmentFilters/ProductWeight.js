import React from 'react'

function ProductWeight() {
  return (
   
    <div className="input-filters">
        <strong> Product Weight </strong>
        <input type="number" name="weight_f"  placeholder="Min"/>
        <input type="number" name="weight_t"    placeholder="Max"/>
    </div>
    
  )
}

export default ProductWeight