import type { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Card({ children }: PropsWithChildren) {

    return <Box>{children}</Box>;
}
