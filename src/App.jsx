import React, { useEffect, useState } from 'react';
import { AppWrapper, GlobalStyle } from './App.styled';
import { supabase } from './supabaseClient';
import ThemeProvider from './components/app/ThemeProvider/ThemeProvider';
import Page from './components/app/Page/Page';
// import Auth from './components/Auth';
// import Account from './components/Account';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AppWrapper>
      <ThemeProvider>
        <GlobalStyle />
        <Page />
        {/* {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )} */}
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
