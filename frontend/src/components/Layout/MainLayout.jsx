import { Box } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Sidebar from './Sidebar';


const MainLayout = ({ children }) => {
    return (
        <Grid2 
            container
            sx={{ 
                minHeight: '100vh',
                margin: 0,
                width: '100%'
            }}
        >
            <Grid2 
                item 
                xs={3}
                sx={{ 
                    p: 3
                }}
            >
                <Sidebar />
            </Grid2>
            <Grid2 
                item 
                xs={9}
                sx={{ 
                    flexGrow: 1,
                }}
            
            >
                <Box
                    sx={{ 
                        width: '100%',
                        p: 3,
                    }}
                >
                    {children}
                </Box>
            </Grid2>    
        </Grid2>
    );
};

export default MainLayout;