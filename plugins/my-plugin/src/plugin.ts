import {createComponentExtension, createPlugin, createRoutableExtension} from '@backstage/core';
import {rootRouteRef} from "./routes";

export const myPluginPlugin = createPlugin({
    id: 'my-plugin',
    routes: {
        root: rootRouteRef,
    },
});

export const ExamplePage = myPluginPlugin.provide(
    createRoutableExtension({
        // The component needs to be lazy-loaded. It's what will actually be rendered in the end.
        component: () =>
            import('./components/LatestRunCard').then(m => m.LatestRunCard),
        // This binds the extension to this route ref, which allows for routing within and across plugin extensions
        mountPoint: rootRouteRef,
    }),
);

export const MyPluginLatestRunCard = myPluginPlugin.provide(
    createComponentExtension({
        component: {
            lazy: () =>
                import('./components/LatestRunCard').then(
                    (m) => m.LatestRunCard
                ),
        },
    })
);
