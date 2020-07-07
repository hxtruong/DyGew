/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classnames from 'classnames';
import './GlobalGraphStat.scss';

class GlobalGraphStat extends Component {
    render() {
        const { className } = this.props;
        const grapStats = [
            {
                attributeName: 'node',
                value: 12,
            },
            {
                attributeName: 'edge',
                value: 334,
            },
            {
                attributeName: 'avg degree',
                value: 65,
            },
        ];
        return (
            <div className={classnames('globalGraphStat', className)}>
                {grapStats &&
                    grapStats.map((stat, index) => (
                        <div
                            className="globalGraphStat__item"
                            key={`stat_${index}`}
                            style={{
                                display: 'flex',
                            }}
                        >
                            <p style={{ fontWeight: 'bold' }}>{stat.attributeName}: &nbsp;</p>
                            <p>{stat.value}</p>
                        </div>
                    ))}
            </div>
        );
    }
}

export default GlobalGraphStat;
