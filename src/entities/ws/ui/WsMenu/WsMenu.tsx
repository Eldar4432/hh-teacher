/* eslint-disable react-extra/no-inline-styles */
import { FC } from 'react';

import { MenuItem, Select, SelectProps, Typography } from '~shared/ui';

interface WsItemProps {
  label: string;
  value: number;
}

export interface WsMenuProps extends SelectProps {
  onWsSelect: Function;
  ws: string;
  wsList: WsItemProps[];
  minWidth?: number;
  width?: '100%' | 'auto';
}

export const WsMenu: FC<WsMenuProps> = ({ onWsSelect, ws, wsList, minWidth, width, ...props }) => {
  return (
    <div style={{ minWidth: minWidth || 180, width: width || 'auto' }}>
      <Typography style={{ fontSize: 14 }} color="text.primary">
        entity.ws.select.title
      </Typography>
      <Select
        value={ws || ''}
        id="ws-select"
        {...props}
        onChange={({ target }) => onWsSelect(target.value)}
      >
        {wsList.map((wsItem) => (
          <MenuItem dense key={wsItem.value} value={wsItem.value}>
            {wsItem.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
