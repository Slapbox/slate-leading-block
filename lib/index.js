const Slate = require('slate');
const focusAtStart = require('./focusAtStart');

/**
 * Slate plugin to ensure a leading block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match first block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function TrailingBlock(opts) {
    opts       = opts || {};
    opts.type  = opts.type || 'paragraph';
    opts.match = opts.match || (node => node.type === opts.type);

    return {
        schema: {
            rules: [
                {
                    match(node) {
                        return node.kind === 'document';
                    },
                    validate(node) {
                        const firstNode = node.nodes.first();

                        return (!firstNode || !opts.match(firstNode)) ?
                            true : null;
                    },
                    normalize(transform, node, value) {
                        const firstIndex = 0;
                        const block = Slate.Block.create({
                            type: opts.type,
                            nodes: [Slate.Text.create()]
                        });

                        return transform.insertNodeByKey(node.key, firstIndex, block);
                    }
                }
            ]
        },

        transforms: {
            focusAtStart
        }
    };
}

module.exports = TrailingBlock;
