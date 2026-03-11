import { Grid, Typography , Divider } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Box } from "@mui/system";

export default function SectionGrid({ albums }) {
    //   const navigate = useNavigate();

    if (!albums) return null;

    return (
        <Box>
            <Grid container spacing={3}>
            {albums.map((album) => (
                <Grid
                    item
                    className={styles.cardContainer}
                    sx={(theme) => ({
                        [theme.breakpoints.down(320)]: { width: "100%" },
                        [theme.breakpoints.between(321, 425)]: { width: "50%" },
                        [theme.breakpoints.between(426, 667)]: { width: "33%" },
                        [theme.breakpoints.between(668, 799)]: { width: "25%" },
                        [theme.breakpoints.between(800, 1023)]: { width: "20%" },
                        [theme.breakpoints.between(1024, 1439)]: { width: "16.66%" },
                        [theme.breakpoints.between(1440, 1639)]: { width: "14.28%" },
                        [theme.breakpoints.up(1640)]: { width: "12.5%" },
                        py: 2,
                    })}
                >
                    <Card album={album} />
                    <Typography className={styles.cardTitle} component="span">
                        {album.title}
                    </Typography>
                </Grid>
            ))}
            
        </Grid>
        <Divider className={styles.divider} />
        </Box>
    );
}
