import React from 'react';

const ResizablePanels = ({ leftPanel, rightPanel }) => {
  return (
    <div className="resizable-panels">
      <div className="panel-container">
        {leftPanel}
      </div>
      <div className="resize-handle"></div>
      <div className="panel-container">
        {rightPanel}
      </div>
    </div>
  );
};

export default ResizablePanels;