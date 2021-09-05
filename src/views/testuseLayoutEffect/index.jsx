import React, { useLayoutEffect, useState, useEffect } from 'react';
import Home from '../component/home';
import './index.css';

const count = 100;
const sleep = async(time) => {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(true);
    }, time);
  });
};

export default function() {
  const [className, setClassName] = useState('red');

  // 打开先看到red，要等console输出完，才能看到green
  useEffect(async() => {
    await sleep(2000);
    setClassName('green');
  }, []);

  // 打开要等console输出完，才能看到green
  useLayoutEffect(async() => {
    await sleep(2000);
    setClassName('red');
  }, []);

  return (
    <div className={className}>
      <h1>n: {1}</h1>
      <button onClick={() => {}}>Click</button>
    </div>
  );
}
