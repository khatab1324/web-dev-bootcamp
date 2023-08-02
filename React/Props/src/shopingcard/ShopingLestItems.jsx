function ShopingLestItems({item,price,rating}){
    // in colt video .eslintrc tell him to props the argument and he turn off the react/prop-types but it don't shown to me if you cairuse the vidoe have number 624 
return <ul style={{display:"inline-block" ,listStyleType:"none"}}>
        <li><h2>{item}</h2></li> 
        <li> pirce:{price}</li>
        <li> {rating}⭐️</li>
     
     </ul>
}
export default ShopingLestItems;