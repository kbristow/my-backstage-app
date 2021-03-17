import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    value: {
        fontWeight: 'bold',
        overflow: 'hidden',
        lineHeight: '24px',
        wordBreak: 'break-word',
    },
    label: {
        color: theme.palette.text.secondary,
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
}));

type Props = {
    label: string;
    value?: string;
    gridSizes?: Record<string, number>;
    children?: React.ReactNode;
};

export const Field = ({ label, value, gridSizes, children }: Props) => {
    const classes = useStyles();

    // Content is either children or a string prop `value`
    const content = React.Children.count(children) ? (
        children
    ) : (
        <Typography variant="body2" className={classes.value}>
            {value || `unknown`}
        </Typography>
    );
    return (
        <Grid item {...gridSizes}>
            <Typography variant="subtitle2" className={classes.label}>
                {label}
            </Typography>
            {content}
        </Grid>
    );
};
