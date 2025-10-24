import type { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router';
import { Flex, NavLink, Text } from '@mantine/core';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    const labelNode = (
        <Flex align='center'>
            {icon}
            <Text ml='xs' visibleFrom='sm'>
                {label}
            </Text>
        </Flex>
    );

    return (
        <NavLink
            w='auto'
            variant='subtle'
            classNames={{ root: styles.root }}
            component={RouterLink}
            to={to}
            label={labelNode}
        />
    );
}
