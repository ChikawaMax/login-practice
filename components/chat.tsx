'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Chats from './chats';
import { FormEvent, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { ChatsObj } from './getData';

export default function YukkuriChat({ chats }: { chats: ChatsObj[] }) {
  const [text, setText] = useState('');
  const [chatArray, setChatArray] = useState(chats);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = await createClient();
    const { error } = await supabase.from('chat').insert({ message: text });

    if (error) {
      console.error('Error inserting chat:', error.message, error.details);
    } else {
      console.log('Message sent successfully!');
    }
    setChatArray((prevArray) => [
      ...prevArray,
      { id: prevArray.length + 1, message: text },
    ]);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">ゆっくりチャット</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {chatArray?.map((chat) => (
              <Chats key={chat.id} imgname="228.png" message={chat.message} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full items-center space-x-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="メッセージを入力..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">送信</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
