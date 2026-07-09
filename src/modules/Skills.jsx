import { Container, Grid, Paper, Typography } from "@mui/material";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "C", "Python", "SQL"];
  return (
    <Container sx={{ textAlign: "center", mt : 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper sx={{ padding: 2, textAlign: "center"}}>{skill}</Paper>
          </Grid>
        ))}
      </Grid>  
    </Container>
  )
};
export default Skills;
