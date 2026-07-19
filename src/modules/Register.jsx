import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }
  const handleRegister = async () => {
    console.log("Registering user:", userData);
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    console.log("Registration response:", response.data);
    alert(response?.data?.message);
    navigate("/");
  }
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Register Page
      </Typography>
      <TextField
       label="Username" 
       name="username" 
       variant="outlined" 
       fullWidth 
       sx={{ mb : 2 }}
       value={userData?.username}
       onChange={handleChange}
      />
      <TextField
       label="Email" 
       name="email" 
       variant="outlined" 
       fullWidth 
       sx={{ mb : 2 }}
       value={userData?.email}
       onChange={handleChange}
      />
      <TextField
       label="Password" 
       name="password"
       type="password" 
       variant="outlined" 
       fullWidth 
       sx={{ mb : 2 }}
       value={userData?.password}
       onChange={handleChange} 
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
      <Button 
        variant="text" 
        color="secondary" 
        sx={{ ml : 2 }} 
        onClick={() => navigate("/")}
      >
        Login
      </Button>
    </Box>
  )
}

export default Register;
