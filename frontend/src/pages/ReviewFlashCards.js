import React, { useContext, useState, useEffect } from "react";
import { getCards, getCategories } from "../services/api-flashcardy";
import { Box, Button, Card, CardContent, Select, Typography, MenuItem } from "@mui/material";
import { BackgroundContext } from '../contexts/BackgroundContext';
import CardItem from "../components/CardItem";

const ReviewFlashCards = () => {
    const background = useContext(BackgroundContext);
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la card actual

    useEffect(() => {
        getCards().then((response) => setCards(response.data.slice().reverse()));
        getCategories().then((response) => setCategories(response.data));
    }, []);

    useEffect(() => {
        if (selectedCategory === '') { // Comprobar si es string vacío
            setFilteredCards(cards); // Mostrar todas
        } else {
            const filtered = cards.filter(card => card.category === selectedCategory);
            setFilteredCards(filtered);
        }
        setCurrentIndex(0);
    }, [selectedCategory, cards]); // Añadir cards a las dependencias

    const handlePrev = () => {
        // Decrementa el índice, asegurándote de que no sea menor a 0
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNext = () => {
        // Incrementa el índice, asegurándote de que no exceda el número total de cards
        setCurrentIndex((prevIndex) =>
            prevIndex < filteredCards.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "90%",
                borderRadius: "16px",
                padding: "18px",
                paddingTop: "50px",                        
                backgroundImage: `linear-gradient(rgba(255, 253, 253, 0.820), rgba(255, 253, 253, 0.820)), url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat", 
                backgroundColor: `rgba(255, 253, 253, 0.820)`,
                overflowY: "auto",
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Review Your Cards
            </Typography>
            
            <Typography variant="subtitle1" sx={{ marginTop: "20px"}}>
                Select the category of cards you want to review
            </Typography>

            <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                displayEmpty
                sx={{ marginY: "10px" }}
            >
                <MenuItem value="">
                    <em>All Categories</em>
                </MenuItem>                
                {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.name}
                    </MenuItem>
                ))}
            </Select>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
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

                {filteredCards.length === 0 ? (
                    <Typography variant="body1" sx={{ marginX: "20px" }}>
                        No cards available to display.
                    </Typography>
                ) : (
                    <CardItem card={filteredCards[currentIndex]} />
                )}
                
                <Button
                    variant="outlined"
                    onClick={handleNext}
                    disabled={currentIndex === filteredCards.length - 1} // Deshabilitar si estamos en la última card
                >
                    {">"}
                </Button>
            </Box>
        </Box>
    );
};

export default ReviewFlashCards;