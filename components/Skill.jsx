const Skill = ({ skill, porcentage }) => {
  return (
    <div className="py-3">
      <h5>{skill}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${porcentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
