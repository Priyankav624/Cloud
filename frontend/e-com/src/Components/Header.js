import React from 'react'
import Card from '@mui/material/Card';

const Header = () => {
  return (
    <div>
    <div style={{ margin:"-8px",  backgroundColor:"lightgray"}}>
        <div >
            <Card>
                <div style={{backgroundColor:"white" , display: "flex", flexDirection: "row", margin:"2px", justifyContent:"space-between", fontSize:"20px"}}>
                    <div style={{display: "flex", flexDirection: "row" , alignItems:"center"}} > 
                        <div> 
                        <img style={{height: "90px", width:"90px", margin:"10px", marginLeft:"30px"}} src="https://imgs.search.brave.com/4456AxXu6O3bsEvXCKxEjJ6Bl4gwoVe8HtCiBQyBFFE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk5LzcyLzA5/LzM2MF9GXzQ5OTcy/MDk5NV9zZm1Vb1dv/bTUwa3gyNUNZY09p/WUxWeEJPc3RkYjVq/ai5qcGc" alt="clothing"></img>  
                        </div>
                        <div>
                            <h3>Cloths</h3>
                        </div>
                        
                        <div style={{marginLeft:"45px"}}>
                        <h6>TODAY DEALS</h6>
                        </div>
                        
                        <div style={{marginLeft:"25px"}}>
                            <h6> NEW COLLECTION </h6>
                        </div>
                        
                        <div style={{marginLeft:"25px"}}>
                            <h6>SELL</h6>
                        </div>
                        
                        <div style={{marginLeft:"25px"}}>
                            <h6>GIFT CARDS</h6>
                        </div>
                    </div>
                
                    <div style={{display: "flex", flexDirection: "row", alignItems:"center"}} > 
                            
                        <div style={{marginRight:"25px"}}> 
                            <form>
                                <input type='search' placeholder='search'></input>
                                <img style={{height:"12px", width:"12px", marginLeft:"-20px"}} src="https://imgs.search.brave.com/IjRsH76qRYppSUrTmQqAQW79rf8zzAwMFE5gJtFnunU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8zOTg3NzI3LTIw/MC5wbmc" alt="clothing"></img>
                            </form>
                        </div>
                            
                        <div style={{marginRight:"25px"}}> 
                            <img style={{height: "40px", width:"40px"}}src ="https://toppng.com/uploads/thumbnail/shopping-cart-11530997157xteac71ylw.png" alt="clothing"></img>
                        </div>
                            
                        <div style={{marginRight:"25px"}}> 
                            <h6> Sign In</h6>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div></div>
  )
}

export default Header