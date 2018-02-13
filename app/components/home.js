import React, { Component } from 'react';
import CrimeDetails from './detail';
import PoliticiansList from './../lists/politicians.json';
import MeTooList from './../lists/me-too.json';
import AthletesList from './../lists/athletes.json';
import ActorsList from './../lists/actors.json';
import MusiciansList from './../lists/musicians.json';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCrimeDetails: false,
            person: null,
            list: null
        };

        this.viewCrimeDetails = this.viewCrimeDetails.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }

    getListItems(list) {
        return list.people.map(person => {
            return <li key={person.name.replace(' ', '_').toLowerCase()}>
                        <span onClick={()=> this.viewCrimeDetails(event, person, list)}>
                            {person.aka ? person.aka : person.name}
                        </span>
                       <a onClick={()=> this.viewCrimeDetails(event, person, list)}>View</a>
                   </li>;
        });
    }

    viewCrimeDetails(event, person, list)
    {
        event.preventDefault();

        this.setState({
            showCrimeDetails: true,
            person: person,
            list: list
        });
    }

    backToHome(event) {
        this.setState({showCrimeDetails: false});
    }

    render() {
        return (
            <div>
                <div id="logo" onClick={this.backToHome}>Celeb Crime Finder</div>
                {this.state.showCrimeDetails ?
                    <React.Fragment>
                        <div id="content">
                            <div className="back-to-home" onClick={this.backToHome}>Back</div>
                            <CrimeDetails
                                person={this.state.person}
                                list={this.state.list}
                            />
                        </div>
                    </React.Fragment>

                    :
                    <React.Fragment>
                        <img id="main-image" src="images/shutterstock_752231824.jpg" />
                        <div id="content">
                            <div className="list-preview">
                                <div className="list-heading">
                                    <span>{ActorsList.heading}</span>
                                </div>
                                <ul>
                                    {this.getListItems(ActorsList)}
                                </ul>
                            </div>
                            <div className="list-preview">
                                <div className="list-heading">
                                    <span>{MeTooList.heading}</span>
                                </div>
                                <ul>
                                    {this.getListItems(MeTooList)}
                                </ul>
                            </div>
                            <div className="list-preview">
                                <div className="list-heading">
                                    <span>{PoliticiansList.heading}</span>
                                </div>
                                <ul>
                                    {this.getListItems(PoliticiansList)}
                                </ul>
                            </div>
                            <div className="list-preview">
                                <div className="list-heading">
                                    <span>{AthletesList.heading}</span>
                                </div>
                                <ul>
                                    {this.getListItems(AthletesList)}
                                </ul>
                            </div>
                            <div className="list-preview">
                                <div className="list-heading">
                                    <span>{MusiciansList.heading}</span>
                                </div>
                                <ul>
                                    {this.getListItems(MusiciansList)}
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>

                }

            </div>
        );
    }


}