import './RecycleUS.css'
import React from 'react'
import Box from '@mui/material/Box';





const RecycleUS = () => {

    return (
        <div className='why-recycle'>
            <div className='big-fact'>
              <Box sx={{width:'100%',alignItems:'center', justifyContent:'center'}}>
                  <p style={{color:'white'}}>
                      FACT: The U.S. offshores its plastic waste to other countries around the world instead of recycling
                  </p>
              </Box>
                
            </div>
            <div className='short-message'>
                <p style={{color:'#F1C24A'}}> The U.S. generates more plastic waste than any other nation and exporting it to other countries does not absolve us of its impact</p>
            </div>
            <div className='why-not-recycling'>
                <Box sx={{alignItems:'center'}}>
                <p style={{color:'#F1C24A'}}>
                      Why is our plastic not being recycled?
                </p>
                  <text style={{color:'white'}}>Insert Reason Here</text>
                </Box>
            </div>
            <div className='where-plastic-goes'>
                <Box>
                    <p style={{color:'#F1C24A'}}>Where Does Our plastic actually go?

                    </p>
                    <text style={{color:'white'}}>Insert Location Here</text>


                </Box>
            </div>
            <div className='waste-production-usa'>
                <p style={{color:'#F1C24A'}}> Average Waste Production in the USA</p>
                 
                <Box>
                Number of Household Plastic Recorded in the US
                </Box>
                <Box>
                Number of State Plastic Recorded in the US
                </Box>
                <Box>
                Number of Country-wide Plastic Recorded in the US 
                </Box>
            </div>
            
        </div>
    )
}

export default RecycleUS
