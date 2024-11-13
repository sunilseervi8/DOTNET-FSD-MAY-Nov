import { Box, Container } from "@mui/material";
import Card from "../card/Card";
import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Cards({ apiData }) {
    console.log(apiData);
    return (
      <Container sx={{
          mt:"1rem"
      }}>
        <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          { apiData.urlToImage!==""?(

          apiData.map((data, index) => {
            return (
              <Grid item 
                lg={2} xs={12} key={index} 
              >
                <Card data={data} />
              </Grid>
            );
          })):(<h1>no data</h1>)}
        </Grid>
      </Container>
    );
  }

  export default Cards;
