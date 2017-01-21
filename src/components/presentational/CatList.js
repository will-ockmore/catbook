import React from 'react';
import { List, Map } from 'immutable';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export const CatCard = ({ cat }) =>
  <div className="card">
    <h4>{cat.get('name')}</h4>
    <span>{cat.get('about')}</span>
  </div>;

CatCard.propTypes = {
  cat: React.PropTypes.instanceOf(Map).isRequired,
};

export const CatList = ({ cats }) =>
  <CSSTransitionGroup
    className="card-container"
    transitionName="card-anim"
    transitionEnter={false}
    transitionLeaveTimeout={700}
  >
    {cats.map(cat =>
      <CatCard
        key={cat.get('id')}
        cat={cat}
      />
    )}
  </CSSTransitionGroup>;

CatList.propTypes = {
  cats: React.PropTypes.instanceOf(List).isRequired,
};

export default CatList;
