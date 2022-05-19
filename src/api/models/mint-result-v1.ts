/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface MintResultV1
 */
export interface MintResultV1 {
    /**
     * ID provided by the client for this token
     * @type {string}
     * @memberof MintResultV1
     */
    'client_token_id'?: string;
    /**
     * IMX Id of this token
     * @type {string}
     * @memberof MintResultV1
     */
    'token_id'?: string;
    /**
     * Mint Transaction ID
     * @type {number}
     * @memberof MintResultV1
     */
    'tx_id'?: number;
}
