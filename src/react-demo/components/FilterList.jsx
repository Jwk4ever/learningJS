import React, { Component } from 'react';
import Filter from './Filter.jsx';

const filters = ['ALL','DONE','UNDONE'];

export default class FilterList extends Component {
    render (){
        let changeFilter = this.props.changeFilter;
        return (            
            <div>
                {
                    filters.map((item, index) => {
                        return <Filter
                                type = {item}
                                changeFilter = {changeFilter}
                                key = {index}
                            />;
                    })
                }
            </div>
        )
    }
}