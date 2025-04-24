import React from 'react';
import { FC } from 'react';
type Icon = { className: string };

export const Search: FC<Icon> = ({ className }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
      <path
        d="M20.6997 20L16.922 16.2156M19.0155 11.1579C19.0155 13.0563 18.2614 14.8769 16.919 16.2193C15.5766 17.5617 13.756 18.3158 11.8576 18.3158C9.95921 18.3158 8.13857 17.5617 6.79621 16.2193C5.45384 14.8769 4.69971 13.0563 4.69971 11.1579C4.69971 9.2595 5.45384 7.43886 6.79621 6.0965C8.13857 4.75413 9.95921 4 11.8576 4C13.756 4 15.5766 4.75413 16.919 6.0965C18.2614 7.43886 19.0155 9.2595 19.0155 11.1579V11.1579Z"
        stroke="#989898"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
