cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-muzik/www/muzik.js",
        "id": "cordova-plugin-muzik.Muzik",
        "pluginId": "cordova-plugin-muzik",
        "clobbers": [
            "muzik"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-muzik": "0.0.3"
}
// BOTTOM OF METADATA
});