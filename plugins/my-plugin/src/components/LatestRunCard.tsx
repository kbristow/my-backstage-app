import {InfoCard, InfoCardVariants, StatusWarning,} from '@backstage/core';
import React from 'react';


export const LatestRunCard = ({
                                  variant,
                              }: {
    variant?: InfoCardVariants;
}) => {
    return (
        <InfoCard title="Latest build" variant={variant}>
            <StatusWarning>Warning</StatusWarning>
        </InfoCard>
    );
};
