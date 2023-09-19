import { useRef, useState } from 'react';

const UseRef = () => {
  const firstName = useRef();
  const lastName = useRef();

  const displayFullNameRef = useRef();

  const handleClick = () => {
    console.log(firstName);
    const fullname = firstName.current.value + ' ' + lastName.current.value;
    displayFullNameRef.current.innerHTML = fullname;
  };

  const [fn, setFn] = useState();
  const [ln, setLn] = useState();

  return (
    <>
      <div className="alert alert-primary" role="alert">
        <b>useRef</b> digunakan untuk mengakses DOM node dalam sebuah komponen.!
      </div>
      <div className="card col-6">
        <div className="card-body">
          <div className="alert alert-info">Uncontrolled Component</div>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">First Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstname"
                  ref={firstName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Last Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last Name"
                  ref={lastName}
                />
              </div>
            </div>
          </form>
          <button className="btn btn-primary" onClick={handleClick}>
            Simpan
          </button>
        </div>
        <div className="alert alert-info">
          Nama Lengkap Saya: <span ref={displayFullNameRef}></span>
        </div>
      </div>

      <div className="card col-6">
        <div className="card-body">
          <div className="alert alert-info">Controlled Component</div>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">First Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstname"
                  onChange={(e) => setFn(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Last Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last Name"
                  onChange={(e) => setLn(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="alert alert-info">
          Nama Lengkap Saya:{' '}
          <span>
            {fn} {ln}
          </span>
        </div>
      </div>
    </>
  );
};

export default UseRef;
