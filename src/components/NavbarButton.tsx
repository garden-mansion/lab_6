import { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';

interface NavbarButtonProps {
  isActive: boolean;
  children: ReactNode;
}

export const NavbarButton: FC<NavbarButtonProps> = ({ isActive, children }) => (
  <Button variant={isActive ? 'contained' : 'text'} color="info" size="medium">
    {children}
  </Button>
);
