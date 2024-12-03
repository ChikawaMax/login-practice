import { SignOut } from '@/components/signout-button';
import UserAvatar from '@/components/UserAvatar';
import React from 'react';

const DashPage = () => {
  return (
    <div>
      <SignOut />
      <UserAvatar />
    </div>
  );
};

export default DashPage;
