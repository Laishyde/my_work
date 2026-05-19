const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Ensure public folder is accessible
config.watchFolders = [__dirname];
config.resolver.assetExts = [...config.resolver.assetExts, "json"];

module.exports = config;
