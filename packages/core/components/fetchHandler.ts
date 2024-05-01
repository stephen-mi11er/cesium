import fetch from 'node-fetch';

export default class FetchHandler{
    private readonly apiUrl: string;
    private readonly apiKey: string;

    constructor(apiUrl: string, apiKey: string) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    async fetchData(query: object): Promise<any>{
        const response = await fetch(this.apiUrl,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'api-key': this.apiKey },
                body: JSON.stringify(query)
            });

        return await response.json();
    }
}
