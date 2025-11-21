import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import DairyList from '../components/DiaryList';

const Home = () => {
  return (
    <div>
      <Header
        title="2025년 11월"
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DairyList />
    </div>
  );
};

export default Home;
