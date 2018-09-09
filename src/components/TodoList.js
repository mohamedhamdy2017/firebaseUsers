import React, { Component } from 'react';
import _ from 'lodash';
import { ListView  } from 'react-native';
import { connect } from 'react-redux';
import {fetchUser} from '../actions' ;
import ListItem from './ListItem';


class TodoList extends Component {

    componentWillMount(){
        this.props.fetchUser();
        this.createDataSource(this.props)
    }   

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource ({fetchs}) {
        const ds = new ListView.DataSource ({
            rowHasChanged: (r1, r2 ) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(fetchs)
    }

    renderRow(user){
      return <ListItem user = {user}
     
     />
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
                
            />
        );  
    }
}

const mapStateToProps = state => {
    const fetchs = _.map(state.fetchs, (val , uid) => {
    return {...val,uid}
    }); 
    return {fetchs};
}

export default connect (mapStateToProps, {fetchUser}) (TodoList);   