import React, { useContext } from 'react';
import Home from './components/home/Home';
import Container from './components/Container';
import Contact from './components/contact/Contact';
import CustomCursor from './components/CustomCursor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import PreviewImage from './components/projects/PreviewImage';
import { Contexts } from './context/ContextApi';
import Learning from './components/learning/Learning';

export default function App() {
  const { imgUrl } = useContext(Contexts)
  return (
    <main className='w-full relative h-full flexCenter flex-col'>
      {imgUrl.isOpenPreviewImage && <PreviewImage imgurl={imgUrl} />}
      <Container>
        <CustomCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dailylearning" element={<Learning />} />
          </Routes>
          <Contact />
          <Footer />
        </BrowserRouter>
      </Container>
    </main>
  )
}
