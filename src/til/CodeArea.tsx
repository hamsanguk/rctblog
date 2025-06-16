// CodeArea.tsx
import React from 'react';

interface CodeAreaProps {
  code: string;
  language?: string;
}

const CodeArea: React.FC<CodeAreaProps> = ({ code, language }) => (
  <pre style={{
    background: '#aaa',
    borderRadius: 8, padding: 16, overflowX: 'auto',
    fontFamily: 'Fira Mono, Consolas, monospace'
  }}>
    <code>
      {code}
    </code>
  </pre>
);

export default CodeArea;
