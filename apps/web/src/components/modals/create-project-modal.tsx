import { createProject } from '@/api';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Modal, ModalProps } from '@/components/ui/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  CreateProjectInput,
  PROJECT_MAX_TITLE_LENGTH,
  PROJECT_MAX_TITLE_MESSAGE,
  PROJECT_MIN_TITLE_LENGTH,
  PROJECT_MIN_TITLE_MESSAGE,
} from '@taskly/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(PROJECT_MIN_TITLE_LENGTH, { message: PROJECT_MIN_TITLE_MESSAGE })
    .max(PROJECT_MAX_TITLE_LENGTH, { message: PROJECT_MAX_TITLE_MESSAGE }),
});

type CreateProjectModalProps = Omit<ModalProps, 'children'>;

export const CreateProjectModal: FC<CreateProjectModalProps> = ({
  onClose,
  ...rest
}) => {
  const queryClient = useQueryClient();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: '' },
  });

  const mutation = useMutation({
    mutationFn: (data: CreateProjectInput) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      reset();
      onClose();
    },
    onError: (error) => {
      console.error('Error creating project:', error);
    },
  });

  const onSubmit = async ({ name }: z.infer<typeof schema>) => {
    mutation.mutate({ name });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      label="Create New Project"
      className="h-auto max-w-lg"
      onClose={handleClose}
      {...rest}
    >
      <Form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Label>Name:</Label>
          <Input type="text" placeholder="Work tasks" {...register('name')} />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="flex gap-4">
          <Button className="grow" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="grow" type="submit" disabled={mutation.isPending}>
            Create
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
