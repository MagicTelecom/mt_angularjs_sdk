/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of RoutingBase
 *
 * @constructor
 */
function RoutingBase() {
    this.logic = null;     
    this.endpoints = null;     
}

RoutingBase.prototype = new BaseModel();
RoutingBase.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RoutingBase.prototype.getLogic = function() {
    return this.logic;
};

/**
 * Setter for Logic
 * 
 * @param {string} value 
 */
RoutingBase.prototype.setLogic = function(value) {
    this.logic = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
RoutingBase.prototype.getEndpoints = function() {
    return this.endpoints;
};

/**
 * Setter for Endpoints
 * 
 * @param {array} value 
 */
RoutingBase.prototype.setEndpoints = function(value) {
    this.endpoints = value;
};




