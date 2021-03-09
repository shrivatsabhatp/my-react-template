const ProgressBar = ({
  label = null,
  width = "100%",
  height = " 20px",
  percentage = "23%",
}) => {
  const ProgressBar = {
    height,
    width,
    position: "relative",
    overflow: "hidden",
    borderRadius: " 50px",
    border: "1px solid #33333333",
  };

  const Filler = {
    background: "#1da598",
    width: `${percentage}%`,
    height: "100%",
    borderRadius: "inherit",
    transition: "width 0.2s ease-in-out",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const Progress = {
    position: "absolute",
    fontSize: "1rem",
    margin: "0",
    color: "white",
  };

  return (
    <div style={ProgressBar}>
      <div style={Filler}>
        {percentage > 5 && <p style={Progress}>{label}</p>}
      </div>
    </div>
  );
};

export default ProgressBar;
