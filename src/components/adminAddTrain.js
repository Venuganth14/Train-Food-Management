import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';

export default  class AdminAddTrain extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeArrivalTime = this.onChangeArrivalTime.bind(this);
        this.onChangeDeparcherTime = this.onChangeDeparcherTime.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            arrival: '',
            deparcher:'',
            station:''
        }

        this.state.station = this.props.match.params.id;
    }
    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }
    onChangeArrivalTime(e){
        this.setState( {
            arrival: e.target.value
        });
    }
    onChangeDeparcherTime(e){
        this.setState( {
            deparcher: e.target.value
        });
    }
    onChangeStation(e){
        this.setState( {
            station: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            arrival : this.state.arrival,
            deparcher : this.state.deparcher,
            station : this.state.station
        };

       
       
                        axios.post('http://localhost:4000/trainFoodAdmin/adminaddtrain',obj)
                        .then(res => {
                            alert("Train Add Successfully");
                            this.setState({
                                name :'',
                                arrival :'',
                                deparcher :'',
                                station:''
                    
                            })
                            console.log(res.data)});
                        // this.props.history.push('/signIn');
                        window.location.replace('/adminviewtrain/'+this.state.station);
                    
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

                        {/* <div className='inner-menu'>
                            <a href={"/adminhome/"+this.props.match.params.id}>Terms & Condition</a>
                            <a href={"/adminhome/"+this.props.match.params.id}>Setting</a>
                            <a href={"/adminhome/"+this.props.match.params.id}>More</a>
                        </div> */}
                </div>

                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Add New Train</h3>
                        <hr/>
                        <br/>
                         <center>
                            <img src = "https://us.123rf.com/450wm/cgart/cgart2208/cgart220800001/190362170-passenger-train-rides-along-the-scenic-route-vector-illustration.jpg?ver=6" width ="300" height="180"/>
                         </center>
                        <br/>
                        <hr/>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Train Name :</label>
                                <input type ="text" required  className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Arrival Time :</label>
                                <input type ="time" required className="form-control" value={this.state.arrival} onChange = {this.onChangeArrivalTime}/>
                            </div>
                            <div className="form-group">
                                <label>Deparcher :</label>
                                <input type ="time" required className="form-control" value={this.state.deparcher} onChange = {this.onChangeDeparcherTime}/>
                            </div>
                            <div className="form-group">
                                <label>Station :</label>
                                <input type ="text" readOnly value={this.state.station} onChange = {this.onChangeStation} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Add Train" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <hr/>
                    <Footer/>
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}