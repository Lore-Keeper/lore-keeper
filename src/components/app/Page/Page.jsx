import React from 'react';
import Button from '@mui/material/Button';
import { PageMain } from './Page.styled';

const Page = ({ children }) => {
  return (
    <PageMain>
      <>
        {' '}
        <h1>Here's an element with the app wrapper in place</h1>
        <Button variant='contained'>this is a mui material button</Button>
        {children}
      </>
    </PageMain>
  );
};

export default Page;
