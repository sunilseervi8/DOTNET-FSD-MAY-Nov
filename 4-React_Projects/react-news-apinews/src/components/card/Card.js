import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CardDesign({ data, index }) {
  const defaultImage = "https://via.placeholder.com/345x140.png?text=No+Image"; // Placeholder image if no image URL is provided
  const cardColor = "white";
  const textColor = "#00246B";
  const [like, setLike] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/data");
        setLike(response.data);
      } catch (error) {
        console.error("Error getting data", error);
      }
    }
    getData();
  }, [like]);

  async function handleClick() {
    try {
      const existingData = like.find((item) => item.title === data.title);
      console.log("Existing data", existingData);
      if (!existingData) {
        const postData = await axios.post("http://localhost:4000/data", data);
        console.log("Post response", postData);
        // getData(); // Refresh the data after posting
      } else {
        console.log("Data already exists");
      }
    } catch (error) {
      console.error("Error posting data", error);
    }
  }

  async function handleClickDelete() {
    try {
      const itemToDelete = like.find((item) => item.title === data.title);
      if (!itemToDelete) {
        console.error("No item found with the given title");
        return;
      }

      const response = await axios.delete(`http://localhost:4000/data/${itemToDelete.id}`);
      console.log("Delete response", response);
      // getData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting data", error);
    }
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: cardColor, color: textColor }}>
      <CardMedia
        component="img"
        alt={data?.title || "No Image"}
        height="140"
        image={data?.urlToImage || defaultImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "17px", fontWeight: "bold" }}>
          {data?.title || "Title Unavailable"}
        </Typography>

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
            {"Source: " + (data?.source?.name || "Unknown")}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", mr: "10px", mb: "1rem" }}>
            {"Posted: " + (data?.publishedAt?.substring(0, 10) || "Date Unavailable")}
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: '#ADBBD9' }}>
          {data?.description ? data.description.substring(0, 100) + "..." : "Description not available."}
        </Typography>
      </CardContent>

      <CardActions>
        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between" }}>
          <Button size="small" href={data?.url || "#"} target="_blank" sx={{ color: '#7091E6' }} disabled={!data?.url}>
            Learn More
          </Button>
          <Button size="small" sx={{ color: '#7091E6' }} onClick={handleClick}>
            <ThumbUpIcon />
          </Button>
          <Button size="small" sx={{ color: '#7091E6' }} onClick={handleClickDelete}>
            <ThumbDownIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}