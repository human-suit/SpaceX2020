// import style from './styles/index.module.scss';
import { reducer, initialState } from '@/entities/model/startSpaceX/reducer';
import { Box, Container, Flex, MantineProvider, Title } from '@mantine/core';
import { Modal, Card } from '@shared/ui/';
import { useEffect, useReducer, useState } from 'react';
import type { itemSpaseX } from '@/entities/model/startSpaceX/types';
import DefoltImg from '../shared/assets/notYeat.jpg';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<itemSpaseX | null>(null);

  const { search, dataSpaceX, loading, error } = state;

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const res = await fetch(
          'https://api.spacexdata.com/v3/launches?launch_year=2020'
        );
        const data: itemSpaseX[] = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No launches found');
        }

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_ERROR',
          payload: `${err instanceof Error ? err.message : err} - Failed to fetch launches`,
        });
      }
    };

    fetchUser();
  }, []);

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
        <Flex
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
          }}
          wrap="wrap"
        >
          {loading ? (
            <p>Loading...</p>
          ) : dataSpaceX && dataSpaceX.length > 0 ? (
            dataSpaceX.map((item: itemSpaseX, index: number) => (
              <Box key={`${item.mission_name}-${index}`} style={{ width: 200 }}>
                <Card
                  state={{
                    mission_name: item.mission_name,
                    mission_patch_small:
                      item.links.mission_patch_small || DefoltImg,
                    rocket_name: item.rocket.rocket_name,
                    onClick: () => {
                      setSelectedItem(item);
                      setModalOpen(true);
                    },
                  }}
                />
              </Box>
            ))
          ) : (
            search && <p>No SpaceX found</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            data={selectedItem}
          ></Modal>
        </Flex>
      </Container>
    </MantineProvider>
  );
}

export default App;
