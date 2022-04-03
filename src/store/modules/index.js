const requireModule = require.context(".", true, /\.js$/);
const modules = {};

//register all vuex store modules inside modules folder
requireModule.keys().forEach(fileName => {
    if(fileName === "./index.js") return;
    // const moduleName = camelCase(
    //     // fileName.split('/').pop().replace(/(\.\/|\.js)/g, "")
    //     fileName.replace(/(\.\/|\.js)/g, "")
    // );
    const moduleName = fileName.replace(/(\.\/|\.js)/g, "");
    modules[moduleName] = requireModule(fileName).default;
});


//register vuex store modules defined inside  components/**/store/index.js 
const requireComponentModule = require.context("../../components/", true, /\.js$/);
requireComponentModule.keys().forEach(fileName => {
    if(fileName.includes("store/index.js")) {
        let moduleName = fileName.replace(/(\.\/|\.js)/g, "");
        moduleName = moduleName.replace('/store/index', '').toLowerCase();
        modules[moduleName] = requireComponentModule(fileName).default;
    }
});

//register vuex store modules defined inside  views/**/store/index.js 
const requireViewModule = require.context("../../views/", true, /\.js$/);
requireViewModule.keys().forEach(fileName => {
    if(fileName.includes("store/index.js")) {
        let moduleName = fileName.replace(/(\.\/|\.js)/g, "");
        moduleName = moduleName.replace('/store/index', '').toLowerCase();
        modules[moduleName] = requireViewModule(fileName).default;
    }
});


export default modules;
