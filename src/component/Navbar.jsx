import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  console.log("Navbar - Is Authenticated:", isAuthenticated);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    isAuthenticated && (
      <> 
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            <Button color="inherit" onClick={() => navigate("/home")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button color="inherit" onClick={() => navigate("/skills")}>
              Skills
            </Button>
            <Button color="inherit" onClick={() => navigate("/projects")}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => navigate("/contacts")}>
              Contacts
            </Button>
            <Button color="inherit" onClick={() => navigate("/Users")}>
              users
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </>
    )
  );
};
export default Navbar;
