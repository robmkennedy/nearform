import type { PropsWithChildren } from 'react';
import { Stack } from '@mantine/core';
import { SectionTitle } from '@common/components/SectionTitle/SectionTitle';

type SectionProps = PropsWithChildren & {
    title: string;
};

/**
 */
export function Section({ children, title }: SectionProps) {
    return (
        <Stack>
            <SectionTitle text={title} />
            {children}
        </Stack>
    );
}
