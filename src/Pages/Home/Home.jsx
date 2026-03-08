
import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Box } from '@mui/material';
import endpoint from '../../Api/endpoint';

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${endpoint}/albums/top`)
            .then(res => res.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching albums:', err);
                setLoading(false);
            });

        fetch(`${endpoint}/albums/new`)
            .then(res => res.json())
            .then(data => {
                setNewAlbums(data);
            })
            .catch(err => {
                console.error('Error fetching new albums:', err);
            });
    }, []);
    
    return (
        <Box sx={{ 
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'black'
        }}>
            <Hero />
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4, color: 'white' }}>Loading...</Box>
            ) : (
                <>
                    <Section title="Top Albums" albums={albums} />
                    <br />
                    <Section title="New Albums" albums={newAlbums} />
                </>
            )}
        </Box>
    );
}

export default Home;


