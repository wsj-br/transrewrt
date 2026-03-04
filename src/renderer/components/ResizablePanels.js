import React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  resizablePanels: {
    display: "flex",
    flex: 1,
    gap: "48px",
    width: "100%",
    alignItems: "stretch",
    position: "relative",
  },
  panelContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    minWidth: "300px",
  },
});

const ResizablePanels = ({ leftPanel, rightPanel }) => {
  const styles = useStyles();

  return (
    <div className={styles.resizablePanels}>
      <div className={styles.panelContainer}>
        {leftPanel}
      </div>
      <div className={styles.panelContainer}>
        {rightPanel}
      </div>
    </div>
  );
};

export default ResizablePanels;
