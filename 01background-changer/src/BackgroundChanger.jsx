import { useState } from "react";

function BackgroundChanger(){
    const [color, setColor] = useState("steelblue");
    return(
        <div className="fullBody" style={{backgroundColor:color}}>
            <div className="container" >
                <div className="color-options">
                    <button onClick={()=>setColor("red")} style={{backgroundColor:"red" , color:"white"}}>Red</button>
                    <button onClick={()=>setColor("green")} style={{backgroundColor:"green", color:"white"}}>Green</button>
                    <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue", color:"white"}}>Blue</button>
                    <button onClick={()=>setColor("olive")} style={{backgroundColor:"olive", color:"white"}}>Olive</button>
                    <button onClick={()=>setColor("gray")} style={{backgroundColor:"gray", color:"white"}}>Gray</button>
                    <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow", color:"black"}}>Yellow</button>
                    <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink", color:"white"}}>Pink</button>
                    <button onClick={()=>setColor("purple")} style={{backgroundColor:"purple", color:"white"}}>Purple</button>
                    <button onClick={()=>setColor("lavender")} style={{backgroundColor:"lavender", color:"black"}}>Lavender</button>
                    <button onClick={()=>setColor("white")} style={{backgroundColor:"white", color:"black"}}>White</button>
                    <button onClick={()=>setColor("black")} style={{backgroundColor:"black", color:"white"}}>Black</button>
                </div>
            </div>
        </div>
    )
   
}

export default BackgroundChanger