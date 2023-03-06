import React from 'react'

function ProductCurrentPrice() {
  return (
   
    <div style={{display:'flex',margin:'15px'}}>
            <strong> Product Current Price </strong>
            <input type="number" name="price_f"  placeholder="Min"/>
            <input type="number" name="price_t"    placeholder="Max"/>
        </div>
    
  )
}

export default ProductCurrentPrice