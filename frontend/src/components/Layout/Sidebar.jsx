import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => { 
    const menuItems = [
        { text: 'Add Flashcard', path: '/add-flashcard' },
        { text: 'Review Flashcards', path: '/review-flashcards' },
        { text: 'Category', path: '/categories' },
        { text: 'Feedback', path: '/feedback' },
    ];

    return (
        <Box 
            sx={{ bgcolor: 'grey.200',
                 height: '100vh',
                 borderRadius: "16px", 
                 p: 2 }}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        component={Link}
                        to={item.path}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;