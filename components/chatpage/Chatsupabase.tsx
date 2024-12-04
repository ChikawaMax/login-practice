import { createClient } from '@/utils/supabase/server';
import React from 'react';
import YukkuriChat from './YukkuriChat';

export interface ChatsObj {
  id: number;
  message: string;
  name: string;
  image: string;
}

const Chatsupabase = async ({
  GetName,
  GetImage,
}: {
  GetName: string;
  GetImage: string;
}) => {
  const supabase = await createClient();
  const { data: chats } = await supabase.from('chat').select();
  return (
    <YukkuriChat
      chats={chats as ChatsObj[]}
      GetName={GetName}
      GetImage={GetImage}
    />
  );
};

export default Chatsupabase;
