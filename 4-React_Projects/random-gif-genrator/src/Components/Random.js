import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import Spinner from './Spinner';
export default function Random() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    async function getData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        const getSource = data.data.images.downsized_large.url;
        setGif(getSource);
        setLoading(false);
    }
    
    useEffect(() => {
        getData();
    }, []);
    
    function clickHandler() {
        getData();
    }

    return (
        <div>
            <Box sx={{
                backgroundColor: "success.light",
                mt: 4, p: 2,
                borderRadius: 2,
                flexDirection: "column",
                boxShadow: "5px 5px 5px grey",
                display: "inline-block",
                height:'430px',
                width:'530px',

            }}>
                <Typography sx={{ fontWeight: "700", borderBottom: "2px solid white", display: "inline", color: "white" }}>
                    Random Gif
                </Typography>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    {loading ?<Spinner/>: <img src={gif} alt="" height={"300px"} width={"450px"} />}
                </Box>
                
                <Button variant="contained" sx={{ boxShadow: "3px 2px 2px grey", mt: 2 }} fullWidth onClick={clickHandler}>
                    Generate
                </Button>
            </Box>
        </div>
    );
}
