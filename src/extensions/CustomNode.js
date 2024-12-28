// src/extensions/CustomNode.js
import { Node } from '@tiptap/core';

const CustomNode = Node.create({
  name: 'customNode',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'div[data-type="custom-node"]',
      },
    ];
  },

  renderHTML() {
    return ['div', { 'data-type': 'custom-node', style: 'background-color: yellow; padding: 10px;' }, 0];
  },

  addAttributes() {
    return {
      id: {
        default: null,
      },
    };
  },
});

export default CustomNode;
