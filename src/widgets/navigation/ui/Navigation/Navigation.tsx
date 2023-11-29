import { FC, useEffect } from 'react';

import { useSetCollapsed } from '~entities/burger';

import { useCollapsed } from '~entities/burger';
import { useUser } from '~entities/user';
import { useTranslation } from '~shared/lib/i18n';

import { RoutesUrls } from '~shared/lib/router';

import { Sider, SiderButton, TabBar, TabbarButton, useWindowInnerWidth } from '~shared/ui';
import { BtTableIcon, HomeIcon, LogoutIcon, ReportsIcon, SettingsIcon, UsersIcon } from '~shared/ui/Icons/icons';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUser();
  const windowWidth = useWindowInnerWidth();
  const { t } = useTranslation();

  useEffect(() => {
    if (windowWidth <= 768) {
      if (collapsedAtom) {
        document.body.style.overflow = 'unset';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [collapsedAtom]);

  const routes = [
    {
      title: t('cm:routes.home'),
      path: RoutesUrls.home,
      icon: <HomeIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:routes.employees'),
      path: RoutesUrls.employees,
      icon: <UsersIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:routes.businessTrips'),
      path: RoutesUrls.businessTrips,
      icon: <BtTableIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:routes.reports'),
      path: RoutesUrls.reports,
      icon: <ReportsIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:bottomLinks.settings'),
      path: RoutesUrls.settings,
      icon: <SettingsIcon />,
      isTeacher: true,
      isStudent: false
    }
  ];

  const settings = [
    { title: t('cm:bottomLinks.logout'), path: RoutesUrls.logout, icon: <LogoutIcon /> },
  ];

  const handleClickButton = () => {
    if (windowWidth <= 768) {
      setCollapsed(!collapsedAtom);
    }
  };

  return (
    <>
      <Sider
        routes={routes
          .filter((x) => x[user?.type === 1 ? 'isTeacher' : 'isStudent'])
          .map((item) => {
            return (
              <SiderButton
                key={item.path}
                path={item.path}
                title={item.title}
                icon={item.icon}
                collapsed={collapsedAtom}
                onClick={handleClickButton}
              />
            );
          })}
        settings={settings?.map((item) => {
          return (
            <SiderButton
              key={item.path}
              path={item.path}
              title={item.title}
              icon={item.icon}
              collapsed={collapsedAtom}
              onClick={handleClickButton}
            />
          );
        })}
        collapsed={collapsedAtom}
      />

      {windowWidth <= 768 ? (
        <TabBar
          routes={routes
            .filter((x) => x[user?.type === 1 ? 'isTeacher' : 'isStudent'])
            .map((item) => {
              return <TabbarButton key={item.path} path={item.path} icon={item.icon} />;
            })}
        />
      ) : null}
    </>
  );
};
