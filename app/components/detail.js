import React, { Component } from 'react';

export default class CrimeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getMugshot() {
        return  this.props.person.mugshot !== '' ? <img src={this.props.person.mugshot} /> : '';
    }

    getCrimeDetails() {
        return this.props.person.crimes.map(crime => {
            let key = 'crime_' + Math.random() + this.props.person.name.replace(' ', '_').toLowerCase();

            return <ul className="crime" key={key}>
                        {crime.crimeName ? <li>Crime: <strong>{crime.crimeName}</strong></li> : null}
                        {crime.crimeDate ? <li>Crime Year: <strong>{crime.crimeDate}</strong></li> : null}
                        {crime.chargeType ? <li>Charge Type: <strong>{crime.chargeType}</strong></li> : null}
                        {crime.crimeDescription ? <li>Crime Description: <strong>{crime.crimeDescription}</strong></li> : null}
                        {crime.sentence ? <li>Sentence: <strong>{crime.sentence}</strong></li> : null}
                        {crime.numberOfAccusers ? <li>Number of Accusers: <strong>{crime.numberOfAccusers}</strong></li> : null}
                   </ul>;
        });
    }

    getSources() {
        let sourceList = this.props.person.sources.map(source => {
            let key = 'source_' + Math.random()  + this.props.person.name.replace(' ', '_').toLowerCase();

            return <li key={key}><strong>{source}</strong></li>;
        });

        return <ul className="sources">{sourceList}</ul>;
    }

    render() {
        return (
            <div className="list">
                <div className="list-heading">
                    <span>{this.props.list.heading}: {this.props.person.name}</span>
                </div>
                {this.getMugshot()}
                {this.getCrimeDetails()}
                <div className="list-sub-heading">Sources</div>
                {this.getSources()}
            </div>
        );
    }


}