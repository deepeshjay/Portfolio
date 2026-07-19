import { Typography } from "@mui/material";

const Footer = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log("Footer - Is Authenticated:", isAuthenticated);
  return (
    isAuthenticated && (
      <>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          align="center" 
          sx={{ mt: 4, mb: 2 }}
        >
          Footer Page
        </Typography>
      </>
    )
  );
};
export default Footer;
