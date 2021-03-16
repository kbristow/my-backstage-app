import {createComponentExtension, createPlugin, createRouteRef} from '@backstage/core';

export const entityContentRouteRef = createRouteRef({
    title: 'My PLugin Entity Content',
});

export const myPluginPlugin = createPlugin({
    id: 'argocd',
    routes: {
        entityContent: entityContentRouteRef,
    },
});

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
