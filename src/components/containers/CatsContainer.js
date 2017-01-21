import React from 'react';
import { connect } from 'react-redux';
import { List, fromJS } from 'immutable';

import CatList from '../presentational/CatList';


export class CatsContainer extends React.PureComponent {

  render() {
    const { cats } = this.props;

    return <CatList cats={cats} />;
  }
}

CatsContainer.propTypes = {
  socket: React.PropTypes.object.isRequired,
  cats: React.PropTypes.instanceOf(List).isRequired,
};

export function mapStateToProps(state) {
  return {
    cats: state.cats,
  };
}

export default connect(mapStateToProps)(CatsContainer);
