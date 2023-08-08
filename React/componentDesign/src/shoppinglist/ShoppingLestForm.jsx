import { useState } from "react";
function ShoppingLestForm({addItem}){
const [form, setForm]= useState({
    product:"",
    quantity:0,
   
})
const handleChange= (evt)=>{
    
setForm(currDate=>{
   return{ ...currDate,
    // if you have q open the Form/BetterSignup
    [evt.target.name]:evt.target.value}
})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    addItem(form)
}
return(
    
   <form onSubmit={handleSubmit}>{/* you can't addItem(form) you need func */}
  
<label htmlFor="product">product Name</label>
    <input type="text" placeholder="product" name="product" id="product" onChange={handleChange} value={form.product}/>
<label htmlFor="quantity">Quantity</label>

    <input type="number" placeholder="quantity" name="quantity" id="quantity" onChange={handleChange} value={form.quantity}/>
<button>add item</button>
   </form>
)
}
export default ShoppingLestForm;