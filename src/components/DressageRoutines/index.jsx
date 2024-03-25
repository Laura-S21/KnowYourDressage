import RoutinesList from '../../data/routinesList'

const DressageRoutines = ({ routinesNames }) => {
    return (
      <div>
        <h2>{RoutinesList.level}</h2>
        <ul>
          {routinesNames.map((routine, index) => (
            <li key={index}>{routine}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DressageRoutines;