import { useState } from "react"
import ShoppingLestForm from "./ShoppingLestForm"
import { v4 as uuid } from "uuid"//as => it just rename it
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"
export default function ShoppingLest(){
const [items,setItem]=useState([
    {id:uuid(),product:"Manga",quantity:9,},
    {id:uuid(),product:"banana",quantity:8}
])
const addItem=(item)=>{
    setItem(currItem=>{
        return[
    ...currItem,
    {...item,id:uuid()}//this value will add to currItem that will come from shoppingLestForm
        ]
    })

}
    return (
        <div>
            <h1>shopping lest</h1>
            <ul>
                {items.map((i)=><li key={i.id}>product: {i.product} - quantity :{i.quantity}</li>)}
            </ul>
            <ul>
            <ValidatedShoppingListForm addItem={addItem}/>
            </ul>
        </div>
    )
}