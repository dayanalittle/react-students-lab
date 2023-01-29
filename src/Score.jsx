
const Score = (props) => {
  console.log(props);
  return (
    <>
    <h3>{props.score.date}</h3>
    <h4>{props.score.score}</h4>
    </>
  );
}

export default Score;