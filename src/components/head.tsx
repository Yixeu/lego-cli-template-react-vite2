import React, { FC } from 'react';

interface IProps {
  title: string
}

const ComponentHead: FC<IProps> = ({ title }) => <div>{title}</div>;

export default ComponentHead;
