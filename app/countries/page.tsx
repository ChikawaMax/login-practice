import { createClient } from '@/utils/supabase/server';

export default async function Countries() {
  const supabase = await createClient();
  const { data: chat } = await supabase.from('chat').select();

  console.log(chat);

  return <pre>{JSON.stringify(chat, null, 2)}</pre>;
}
