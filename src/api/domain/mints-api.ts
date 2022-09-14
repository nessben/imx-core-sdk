/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { APIError } from '../models';
// @ts-ignore
import { ListMintsResponse } from '../models';
// @ts-ignore
import { Mint } from '../models';
// @ts-ignore
import { MintRequest } from '../models';
// @ts-ignore
import { MintTokensResponse } from '../models';
// @ts-ignore
import { MintableTokenDetails } from '../models';
/**
 * MintsApi - axios parameter creator
 * @export
 */
export const MintsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get details of a mint with the given ID
         * @summary Get details of a mint with the given ID
         * @param {string} id Mint ID. This is the transaction_id returned from listMints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMint: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMint', 'id', id)
            const localVarPath = `/v1/mints/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details of a mintable token with the given token address and token ID
         * @summary Get details of a mintable token with the given token address and token ID
         * @param {string} tokenAddress Address of the ERC721 contract
         * @param {string} tokenId ERC721 token ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMintableTokenDetailsByClientTokenId: async (tokenAddress: string, tokenId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenAddress' is not null or undefined
            assertParamExists('getMintableTokenDetailsByClientTokenId', 'tokenAddress', tokenAddress)
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('getMintableTokenDetailsByClientTokenId', 'tokenId', tokenId)
            const localVarPath = `/v1/mintable-token/{token_address}/{token_id}`
                .replace(`{${"token_address"}}`, encodeURIComponent(String(tokenAddress)))
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of mints
         * @summary Get a list of mints
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'token_id' | 'created_at' | 'updated_at'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this mint
         * @param {string} [status] Status of this mint
         * @param {string} [minTimestamp] Minimum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the minted asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenName] Token Name of the minted asset
         * @param {string} [tokenAddress] Token address of the minted asset
         * @param {string} [minQuantity] Min quantity for the minted asset
         * @param {string} [maxQuantity] Max quantity for the minted asset
         * @param {string} [metadata] JSON-encoded metadata filters for the minted asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMints: async (pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'token_id' | 'created_at' | 'updated_at', direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenName?: string, tokenAddress?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/mints`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (minTimestamp !== undefined) {
                localVarQueryParameter['min_timestamp'] = minTimestamp;
            }

            if (maxTimestamp !== undefined) {
                localVarQueryParameter['max_timestamp'] = maxTimestamp;
            }

            if (tokenType !== undefined) {
                localVarQueryParameter['token_type'] = tokenType;
            }

            if (tokenId !== undefined) {
                localVarQueryParameter['token_id'] = tokenId;
            }

            if (assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }

            if (tokenName !== undefined) {
                localVarQueryParameter['token_name'] = tokenName;
            }

            if (tokenAddress !== undefined) {
                localVarQueryParameter['token_address'] = tokenAddress;
            }

            if (minQuantity !== undefined) {
                localVarQueryParameter['min_quantity'] = minQuantity;
            }

            if (maxQuantity !== undefined) {
                localVarQueryParameter['max_quantity'] = maxQuantity;
            }

            if (metadata !== undefined) {
                localVarQueryParameter['metadata'] = metadata;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mint tokens in a batch with fees
         * @summary Mint Tokens V2
         * @param {Array<MintRequest>} mintTokensRequestV2 details of tokens to mint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mintTokens: async (mintTokensRequestV2: Array<MintRequest>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mintTokensRequestV2' is not null or undefined
            assertParamExists('mintTokens', 'mintTokensRequestV2', mintTokensRequestV2)
            const localVarPath = `/v2/mints`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mintTokensRequestV2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MintsApi - functional programming interface
 * @export
 */
export const MintsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MintsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get details of a mint with the given ID
         * @summary Get details of a mint with the given ID
         * @param {string} id Mint ID. This is the transaction_id returned from listMints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMint(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mint>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMint(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get details of a mintable token with the given token address and token ID
         * @summary Get details of a mintable token with the given token address and token ID
         * @param {string} tokenAddress Address of the ERC721 contract
         * @param {string} tokenId ERC721 token ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMintableTokenDetailsByClientTokenId(tokenAddress: string, tokenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MintableTokenDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMintableTokenDetailsByClientTokenId(tokenAddress, tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of mints
         * @summary Get a list of mints
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'token_id' | 'created_at' | 'updated_at'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this mint
         * @param {string} [status] Status of this mint
         * @param {string} [minTimestamp] Minimum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the minted asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenName] Token Name of the minted asset
         * @param {string} [tokenAddress] Token address of the minted asset
         * @param {string} [minQuantity] Min quantity for the minted asset
         * @param {string} [maxQuantity] Max quantity for the minted asset
         * @param {string} [metadata] JSON-encoded metadata filters for the minted asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMints(pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'token_id' | 'created_at' | 'updated_at', direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenName?: string, tokenAddress?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMintsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMints(pageSize, cursor, orderBy, direction, user, status, minTimestamp, maxTimestamp, tokenType, tokenId, assetId, tokenName, tokenAddress, minQuantity, maxQuantity, metadata, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Mint tokens in a batch with fees
         * @summary Mint Tokens V2
         * @param {Array<MintRequest>} mintTokensRequestV2 details of tokens to mint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mintTokens(mintTokensRequestV2: Array<MintRequest>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MintTokensResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mintTokens(mintTokensRequestV2, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MintsApi - factory interface
 * @export
 */
export const MintsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MintsApiFp(configuration)
    return {
        /**
         * Get details of a mint with the given ID
         * @summary Get details of a mint with the given ID
         * @param {string} id Mint ID. This is the transaction_id returned from listMints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMint(id: string, options?: any): AxiosPromise<Mint> {
            return localVarFp.getMint(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details of a mintable token with the given token address and token ID
         * @summary Get details of a mintable token with the given token address and token ID
         * @param {string} tokenAddress Address of the ERC721 contract
         * @param {string} tokenId ERC721 token ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMintableTokenDetailsByClientTokenId(tokenAddress: string, tokenId: string, options?: any): AxiosPromise<MintableTokenDetails> {
            return localVarFp.getMintableTokenDetailsByClientTokenId(tokenAddress, tokenId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of mints
         * @summary Get a list of mints
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'token_id' | 'created_at' | 'updated_at'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this mint
         * @param {string} [status] Status of this mint
         * @param {string} [minTimestamp] Minimum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the minted asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenName] Token Name of the minted asset
         * @param {string} [tokenAddress] Token address of the minted asset
         * @param {string} [minQuantity] Min quantity for the minted asset
         * @param {string} [maxQuantity] Max quantity for the minted asset
         * @param {string} [metadata] JSON-encoded metadata filters for the minted asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMints(pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'token_id' | 'created_at' | 'updated_at', direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenName?: string, tokenAddress?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options?: any): AxiosPromise<ListMintsResponse> {
            return localVarFp.listMints(pageSize, cursor, orderBy, direction, user, status, minTimestamp, maxTimestamp, tokenType, tokenId, assetId, tokenName, tokenAddress, minQuantity, maxQuantity, metadata, options).then((request) => request(axios, basePath));
        },
        /**
         * Mint tokens in a batch with fees
         * @summary Mint Tokens V2
         * @param {Array<MintRequest>} mintTokensRequestV2 details of tokens to mint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mintTokens(mintTokensRequestV2: Array<MintRequest>, options?: any): AxiosPromise<MintTokensResponse> {
            return localVarFp.mintTokens(mintTokensRequestV2, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MintsApi - object-oriented interface
 * @export
 * @class MintsApi
 * @extends {BaseAPI}
 */
export class MintsApi extends BaseAPI {
    /**
     * Get details of a mint with the given ID
     * @summary Get details of a mint with the given ID
     * @param {string} id Mint ID. This is the transaction_id returned from listMints
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MintsApi
     */
    public getMint(id: string, options?: AxiosRequestConfig) {
        return MintsApiFp(this.configuration).getMint(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details of a mintable token with the given token address and token ID
     * @summary Get details of a mintable token with the given token address and token ID
     * @param {string} tokenAddress Address of the ERC721 contract
     * @param {string} tokenId ERC721 token ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MintsApi
     */
    public getMintableTokenDetailsByClientTokenId(tokenAddress: string, tokenId: string, options?: AxiosRequestConfig) {
        return MintsApiFp(this.configuration).getMintableTokenDetailsByClientTokenId(tokenAddress, tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of mints
     * @summary Get a list of mints
     * @param {number} [pageSize] Page size of the result
     * @param {string} [cursor] Cursor
     * @param {'transaction_id' | 'token_id' | 'created_at' | 'updated_at'} [orderBy] Property to sort by
     * @param {string} [direction] Direction to sort (asc/desc)
     * @param {string} [user] Ethereum address of the user who submitted this mint
     * @param {string} [status] Status of this mint
     * @param {string} [minTimestamp] Minimum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @param {string} [maxTimestamp] Maximum timestamp for this mint, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @param {string} [tokenType] Token type of the minted asset
     * @param {string} [tokenId] ERC721 Token ID of the minted asset
     * @param {string} [assetId] Internal IMX ID of the minted asset
     * @param {string} [tokenName] Token Name of the minted asset
     * @param {string} [tokenAddress] Token address of the minted asset
     * @param {string} [minQuantity] Min quantity for the minted asset
     * @param {string} [maxQuantity] Max quantity for the minted asset
     * @param {string} [metadata] JSON-encoded metadata filters for the minted asset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MintsApi
     */
    public listMints(pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'token_id' | 'created_at' | 'updated_at', direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenName?: string, tokenAddress?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options?: AxiosRequestConfig) {
        return MintsApiFp(this.configuration).listMints(pageSize, cursor, orderBy, direction, user, status, minTimestamp, maxTimestamp, tokenType, tokenId, assetId, tokenName, tokenAddress, minQuantity, maxQuantity, metadata, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mint tokens in a batch with fees
     * @summary Mint Tokens V2
     * @param {Array<MintRequest>} mintTokensRequestV2 details of tokens to mint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MintsApi
     */
    public mintTokens(mintTokensRequestV2: Array<MintRequest>, options?: AxiosRequestConfig) {
        return MintsApiFp(this.configuration).mintTokens(mintTokensRequestV2, options).then((request) => request(this.axios, this.basePath));
    }
}
