import React, { useContext, useState, useEffect } from "react";
import { getCategories } from "../services/api-flashcardy";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { BackgroundContext } from '../contexts/BackgroundContext';

const Categories = () => {
    const background = useContext(BackgroundContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then(response => setCategories(response.data));
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "100vh",
                borderRadius: "16px",
                padding: "18px",
                backgroundImage: `linear-gradient(rgba(255, 253, 253, 0.820), rgba(255, 253, 253, 0.820)), url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f5f5f6",
                overflowY: "auto",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Categories
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Here you can see all the categories
            </Typography>

            {categories.map((category) => (
                <Card
                    key={category.id}
                    sx={{
                        width: "100%",
                        marginTop: "20px",
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            {category.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

        </Box>
    );
};

export default Categories;