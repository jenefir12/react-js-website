import React,{useState} from 'react'

const Contact = () => {
    const[text,setText] = useState({
        fname:'',
        number:'',
        email:'',
        budget:'',
    });
    const inputValue = (e) => {
        const{name,value} = e.target;
        setText((preValue) => {
            return{
                ...preValue,
                [name]:value,
            }
        })
    }
    const myFunction = async (e) => {
        e.preventDefault();
        const {fname,number,email,budget} = text;
        if(fname && number && email && budget)
        {
        const res = await fetch('https://reactproject-8583f-default-rtdb.firebaseio.com/userDataRecord.json',{
            method:'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                fname,
                number,
                email,
                budget
            })
        });
        if(res){
            alert('Data Stored');
            setText({
                fname:"",
                number:"",
                email:"",
                budget:""
            });
        }
        else{
            alert('Please filled the form');
        }
    }else{
        alert('Please filled the form');
    }
}
    return (
        <>
        <h3 className="text-center mt-5 pt-4">Contact Us</h3>
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2>IT PROFESSIONALS ARE WAITING FOR YOU!</h2>
                    <p>Contact us today to find out how we can support your brand needs.</p>
                    <p>VIEW OUR LATEST PORTFOLIO</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <p>Android Application Digital</p>
                            <p>Desktop Applications</p>
                            <p>Web Developments</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <p>Marketing & SEO</p>
                            <p>Data Science</p>
                            <p>Graphics</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2>CONNECT WITH OUR EXPERTS</h2>
                    <p>We respond to 97% of messages within 1-2 business Days Exactly.!</p>
                    <form method="POST">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label>Name <span style={{color:'red'}}>*</span></label>
                                <input required="fname" type="text" name="fname" value={text.fname} onChange={inputValue} className="form-control" placeholder="Enter Your Name" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label>Number <span style={{color:'red'}}>*</span></label>
                                <input type="text" required="number"  name="number" value={text.number} onChange={inputValue} className="form-control" placeholder="Enter Your Number" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label>Email <span style={{color:'red'}}>*</span></label>
                                <input type="text" required="email" name="email" value={text.email} onChange={inputValue} className="form-control" placeholder="Enter Your Email"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label>Budget <span style={{color:'red'}}>*</span></label>
                                <input type="text" name="budget" required="budget" value={text.budget} onChange={inputValue} className="form-control" placeholder="Enter Your Budget"/>
                            </div>
                        </div>
                        <div className="row">
                            <label>Description</label>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Enter Your Description" />
                            </div>
                        </div>
                        {/* <h3>{finalText}</h3> */}
                        <div className="row mt-3">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <button className="btn btn-outline-success"onClick={myFunction}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
