import { Group } from '@mantine/core';
import { HeaderLink } from '@common/components/Header/HeaderNav/HeaderLink/HeaderLink';
import { aboutIcon, pokemonIcon } from '@assets/images/icons';
import { useTranslation } from 'react-i18next';

export function HeaderNav() {
    const { t } = useTranslation();

    return (
        <Group gap='md' visibleFrom='sm'>
            <HeaderLink to={'pokemon'} icon={pokemonIcon} label={t('app.header.nav.pokemon')} />
            <HeaderLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </Group>
    );
}
