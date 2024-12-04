import { createClient } from '@/utils/supabase/server';
import React from 'react';
import YukkuriChat from './YukkuriChat';

export interface ChatsObj {
  id: number;
  message: string;
  name: string;
}

const Chatsupabase = async () => {
  const supabase = await createClient();
  const { data: chats } = await supabase.from('chat').select();
  return <YukkuriChat chats={chats as ChatsObj[]} />;
};

export default Chatsupabase;
