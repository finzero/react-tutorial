import { useRef } from 'react';

const UseRef = () => {
  const firstName = useRef();
  const lastName = useRef();

  const displayFullNameRef = useRef();

  const handleClick = () => {
    const fullname = firstName.current.value + ' ' + lastName.current.value;
    displayFullNameRef.current.innerHTML = fullname;
  };

  return (
    <>
      <div className="alert alert-primary" role="alert">
        <b>useRef</b> digunakan untuk mengakses DOM node dalam sebuah komponen.!
      </div>
      <div className="card col-6">
        <div className="card-body">
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
    </>
  );
};

export default UseRef;
