import React from 'react';
import { FullScreenViewportContainer } from '../common';

export const Error = props => {
  return (
    <FullScreenViewportContainer>
      <div>
        <h3>An error occured, please try again later...</h3>
        <p>{'Message: ' + props.message}</p>
      </div>
    </FullScreenViewportContainer>
  );
};
