import {createComponentExtension, createPlugin, createRoutableExtension, createApiFactory, discoveryApiRef} from '@backstage/core';
import {rootRouteRef} from "./routes";
import {subatomicApiRef, SubatomicApi} from "./api/SubatomicApi";

export const myPluginPlugin = createPlugin({
    id: 'my-plugin',
    apis: [
        createApiFactory({
            api: subatomicApiRef,
            deps: { discoveryApi: discoveryApiRef },
            factory: ({ discoveryApi }) => new SubatomicApi({ discoveryApi }),
        }),
    ],
    routes: {
        root: rootRouteRef,
    },
});

export const ExamplePage = myPluginPlugin.provide(
    createRoutableExtension({
        // The component needs to be lazy-loaded. It's what will actually be rendered in the end.
        component: () =>
            import('./components/AppCard').then(m => m.AppCard),
        // This binds the extension to this route ref, which allows for routing within and across plugin extensions
        mountPoint: rootRouteRef,
    }),
);

export const MyPluginLatestRunCard = myPluginPlugin.provide(
    createComponentExtension({
        component: {
            lazy: () =>
                import('./components/AppCard').then(
                    (m) => m.AppCard
                ),
        },
    })
);
