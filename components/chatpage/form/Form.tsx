'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { createClient } from '@/utils/supabase/client';
import { ChatsObj } from '../Chatsupabase';

interface Obj {
  name: string;
  message: string;
}

export default function From({
  text,
  setText,
  setChatArray,
  GetImage,
}: {
  text: Obj;
  setText: Dispatch<SetStateAction<Obj>>;
  setChatArray: Dispatch<SetStateAction<ChatsObj[]>>;
  GetImage: string;
}) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = await createClient();
    const { error } = await supabase
      .from('chat')
      .insert({ name: text.name, message: text.message, image: GetImage });

    if (error) {
      console.error('Error inserting chat:', error.message, error.details);
    } else {
      console.log('Message sent successfully!');
    }
    setChatArray((prevArray) => [
      ...prevArray,
      {
        id: prevArray.length + 1,
        name: text.name,
        message: text.message,
        image: GetImage,
      },
    ]);
    setText((prevText) => ({ ...prevText, message: '' }));
  };

  return (
    <form
      className="flex w-full items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        className="flex-[2]"
        placeholder="名前を入力..."
        value={text.name}
        onChange={(e) =>
          setText((prevText) => ({ ...prevText, name: e.target.value }))
        }
      />
      <Input
        className="flex-[8]"
        placeholder="メッセージを入力..."
        value={text.message}
        onChange={(e) =>
          setText((prevText) => ({ ...prevText, message: e.target.value }))
        }
      />
      <Button type="submit">送信</Button>
    </form>
  );
}
