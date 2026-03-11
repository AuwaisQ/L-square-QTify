import Chip from '@mui/material/Chip';
import styles from './Card.module.css';
import { Box } from "@mui/material";

export default function MediaCard({ album, isSong = false }) {
  return (
    <Box className={styles.container}>
      <Box className={styles["img-container"]}>
        <Box component="img" src={album.image} alt="bird" className={styles.img} />
      </Box>

      <Box className={styles["chip-container"]}>
        <Chip
          label={isSong ? `${album.likes} Likes` : `${album.follows} Follows`}
          style={{
            backgroundColor: "var(--color-black)",
            color: "white",
            fontSize: "12px",
            fontFamily: "Poppins"
          }}
        />
        
      </Box>
    </Box>
  );
}

