/*
 * @Author: 
 * @Date: 2021-07-21 12:25:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-21 16:58:15
 * @Description: 
 */
import React, { useLayoutEffect } from 'react';
import { ComponentHead } from '@/components';
import { useDidMount } from 'hooooks';
import { _getUserInfo } from '@/api/api';
import './index.less';

const Home = () => {
  useLayoutEffect(() => {
    // 初始化获取数据
    //  getData()
  }, []);

  const getData = async () => {
    try {
      const res = await _getUserInfo({
        account: 'admin',
        pwd: '123456',
      });
    } catch (e) {
      console.error('1123');
    }
  };

  return (
    <div className="home-page">
      <ComponentHead title=" Welcome to use lego-cli !" />
    </div>
  );
};

export { Home };
export default Home;
