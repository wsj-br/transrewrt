import { makeStyles } from '@fluentui/react-components';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  resizablePanels: {
    display: "flex",
    flex: 1,
    gap: "48px",
    width: "100%",
    minHeight: 0,
    minWidth: 0,
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

const ResizablePanels = ({ leftPanel, rightPanel, leftGrow = 1, rightGrow = 1, gap = "48px" }) => {
  const styles = useStyles();

  return (
    <div className={styles.resizablePanels} style={{ gap }}>
      <div
        className={styles.panelContainer}
        style={{ flex: `${leftGrow} ${leftGrow} 0`, minWidth: leftGrow < rightGrow ? "200px" : "300px" }}
      >
        {leftPanel}
      </div>
      <div
        className={styles.panelContainer}
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
