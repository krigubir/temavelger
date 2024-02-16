import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import cl from 'clsx';

import classes from './Header.module.css';

/**
 * Function to check if the menu item should be active
 * @param routerPath - The current router path.
 * @param itemPath - The current menu item path.
 */
const isMenuItemActive = (routerPath: string, itemPath: string) => {
  return routerPath.startsWith(itemPath);
};

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: 'Grunnleggende',
      url: '/grunnleggende',
    },
    {
      name: 'God praksis',
      url: '/god-praksis',
    },
    {
      name: 'Mønstre',
      url: '/monstre',
    },
    {
      name: 'Komponenter',
      url: 'https://storybook.designsystemet.no',
    },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
          <Link
            className={classes.logoLink}
            href='/'
            aria-label='Designsystem forside'
            onClick={() => setOpen(false)}
            prefetch={false}
          >
            <Image
              className={classes.logo}
              src='/img/logos/ds-positive.svg'
              alt=''
              aria-hidden='true'
              width={275}
              height={30}
            />
          </Link>
        </div>
        <div>
          <button
            aria-expanded={open}
            aria-label='Meny'
            className={classes.toggle}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open && (
              <XMarkIcon
                fontSize={26}
                color='#1E2B3C'
              />
            )}
            {!open && (
              <MenuHamburgerIcon
                fontSize={26}
                color='#1E2B3C'
              />
            )}
          </button>
          <ul className={cl(classes.menu, { [classes.active]: open })}>
            {menu.map((item, index) => (
              <li
                className={classes.item}
                key={index}
              >
                <Link
                  href={item.url}
                  onClick={() => setOpen(false)}
                  prefetch={false}
                  className={cl(
                    isMenuItemActive(router.pathname, item.url)
                      ? classes.active
                      : '',
                    classes.link,
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Header };
