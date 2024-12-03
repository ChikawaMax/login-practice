import { createClient } from '@/utils/supabase/server';
import React from 'react';
import YukkuriChat from './chat';

export interface ChatsObj {
  id: number;
  message: string;
}

const GetData = async () => {
  const supabase = await createClient();
  const { data: chats } = await supabase.from('chat').select();
  return <YukkuriChat chats={chats as ChatsObj[]} />;
};

export default GetData;
