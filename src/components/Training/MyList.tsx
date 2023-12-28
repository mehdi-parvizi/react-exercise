import { Fragment, ReactNode } from "react";

interface MyCardProps {
  children: ReactNode;
}

function MyCard({ children }: MyCardProps) {
  return (
    <div className="card text-center border-3 border-danger">
      <div className="card-content">{children}</div>
    </div>
  );
}

function MyList() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  const people2 = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  const listTwoItems = people2.filter(
    (person2) => person2.profession === "chemist"
  );
  const listItems = people.map((person) => <li key={person}>{person}</li>);
  const myListTwo = listTwoItems.map((person3) => (
    <li key={person3.id}>{person3.name}</li>
  ));
  return (
    <Fragment>
      <MyCard>
        <ul className="">{listItems}</ul>
      </MyCard>
      <MyCard>
        <ul className="">{myListTwo}</ul>
      </MyCard>
    </Fragment>
  );
}
export default MyList;
