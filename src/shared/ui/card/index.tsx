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
      shadow="md"
      padding="lg"
      radius="md"
      withBorder
      style={{
        padding: '20px 0px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
      }}
    >
      <MantineCard.Section>
        <Image
          src={mission_patch_small}
          alt={mission_name}
          height={100}
          fit="contain"
        />
      </MantineCard.Section>

      <Group justify="center" mt="md" mb="xs" w="100%">
        <Text
          size="sm"
          truncate
          style={{
            padding: '0px 10px',
            maxWidth: '210px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {mission_name}
        </Text>
        <Text size="sm" c="dimmed">
          {rocket_name}
        </Text>
      </Group>

      <Button
        onClick={onClick}
        fullWidth
        mt="md"
        radius="md"
        color="#FFFFFF"
        bg="#238BE6"
        style={{
          width: '180px',
          height: '40px',
          borderRadius: '5px',
          border: '0px',
          color: '#FFFFFF',
        }}
      >
        See more
      </Button>
    </MantineCard>
  );
};

export default Card;
