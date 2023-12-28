interface Props {
  name: string;
}

function Greeting({ name }: Props) {
  let mainName = "Bob";
  const style = {
    marginTop: `35px`,
    border: `1px solid green`,
    padding: `10px 15px 10px 15px`,
  };
  const style2 = {
    border: `3px red`,
    backgroundColor: `lightpink`,
    padding: `10px 15px 10px 15px`,
  };
  return (
    <>
      {name === mainName ? (
        <h1 style={style}>Hello Bob</h1>
      ) : (
        <h1 style={style2}>Guests are Welcomed</h1>
      )}
    </>
  );
}
export default Greeting;
