import { Button, Container, Grid, Typography } from "@mui/material";
import avatar from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log("BASE_URL :::", BASE_URL);

  useEffect(() => {
    axios.get(`${BASE_URL}/user`).then((response) => {
      console.log(response.data);
    });
  }, []);

  const username = localStorage.getItem("username");
  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Grid container justifycontent="center" sx={{ mb: 4 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Hi, I'm {username}, a Full Stack Developer.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 3 }} 
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <img
            src={avatar}
            alt="Deepesh J"
            style={{ width: 200, height: 200, borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </Container>
  )
};
export default Home;
