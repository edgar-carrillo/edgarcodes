import React, { useState } from 'react';
import Head from 'next/head'

// Assets
import rumbleData from '../../assets/projectData/rumble';

// Components
import StyledContainer from '../../components/Container';
import StyledNavCont from '../../components/NavBar/NavBar';
import StyledHeroPage from '../../components/SingleProject/HeroPage';
import StyledStatementCont from '../../components/SingleProject/StatementCont';
import StyledSkillsPage from '../SkillsPage';
import StyledImgs from '../../components/SingleProject/Imgs';
import StyledMoreImgs from '../../components/SingleProject/MoreImgs';
import StyledContactForm from '../../components/Form/ContactForm';
import StyledFooter from '../../components/Footer';

function RumbleProjectPage () {
  const [data] = useState(rumbleData);

  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
      <StyledHeroPage data={data.hero}/>
      <StyledStatementCont
        title="Purpose and Goal"
        reverse
        imgData={{
          src: data.purpose.imgSrc,
          alt: data.purpose.alt,
        }}
        paragraphsArr={data.purpose.paragraphsArr}
        cover={data.purpose.cover}
      />
      <StyledSkillsPage
        title="Tech Stack and Explanation"
        skillsArr={data.skills.skillsArr}
        paragraphsArr={data.skills.paragraphsArr}
      />
      <StyledStatementCont
        centered
        title="Problem Statement"
        paragraphsArr={data.problem.paragraphsArr}
      />
      <StyledImgs imgsArr={data.pictures.arr} row />
      <StyledStatementCont
        title="Lessons and Outcomes"
        paragraphsArr={data.lessons.paragraphsArr}
        left
      />
      <StyledImgs imgsArr={data.pictures2.arr} />
      <StyledStatementCont
        title="What's Next?"
        paragraphsArr={data.whatsNext.paragraphsArr}
        left
      />
      <StyledMoreImgs imgsArr={data.altProjects} />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default RumbleProjectPage;
