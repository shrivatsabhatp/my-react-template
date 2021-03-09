const ProgressBar = ({
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
    transition: "width 0.2s ease-in",
  };

  return (
    <div style={ProgressBar}>
      <div style={Filler} />
    </div>
  );
};

export default ProgressBar;
