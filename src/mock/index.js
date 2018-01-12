import Mock from 'mockjs';
import loginAPI from './login';

import postUser from './tableList/userList';

import echarts from './listMould/echartsTest';


// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo);

//用户相关
Mock.mock(/\/table\/userList\.*/, 'post', postUser.postUserLists)
Mock.mock(/\/asd\/table\/userCount\.*/, 'post', postUser.postUserCount)

//echarts相关
Mock.mock(/\/ec\/visualDataModule\/chartsM\.*/, 'post', echarts.lineTimer)

export default Mock;
