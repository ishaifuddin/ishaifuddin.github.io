import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';


function ProductFilter({productnid}) {

    var product_name_id = productnid;
    var nid  = product_name_id.split("_SHOPEX_");
    var name = nid[1];
    var id   = nid[0];

    //console.log(nid);

    var [first_order_before, setfirst_order_before] = useState(false);
    var [first_order_after, setfirst_order_after] = useState(true);
    var [first_order_between, setfirst_order_between] = useState(false);

    var handleChange = e => {

        setfirst_order_between(false);
        setfirst_order_after(false);
        setfirst_order_before(false);

        if(e === 'first_order_between') setfirst_order_between(true);
        if(e === 'first_order_before') setfirst_order_before(true);
        if(e === 'first_order_after') setfirst_order_after(true);
    }

    const options = [
        { value: 'first_order_before', label: 'Over' },
        { value: 'first_order_after', label: 'In the past' },
        { value: 'first_order_between', label: 'In-Between' },
    ];

    
    ////
    var [last_order_before, setlast_order_before] = useState(false);
    var [last_order_after, setlast_order_after] = useState(true);
    var [last_order_between, setlast_order_between] = useState(false);

    var handleChange1 = e => {

        setlast_order_between(false);
        setlast_order_after(false);
        setlast_order_before(false);

        if(e === 'last_order_between') setlast_order_between(true);
        if(e === 'last_order_before') setlast_order_before(true);
        if(e === 'last_order_after') setlast_order_after(true);
    }

    const options1 = [
        { value: 'last_order_before', label: 'Over' },
        { value: 'last_order_after', label: 'In the past' },
        { value: 'last_order_between', label: 'In-Between' },
    ];

    return (

        <>
        
            <div style={{background:'aliceblue'}}>

                <div style={{fontSize:'large',margin: '16px 0px 0px 14px', color:'tomato'}}>
                    <p> {name} </p>
                </div>

                <div style={{display:'inline-grid',margin:'15px'}}>
                    
                    <strong> Last-Buy  </strong>
                    
                    <Grid>

                        <Grid.Col span={8} style={{display:'inline-grid'}}>
                            

                            <Select
                                placeholder="In the past"
                                defaultValue={'last_order_after'}
                                onChange={(e)=>{handleChange1(e.value)}}
                                options={options1}
                            />

                            { last_order_after && 

                                <>
                                    <div style={{display:'inline-grid'}}>  
                                    
                                        <input type="number" name={"lp_itp"+id} style={{marginTop:'7px'}} />   
                                        
                                        <div style={{display:'inline-flex'}}> 
                                        
                                            <label>  D    <input  type="radio" name={"lpunit"+id} value="day"/> </label>  
                                            <label>  W    <input  type="radio" name={"lpunit"+id} value="week"/> </label>  
                                            <label>  M    <input  type="radio" name={"lpunit"+id} value="month"/>  </label>  
                                            
                                        </div>

                                    </div>
                                </>
                            }

                            { last_order_before && 

                                <>
                                    <div style={{display:'inline-grid'}}>  

                                        <input type="number" name={"lp_over"+id} style={{marginTop:'7px'}}/>   
                                        
                                        <div style={{display:'inline-flex'}}> 
                                        <label>  D <input  type="radio" name={"lpunit"+id} value="day"/> </label>  
                                        <label>  W <input  type="radio" name={"lpunit"+id} value="week"/> </label>  
                                        <label>  M <input  type="radio" name={"lpunit"+id} value="month"/>  </label> 
                                        </div>
                                        
                                        <strong >Ago</strong> 

                                    </div> 
                                </>
                            }

                            { last_order_between && 

                                <>
                                    <div style={{display:'inline-grid'}}>  

                                        <input type="number" name={"lp_from"+id}/>    
                                        
                                        <input type="number" name={"lp_to"+id}/>  

                                        <div style={{display:'inline-flex'}}> 
                                            <label>D<input  type="radio" name={"lpunit"+id} value="day"/></label>  
                                            <label>W<input  type="radio" name={"lpunit"+id} value="week"/></label>  
                                            <label>M<input  type="radio" name={"lpunit"+id} value="month"/></label>  
                                        </div>

                                        <strong>Ago</strong>  
                                    </div> 
                                </>
                            }

                            <div style={{display:'inline-flex'}}> 
                                <label> AND <input type="radio" name={"fpandor"+id} value="and"/> </label>  
                                <label> OR <input type="radio" name={"fpandor"+id} value="or"/> </label>  
                            </div> 

                        </Grid.Col>

                    </Grid>
                    
                </div>



                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong> First-Buy	  </strong>
                    
                    <Grid>

                        <Grid.Col span={8} style={{display:'inline-grid'}}>
                            
                            <Select
                                placeholder="In the past"
                                defaultValue={'first_order_after'}
                                onChange={(e)=>{handleChange(e.value)}}
                                options={options}
                            />

                            { first_order_after && 

                            <>
                                <div style={{display:'inline-grid'}}>  
                                
                                    <input style={{marginTop:'7px'}} type="number" name={"fp_itp"+id} />   

                                    <div style={{display:'inline-flex'}}> 
                                        <label>  D    <input type="radio" name={"fpunit"+id} value="day"/> </label>  
                                        <label>  W    <input type="radio" name={"fpunit"+id} value="week"/> </label>  
                                        <label>  M    <input type="radio" name={"fpunit"+id} value="month"/>  </label>  
                                    </div>
                                </div>
                            </>
                            }

                            { first_order_before && 

                            <>
                                <div style={{display:'inline-grid'}}>  

                                    <input type="number" name={"fp_over"+id} style={{marginTop:'7px'}} />   
                                    
                                    <div style={{display:'inline-flex'}}> 
                                        <label>  D  <input type="radio" name={"fpunit"+id} value="day"/>    </label>  
                                        <label>  W  <input type="radio" name={"fpunit"+id} value="week"/>   </label>  
                                        <label>  M  <input type="radio" name={"fpunit"+id} value="month"/>  </label>  
                                    </div>
                                    <strong>Ago</strong> 
                                </div> 
                            </>
                            }

                            { first_order_between && 

                            <>
                                <div style={{display:'inline-grid'}}>  

                                    <input type="number" name={"fp_from"+id} />    
                                    <input type="number" name={"fp_to"+id}  />  

                                    <div style={{display:'inline-flex'}}> 
                                    <label> D <input type="radio" name={"fpunit"+id} value="day"/> </label>  
                                    <label> W <input type="radio" name={"fpunit"+id} value="week"/> </label>  
                                    <label> M <input type="radio" name={"fpunit"+id} value="month"/> </label>
                                    </div> 

                                    <strong>Ago</strong>  
                                </div> 
                            </>
                            }

                            <div style={{display:'inline-flex'}}> 
                                <label> AND <input type="radio" name={"lpandor"+id} value="and"/> </label>  
                                <label> OR <input type="radio" name={"lpandor"+id} value="or"/> </label>  
                            </div> 

                        </Grid.Col>

                    </Grid>

                </div>





                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong> Spend  </strong>
                    <input type="number" name={"spend_min" + id} placeholder="Min"/>
                    <input type="number" name={"spend_max" + id} placeholder="Max"/>

                    <div style={{display:'inline-flex'}}> 
                        <label> AND <input type="radio" name={"spendandor"+id} value="and"/> </label>  
                        <label> OR <input type="radio" name={"spendandor"+id} value="or"/> </label>  
                    </div> 
                </div>
               
    




                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong> profit  </strong>
                    <input type="number" name={"profit_min"+id}  placeholder="Min"/>
                    <input type="number" name={"profit_max"+id}  placeholder="Max"/>

                    <div style={{display:'inline-flex'}}> 
                        <label> AND <input type="radio" name={"profit_andor"+id}  value="and"/> </label>  
                        <label> OR <input  type="radio" name={"profit_andor"+id}  value="or"/> </label>  
                    </div> 
                </div>
               


                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong> Unit-bought	  </strong>
                    <input type="number" name={"unit_min"+id}  placeholder="Min"/>
                    <input type="number" name={"unit_max"+id}  placeholder="Max"/>


                    <div style={{display:'inline-flex'}}> 
                        <label> AND <input type="radio" name={"unitandor"+id} value="and"/> </label>  
                        <label> OR <input type="radio" name={"unitandor"+id} value="or"/> </label>  
                    </div> 

                </div>
                



                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong> Total-order	  </strong>
                    <input type="number" name={"order_min"+id}  placeholder="Min"/>
                    <input type="number" name={"order_max"+id}  placeholder="Max"/>

                    <div style={{display:'inline-flex'}}> 
                        <label> AND <input type="radio" name={"orderandor"+id} value="and"/> </label>  
                        <label> OR <input type="radio" name={"orderandor"+id} value="or"/> </label>  
                    </div> 
                </div>
                



                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong>  On-Discount-order	  </strong>
                    <input type="number" name={"ondis_min"+id}  placeholder="Min"/>
                    <input type="number" name={"ondis_max"+id}  placeholder="Max"/>

                    <div style={{display:'inline-flex'}}> 
                        <label> AND <input type="radio" name={"ondisandor"+id} value="and"/> </label>  
                        <label> OR <input type="radio" name={"ondisandor"+id} value="or"/> </label>  
                    </div> 
                </div>
               

                <div style={{display:'inline-grid',margin:'15px'}}>
                    <strong>  Avg-Buy-Gap[day]  </strong>
                    <input type="number" name={"atg_min"+id}  placeholder="Min"/>
                    <input type="number" name={"atg_max"+id}  placeholder="Max"/>
                </div>
            </div>

        </>
    )
}

export default ProductFilter