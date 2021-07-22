import React from 'react';
import RouteConfig from '@/routes/RouteConfig';
import { useDidMount } from 'hooooks';
import 'antd/dist/antd.css';
import './app.less';

// const VConsole = require("vconsole/dist/vconsole.min.js");
// const v = new VConsole();

const App: React.FC = () => {
  useDidMount(() => {
    console.info('启动');
  });

  return <div className="lego"><RouteConfig /></div>;
};

export default App;
