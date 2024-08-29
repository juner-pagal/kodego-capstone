import React, { Component } from 'react'
import axios from 'axios';
import AppURL from '../api/AppURL';

class TeamMembers extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get(AppURL.TeamMembers).then(response => {
            this.setState({data:response.data});
        }).catch(error => {
           
        });
    }
  render() {
    const {data} = this.state;
    return (
        <div className='justify-content-center p-5'>
            <div className='row'>
                {data.map(item => (
                    
                    <div className="card px-2 mx-auto" style={{width:"18rem"}}>
                    <div className="h-100">
                        <img src={item.image} className="card-img-top mt-1" alt={item.title}/>
                        <div className="card-body">
                            <p className='fs-3 text-center' style={{backgroundColor:"#EBE9E9"}}>{item.name}</p>
                            <p className='fs-4 text-center'>{item.position}</p>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                    </div>))
                }
            </div>
        </div>
    )
  }
}

export default TeamMembers;
