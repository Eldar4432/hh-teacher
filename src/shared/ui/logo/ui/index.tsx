import { Primary } from './primary';
import { Secondary } from './secondary';

interface LogoProps {
  type: string;
  lang?: string;
}

export const Logo = ({ type = 'primary', lang = 'ru' }: LogoProps): JSX.Element => {
  switch (type) {
    case 'primary':
      return <Primary lang={lang} />;
    case 'secondary':
      return <Secondary lang={lang} />;
    default:
      return <Primary lang={lang} />;
  }
};
