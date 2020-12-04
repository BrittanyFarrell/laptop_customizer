import React from 'react'

export default class DefiningTotal extends React.Component {
    render() {
        return Object.keys(this.props.infoProp).reduce(
            (acc, curr) => acc + this.props.infoProp[curr].cost,
            0
          );
    }
}