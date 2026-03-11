import { Button, Grid, Typography } from "@mui/material";
import styles from "./Section.module.css";

export default function CardSectionHeader({ title, viewMode, onToggleView, isSongs = false }) {
    return (
        <Grid item xs={12} className={styles.header} sx={{ mb: 2, display: 'flex', width: '100%' }}>
            <Typography component="span" className={styles.title}>
                {isSongs ? `${title}` : `${title} Albums`}
            </Typography>

            {!isSongs && (
                <Button
                    className={styles.collapseButton}
                    variant="text"
                    color="primary"
                    onClick={onToggleView}
                >
                    {viewMode === 'grid' ? 'Collapse' : 'Show All'}
                </Button>
            )}
        </Grid>
    );
}
