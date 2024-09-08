import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [text, setText] = useState(`
    # Welcome to My Markdown Previewer
    
    ## Sub-heading

    Check out this link: [freeCodeCamp](https://www.freecodecamp.org)

    Here's some inline code: \`<div></div>\`.

    \`\`\`
    This is a code block.
    You can write multiple lines of code here.
    \`\`\`

    - This is a list item.

    > This is a blockquote.

    ![Sample Image](https://via.placeholder.com/150)

    **This text is bold!**
  `);

  return (
    <div>
      <div id='editorWrap'>
        <textarea
          id='editor'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked.parse(text),
        }}
      ></div>
    </div>
  );
};

export default App;
