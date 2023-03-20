import React from 'react'

function ProductLength() {
  return (
   
    <div className="input-filters">
        <strong>Product length : </strong>
        <input type="number" name="length_f"  placeholder="Min"/>
        <input type="number" name="length_t"  placeholder="Max"/>
    </div>
    
  )
}

export default ProductLength