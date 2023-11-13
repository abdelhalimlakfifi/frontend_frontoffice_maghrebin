import React from 'react'
import InputNum from "../GlobalComponents/InputNum";

const CartProductDescription = () => {
  return (
   <>
       <div className="w-2/5 flex flex-col">
          <div>
            <h3 className="text-xl font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600">
              Additional details about the product.
            </p>
          </div>
          <div className="flex items-end mt-auto">
           <h3 className="mr-4">QUANTITY</h3>
            <InputNum />
            {/* Error Props InputNum */}
          </div>
        </div>
   </>
  )
}
export  default CartProductDescription;