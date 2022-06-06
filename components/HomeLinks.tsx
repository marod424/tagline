import React from 'react';
import { BuildingStore, BuildingCommunity, BuildingWarehouse, Award } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

interface HomeLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function HomeLink({ icon, color, label }: HomeLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <Award size={16} />, color: 'grape', label: 'Games' },
  { icon: <BuildingCommunity size={16} />, color: 'blue', label: 'Organizations' },
  { icon: <BuildingWarehouse size={16} />, color: 'teal', label: 'Products' },
  { icon: <BuildingStore size={16} />, color: 'violet', label: 'Services' },
];

export function HomeLinks() {
  const links = data.map((link) => <HomeLink {...link} key={link.label} />);
  return <div>{links}</div>;
}