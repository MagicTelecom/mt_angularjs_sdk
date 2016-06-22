/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of Checkout
 *
 * @constructor
 */
function Checkout() {
    this.externalOrderReference = null;     
    //Append to variable dictionary
    this._variableDict['externalOrderReference'] = 'external_order_reference';
}

Checkout.prototype = new BaseModel();
Checkout.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Checkout.prototype.getExternalOrderReference = function() {
    return this.externalOrderReference;
};

/**
 * Setter for ExternalOrderReference
 * 
 * @param {string} value 
 */
Checkout.prototype.setExternalOrderReference = function(value) {
    this.externalOrderReference = value;
};





