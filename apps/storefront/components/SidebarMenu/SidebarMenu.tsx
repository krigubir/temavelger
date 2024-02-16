import { useEffect, useState } from 'react';
import Link from 'next/link';
import cl from 'clsx';
import { Button } from '@digdir/design-system-react';

import { SiteConfig } from '../../siteConfig';
import type { PageMenuItemType } from '../../utils/menus/PageMenu';

import classes from './SidebarMenu.module.css';
interface SidebarMenuProps {
  routerPath: string;
}

/** Check if item path in menu is equal to the activeRouterPath */
const isItemActive = (path: string, activeRouterPath: string) => {
  return '/' + path === activeRouterPath;
};

const SidebarMenu = ({ routerPath }: SidebarMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    findAndSetActiveIndex(routerPath);
  }, [routerPath]);

  /** Find at what index in the menu tree */
  const findAndSetActiveIndex = (path: string) => {
    for (let i = 0; i < SiteConfig.menu.length; i++) {
      if (SiteConfig.menu[i].url === path.split('/')[1]) {
        setActiveIndex(i);
      }
    }
  };

  return (
    <div className={classes.sidebar}>
      {activeIndex >= 0 && (
        <>
          <Button
            className={classes.toggleBtn}
            fullWidth
            size='medium'
            color='second'
            variant='secondary'
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
          >
            {showMenu ? 'Skjul' : 'Vis'} side meny
          </Button>

          <div className={cl(classes.menu, { [classes.activeMenu]: showMenu })}>
            <h3 className={classes.title}>
              {SiteConfig.menu[activeIndex].name}
            </h3>
            <ul className={classes.list}>
              {SiteConfig.menu[activeIndex].children.map(
                (item: PageMenuItemType, index) => (
                  <li
                    key={index}
                    className={cl(classes.listGroup, {
                      [classes.listGroupCompact]: !item.children,
                    })}
                  >
                    {item.children && (
                      <>
                        <div className={classes.innerTitle}>{item.name}</div>
                        <ul className={classes.innerList}>
                          {item.children.map(
                            (item2: PageMenuItemType, index2) => (
                              <li
                                key={index2}
                                className={classes.listItem}
                              >
                                <Link
                                  href={'/' + item2.url}
                                  prefetch={false}
                                  className={cl(classes.link, {
                                    [classes.linkActive]: isItemActive(
                                      item2.url,
                                      routerPath,
                                    ),
                                  })}
                                >
                                  {item2.name}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </>
                    )}
                    {!item.children && (
                      <Link
                        href={'/' + item.url}
                        prefetch={false}
                        className={cl(classes.link, classes.linkCompact, {
                          [classes.linkActive]: isItemActive(
                            item.url,
                            routerPath,
                          ),
                        })}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export { SidebarMenu };
