import styles from './Section.module.css';
import {Grid}  from '@mui/material';
import CardSectionHeader from '../Section/SectionHeader.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionGrid from './SectionGrid.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import { useState } from 'react';

function Section({ title, albums , isSongs = false , data, genres}) {
  const [viewMode, setViewMode] = useState('carousel'); // 'grid' or 'carousel'

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'carousel' ? 'grid' : 'carousel'));
  };

  return (
    <Grid container spacing={4} className={styles.container}>
      <CardSectionHeader 
        title={title} 
        viewMode={viewMode} 
        onToggleView={toggleViewMode}
        isSongs={isSongs}
      />
      
      {viewMode === 'grid' ? (
        <SectionGrid albums={albums} />
      ) : (
        <Carousel albums={albums} songs={isSongs} data={data} genres={genres} />
      )}
    </Grid>
  );
}

export default Section;

