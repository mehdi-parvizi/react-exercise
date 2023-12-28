import people from "./Data";
function ImageTraining() {
  const chemists = people.filter((person) => person.profession === `chemist`);
  return (
    <>
      <ul>
        {chemists.map((scientist) => (
          <li className="list-group-item btn btn-danger" key={scientist.id}>
            {scientist.name + `is known for ` + scientist.accomplishment}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageTraining;
