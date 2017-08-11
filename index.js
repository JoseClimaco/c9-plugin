define(function(require, module, exports) {
    main.consumes = ["Plugin", "ui"];
    main.provides = ["MyBaseClass"];
    return main;

    function main(options, imports, register) {
        var ui = imports.ui;

        function MyBaseClass(developer, deps, options) {
            var plugin = new Plugin(developer, deps.concat(main.consumes));
            var emit = plugin.getEmitter();

            // Get the name from the options (optional)
            var name = options.name;

            // Mark this plugin as a base class
            plugin.baseclass();

            // Set the public API (Plugin won't be frozen)
            plugin.freezePublicAPI({

            });

            // Set default name (will append integer)
            plugin.load(name, "myclass");

            return plugin;
        }

        register(null, {
            MyBaseClass: MyBaseClass
        });
    }
});