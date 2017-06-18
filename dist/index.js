'use strict';

var Slate = require('slate');
var focusAtStart = require('./focusAtStart');

/**
 * Slate plugin to ensure a leading block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match first block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function LeadingBlock(opts) {
    opts = opts || {};
    opts.type = opts.type || 'paragraph';
    opts.match = opts.match || function (node) {
        return node.type === opts.type;
    };

    return {
        schema: {
            rules: [{
                match: function match(node) {
                    return node.kind === 'document';
                },
                validate: function validate(node) {
                    var firstNode = node.nodes.first();

                    return !firstNode || !opts.match(firstNode) ? true : null;
                },
                normalize: function normalize(transform, node, value) {
                    var firstIndex = 0;
                    var block = Slate.Block.create({
                        type: opts.type,
                        nodes: [Slate.Text.create()]
                    });

                    return transform.insertNodeByKey(node.key, firstIndex, block);
                }
            }]
        },

        transforms: {
            focusAtStart: focusAtStart
        }
    };
}

module.exports = LeadingBlock;