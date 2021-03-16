import {Entity} from "@backstage/catalog-model";
import {Route, Routes} from "react-router";
import React from "react";
import {LatestRunCard} from "./LatestRunCard";

// @ts-ignore
export const Router = ({ entity }: { entity: Entity }) =>(
    <Routes>
        <Route path="/" element={<LatestRunCard />} />
    </Routes>
)
