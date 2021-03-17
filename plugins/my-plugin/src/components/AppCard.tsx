import {InfoCard, InfoCardVariants, Progress} from '@backstage/core';
import React from 'react';
import {useEntity} from "@backstage/plugin-catalog-react";
import {MY_PLUGIN_ANNOTATION} from "../constants";
import {Field} from "./Field";
import {Typography, Grid} from "@material-ui/core";
import {useApplicationDetails} from "./useApplicationDetails";
import {Alert} from "@material-ui/lab";


export const AppCard = ({
                                  variant,
                              }: {
    variant?: InfoCardVariants;
}) => {
    const entity = useEntity();
    const id = entity.entity.metadata.annotations?.[MY_PLUGIN_ANNOTATION]
    const { value, loading, error } = useApplicationDetails(id!);

    return (
        <InfoCard title="Subatomic Application" variant={variant}>
            {
                loading && (
                    <Progress />
                    )
            }
            {
                error && (
                    <Alert severity="error">{error.message}</Alert>
                )
            }
            {
                value && (
                    <Grid container>
                        <Field label="ID" gridSizes={{ xs: 12, sm: 6, lg: 4 }}>
                            <Typography>
                                {id}
                            </Typography>
                        </Field>
                        <Field label="Name" gridSizes={{ xs: 12, sm: 12, lg: 12 }}>
                            <Typography>
                                {value.name}
                            </Typography>
                        </Field>
                        <Field label="Type" gridSizes={{ xs: 12, sm: 6, lg: 4 }}>
                            <Typography>
                                {value.applicationType}
                            </Typography>
                        </Field>
                    </Grid>
                )
            }
        </InfoCard>
    );
};
