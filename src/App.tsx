import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './page/MainPage';
import CommunityPage from './page/CommunityPage';
import MovingServicePage from './page/MovingServicePage';
import MyPage from './page/Mypage';
import MenuPage from './page/MenuPage';
import SplashPage from './page/SplashPage';
import Layout from './component/Common/Layout';
import styled from '@emotion/styled';
import Footer from './component/Common/Footer';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { 
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Wrapper>
      <Layout>
        {  
          isLoading ? <SplashPage /> : (
            <Container>
              <Router>
                <Suspense fallback={<div>Loading..</div>} >
                  <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/community' element={<CommunityPage />} />
                    <Route path='/moving-service' element={<MovingServicePage />} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/menu' element={<MenuPage />} />
                  </Routes>
                </Suspense>
              <Footer />
              </Router>
            </Container>
          )
        }
      </Layout>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;