import React from 'react';
import { FullScreenViewportContainer } from '../common';
import { Spinner } from 'reactstrap';

export const SigningIn = () => {
  return (
    <FullScreenViewportContainer>
      <div>
        <h1>Signing you in, Please wait...</h1>
        <Spinner color="info" />
      </div>
    </FullScreenViewportContainer>
  );
};
