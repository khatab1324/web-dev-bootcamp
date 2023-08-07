import { useState } from "react";
function BetterSignupForm() {
  const [formData, setFormData] = useState({//look for that rether than write 3 state I make a state have obj
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;//this will give you [firstName or lastName or password] it debend on who is change//this will look for the name that in evt that inside onChange 
    const newValue = evt.target.value;//this the value what the user write inside the input
    setFormData((currData) => {
      return {
        ...currData,
        // the computed value you can search on it or 659 //its take the value of somthing and evalute it like this
        // mystry =" cheken" ; [mystry]="Eggs" this will give us  cheken = Eggs
        [changedField]: newValue,//update the field to this value//changeField will evalute by "firstName"or"lastName"or "password"
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}//the value in formDate
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
