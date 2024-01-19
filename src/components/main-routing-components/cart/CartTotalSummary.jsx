import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const CartTotalSummary=({cartDetails})=>{
    const [cartAmountSummary,setCartAmountSummary]=useState(
        {
            totalActualAmount:0,
            tax:0,
            shippingChanges:0,

        }
    )
    useEffect(()=>{
        setCartAmountSummary({...cartAmountSummary,
            totalActualAmount:Number(cartDetails.totalAmount===0?0:cartDetails.totalAmount.toFixed(2)),
            tax:cartDetails.totalAmount===0?0:Number(((cartDetails.totalAmount/100)*3).toFixed(2)),
            shippingChanges:cartDetails.totalAmount===0?0:5.50
        })

    },[cartDetails])
return (
    <div className="amount-summary-container">
        <div className="title">Total Amount</div>
        <ul>
            <li><span>Amount</span> <span> $ {cartAmountSummary.totalActualAmount}</span></li>
            <li><span>Tax <i> (+Includes 3% of GST)</i></span> <span> $ {cartAmountSummary.tax}</span></li>
            <li><span>Shipping Charges </span> <span> $ {cartAmountSummary.shippingChanges}</span></li>

            <br />
            <hr /> 
            <li><span>Total Amount </span> <span> $ {
            (cartAmountSummary.totalActualAmount+cartAmountSummary.tax+cartAmountSummary.shippingChanges).toFixed(2)
            }</span></li>

        </ul>
        
    </div>
)
}
export default CartTotalSummary