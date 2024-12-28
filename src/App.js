// src/App.js
import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CustomNode from './extensions/CustomNode';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomNode, // Include the custom node
    ],
    content: '<p>Welcome to the enhanced Tiptap editor with custom features!</p>',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="app-container">
      <header className="header">
        <h1>Tiptap Editor with Custom Features</h1>
      </header>

      <main className="editor-container">
        <EditorContent editor={editor} className="editor" />
        <div className="controls">
          <button
            className="btn"
            onClick={() =>
              editor.chain().focus().insertContent('<div data-type="custom-node">Custom Node Content</div>').run()
            }
          >
            Insert Custom Node
          </button>
        </div>
        <div className="output">
          <h2>Generated HTML:</h2>
          <pre className="output-box">{content}</pre>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 - Your Editor Project</p>
      </footer>
    </div>
  );
};

export default App;
