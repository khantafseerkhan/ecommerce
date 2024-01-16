
export const getAllProducts=async ()=>{
   return await fetch(`https://fakestoreapi.com/products`).then(res=>{
         return res.json();
    }).catch(error=>{
        return error;
    })
}
export const getProductById=async (id)=>{
    return await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>{
        return res.json();
   }).catch(error=>{
       return error;
   })
}
export const getCategoriesList=async ()=>{
    return await fetch(`https://fakestoreapi.com/products/categories`).then(res=>{
         return res.json();
    }).catch(error=>{
        return error;
    })
}