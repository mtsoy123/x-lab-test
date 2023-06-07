const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token 896f6894a10d163d10226d3d42f81b4ca352cdcd",
};

class Api {
    private readonly _baseUrl: string;
    private readonly _headers: HeadersInit;

    constructor({
        baseUrl,
        headers,
    }: {
        baseUrl: string;
        headers: HeadersInit;
    }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    protected _checkResponse = (
        url: string,
        options: RequestInit
    ): Promise<any> => {
        return fetch(url, options).then((res) =>
            res.ok ? res.json() : Promise.reject(res.status)
        );
    };

    getAddress(query: string) {
        return this._checkResponse(this._baseUrl, {
            headers: this._headers,
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ query: query }),
        });
    }
}

export const api = new Api({
    baseUrl:
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
    headers: headers,
});
