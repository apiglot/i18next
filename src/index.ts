import resourcesToBackend from 'i18next-resources-to-backend';

export type CreateI18nextBackendOptions = {
    projectId: string;
    apiKey: string;

    /**
     * Defaults to `https://api.apiglot.com/v1/${options.projectId}/{{lng}}/{{ns}}`
     */
    hostTemplate?: string;
}

export const createI18nextBackend = (options: CreateI18nextBackendOptions) => {
    // Implementation goes here
    const hostTemplate = options.hostTemplate || `https://api.apiglot.com/v1/${options.projectId}/{{lng}}/{{ns}}`;

    return resourcesToBackend(async (language: string, namespace: string) => {
        const url = hostTemplate
            .replace('{{lng}}', language)
            .replace('{{ns}}', namespace);
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${options.apiKey}`
            }
        });
        const _json = await response.json();
        return _json;
    });
}
