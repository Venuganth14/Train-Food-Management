import  React, {Component} from 'react';
import axios from 'axios'
import SearchOrderTableRow from './cusSearchOrderTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class SearchMyOrders extends  Component{


    constructor(props) {
        super(props);

        this.state = {
            orders : []
        }
       
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFood/mysearchorders/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({orders : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.orders.map(function (object, i){
            return <SearchOrderTableRow obj = {object} key = {i}/>;
        });
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <a href= {"/index/" +this.props.match.params.pathParam2}>Home</a>
                        <a href={"/myorder/" +this.props.match.params.pathParam2}>My Orders</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href={"/cusprofile/"+this.props.match.params.pathParam2}>Profile</a>
                        <a href="/">SignOut</a>

                        <div className='inner-menu'>
                            <a href="/signin">Terms & Condition</a>
                            <a href="/about">Setting</a>
                            <a href="/contact">More</a>
                        </div>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Fast Food</h2>
                            <from style ={{float:'right',display:'flex',gap:5}}>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/myorder/"+this.props.match.params.pathParam2} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/>
                        <h3 align="center">Search Result</h3>

                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>FoodName</th>
                                    <th>TrianName</th>
                                    <th>Station</th>
                                    <th>QTY</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Phone Number</th>
                                    <th>eMail</th>
                                    <th>Payment</th>
                                    <th>DeliveryBy</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        <br/><br/><br/>       
                        <hr/>   
                        <br/>
                        <hr/>
                        <Footer/>
                        <hr/>
                        <br/>
                        </div>
                </div>
        );
    }
}