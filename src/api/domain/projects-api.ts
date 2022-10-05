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
import { CreateProjectRequest } from '../models';
// @ts-ignore
import { CreateProjectResponse } from '../models';
// @ts-ignore
import { GetProjectsResponse } from '../models';
// @ts-ignore
import { Project } from '../models';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a project
         * @summary Create a project
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateProjectRequest} createProjectRequest create a project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (iMXSignature: string, iMXTimestamp: string, createProjectRequest: CreateProjectRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iMXSignature' is not null or undefined
            assertParamExists('createProject', 'iMXSignature', iMXSignature)
            // verify required parameter 'iMXTimestamp' is not null or undefined
            assertParamExists('createProject', 'iMXTimestamp', iMXTimestamp)
            // verify required parameter 'createProjectRequest' is not null or undefined
            assertParamExists('createProject', 'createProjectRequest', createProjectRequest)
            const localVarPath = `/v1/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (iMXSignature != null) {
                localVarHeaderParameter['IMX-Signature'] = String(iMXSignature);
            }

            if (iMXTimestamp != null) {
                localVarHeaderParameter['IMX-Timestamp'] = String(iMXTimestamp);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createProjectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a project
         * @summary Get a project
         * @param {string} id Project ID
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (id: string, iMXSignature: string, iMXTimestamp: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProject', 'id', id)
            // verify required parameter 'iMXSignature' is not null or undefined
            assertParamExists('getProject', 'iMXSignature', iMXSignature)
            // verify required parameter 'iMXTimestamp' is not null or undefined
            assertParamExists('getProject', 'iMXTimestamp', iMXTimestamp)
            const localVarPath = `/v1/projects/{id}`
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

            if (iMXSignature != null) {
                localVarHeaderParameter['IMX-Signature'] = String(iMXSignature);
            }

            if (iMXTimestamp != null) {
                localVarHeaderParameter['IMX-Timestamp'] = String(iMXTimestamp);
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
         * Get projects
         * @summary Get projects
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects: async (iMXSignature: string, iMXTimestamp: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iMXSignature' is not null or undefined
            assertParamExists('getProjects', 'iMXSignature', iMXSignature)
            // verify required parameter 'iMXTimestamp' is not null or undefined
            assertParamExists('getProjects', 'iMXTimestamp', iMXTimestamp)
            const localVarPath = `/v1/projects`;
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

            if (iMXSignature != null) {
                localVarHeaderParameter['IMX-Signature'] = String(iMXSignature);
            }

            if (iMXTimestamp != null) {
                localVarHeaderParameter['IMX-Timestamp'] = String(iMXTimestamp);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a project
         * @summary Create a project
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateProjectRequest} createProjectRequest create a project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(iMXSignature: string, iMXTimestamp: string, createProjectRequest: CreateProjectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateProjectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProject(iMXSignature, iMXTimestamp, createProjectRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a project
         * @summary Get a project
         * @param {string} id Project ID
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(id: string, iMXSignature: string, iMXTimestamp: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(id, iMXSignature, iMXTimestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get projects
         * @summary Get projects
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjects(iMXSignature: string, iMXTimestamp: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetProjectsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjects(iMXSignature, iMXTimestamp, pageSize, cursor, orderBy, direction, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectsApiFp(configuration)
    return {
        /**
         * Create a project
         * @summary Create a project
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateProjectRequest} createProjectRequest create a project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject(iMXSignature: string, iMXTimestamp: string, createProjectRequest: CreateProjectRequest, options?: any): AxiosPromise<CreateProjectResponse> {
            return localVarFp.createProject(iMXSignature, iMXTimestamp, createProjectRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a project
         * @summary Get a project
         * @param {string} id Project ID
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject(id: string, iMXSignature: string, iMXTimestamp: string, options?: any): AxiosPromise<Project> {
            return localVarFp.getProject(id, iMXSignature, iMXTimestamp, options).then((request) => request(axios, basePath));
        },
        /**
         * Get projects
         * @summary Get projects
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects(iMXSignature: string, iMXTimestamp: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, options?: any): AxiosPromise<GetProjectsResponse> {
            return localVarFp.getProjects(iMXSignature, iMXTimestamp, pageSize, cursor, orderBy, direction, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createProject operation in ProjectsApi.
 * @export
 * @interface ProjectsApiCreateProjectRequest
 */
export interface ProjectsApiCreateProjectRequest {
    /**
     * String created by signing wallet address and timestamp
     * @type {string}
     * @memberof ProjectsApiCreateProject
     */
    readonly iMXSignature: string

    /**
     * Unix Epoc timestamp
     * @type {string}
     * @memberof ProjectsApiCreateProject
     */
    readonly iMXTimestamp: string

    /**
     * create a project
     * @type {CreateProjectRequest}
     * @memberof ProjectsApiCreateProject
     */
    readonly createProjectRequest: CreateProjectRequest
}

/**
 * Request parameters for getProject operation in ProjectsApi.
 * @export
 * @interface ProjectsApiGetProjectRequest
 */
export interface ProjectsApiGetProjectRequest {
    /**
     * Project ID
     * @type {string}
     * @memberof ProjectsApiGetProject
     */
    readonly id: string

    /**
     * String created by signing wallet address and timestamp
     * @type {string}
     * @memberof ProjectsApiGetProject
     */
    readonly iMXSignature: string

    /**
     * Unix Epoc timestamp
     * @type {string}
     * @memberof ProjectsApiGetProject
     */
    readonly iMXTimestamp: string
}

/**
 * Request parameters for getProjects operation in ProjectsApi.
 * @export
 * @interface ProjectsApiGetProjectsRequest
 */
export interface ProjectsApiGetProjectsRequest {
    /**
     * String created by signing wallet address and timestamp
     * @type {string}
     * @memberof ProjectsApiGetProjects
     */
    readonly iMXSignature: string

    /**
     * Unix Epoc timestamp
     * @type {string}
     * @memberof ProjectsApiGetProjects
     */
    readonly iMXTimestamp: string

    /**
     * Page size of the result
     * @type {number}
     * @memberof ProjectsApiGetProjects
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof ProjectsApiGetProjects
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {string}
     * @memberof ProjectsApiGetProjects
     */
    readonly orderBy?: string

    /**
     * Direction to sort (asc/desc)
     * @type {string}
     * @memberof ProjectsApiGetProjects
     */
    readonly direction?: string
}

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI {
    /**
     * Create a project
     * @summary Create a project
     * @param {ProjectsApiCreateProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public createProject(requestParameters: ProjectsApiCreateProjectRequest, options?: AxiosRequestConfig) {
        return ProjectsApiFp(this.configuration).createProject(requestParameters.iMXSignature, requestParameters.iMXTimestamp, requestParameters.createProjectRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a project
     * @summary Get a project
     * @param {ProjectsApiGetProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProject(requestParameters: ProjectsApiGetProjectRequest, options?: AxiosRequestConfig) {
        return ProjectsApiFp(this.configuration).getProject(requestParameters.id, requestParameters.iMXSignature, requestParameters.iMXTimestamp, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get projects
     * @summary Get projects
     * @param {ProjectsApiGetProjectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public getProjects(requestParameters: ProjectsApiGetProjectsRequest, options?: AxiosRequestConfig) {
        return ProjectsApiFp(this.configuration).getProjects(requestParameters.iMXSignature, requestParameters.iMXTimestamp, requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, options).then((request) => request(this.axios, this.basePath));
    }
}
