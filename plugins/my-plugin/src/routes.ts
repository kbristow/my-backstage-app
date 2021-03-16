import { createRouteRef } from "@backstage/core";

// Note: This route ref is for internal use only, don't export it from the plugin
export const rootRouteRef = createRouteRef({
    title: 'Example Page',
});
