let plugins = [];

//register vuex store plugins defined inside  components/**/storePlugins.js
const requireComponentPlugins = require.context("../components/", true, /\.js$/);
requireComponentPlugins.keys().forEach(fileName => {
    if(fileName.includes("storePlugins.js")) {
        let importedPlugins = requireComponentPlugins(fileName).default; 
        plugins = [...plugins, ...importedPlugins];       
    }
});

export default plugins;
