import type { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
  isActive: boolean;
  children: ReactNode;
  to: string;
}

export const NavbarButton: FC<NavbarButtonProps> = ({
  isActive,
  children,
  to,
}) => (
  <Button
    component={Link}
    to={to}
    variant={isActive ? 'contained' : 'text'}
    color="info"
    size="medium"
  >
    {children}
  </Button>
);
