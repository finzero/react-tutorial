// akan di render sebagai child dari component Child 1
const GrandChild1 = () => {
  return <div>GrandChild1</div>;
};

// akan di render sebagai child dari component Parent
const Child1 = () => (
  <div style={{ background: '#efefef' }}>
    Child1
    <GrandChild1 />
  </div>
);

// akan di render sebagai child dari component Parent
const Child2 = () => <div style={{ background: 'lightblue' }}>Child2</div>;

const Parent = () => {
  return (
    <>
      <Child1 />
      <Child2 />
    </>
  );
};

const UseContext = () => {
  return <Parent />;
};

export default UseContext;
