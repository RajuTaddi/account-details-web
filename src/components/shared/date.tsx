import React from 'react';
import Moment from 'react-moment';

interface DateProps {
  date?: string;
  format?: string;
}

export const FormattedDate: React.FC<DateProps> = props => {
  return (
    <Moment format={props.format ? props.format : 'DD/MM/YYYY'}>
      {props.date ? props.date : Date.now()}
    </Moment>
  );
};
