/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of Trunk
 *
 * @constructor
 */
function Trunk() {
    this.sipEndPointUri = null;     
    this.description = null;     
    this.routing = null;     
    //Append to variable dictionary
    this._variableDict['sipEndPointUri'] = 'sip_end_point_uri';
    this._variableDict['routing'] = '_routing';
}

Trunk.prototype = new BaseModel();
Trunk.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Trunk.prototype.getSipEndPointUri = function() {
    return this.sipEndPointUri;
};

/**
 * Setter for SipEndPointUri
 * 
 * @param {string} value 
 */
Trunk.prototype.setSipEndPointUri = function(value) {
    this.sipEndPointUri = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Trunk.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string} value 
 */
Trunk.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {Routing}
 */
Trunk.prototype.getRouting = function() {
    return this.routing;
};

/**
 * Setter for Routing
 * 
 * @param {Routing} value 
 */
Trunk.prototype.setRouting = function(value) {
    this.routing = value;
};





