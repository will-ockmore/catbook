import React from 'react';
import { List, Map } from 'immutable';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export const CatCard = ({ cat }) =>
  <div className="card">
    <img className="avatar" src={cat.get('avatar')} alt="poster" />
    <div className="text-content pd-2">
      <h2>{cat.get('name')}</h2>
      <div className="description pd-2">{cat.get('about')}</div>
    </div>
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
