import { Typography, CircularProgress } from "@material-ui/core";

function Spinner({ showText = false }) {
  return (
    <div className="login user-select-none">
      {showText && (
        <Typography variant="h2" color="secondary" align="center">
          MeeMusic
        </Typography>
      )}
      <CircularProgress color="secondary" />
    </div>
  );
}

export default Spinner;
