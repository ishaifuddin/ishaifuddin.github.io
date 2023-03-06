import React from 'react'

function ProductWidth() {
  return (
   
    <div style={{display:'flex',margin:'15px'}}>
            <strong> Product Width </strong>
            <input type="number" name="width_f"  placeholder="Min"/>
            <input type="number" name="width_t"    placeholder="Max"/>
        </div>
    
  )
}

export default ProductWidth