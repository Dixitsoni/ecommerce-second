import DefaultLayout from '@/app/defaultlayout'
import React from 'react'

function Signup() {
    return (
        <DefaultLayout>
            <div className='pb-5 mb-5'>
                <h2 className='text-center pt-5 pb-5'>Create Your Account</h2>
                <div className='container'>
                    <form className='row'>
                        <div class="col-lg-4 col-3 col-md-3 form-group pb-3">
                            <label for="exampleInputEmail1">First Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First name" />
                        </div>
                        <div class="col-lg-4 col-3 col-md-3 form-group pb-3">
                            <label for="exampleInputEmail1">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last name" />
                        </div>
                        <div class="form-group pb-3 col-lg-4 col-3 col-md-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group pb-3 col-lg-4 col-3 col-md-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group pb-3 col-lg-4 col-3 col-md-3">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group pb-3 col-lg-4 col-3 col-md-3">
                            <label for="exampleInputPassword1">Mobile No.</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mobile no." />
                        </div>
                        <div class="form-group pb-3 col-lg-12 col-12 col-md-3">
                            <label for="exampleInputPassword1">Address</label>
                            <textarea rows={5} class="form-control" id="exampleInputPassword1" placeholder="Address"></textarea>
                        </div>
                        {/* <div class="form-check col-lg-12 col-12 col-md-6">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                        <div className='text-center'>
                            <button type="submit" class="btn btn-primary mt-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Signup