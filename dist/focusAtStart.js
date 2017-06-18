"use strict";

/**
 * Focus at the end of the document
 * @param  {Slate.Transform} transform
 * @return {Slate.Transform}
 */
function focusAtStart(transform) {
  var state = transform.state;
  var document = state.document;

  return transform.collapseToStartOf(document);
}

module.exports = focusAtStart;