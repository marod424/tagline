import React from 'react';
import { Navbar as MantineNavbar } from '@mantine/core'
import { HomeLinks } from './HomeLinks';
import { User } from './User';

export function Navbar({ opened }: { opened: boolean }) {
  return (
    <MantineNavbar width={{ sm: 200, lg: 300 }} p="md" hiddenBreakpoint="sm" hidden={!opened}>
      <MantineNavbar.Section grow mt="xs">
        <HomeLinks />
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <User />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}