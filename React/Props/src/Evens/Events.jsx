function handelClick(){
    console.log('hi there i love you')
}
export default function Events(){
    return <div>
        <p>click me</p>
        {/* it soooo easy rether then qurySelcter("buttom"); addeventLisner */}
        <button onClick={handelClick}>clicker</button>{/* handelClick it refrence for handelClick if you write handelClick() it will exicut it and will be like this onClick={console.log('hi there i love you')} */}
        <p onMouseOver={()=>document.body.style.backgroundColor = "red"}> don't hover</p>

    </div>
}