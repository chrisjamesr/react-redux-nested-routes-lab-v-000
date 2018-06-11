import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/new`} component={PetsNew} />
            <Route path={`${this.props.match.url}/:petId`} component={PetsShow}/>
            <Route exact path={this.props.match.url} render={()=>
              (
                <div>
                  <div>Pets Page</div>
                  <PetsList pets={this.props.pets}/>
                </div>
             )  
            }/>
          </Switch>
        </div>
      </Router>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
