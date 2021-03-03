import {Button} from 'react-bootstrap';
import './Style.css';

function Registration() {
    return (
      <div className="row">
          <div className="col-lg-4">

          </div>

              <div className="col-lg-4 registerdiv">
                  <h1 className="text-center">Sign Up</h1><br/>
                  <div className="form-group">
                    <label><b>Name<span className='text-danger'>*</span></b></label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                </div>

                <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label><b>Email<span className='text-danger'>*</span></b></label>
                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                </div>

                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
                
                <div className="form-group">
                    <label><b>Date of Birth<span className='text-danger'>*</span></b></label>
                    <input type="date" className="form-control" />
                </div>

                <div className="form-group">
                    <label><b>Qualification<span className='text-danger'>*</span></b></label>
                    <br/>
                    <input type="checkbox" value="10th" /> 10th{' '}
                    <input type="checkbox" value="12th" /> 12th{' '}
                    <input type="checkbox" value="Gradution" /> Gradution{' '}
                    <input type="checkbox" value="Post-Gradution" /> Post-Gradution{' '}
                </div>
                
                <div className="form-group">
                    <label><b>Select City<span className='text-danger'>*</span></b></label>
                    <br />
                        <select class="form-control">
                            <option>Pune</option>
                            <option>Kolhapur</option>
                            <option>Nashik</option>
                        </select>
                </div>
                    <br />
                <div className="form-group">
                    <Button className="btn btn-primary mx-auto d-block">Submit</Button>
                </div><br /><hr />

                <h1 className="text-center">Sign In</h1><br/>
               <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" />

                </div>
                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />

                </div>
                <div className="form-group">
                    <Button className="btn btn-primary mx-auto d-block">Login</Button>
                </div>

              <div className="col-lg-4">

              </div>
          </div>
       
      </div>
    );
  }
  
  export default Registration;