cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.projectoxford.cordova.speechrecognition/www/oxfordspeechrecognition.js",
        "id": "com.projectoxford.cordova.speechrecognition.OxfordSpeechRecognition",
        "pluginId": "com.projectoxford.cordova.speechrecognition",
        "clobbers": [
            "window.OxfordSpeechRecognition"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.projectoxford.cordova.speechrecognition": "0.0.1"
}
// BOTTOM OF METADATA
});