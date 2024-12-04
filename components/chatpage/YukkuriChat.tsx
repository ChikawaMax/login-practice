'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { ChatsObj } from './Chatsupabase';
import ChatsAvatar from './ChatsAvatar';
import From from './form/Form';
import Header from './Header';

export default function YukkuriChat({ chats }: { chats: ChatsObj[] }) {
  const [text, setText] = useState({ name: 'ゲスト', message: '' });
  const [chatArray, setChatArray] = useState(chats);

  return (
    <Card className="w-full max-w-md mx-auto">
      <Header />
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {chatArray?.map((chat) => (
              <ChatsAvatar
                key={chat.id}
                imgname="228.png"
                message={chat.message}
                name={chat.name}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <From text={text} setText={setText} setChatArray={setChatArray} />
      </CardFooter>
    </Card>
  );
}
