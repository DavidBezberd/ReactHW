import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { ICarts } from "../../models/ICarts";
import type { ICartsResponseModel } from "../../models/ICartsResponseModel";
import { cartService } from "../../service/api-service";

export const CartsComponent = () =>{
    const [carts, setCarts] = useState<ICarts[]>([]);
    const {id} = useParams();
    useEffect(() =>{
        if (id){
      cartService.getAllCarts(id)
       .then(({carts}:ICartsResponseModel) =>{
             setCarts(carts);
       })}
    }, [id]);
    return(
        <div>
            {carts.map((cart:ICarts) => <div className='david' key={cart.id}>{cart.total}</div>)}
        </div>
    )
}