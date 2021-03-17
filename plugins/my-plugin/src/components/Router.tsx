import {Entity} from "@backstage/catalog-model";
import {Route, Routes} from "react-router";
import React from "react";
import {AppCard} from "./AppCard";
import {MY_PLUGIN_ANNOTATION} from "../constants";
import {MissingAnnotationEmptyState} from "@backstage/core";

export const isMyPluginAvailable = (entity: Entity) =>
    Boolean(entity?.metadata.annotations?.[MY_PLUGIN_ANNOTATION]);

export const Router = ({ entity }: { entity: Entity }) =>
    !isMyPluginAvailable(entity) ? (
        <MissingAnnotationEmptyState annotation={MY_PLUGIN_ANNOTATION} />
    ) : (
        <Routes>
            <Route path="/" element={<AppCard />} />
        </Routes>
    );
