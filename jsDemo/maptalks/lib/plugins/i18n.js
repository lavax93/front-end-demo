var path = require('path');
var i18next = require('i18next');
/* */
var Backend = require('i18next-sync-fs-backend');
/* github.com/sindresorhus/multimatch */
var match = require('multimatch');

function i18n(options) {
    /* Object.assign()用于将所有可枚举属性的值从一个或多个源对象复制到目标对象*/
    options = Object.assign({
        ignore: undefined,
        locales: [],
        fallbackLng: false,
        loadPath: './locales/{{lng}}/{{ns}}.json'
    }, options || {});

    i18next.use(Backend).init({
        /*  i18next-sync-fs-backend  */
        initImmediate: false,
        /* Set language on init */
        lng: options.locales[0],
        /* Unset/Set fallback language*/
        fallbackLng: options.fallbackLng,
        /* preload additional languages on init */
        preload: options.locales,
        /* i18next-sync-fs-backend */
        backend: {
            /* ackend options here */
            loadPath: options.loadPath
        }
    });

    function helper(locale) {
        function t(key) {
            var params = {
                lng: locale()
            };
            return i18next.t(key, params);
        }

        return {t: t};
    }

    return function (files, metalsmith, done) {
        var ignore = options.ignore;
        Object.keys(files).forEach(function (file) {
            /*
             * var results = multimatch(paths, patterns);
             * Same as minimatch.match() except for pattern also accepting an array.
             */
            if (ignore && !!match(file, ignore)[0]) return;
            options.locales.forEach(function (locale) {
                var data = Object.assign({}, files[file]);
                var p = path.join(locale, file);
                var h = helper(function () {
                    return locale;
                });
                data.locale = locale;
                data.t = h.t;
                data.i18nOrigPath = file;
                files[p] = data;
            });
            delete files[file];
        });

        done();
    };
}
module.exports = i18n;
