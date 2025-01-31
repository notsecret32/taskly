import { List, ListContent, ListHeader } from '@/components/ui/list';
import { ProjectSummary } from '@/types';
import clsx from 'clsx';
import { Ellipsis, Home, Plus } from 'lucide-react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface ProjectListProps {
  projects: ProjectSummary[];
  onAdd?: () => void;
}

export const ProjectList: FC<ProjectListProps> = ({ projects, onAdd }) => {
  return (
    <List>
      <ListHeader>
        <h4>Projects</h4>
        {onAdd && (
          <Plus
            className="hover:bg-background-secondary hover:text-icon-secondary active:bg-stroke cursor-pointer rounded-md"
            size={20}
            onClick={onAdd}
          />
        )}
      </ListHeader>
      <ListContent>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </ListContent>
    </List>
  );
};

interface ProjectItemProps extends ProjectSummary {
  onEdit?: () => void;
}

const ProjectItem: FC<ProjectItemProps> = ({ id, title, onEdit }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/dashboard/projects/${id}`);
  };

  const handleEditClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    onEdit?.();
  };

  const isActive = location.pathname === `/dashboard/projects/${id}`;

  return (
    <div
      className={clsx(
        'flex cursor-pointer select-none items-center gap-5 rounded-lg p-2',
        {
          ['bg-background-secondary']: isActive,
          ['hover:bg-stroke']: !isActive,
        }
      )}
      onClick={handleClick}
    >
      <Home color="var(--color-icon-secondary)" size={20} />
      <h4 className="text-title-primary font-semibold">{title}</h4>
      <Ellipsis
        className="hover:text-icon-secondary active:bg-background-primary ml-auto rounded-md"
        onClick={handleEditClick}
      />
    </div>
  );
};
