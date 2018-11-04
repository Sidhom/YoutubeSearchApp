import React, { Component } from 'react';
import {connect} from 'react-redux'
import styles from '../Search/Search.css'
import * as actionCreators from '../../store/actions/actions'
class search extends Component  {
    render() {
        return (
            <div className={styles.search}>
                    <input className={styles.searchInput} value={this.props.searchValue} onChange={this.props.handleChange}  type='text' placeholder='Rechercher'>
                    </input>
            <button  className={styles.searchButton} onClick={()=> this.props.onSearch(this.props.searchValue)}>Rechercher
                </button>
           
                </div>
                )
    }

}
const mapStateToProps = state => {
    return {
        searchValue: state.searchValue
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleChange: (event) => dispatch(actionCreators.handleChange(event))
    }
}    
export default connect(mapStateToProps, mapDispatchToProps)(search)