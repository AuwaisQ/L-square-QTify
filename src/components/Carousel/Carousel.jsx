import { useState} from 'react';
import CardSwiper from '../Carousel/CardSwiper.jsx';
import { Grid } from '@mui/material';
import SongsSection from '../Carousel/SongSection.jsx';


function Carousel({ albums, songs = false, data, genres }) {
  const [value, setValue] = useState("all");
  return (
    <Grid item xs={12}>
      {!songs && (CardSwiper({ albums, isSong: false }))}
      {songs && (
        <SongsSection
          value={value}
          setValue={setValue}
          data={data}
          genres={genres}
          isSong={true}
        />
      )}
    </Grid>
  );
}

export default Carousel;