import {useApi} from "@backstage/core";
import {subatomicApiRef, SubatomicApplication} from "../api/SubatomicApi";
import {useAsync} from "react-use";

export function useApplicationDetails(appId: string): { loading: boolean; error?: undefined; value?: undefined } | { loading: true; error?: Error | undefined; value?: SubatomicApplication } | { loading: false; error: Error; value?: undefined } | { loading: false; error?: undefined; value: SubatomicApplication } {
    const api = useApi(subatomicApiRef);
    return useAsync(()=>api.getApplicationDetails(appId));
}
