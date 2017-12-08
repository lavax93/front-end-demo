/* use the Handlebars.compile method to compile the template into a function */
var handlebars = require('handlebars');
var lunr = require('lunr');

exports.indent = function indentHelper(text, options) {
    if (!text) {
        return text;
    }
    var count = options.hash.spaces || 2;
    var spaces = new Array(count + 1).join(' ');
    return text.split('\n').map(function (line) {
        return line ? spaces + line : '';
    }).join('\n');
};

exports.escape = function escapeHelper(options) {
    return handlebars.Utils.escapeExpression(options.fn(this));
};

exports.lunrIndex = function (examples) {
    var index = lunr(function () {
        this.field('pname');
        this.field('ptitle');
        this.field('sname');
        this.field('stitle');
        this.ref('id');
        var id = 0;
        for (var i = 0; i < examples.length; i++) {
            var pname = examples[i].name;
            var ptitle = examples[i].category;
            var subExamples = examples[i].examples;
            for (var j = 0; j < subExamples.length; j++) {
                var sname = subExamples[j].name;
                var stitle = subExamples[j].title;
                var doc = {
                    pname: pname,
                    ptitle: ptitle,
                    sname: sname,
                    stitle: stitle,
                    id: id++
                };
                this.add(doc);
            }
        }
    });
    return JSON.stringify(index);
};

handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});


