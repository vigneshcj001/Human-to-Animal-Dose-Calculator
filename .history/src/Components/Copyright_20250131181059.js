import React from "react";
import { Typography, Link } from "@mui/material";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    © {new Date().getFullYear()}{" "}
    <Link color="inherit" href="https://www.manipal.edu/mcops-manipal.html">
      MCOPS
    </Link>
    . All rights reserved.
  </Typography>
);

export default Copyright;
