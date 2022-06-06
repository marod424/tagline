import { useMantineColorScheme, Header as MantineHeader, Group, ActionIcon, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import { Logo } from './Logo';

export function Header(
  { opened, setOpened }: 
  { opened: boolean, setOpened: React.Dispatch<React.SetStateAction<boolean>> }
) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <MantineHeader height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}> 
          <Burger 
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]} 
            mr="xl"
          />       
        </MediaQuery>

        <Logo colorScheme={colorScheme} />
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </MantineHeader> 
  );
}