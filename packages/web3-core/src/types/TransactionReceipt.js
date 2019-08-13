/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file TransactionReceipt.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @author Marek Kotewicz <marek@parity.io>
 * @date 2019
 */

import BigNumber from '@ethersproject/bignumber';
import Address from './Address';
import Hex from './Hex';
import Log from './Log';
import isArray from 'lodash/isArray';

export default class TransactionReceipt {
    /**
     * @param {Object} receipt
     *
     * @constructor
     */
    constructor(receipt) {
        this.properties = receipt;

        this.blockNumber = receipt.blockNumber;
        this.transactionIndex = receipt.transactionIndex;
        this.gas = receipt.gas;
        this.cumulativeGasUsed = receipt.cumulativeGasUsed;
        this.gasUsed = receipt.gasUsed;
        this.to = receipt.to;
        this.from = receipt.from;
        this.logs = receipt.logs;
        this.contractAddress = receipt.contractAddress;
        this.status = receipt.status;
    }

    /**
     * Getter for the blockNumber property.
     *
     * @property blockNumber
     *
     * @returns {String}
     */
    get blockNumber() {
        return this.properties.blockNumber;
    }

    /**
     * Setter for the blockNumber property.
     *
     * @property blockNumber
     *
     * @param {Number|null} blockNumber
     */
    set blockNumber(blockNumber) {
        if (blockNumber !== null) {
            this.properties.blockNumber = Hex.fromNumber(blockNumber).toString();
        }

        this.properties.blockNumber = null;
    }

    /**
     * Getter for the transactionIndex property.
     *
     * @property transactionIndex
     *
     * @returns {Number}
     */
    get transactionIndex() {
        return this.properties.transactionIndex;
    }

    /**
     * Setter for the transactionIndex property.
     *
     * @property transactionIndex
     *
     * @param {String|null} transactionIndex
     */
    set transactionIndex(transactionIndex) {
        if (transactionIndex !== null) {
            this.properties.transactionIndex = new Hex(transactionIndex).toNumber();
        }

        this.properties.transactionIndex = transactionIndex;
    }

    /**
     * Getter for the gasPrice property.
     *
     * @property gasPrice
     *
     * @returns {Number}
     */
    get gasPrice() {
        return this.properties.gasPrice;
    }

    /**
     * Getter for the gasPrice property.
     *
     * @property gasPrice
     *
     * @param {String} gasPrice
     */
    set gasPrice(gasPrice) {
        if (gasPrice) {
            this.properties.gasPrice = new BigNumber(gasPrice).toString(10);
        }

        this.properties.gasPrice = gasPrice;
    }

    /**
     * Getter for the value property.
     *
     * @property value
     *
     * @returns {String}
     */
    get value() {
        return this.properties.value;
    }

    /**
     * Setter for the value property
     *
     * @property value
     *
     * @param {String} value
     */
    set value(value) {
        if (value) {
            this.properties.value = new BigNumber(value).toString(10);
        }

        this.properties.value = value;
    }

    /**
     * Getter for the nonce property.
     *
     * @property nonce
     *
     * @returns {Number}
     */
    get nonce() {
        return this.properties.nonce;
    }

    /**
     * Setter for the nonce property.
     *
     * @property nonce
     *
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.properties.nonce = new Hex(nonce).toNumber();
    }

    /**
     * Getter for the gas property.
     *
     * @property gas
     *
     * @returns {Number}
     */
    get gas() {
        return this.properties.gas;
    }

    /**
     * Setter for the gas property.
     *
     * @property gas
     *
     * @param {String} gas
     */
    set gas(gas) {
        this.properties.gas = new Hex(gas).toNumber();
    }

    /**
     * Getter for the cumulativeGasUsed property.
     *
     * @property cumulativeGasUsed
     *
     * @returns {Number}
     */
    get cumulativeGasUsed() {
        return this.properties.cumulativeGasUsed;
    }

    /**
     * Setter for the cumulativeGasUsed property.
     *
     * @property cumulativeGasUsed
     *
     * @param cumulativeGasUsed
     */
    set cumulativeGasUsed(cumulativeGasUsed) {
        this.properties.cumulativeGasUsed = new Hex(cumulativeGasUsed).toNumber();
    }

