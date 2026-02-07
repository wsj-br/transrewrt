import React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  resizablePanels: {
    display: "flex",
    flex: 1,
    gap: tokens.spacingHorizontalL,
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
  divider: {
    width: "1px",
    backgroundColor: tokens.colorNeutralStroke1,
    alignSelf: "stretch",
    margin: "0 8px",
    borderRadius: "1px",
    boxShadow: `0 0 0 1px ${tokens.colorNeutralBackground2}`,
  },
});

const ResizablePanels = ({ leftPanel, rightPanel }) => {
  const styles = useStyles();

  return (
    <div className={styles.resizablePanels}>
      <div className={styles.panelContainer}>
        {leftPanel}
      </div>
      <div className={styles.divider} />
      <div className={styles.panelContainer}>
        {rightPanel}
      </div>
    </div>
  );
};

export default ResizablePanels;
