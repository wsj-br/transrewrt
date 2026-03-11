import { makeStyles } from '@fluentui/react-components';
import PropTypes from 'prop-types';

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

ResizablePanels.propTypes = {
  leftPanel: PropTypes.node.isRequired,
  rightPanel: PropTypes.node.isRequired,
};

export default ResizablePanels;
