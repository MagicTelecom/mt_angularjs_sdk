/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of TokenForm
 *
 * @constructor
 */
function TokenForm() {
    this.token = null;     
}

TokenForm.prototype = new BaseModel();
TokenForm.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {Token}
 */
TokenForm.prototype.getToken = function() {
    return this.token;
};

/**
 * Setter for Token
 * 
 * @param {Token} value 
 */
TokenForm.prototype.setToken = function(value) {
    this.token = value;
};





