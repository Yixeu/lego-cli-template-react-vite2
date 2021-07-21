/*
 * @Author:
 * @Date: 2021-07-21 14:07:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-21 14:12:09
 * @Description:
 */
import React, { FC } from 'react';

interface IProps {
  title: string
}

const ComponentHead: FC<IProps> = ({ title }) => <div>{title}</div>;

export default ComponentHead;
