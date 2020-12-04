import React from 'react'
import slugify from 'slugify';

export default class DefiningFeatures extends React.Component {
    render() {
        let returnMe = Object.keys(this.props.theseFeatures).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.theseFeatures[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selectedKeys[feature].name}
                    onChange={e => this.props.thisThis.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.currencies.format(item.cost)})
                  </label>
                </div>
              );
            });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

            return returnMe
    }
} 