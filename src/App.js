import './App.css';
import {useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";


function App() {

  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    enail: 'randomname@gmail.com',
    location: 'seattle'
  })

  const [formData, setFromData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  })

  const handleChange = e => {
    setFromData({...formData})
  }
  return (
    <div className="App">
      <Box>
        <Paper>
          <form>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="location"
              label="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <Button type="submit"> Submit </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
