<!--
 * @Author: 
 * @Date: 2021-07-16 18:40:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-21 19:30:36
 * @Description: 
-->
# react-vite2-template

> react-vite2-template是@lego-cli/web端模版，使用antd作为组件库，lodash作为工具库

## 模板介绍

1.路由介绍，src/routes/RouteConfig.tsx

````
const routes: IRoute[] = [
    {
        path: '/',
        Component: Home,
    },
];
 ````
    
2.全局状态管理，src/store/index.tsx

````
//  initialState 为全局对象初始化的地方
const initialState: stateType = {
    userInfo: {},
};

//  组件中使用变量及修改方式如下: 
import { Store } from "@/store";

const { state, dispatch } = useContext(Store);
const userInfo  = state.userInfo;

dispatch({
    value: {
        ...state,
        userInfo: userInfo
    }
});
    
````

## 指令介绍

*npm run build 集成了eslint 和 stylelint 的校验

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev || npm start

# build for production with minification
npm run build

# eslint 
npm run eslint

# stylelint
npm run stylelint

# preview build
npm run server
```


 ## 代码提交

 ```
feature: 开发新的功能
fix: 修复bug
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
perf: 改善性能
build: 变更项目构建或外部依赖（例如: webpack、package等）
revert: 代码回退
```

 ## 注意事项

*对于react 新人欢迎使用hooooks 工具库来理解在FC组件中如何使用hooks替代生命周期



