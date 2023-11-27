import { FC, useEffect } from 'react';

// import { useTranslation } from '~shared/lib/i18n';
import { usePhoto, useSetPhoto } from '~entities/photo';
import { StudentProfileView, TeacherProfileView } from '~entities/profile';
import { useUser } from '~entities/user';
import { Spinner } from '~shared/ui';

export interface ProfileShortProps extends Partial<ComponentWithChild> {}

export const ProfileShort: FC<ProfileShortProps> = () => {
  const user = useUser();
  const photo = usePhoto();

  // const { t } = useTranslation();

  const setPhoto = useSetPhoto();

  useEffect(() => {
    if (photo === null && user) {
      setPhoto(user);
    }
  }, [photo, setPhoto, user]);

  if (!user) {
    return <Spinner />;
  }

  if (user?.type === 1) {
    return (
      <TeacherProfileView
        photo={photo}
        role={user?.type || 1}
        fio={`${user?.s} ${user?.n} ${user?.p}`}
        user={user}
        kafedra="kafedra"
      />
    );
  }

  // if user.type === 2
  return (
    <StudentProfileView
      photo={photo}
      role={user?.type || 1}
      fio={`${user?.s} ${user?.n} ${user?.p}`}
      faculty="faculty"
      speciality="speciality"
      gpa={5}
    />
  );
};
