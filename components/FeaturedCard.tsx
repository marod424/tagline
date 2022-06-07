import { Card, ThemeIcon, Image, List, Group, useMantineTheme } from '@mantine/core';
import React from 'react';
import { Award, Number2, Number3, Number4, Number5 } from 'tabler-icons-react';

export function FeaturedCard() {
  const theme = useMantineTheme();
  
  return (
    <Card shadow="sm" p="xl">
      <Card.Section>
        <Image src="./tagline.jpg" alt="Tagline" />
      </Card.Section>

      <List style={{ marginTop: theme.spacing.lg }} spacing="sm" size="md" center>
        <List.Item
          icon={
            <ThemeIcon color="yellow" size={24} radius="xl">
              <Award size={16} />
            </ThemeIcon>
          }
        >
          (Insert Something Witty Here)
        </List.Item>

        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <Number2 size={16} />
            </ThemeIcon>
          }
        >
          Marketing marketing
        </List.Item>

        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <Number3 size={16} />
            </ThemeIcon>
          }
        >
          Can you tag it...!?
        </List.Item>

        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <Number4 size={16} />
            </ThemeIcon>
          }
        >
          Everyone's favorite line
        </List.Item>

        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <Number5 size={16} />
            </ThemeIcon>
          }
        >
          Whose line is it anyway...?</List.Item>
      </List>
    </Card>
  );
}