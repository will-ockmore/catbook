import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { meow, deleteCat } from '../../actions/actions';

import CatList from '../presentational/CatList';


export class CatsContainer extends React.PureComponent {

  render() {
    const { cats } = this.props;

    return (
      <CatList
        cats={cats}
        meow={this.props.meow}
        deleteCat={this.props.deleteCat}
      />
    );
  }
}

CatsContainer.propTypes = {
  cats: React.PropTypes.instanceOf(List).isRequired,
  meow: React.PropTypes.func.isRequired,
  deleteCat: React.PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  return {
    cats: state.cats,
  };
}

export default connect(
  mapStateToProps,
  {
    meow,
    deleteCat
  }
)(CatsContainer);
