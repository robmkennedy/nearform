import { Title } from '@mantine/core';

type SectionTitleProps = {
    text: string;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function SectionTitle({ text }: SectionTitleProps) {
    return <Title order={5}>{text}</Title>;
}
