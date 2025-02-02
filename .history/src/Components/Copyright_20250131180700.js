import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://manipal.edu/">
        MAHE
      </Link>
      . All rights reserved.
    </Typography>
  );
};

export default Copyright;
