// import style from './styles/index.module.scss';

import { Container, MantineProvider, Title } from '@mantine/core';
import { ListSpaseX } from '@/widgets/';

function App() {
  return (
    <MantineProvider>
      <Container
        mx="auto"
        size="lg"
        px="md"
        py="xl"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <Title order={2} style={{ textAlign: 'center' }}>
          🚀 SpaceX Launches 2020
        </Title>
        <ListSpaseX />
      </Container>
    </MantineProvider>
  );
}

export default App;
