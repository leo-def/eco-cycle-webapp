import { ReactChild, ReactChildren } from 'react';

export interface ReactProps {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}