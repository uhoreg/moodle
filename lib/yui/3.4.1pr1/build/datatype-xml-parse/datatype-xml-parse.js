/*
YUI 3.4.1pr1 (build 4097)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add('datatype-xml-parse', function(Y) {

/**
 * Parse XML submodule.
 *
 * @module datatype
 * @submodule datatype-xml-parse
 * @for DataType.XML
 */

var LANG = Y.Lang;

Y.mix(Y.namespace("DataType.XML"), {
    /**
     * Converts data to type XMLDocument.
     *
     * @method parse
     * @param data {String} Data to convert.
     * @return {XMLDoc} XML Document.
     */
    parse: function(data) {
        var xmlDoc = null;
        if(LANG.isString(data)) {
            try {
                if(!LANG.isUndefined(ActiveXObject)) {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(data);
                }
            }
            catch(ee) {
                try {
                    if(!LANG.isUndefined(DOMParser)) {
                        xmlDoc = new DOMParser().parseFromString(data, "text/xml");
                    }
                }
                catch(e) {
                }
            }
        }
        
        if( (LANG.isNull(xmlDoc)) || (LANG.isNull(xmlDoc.documentElement)) || (xmlDoc.documentElement.nodeName === "parsererror") ) {
        }
        
        return xmlDoc;
    }
});

// Add Parsers shortcut
Y.namespace("Parsers").xml = Y.DataType.XML.parse;



}, '3.4.1pr1' );
