import React from 'react';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Jéssica Gama</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage/> */}

      {/* <BottomMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>

      </BottomMenu> */}
    </Container >
  );
}

export default Main;