import type { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';

export function Page({ children }: PropsWithChildren) {

    return <Box h='100%'>{children}</Box>;
}
