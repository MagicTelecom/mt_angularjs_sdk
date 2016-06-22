/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of Cdrs
 *
 * @constructor
 */
function Cdrs() {
    this.userId = null;     
    this.serviceType = null;     
    this.startDate = null;     
    this.endDate = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['serviceType'] = 'service_type';
    this._variableDict['startDate'] = 'start_date';
    this._variableDict['endDate'] = 'end_date';
}

Cdrs.prototype = new BaseModel();
Cdrs.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Cdrs.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string} value 
 */
Cdrs.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Cdrs.prototype.getServiceType = function() {
    return this.serviceType;
};

/**
 * Setter for ServiceType
 * 
 * @param {string} value 
 */
Cdrs.prototype.setServiceType = function(value) {
    this.serviceType = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Cdrs.prototype.getStartDate = function() {
    return this.startDate;
};

/**
 * Setter for StartDate
 * 
 * @param {string} value 
 */
Cdrs.prototype.setStartDate = function(value) {
    this.startDate = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Cdrs.prototype.getEndDate = function() {
    return this.endDate;
};

/**
 * Setter for EndDate
 * 
 * @param {string} value 
 */
Cdrs.prototype.setEndDate = function(value) {
    this.endDate = value;
};





