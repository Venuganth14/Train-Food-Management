import  React, {Component} from 'react';
import axios from 'axios'
import TrainTableRow from './adminTrainTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class AdminViewTrain extends  Component{


    constructor(props) {
        super(props);
        this.state = {trains : [], search:''};
        this.state.Station = this.props.match.params.id;

        //const Email = this.props.match.params.id;
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }
    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFoodAdmin/admintrain/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({trains : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.trains.map(function (object, i){
            return <TrainTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <a href= {"/adminhome/"+this.props.match.params.id}>Home</a>
                        <a href={"/adminadddeliver/"+this.props.match.params.id}>Add Deliver</a>
                        <a href={"/adminviewdeliver/"+this.props.match.params.id}>View Deliver</a>
                        <a href={"/adminaddtrain/"+this.props.match.params.id}>Add Train</a>
                        <a href={"/adminviewTrain/"+this.props.match.params.id}>View Train</a>
                        <a href={"/adminaddfood/"+this.props.match.params.id}>Add Food</a>
                        <a href={"/adminviewfood/"+this.props.match.params.id}>View Food</a>
                        <a href={"/adminhome/"+this.props.match.params.id}>Contact Us</a>
                        <a href={"/adminhome/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Fast Food</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminsearchtrain/"+this.state.search+"/"+this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Your Train(s)</h3>
                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>Train Name</th>
                                    <th>Arrival Time</th>
                                    <th>Deparcher time</th>
                                    <th>Station</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        <br/><br/><br/>       
                        <hr/>                 
                        <div className='top-footer'>
                            <div className='col-img'>
                                <img src = "https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways-770x433.jpg?impolicy=website&width=770&height=431" width="400"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Ruhunu Kumari</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://www.timeforkids.com/wp-content/uploads/2020/02/feature-cover_-train-k1.jpg" width="475"/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Udarata Menike</h4>
                               
                            </div>
                            <div className='col-img'>
                                <img src = "https://static.toiimg.com/thumb/msid-68664756,width-400,resizemode-4/68664756.jpg" width="" height=""/>
                                <br/><br/>
                                <h4 style={{textAlign:'center'}}>Yal Dewi</h4>
                            </div>
                            
                        </div>
                        
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