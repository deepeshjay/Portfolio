import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleLogin = async () => {
    console.log("Login user:", userData);
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    console.log("Login response:", response.data);
    if (response.data) {
      alert(response?.data?.message);
      navigate("/home");
      localStorage.setItem("username", response?.data?.user?.username);
      localStorage.setItem("token", response?.data?.token);
    }
  }
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Login Page
      </Typography>
      <TextField 
        label="Email" 
        name="email"
        variant="outlined" 
        fullWidth 
        sx={{ mb : 2 }}
        onChange={handleChange}
      />
      <TextField 
        label="Password"
        name="password" 
        type="Password" 
        variant="outlined" 
        fullWidth 
        sx={{ mb : 2 }}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button 
        variant="text" 
        color="secondary" 
        sx={{ ml : 2 }} 
        onClick={() => navigate("/register")} >
        Register
      </Button>
    </Box>
  )
}

export default Login;