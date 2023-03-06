import React from 'react'

function ProductWeight() {
  return (
   
    <div style={{display:'flex',margin:'15px'}}>
            <strong> Product Weight </strong>
            <input type="number" name="weight_f"  placeholder="Min"/>
            <input type="number" name="weight_t"    placeholder="Max"/>
        </div>
    
  )
}

export default ProductWeight