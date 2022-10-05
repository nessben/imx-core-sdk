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
import { FeeEntry } from './fee-entry';
// May contain unused imports in some cases
// @ts-ignore
import { FeeInfo } from './fee-info';

/**
 * 
 * @export
 * @interface CreateTradeRequestV1
 */
export interface CreateTradeRequestV1 {
    /**
     * Amount to buy
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'amount_buy': string;
    /**
     * Amount to sell
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'amount_sell': string;
    /**
     * ID of the asset to buy
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'asset_id_buy': string;
    /**
     * ID of the asset to sell
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'asset_id_sell': string;
    /**
     * Expiration timestamp for this trade
     * @type {number}
     * @memberof CreateTradeRequestV1
     */
    'expiration_timestamp': number;
    /**
     * 
     * @type {FeeInfo}
     * @memberof CreateTradeRequestV1
     */
    'fee_info'?: FeeInfo;
    /**
     * Fee information
     * @type {Array<FeeEntry>}
     * @memberof CreateTradeRequestV1
     */
    'fees'?: Array<FeeEntry>;
    /**
     * [deprecated] All orders include fees since the introduction of protocol fees
     * @type {boolean}
     * @memberof CreateTradeRequestV1
     */
    'include_fees'?: boolean;
    /**
     * Nonce of the trade
     * @type {number}
     * @memberof CreateTradeRequestV1
     */
    'nonce': number;
    /**
     * ID of the order
     * @type {number}
     * @memberof CreateTradeRequestV1
     */
    'order_id': number;
    /**
     * Public stark key of the user creating trade
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'stark_key': string;
    /**
     * Payload signature
     * @type {string}
     * @memberof CreateTradeRequestV1
     */
    'stark_signature': string;
    /**
     * ID of the vault into which the traded asset will be placed
     * @type {number}
     * @memberof CreateTradeRequestV1
     */
    'vault_id_buy': number;
    /**
     * ID of the vault to sell from
     * @type {number}
     * @memberof CreateTradeRequestV1
     */
    'vault_id_sell': number;
}

