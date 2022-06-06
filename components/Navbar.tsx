import React from 'react';
import { Navbar as MantineNavbar } from '@mantine/core'
import { HomeLinks } from './HomeLinks';
import { User } from './User';

export function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }} height={500} p="xs">
      <MantineNavbar.Section grow mt="xs">
        <HomeLinks />
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <User />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}