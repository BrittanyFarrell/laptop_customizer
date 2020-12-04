import React from 'react'

export default  class DefiningSummary extends React.Component {
    render() {
        let returnMe = Object.keys(this.props.selectedKeys).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selectedKeys[feature];
    
            return <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {this.props.currencies.format(selectedOption.cost)}
                </div>
            </div>;
        });
        return returnMe
    }
  }