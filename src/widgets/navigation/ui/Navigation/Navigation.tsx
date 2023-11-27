import { FC, useEffect } from 'react';

import { useSetCollapsed } from '~entities/burger';

import { useCollapsed } from '~entities/burger';
import { usePhoto, useSetPhoto } from '~entities/photo';
import { SiderUser, useUser } from '~entities/user';
import { useTranslation } from '~shared/lib/i18n';

import { RoutesUrls } from '~shared/lib/router';

import { SN, Sider, SiderButton, TabBar, TabbarButton, useWindowInnerWidth } from '~shared/ui';
import { HomeIcon, LogoutIcon, SettingsIcon } from '~shared/ui/Icons/icons';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUser();
  const photo = usePhoto();
  const windowWidth = useWindowInnerWidth();
  const { t } = useTranslation();

  const setPhoto = useSetPhoto();

  useEffect(() => {
    if (photo === null && user) {
      setPhoto(user);
    }
  }, [photo, user, setPhoto]);

  useEffect(() => {
    if (windowWidth <= 768) {
      if (collapsedAtom) {
        document.body.style.overflow = 'unset';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      icon: <HomeIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:routes.businessTrips'),
      path: RoutesUrls.businessTrips,
      icon: <HomeIcon />,
      isTeacher: true,
      isStudent: true,
    },
    {
      title: t('cm:routes.reports'),
      path: RoutesUrls.reports,
      icon: <HomeIcon />,
      isTeacher: true,
      isStudent: true,
    },
  ];

  const settings = [
    { title: t('cm:bottomLinks.settings'), path: RoutesUrls.settings, icon: <SettingsIcon /> },
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
        user={
          <SiderUser
            photo={photo}
            fio={`${user?.s} ${user?.n} ${user?.p}`}
            role={user?.type === 1 ? t('cm:role.teacher') : t('cm:role.student')}
            collapsed={collapsedAtom}
            onError={<SN surname={user?.s} name={user?.n} size={28} />}
          />
        }
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
