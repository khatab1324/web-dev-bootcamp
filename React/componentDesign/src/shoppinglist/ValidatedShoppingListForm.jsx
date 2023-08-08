import { useState } from "react";
function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);//this will set of the productIsValid to false 

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };
  const handleChange = (evt) => {//when you change the validate(evt.target.value); will run and update  setProductIsValid();
    if (evt.target.name === "product") {//see are the input is product
      
        validate(evt.target.value);//send this value to validate
    }

    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {//if the productIsValid is not valid the button will send nothing 
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        style={{backgroundColor:"white" ,color:"black"}}
        onChange={handleChange}
        value={formData.product}
      />
      {!productIsValid && (//here i check from productIsValid
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        style={{backgroundColor:"white" ,color:"black"}}
        onChange={handleChange}
        value={formData.quantity}
      />
      <button disabled={!productIsValid}>Add Item</button>
    </form>
  );
}

export default ValidatedShoppingListForm;
