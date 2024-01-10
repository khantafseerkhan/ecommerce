import { DeleteTwoTone } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const CartList = () => {
    const cartDetails = useSelector((state) => state.cart.cartDetails);
    const [bulkQuantities,setBulkQuantities]=useState({});
    useEffect(()=>{
        if(cartDetails.lineItems.length>0){
            let obj={};
            cartDetails.lineItems.forEach(element=>{
                obj["quantity"+element.id]=element.id
            })
            setBulkQuantities(obj);
        }

    },[cartDetails])
    return (
        <>
            {
                cartDetails.lineItems.length > 0 ?
                    (
                        <div>


                            <Grid container xs={8} spacing={2}>
                                <Grid item xs={12} spacing={2}>

                                    {

                                        cartDetails.lineItems.map(element => {
                                           return (
                                            <Grid container xs={12} sx={{mb:5}} spacing={2} className="cart-list">

                                            <Grid item xs={3}  >
                                                <img src={element.image} className="cart-list-img"/>
                                            </Grid>
                                            <Grid item xs={7} className="cart-list-content">
                                            <div className="product-title">{element.title}</div>
                                    <div className="product-pricing">{element.price}</div>
                                            </Grid>

                                            <Grid item xs={12} className="cart-list-footer">
                                             <div className="cart-list-action-container">
                                             <div className={"quantity-container"}> 
                                        <div className="quatity-button" onClick={()=>setBulkQuantities({...bulkQuantities,["quantity"+element.id]:bulkQuantities["quantity"+element.id]+1})}>+</div>
                                        <div className="quantity-input" o>
                                            <input type="number" value={bulkQuantities["quantity"+element.id]} />
                                        </div>
                                        <div className="quatity-button" onClick={()=>bulkQuantities["quantity"+element.id]>1?setBulkQuantities({...bulkQuantities,["quantity"+element.id]:bulkQuantities["quantity"+element.id]-1}):''}>-</div>

                                    </div> 
                                    <div>
                                        <DeleteTwoTone /> <span>Remove</span>
                                    </div>
                                             </div>
                                            </Grid>
                                        </Grid>
                                           )
                                        })


                                    }



                                </Grid>
                            </Grid>



                        </div >
                    )
                    :
                    (
                        <div></div>
                    )
            }

        </>

    )
}

export default CartList;
