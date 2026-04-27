import PropTypes from 'prop-types';

const ResizablePanels = ({ leftPanel, rightPanel, leftGrow = 1, rightGrow = 1, gap = "48px" }) => {
  return (
    <div className="flex flex-1 w-full min-h-0 min-w-0 items-stretch relative" style={{ gap }}>
      <div
        className="flex flex-col h-full min-h-0"
        style={{ flex: `${leftGrow} ${leftGrow} 0`, minWidth: leftGrow < rightGrow ? "200px" : "300px" }}
      >
        {leftPanel}
      </div>
      <div
        className="flex flex-col h-full min-h-0"
        style={{ flex: `${rightGrow} ${rightGrow} 0`, minWidth: 0 }}
      >
        {rightPanel}
      </div>
    </div>
  );
};

ResizablePanels.propTypes = {
  leftPanel: PropTypes.node.isRequired,
  rightPanel: PropTypes.node.isRequired,
  leftGrow: PropTypes.number,
  rightGrow: PropTypes.number,
  gap: PropTypes.string,
};

export default ResizablePanels;
