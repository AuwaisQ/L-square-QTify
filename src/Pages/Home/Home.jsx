import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Hero from '../../components/Hero/Hero';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Hero />
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <Button variant="contained" onClick={() => navigate('/albums')}>
                Go to Albums
            </Button>
        </div>
    );
}

export default Home;
