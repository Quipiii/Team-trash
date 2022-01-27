import './DonatePage.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


import '../../App.css';




const DonatePage=()=> {
   
  
    return (
      <main id="content">
        {/* <section className='donate-container'> */}
          <section className='donate-section'>
            <Box sx={{bgcolor: 'white', width: '37vw', height: '40vh', maxHeight: '700px', display:'flex', borderRadius: '10px'}}>
              <div className='image'></div>

              <Box sx={{width: '40%', margin: 'auto'}}>
                <Box sx={{display: 'grid', gap: '1rem'}}>
                    <Box sx={{display: 'flex', gap:'5px',width: '100%',height: '4vh',bgcolor:'#F2EFEF',borderRadius:'10px', alignItems: 'center', justifyContent: 'right'}}>
                          <p className='v-align' style={{paddingLeft:'1rem', color: '#000'}}>
                            Donated Before?
                          </p>
                          <p style={{paddingRight:'1rem', color: 'var(--component-color)'}}>Login</p>
                    </Box>
                      
                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',gridTemplateRows: 'repeat(2, 1fr)',gap:'0.5rem',borderRadius:'10px'}}>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$25</Button>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$50</Button>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$100</Button>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$250</Button>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$500</Button>
                      <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$1000</Button>
                    </Box>
                    <Box sx={{width: '100%',height: '4vh', bgcolor:'#F2EFEF', borderRadius:'10px', display: 'flex',  alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{color: 'black'}}>
                          Other Amount
                        </p>
                    </Box>
                    <Box>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Make This A Monthly Donation" />
                      </FormGroup>
                    </Box>
                    <Box><Button variant="contained" className='donate-button' style={{width:'100%',backgroundColor:'#17463D'}}>Donate</Button></Box>
                </Box>
              </Box>

            </Box>
          </section>
        {/* </section> */}
      </main>  
    );
  }
   export default DonatePage