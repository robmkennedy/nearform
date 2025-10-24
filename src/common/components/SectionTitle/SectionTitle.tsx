import { Title } from '@mantine/core';

type SectionTitleProps = {
    text: string;
};

export function SectionTitle({ text }: SectionTitleProps) {
    return <Title order={5}>{text}</Title>;
}
