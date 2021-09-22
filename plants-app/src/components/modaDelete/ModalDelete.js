import React, { Component } from 'react';
import logo from '../Logo.js'
import './ModalDelete.scss'

class DeleteModal extends Component {
    constructor(props){
        super(props)
        this.deleteRoute = this.deleteRoute.bind(this)
        this.cancelDelete = this.cancelDelete.bind(this)
    }
    cancelDelete(){
        this.props.cancelDelete(this.props.delete)
    }
    deleteRoute(){
        this.props.deleteRoute(this.props.delete)
    }
    render(){
        console.log(this.props.delete)
        return(
            <div className='modal' className={this.props.delete ? 'modal modal-show' : 'modal'}>
            <div className='delete-modal-contnet'>
            <h4>Are you sure you want to delete this?</h4>
            < logo.Plant />
            <div className='confirm-delete'>
                <button onClick={this.deleteRoute}>yes</button>
                <button onClick={this.cancelDelete}>no</button>
            </div>
            </div>
        </div> 

        )
    }


}
export default DeleteModal
