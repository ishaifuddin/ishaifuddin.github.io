import React from 'react'

function ProductHeight() {
  return (
        <div className="input-filters">
            <strong> Product height : </strong>
            <input type="number" name="height_f"  placeholder="Min"/>
            <input type="number" name="height_t"    placeholder="Max"/>
        </div>
    
  )
}

export default ProductHeight