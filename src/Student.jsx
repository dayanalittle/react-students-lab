import Score from './Score';

const Student = (props) => {
  return (
    <>
      <h1>{props.student.name}</h1>
      <h2>{props.student.bio}</h2>
      <h2>Scores</h2>
      {props.student.scores.map((score, idx) =>
        <Score
          key={idx}
          score={score}
        />
      )}
    </>
  );
}

export default Student;