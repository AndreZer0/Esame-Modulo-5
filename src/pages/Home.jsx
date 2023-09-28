/** @format */

import React from 'react';
import MainLayout from './MainLayout';
import Context from '../context/Context';
import Welcome from '../components/jumbotron/Welcome';
import LatestRelease from '../components/main/LatestRelease';
import '.././index.css';
import CommentArea from '../components/comments/CommentArea';

const Home = () => {
  return (
    <Context>
      <MainLayout>
        <Welcome />
        <LatestRelease />
      </MainLayout>
    </Context>
  );
};

export default Home;
