/**
 *MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 06/22/2016
 */
/**
 * Creates a instance of Item
 *
 * @constructor
 */
function Item() {
    this.itemType = null;     
    //Append to variable dictionary
    this._variableDict['itemType'] = 'item_type';
}

Item.prototype = new BaseModel();
Item.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Item.prototype.getItemType = function() {
    return this.itemType;
};

/**
 * Setter for ItemType
 * 
 * @param {string} value 
 */
Item.prototype.setItemType = function(value) {
    this.itemType = value;
};





