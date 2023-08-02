import ShopingLestItems from "./ShopingLestItems";

export default function Shopinglest({items}){
    return <div>
        {/* Note: I don't get each child in a list should have uniqe "key" prop err the number video 620  and that for the item should have uniqe Id and that becuase .eslintrc.cjs that expact thing you should add it  but i will put it just to follow colt code*/}
        {items.map(i=>
            <ShopingLestItems key={i.id} {...i}/>
            // {...i} its the same of item={i.item} quantity={i.quantity} completed={i.completed}
            )}
    
    </div>
}