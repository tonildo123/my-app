
import { Paper, Typography } from '@mui/material';

const WelcomeComponent = () => {
    return (
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" gutterBottom>
                Bienvenido
            </Typography>
            <Typography variant="h4" gutterBottom>
                a Dulceria
            </Typography>
        </Paper>
    )
}

export default WelcomeComponent