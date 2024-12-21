import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardItem = ({ card }) => {
    return (
        <Card
            sx={{
                width: "300px",
                height: "500px",
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
                    {card.name_category}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {card.questionCard}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        marginTop: "16px",
                        color: "#17a2b8",
                        fontStyle: "italic",
                    }}
                >
                    {card.answerCard}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardItem;