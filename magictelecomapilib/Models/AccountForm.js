/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of AccountForm
 *
 * @constructor
 */
function AccountForm() {
    this.account = null;     
}

AccountForm.prototype = new BaseModel();
AccountForm.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {Account}
 */
AccountForm.prototype.getAccount = function() {
    return this.account;
};

/**
 * Setter for Account
 * 
 * @param {Account} value 
 */
AccountForm.prototype.setAccount = function(value) {
    this.account = value;
};





