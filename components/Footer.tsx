import { Group, Footer as MantineFooter, useMantineTheme } from '@mantine/core';
import React from 'react';
import { Heart } from 'tabler-icons-react';

export function Footer() {
  return (
    <MantineFooter height={60} p="md">
      <Group px={20} position="right" spacing="xs">
        Built with
        <Heart
          size={24}
          strokeWidth={1}
          color={'#bf4040'}
        />
        by Cabosante
      </Group>
    </MantineFooter>
  );
}