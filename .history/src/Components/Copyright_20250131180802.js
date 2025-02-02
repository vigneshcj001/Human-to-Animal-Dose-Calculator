import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://www.manipal.edu/mcops-manipal.html">
        MAHE
      </Link>
      . All rights reserved.
    </Typography>
  );
};

export default Copyright;
