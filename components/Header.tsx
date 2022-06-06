import { useMantineColorScheme, Header as MantineHeader, Group, ActionIcon } from '@mantine/core';
import React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import { Logo } from './Logo';

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <MantineHeader height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Logo colorScheme={colorScheme} />
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </MantineHeader> 
  );
}