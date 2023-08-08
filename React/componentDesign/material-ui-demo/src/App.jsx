import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormDemo from './FormDemo';
function App() {
  
  return (
    <>
     <Button variant="contained" onClick={()=>alert('do you click me') } color='secondary' size='large'>Contained</Button>
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    <FormDemo/>
    </>
  )
}

export default App
