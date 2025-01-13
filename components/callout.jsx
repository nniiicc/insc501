// components/callout.jsx
import React from 'react';

const calloutStyles = {
  borderLeft: '4px solid #0070f3',
  backgroundColor: '#f0faff',
  padding: '1rem',
  margin: '1.5rem 0',
  borderRadius: '4px',
};

export default function Callout({ term, children }) {
  return (
    <div style={calloutStyles}>
      <p>
        <strong>{term}</strong>: {children}
      </p>
    </div>
  );
}
