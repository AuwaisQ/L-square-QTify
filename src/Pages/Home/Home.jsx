
import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Box , Divider } from '@mui/material';
import endpoint from '../../Api/endpoint';
import styles from '../Home/Home.module.css';

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
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

        fetch(`${endpoint}/songs`)
            .then(res => res.json())
            .then(data => {
                setSongs(data);
            })
            .catch(err => {
                console.error('Error fetching songs:', err);
            });

        fetch(`${endpoint}/genres`)
            .then(res => res.json())
            .then(data => {
                setGenres(data.data);
            })
            .catch(err => {
                console.error('Error fetching genres:', err);
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
                    <Section title="Top" albums={albums} />
                    <br />
                    <Section title="New" albums={newAlbums} />
                    <br />
                    <Divider className={styles.divider} />
                    <br />
                    <Section title="Songs" albums={newAlbums} isSongs={true} data={songs} genres={genres} />
                </>
            )}
        </Box>
    );
}

export default Home;


