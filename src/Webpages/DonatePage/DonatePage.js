import './DonatePage.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Nav from '../../components/Nav/Nav';
// import NavRoutes from '../../components/NavRoutes/NavRoutes';




const DonatePage=()=> {
   
  
    return (
      <div className='donate-container'>
        {/* <Nav/>
        <NavRoutes/> */}
        <div className='donate-section'>
          <div className='image'>
            
          </div>
          <Box sx={{width: '50%', display:'flex',alignItems:'center', justifyContent:'center',}}>

            <Box sx={{display:'grid',gap:'1rem'}}>
                <Box sx={{width: '100%',bgcolor:'#F2EFEF',textAlign:'right',borderRadius:'10px'}}>
                      <p className='v-align' style={{paddingRight:'1rem'}}>
                        Donated Before? Login
                      </p>
                </Box>
                  
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',gridTemplateRows: 'repeat(2, 1fr)',gap:'0.5rem',borderRadius:'10px'}}>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$25</Button>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$50</Button>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$100</Button>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$250</Button>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$500</Button>
                  <Button variant='contained' style={{backgroundColor:'#4D774E'}}>$1000</Button>


                </Box>
                <Box sx={{width: '100%',bgcolor:'#F2EFEF', borderRadius:'10px'}}>
                    <p className='center-vertical-align'>
                      Other Amount
                    </p>
                </Box>
                <Box>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Make This A Monthly Donation" />
                    
                  </FormGroup>
                </Box>
                <Box>
                  <Button variant="contained" className='donate-button' style={{width:'100%',backgroundColor:'#17463D'}}>Donate</Button>
                
                </Box>

            </Box>
              

              
        



          </Box>

        </div>
        




      </div>    
    );
  }
   export default DonatePage