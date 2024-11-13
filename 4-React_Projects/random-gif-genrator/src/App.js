import "./App.css";
import Box from "@mui/material/Box";
import Random from "./Components/Random";
import Tag from "./Components/tag";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="background ">
      <Box sx={{ textAlign: "center", pt: 4, pb: 2 }} >
        <Typography
          sx={{ backgroundColor: "white",fontWeight: "800", mx:4, p:1, borderRadius: 2, fontSize: 20 }} >
          Random GIF
        </Typography>
        <Box sx={{ display: "flex flex-col", width: "100%", height: "100%" }}>
          <Random />
          <Tag />
        </Box>
      </Box>
    </div>
  );
}

export default App;
