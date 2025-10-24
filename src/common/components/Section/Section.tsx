import type { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@mantine/core';
import { SectionTitle } from '@common/components/SectionTitle/SectionTitle';

type SectionProps = PropsWithChildren & {
    title: string;
    controls?: ReactNode;
};

export function Section({ children, title, controls }: SectionProps) {
    return (
        <Stack>
            <Flex align='center' justify='space-between'>
                <SectionTitle text={title} />
                {controls}
            </Flex>
            {children}
        </Stack>
    );
}
