import React, { Component } from 'react';

export default class CrimeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getCrimeDetails() {
        return this.props.person.crimes.map(crime => {
            let key = 'crime_' + Math.random() + this.props.person.name.replace(' ', '_').toLowerCase();

            let crimeDetails = Object.keys(crime).map(function(prop_name) {
                return (<li key={Math.random()}>
                            {prop_name.replace('_', ' ')}:
                            <strong>{crime[prop_name]}</strong>
                        </li>);
            });

            return <ul className="crime" key={key}>{crimeDetails}</ul>;
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
                <h1>{this.props.list.heading}:</h1>
                <div className="list-heading">
                    <span>{this.props.person.name}</span>
                </div>
                {this.props.person.photo !== '' ? <img src={this.props.person.photo} /> : ''}
                {this.props.person.mugshot !== '' ? <img src={this.props.person.mugshot} /> : ''}
                {this.props.person.mugshot2 !== '' ? <img src={this.props.person.mugshot2} /> : ''}
                <ul className="bio-details">
                    {this.props.person.aka ? <li>AKA: <strong>{this.props.person.aka}</strong></li> : ''}
                    {this.props.person.known_for ? <li>Known For: <strong>{this.props.person.known_for}</strong></li> : ''}
                    {this.props.person.dob ? <li>Date of Birth: <strong>{this.props.person.dob}</strong></li> : ''}
                    {this.props.person.height ? <li>Height: <strong>{this.props.person.height}</strong></li> : ''}
                    {this.props.person.weight ? <li>Weight: <strong>{this.props.person.weight}</strong></li> : ''}
                </ul>
                {this.getCrimeDetails()}
                <div className="list-sub-heading">Sources</div>
                {this.getSources()}
            </div>
        );
    }


}