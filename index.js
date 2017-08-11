define(function(require, exports, module) {
    main.consumes = ["dependency"];
    main.provides = ["c9-plugin"];
    return main;

    function main(options, imports, register) {
        var dependency = imports.dependency;

        var plugin = new Plugin("c9-plugin", main.consumes);

        function doSomething(){}

        plugin.pluginAPI({
            doSomething : doSomething
        });

        register("", {
            "c9-plugin": plugin
        });
    }
});