// akan di render sebagai child dari component Child 1
const GrandChild1 = () => {
  return (
    <div className="card">
      <div className="card-body">GrandChild1</div>
    </div>
  );
};

// akan di render sebagai child dari component Parent
const Child1 = () => (
  <div className="card bg-primary">
    <div className="card-body">
      Child1
      <GrandChild1 />
    </div>
  </div>
);

// akan di render sebagai child dari component Parent
const Child2 = () => (
  <div className="card bg-info">
    <div className="card-body">Child2</div>
  </div>
);

const Parent = () => {
  return (
    <>
      Parent Component
      <Child1 />
      <Child2 />
    </>
  );
};

const UseContext = () => {
  return <Parent />;
};

export default UseContext;
