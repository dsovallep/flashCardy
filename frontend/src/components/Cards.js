import React, { useState, useEffect } from "react";
import { getCards } from "../services/api-flashcardy";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la card actual

    useEffect(() => {
        getCards().then((response) => setCards(response.data));
    }, []);

    const handlePrev = () => {
        // Decrementa el índice, asegurándote de que no sea menor a 0
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNext = () => {
        // Incrementa el índice, asegurándote de que no exceda el número total de cards
        setCurrentIndex((prevIndex) =>
            prevIndex < cards.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "top",
                height: "100vh",
                padding: "20px",
                backgroundColor: "#f5f5f5",
                overflowY: "auto",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Review Your Cards
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Here you can review your Cards
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "600px",
                    marginTop: "20px",
                }}
            >
                {/* Botón de anterior */}
                <Button
                    variant="outlined"
                    onClick={handlePrev}
                    disabled={currentIndex === 0} // Deshabilitar si estamos en la primera card
                >
                    {"<"}
                </Button>

                {/* Mostrar solo la card activa */}
                {cards.length === 0 ? (
                    <Typography variant="body1" sx={{ marginX: "20px" }}>
                        No cards available to display.
                    </Typography>
                ) : (
                    <Card
                        key={cards[currentIndex].id}
                        sx={{
                            width: "300px",
                            borderRadius: "16px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            textAlign: "center",
                            marginX: "20px",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#6c757d",
                                    marginBottom: "8px",
                                }}
                            >
                                {cards[currentIndex].name_category}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {cards[currentIndex].questionCard}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    marginTop: "16px",
                                    color: "#17a2b8",
                                    fontStyle: "italic",
                                }}
                            >
                                {cards[currentIndex].answerCard}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Botón de siguiente */}
                <Button
                    variant="outlined"
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 1} // Deshabilitar si estamos en la última card
                >
                    {">"}
                </Button>
            </Box>
        </Box>
    );
};

export default Cards;