import colordata from "../colordata.js"
function Displaycolorcomponent(){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {
                colordata.map(color => {
                    return(
                        <div style={{
                        width:"100px", 
                        height:"60px",
                        backgroundColor:color,
                        borderRadius:"30px"
                        }}></div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Displaycolorcomponent