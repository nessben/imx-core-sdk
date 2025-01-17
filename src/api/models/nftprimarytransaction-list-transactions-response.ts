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


// May contain unused imports in some cases
// @ts-ignore
import { NftprimarytransactionTransactionData } from './nftprimarytransaction-transaction-data';

/**
 * 
 * @export
 * @interface NftprimarytransactionListTransactionsResponse
 */
export interface NftprimarytransactionListTransactionsResponse {
    /**
     * Generated cursor returned by previous query
     * @type {string}
     * @memberof NftprimarytransactionListTransactionsResponse
     */
    'cursor'?: string;
    /**
     * Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
     * @type {number}
     * @memberof NftprimarytransactionListTransactionsResponse
     */
    'remaining'?: number;
    /**
     * Transactions matching query parameters
     * @type {Array<NftprimarytransactionTransactionData>}
     * @memberof NftprimarytransactionListTransactionsResponse
     */
    'result'?: Array<NftprimarytransactionTransactionData>;
}

