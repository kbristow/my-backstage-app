import {createApiRef, DiscoveryApi} from "@backstage/core";

export const subatomicApiRef = createApiRef<SubatomicApi>({
    id: 'plugin.myplugin.service',
    description: 'Used by the My-Plugin plugin to make requests',
});

const DEFAULT_PROXY_PATH = '/subatomic';

type Options = {
    discoveryApi: DiscoveryApi;
    /**
     * Path to use for requests via the proxy, defaults to /jenkins/api
     */
    proxyPath?: string;
};

export class SubatomicApi {
    private readonly discoveryApi: DiscoveryApi;
    private readonly proxyPath: string;

    constructor(options: Options) {
        this.discoveryApi = options.discoveryApi;
        this.proxyPath = options.proxyPath ?? DEFAULT_PROXY_PATH;
    }

    private async getClientConfig(): Promise<{ baseUrl: string }> {
        const proxyUrl = await this.discoveryApi.getBaseUrl('proxy');
        return {baseUrl: proxyUrl + this.proxyPath};
    }

    public async getApplicationDetails(appId: string): Promise<SubatomicApplication>{
        const clientConfig = await this.getClientConfig();
        const response = await fetch(`${clientConfig.baseUrl}/applications/${appId}`)
        return response.json();
    }
}

export interface SubatomicApplication{ id: string, name: string, applicationType: string }
