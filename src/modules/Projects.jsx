import { Container, Grid, Paper, Typography } from "@mui/material";

const Projects = () => {
  const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" }
  ];
  return (
    <Container sx={{ textAlign: "center", mt : 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper sx={{ padding: 2, textAlign: "center"}}>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>  
    </Container>
  )
};
export default Projects;
