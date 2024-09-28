// src/pages/Home.js
import React from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          // backgroundColor: "#e0f7fa",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Join the Conversation
        </Typography>
        <Typography variant="h6" gutterBottom>
          Engage in meaningful discussions with people from all over the world.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Join Now
        </Button>

        <Box sx={{ my: 5 }}>
          <Typography variant="body1">
            We bring together people passionate about various topics to share
            their thoughts, learn, and grow.
          </Typography>
          <Typography variant="h5">Why Join?</Typography>
          <Typography variant="body1">
            - Free access to discussions
            <br />
            - Engage in a diverse set of topics
            <br />- Be part of a growing community
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
