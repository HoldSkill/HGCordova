cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "id": "cordova-plugin-console.console",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "id": "cordova-plugin-console.logger",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/hg-plugin-imageBox/www/HGImageBox.js",
        "id": "hg-plugin-imageBox.HGImageBox",
        "pluginId": "hg-plugin-imageBox",
        "clobbers": [
            "ImageBox"
        ]
    },
    {
        "file": "plugins/hg-plugin-share/www/ShareSDKConstants.js",
        "id": "hg-plugin-share.ShareSDKArg",
        "pluginId": "hg-plugin-share",
        "clobbers": [
            "ShareSDKArg"
        ]
    },
    {
        "file": "plugins/hg-plugin-share/www/ShareSDKBox.js",
        "id": "hg-plugin-share.ShareSDK",
        "pluginId": "hg-plugin-share",
        "clobbers": [
            "share.shareSDK"
        ]
    },
    {
        "file": "plugins/hg-plugin-dataBase/www/dataBase.js",
        "id": "hg-plugin-dataBase.dataManager",
        "pluginId": "hg-plugin-dataBase",
        "clobbers": [
            "DataManager"
        ]
    },
    {
        "file": "plugins/hg-plugin-dataBase/www/connect.js",
        "id": "hg-plugin-dataBase.Connect",
        "pluginId": "hg-plugin-dataBase",
        "clobbers": [
            "ConnectArgs"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-camera": "2.3.0",
    "hg-plugin-imageBox": "0.01",
    "hg-plugin-share": "0.01",
    "hg-plugin-dataBase": "0.01"
}
// BOTTOM OF METADATA
});