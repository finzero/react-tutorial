import { createContext, useContext } from 'react';

const MyContext = createContext();

// akan di render sebagai child dari component Child 1
const GrandChild1 = () => {
  const data = useContext(MyContext);
  console.log('grandchild', data);
  return (
    <div className="card">
      <div className="card-body">GrandChild1: {data}</div>
    </div>
  );
};

// akan di render sebagai child dari component Parent
const Child1 = () => {
  return (
    <div className="card bg-primary">
      <div className="card-body">
        Child1
        <GrandChild1 />
      </div>
    </div>
  );
};

// akan di render sebagai child dari component Parent
const Child2 = () => {
  const data = useContext(MyContext);
  return (
    <div className="card bg-info">
      <div className="card-body">Child2: {data}</div>
    </div>
  );
};

const Parent = () => {
  const untukGrandChild1 = 'ini data untuk di bagi';
  return (
    <MyContext.Provider value={untukGrandChild1}>
      Parent Component
      <Child1 />
      <Child2 />
    </MyContext.Provider>
  );
};

const UseContext = () => {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        <b>useContext</b> adalah salah satu hook react yang digunakan untuk
        berbagi data antar komponen, dengan useContext kita dapat menghindari{' '}
        <a
          data-toggle="collapse"
          href="#propDrilling"
          role="button"
          aria-expanded="false"
          aria-controls="propDrilling"
        >
          <b>Prop Drilling</b>
        </a>
        <div className="collapse" id="propDrilling">
          <div className="card card-body">
            Prop drilling adalah sebuah kasus di mana Anda harus melewati prop
            (properties) melalui beberapa lapisan komponen dalam hierarki
            komponen, meskipun komponen-komponen tersebut tidak perlu
            menggunakan prop tersebut.
          </div>
        </div>
      </div>
      <Parent />
    </>
  );
};

export default UseContext;
