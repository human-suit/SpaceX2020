import { Card as MantineCard, Image, Text, Button, Group } from '@mantine/core';

type Props = {
  state: {
    mission_name: string;
    mission_patch_small: string;
    rocket_name: string;
    onClick: () => void;
  };
};

const Card = ({ state }: Props) => {
  const { mission_name, mission_patch_small, rocket_name, onClick } = state;

  return (
    <MantineCard
      style={{
        border: '1px solid #E9ECEE',
        boxShadow: '0px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <MantineCard.Section>
        <Image
          style={{ height: '100px' }}
          src={mission_patch_small}
          alt={mission_name}
        />
      </MantineCard.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {mission_name}
        </Text>
        <Text size="sm">{rocket_name}</Text>
      </Group>
      <Button
        onClick={onClick}
        style={{
          backgroundColor: '#2182D7',
          color: 'white',
          padding: '8px 60px',
          borderRadius: '8px',
          border: '0px',
        }}
        fullWidth
        mt="md"
        radius="md"
      >
        See more
      </Button>
    </MantineCard>
  );
};

export default Card;
