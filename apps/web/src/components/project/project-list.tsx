import { List, ListContent, ListHeader } from '@/components/ui/list';
import { Project } from '@/types';
import { Ellipsis, Home, Plus } from 'lucide-react';
import { FC } from 'react';

interface ProjectListProps {
  projects: Project[];
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

interface ProjectItemProps extends Project {
  onEdit?: () => void;
}

const ProjectItem: FC<ProjectItemProps> = ({ title, onEdit }) => {
  return (
    <div className="hover:bg-background-secondary flex cursor-pointer select-none items-center gap-5 rounded-lg p-2">
      <Home color="var(--color-icon-secondary)" size={20} />
      <h4 className="text-title-primary font-semibold">{title}</h4>
      <Ellipsis
        className="hover:text-icon-secondary active:bg-background-primary ml-auto rounded-md"
        onClick={onEdit}
      />
    </div>
  );
};
