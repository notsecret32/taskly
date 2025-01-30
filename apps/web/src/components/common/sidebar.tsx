import { Menu } from 'lucide-react';
import { FC } from 'react';
import { List, ListLabel } from '../ui/list';

export const Sidebar: FC = () => {
  return (
    <div className="h-screen min-w-[300px] border-r">
      <div className="flex items-center justify-between border-b px-8 py-[30px]">
        <h2>Dashboard</h2>
        <Menu />
      </div>
      <div className="px-8 py-[30px]">
        <List>
          <ListLabel>Dashboard</ListLabel>
        </List>
      </div>
    </div>
  );
};
