import { useState } from "react";
function ShoppingLestForm(){
const [form, setForm]= useState({
    product:"chess",
    quantity:0,
   
})
const handleChange= (evt)=>{
    
setForm(currDate=>{
   return{ ...currDate,
    // if you have q open the Form/BetterSignup
    [evt.target.name]:evt.target.value}
})
}
return(
    
   <form>
    <div>
        <h4>name product is :{form.product}</h4>
        <br />
        <h4>the quantity : {form.quantity}</h4>
    </div>
<label htmlFor="product">product Name</label>
    <input type="text" placeholder="product" name="product" id="product" onChange={handleChange} value={form.product}/>
<label htmlFor="quantity">Quantity</label>

    <input type="number" placeholder="quantity" name="quantity" id="quantity" onChange={handleChange} value={form.quantity}/>

   </form>
)
}
export default ShoppingLestForm;