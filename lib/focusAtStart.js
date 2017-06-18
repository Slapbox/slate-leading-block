
/**
 * Focus at the end of the document
 * @param  {Slate.Transform} transform
 * @return {Slate.Transform}
 */
function focusAtStart(transform) {
    const { state } = transform;
    const { document } = state;
    return transform.collapseToStartOf(document);
}

module.exports = focusAtStart;
