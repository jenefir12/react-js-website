import React from 'react'

const Button = ({filterItems,myFunction,setCat}) => {
    return (
        <>
          <div className="container-fluid">
                <div className="row">
                    <div className="col-lg4">
                        {
                            setCat.map((curCate,index) => {
                                return(
                                    <button key={index} className="btn btn-danger" onClick={()=>{
                                        filterItems(curCate)
                                    }}>{curCate}</button>
                                )
                            })
                        }
                    </div>
                    {/* <div className="col-lg4">
                    <button className="btn btn-success" onClick={()=>{
                        filterItems('vegeta')
                    }}>Vegeta</button>
                    </div>
                    <div className="col-lg4">
                    <button className="btn btn-primary" onClick={myFunction}>See All</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Button
