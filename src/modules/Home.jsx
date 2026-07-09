import { Button, Container, Grid, Typography } from "@mui/material";
import avatar from "../assets/image.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Hi, I'm Deepesh J, a Full Stack Developer.
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
