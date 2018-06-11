import React, { Component } from 'react'
import Twit from './Twit'
import { connect } from 'react-redux'
import { sortByDate, sortByPostLength } from '../../action/twits'

class TwitGrid extends Component {

    state = {
        data: this.props.twits
    }

    render() {

        const { data } = this.state
        const {sortByDate, sortByPostLength} = this.props

        return (
            <div>
                <button onClick={() => sortByDate(data)}>Sort by Date</button>
                <button onClick={() => sortByPostLength(data)}>Sort by Post Length</button>
                {data.map(e=> (
                    <Twit
                        name={e.name}
                        post={e.post}
                        date={e.date}
                        key={new Date(e.date)}
                    />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
   return {
       twits: state
   }
}

export default connect(mapStateToProps, {sortByDate, sortByPostLength})(TwitGrid);