    /**
     * Getter for the gasUsed property.
     *
     * @property gasUsed
     *
     * @returns {Number}
     */
    get gasUsed() {
        return this.properties.gasUsed;
    }

    /**
     * Setter for gasUsed property.
     *
     * @property gasUsed
     *
     * @param {String} gasUsed
     */
    set gasUsed(gasUsed) {
        this.properties.gasUsed = new Hex(gasUsed).toNumber();
    }

    /**
     * Getter for the to property.
     *
     * @property to
     *
     * @returns {String|null}
     */
    get to() {
        return this.properties.to;
    }

    /**
     * Setter for the to property.
     *
     * @property to
     *
     * @param {String} to
     */
    set to(to) {
        if (to && Address.isValid(to)) {
            // tx.to could be `0x0` or `null` while contract creation
            this.properties.to = new Address(to).toChecksumAddress();
        } else {
            this.properties.to = null; // set to `null` if invalid address
        }
    }

    /**
     * Getter for the from property.
     *
     * @property from
     *
     * @returns {String}
     */
    get from() {
        return this.properties.from;
    }

    /**
     * Setter for the from property.
     *
     * @property from
     *
     * @param {String} from
     */
    set from(from) {
        if (from) {
            this.properties.from = new Address(from).toChecksumAddress();
        }
    }

    /**
     * Getter for the logs property.
     *
     * @property logs
     *
     * @returns {Array<Log>}
     */
    get logs() {
        return this.properties.log;
    }

    /**
     * Setter for the logs property.
     *
     * @property logs
     *
     * @param {Log} logs
     */
    set logs(logs) {
        if (isArray(logs)) {
            this.properties.logs = logs.map((log) => {
                return new Log(log);
            });
        }
    }

    /**
     * Getter for the contractAddress property.
     *
     * @property contractAddress
     *
     * @returns {Array<Log>}
     */
    get contractAddress() {
        return this.properties.contractAddress;
    }

    /**
     * Setter for the contractAddress property.
     *
     * @property contractAddress
     *
     * @param {String} contractAddress
     */
    set contractAddress(contractAddress) {
        if (contractAddress) {
            this.properties.contractAddress = new Address(contractAddress).toChecksumAddress();
        }
    }

    /**
     * Getter for the status property.
     *
     * @property status
     *
     * @returns {Array<Log>}
     */
    get status() {
        return this.properties.status;
    }

    /**
     * Setter for the status property.
     *
     * @property status
     *
     * @param {String} status
     */
    set status(status) {
        if (typeof status !== 'undefined' && status !== null) {
            this.properties.status = Boolean(parseInt(status));
        } else {
            this.properties.status = true;
        }
    }

    /**
     * Getter for the transactionHash property.
     *
     * @method transactionHash
     *
     * @returns {String}
     */
    get transactionHash() {
        return this.properties.transactionHash;
    }

    /**
     * Setter for the transactionHash property.
     *
     * @property transactionHash
     *
     * @param {String} transactionHash
     */
    set transactionHash(transactionHash) {
        this.properties.transactionHash = transactionHash;
    }

    /**
     * Getter for the logsBloom property.
     *
     * @method logsBloom
     *
     * @returns {String}
     */
    get logsBloom() {
        return this.properties.logsBloom;
    }

    /**
     * Setter for the logsBloom property.
     *
     * @property logsBloom
     *
     * @param {String} logsBloom
     */
    set logsBloom(logsBloom) {
        this.properties.logsBloom = logsBloom;
    }

    /**
     * Setter for the root property.
     *
     * @property root
     *
     * @param {String} root
     */
    set root(root) {
        this.properties.root = root;
    }

    /**
     * Getter for the root property.
     *
     * @property root
     *
     * @returns {String}
     */
    get root() {
        return this.properties.root;
    }

    /**
     * Getter for the blockHash property.
     *
     * @property blockHash
     *
     * @returns {String}
     */
    get blockHash() {
        return this.properties.blockHash;
    }

    /**
     * Setter for the blockHash property.
     *
     * @property blockHash
     *
     * @param {String} blockHash
     */
    set blockHash(blockHash) {
        this.properties.blockHash = blockHash;
    }
}
