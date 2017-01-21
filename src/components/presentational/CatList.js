import React from 'react';
import { List, Map } from 'immutable';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from '../../images/images';


export const CatCard = ({ cat, meow, deleteCat }) =>
  <div className="card">
    <img className="avatar" src={cat.get('avatar')} alt="poster" />
    <div className="text-content pd-2">
      <h2>{cat.get('name')}</h2>
      <div className="description pd-2">{cat.get('about')}</div>
    </div>
    <div className="profile-controls">
      <div className="control-col">
        <Icon type="exit" onClick={() => deleteCat(cat.get('id'))} />
        <div className="control-col">
          <span className="pd-2"> {!!cat.get('meows') && cat.get('meows')}</span>
          <Icon onClick={() => meow(cat.get('id'))} type="paw" />
        </div>
      </div>
    </div>
  </div>;

CatCard.propTypes = {
  cat: React.PropTypes.instanceOf(Map).isRequired,
  meow: React.PropTypes.func.isRequired,
  deleteCat: React.PropTypes.func.isRequired,
};

export const CatList = ({ cats, meow, deleteCat }) =>
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
        meow={meow}
        deleteCat={deleteCat}
      />
    )}
  </CSSTransitionGroup>;

CatList.propTypes = {
  cats: React.PropTypes.instanceOf(List).isRequired,
  meow: React.PropTypes.func.isRequired,
  deleteCat: React.PropTypes.func.isRequired,
};

export default CatList;
