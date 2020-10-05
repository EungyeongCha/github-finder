import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>{repo.description}</p>
      <div className='card flex '>
        <div className='badge badge-light'>Forks: {repo.forks}</div>
        <div className='badge badge-light'>Watchers: {repo.watchers}</div>
        <div className='badge badge-light'>Language: {repo.language}</div>
        <div className='badge badge-dark'>
          {' '}
          <a href={repo.html_url} target='_blank' className='aText'>
            See the repo
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
