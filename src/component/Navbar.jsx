import {AppBar, Toolbar, Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
        <Button color="inherit" onClick={() => navigate("/skills")}>Skills</Button>
        <Button color="inherit" onClick={() => navigate("/projects")}>Projects</Button>
        <Button color="inherit" onClick={() => navigate("/contacts")}>Contacts</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
