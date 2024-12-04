import Chatsupabase from '@/components/chatpage/Chatsupabase';
import YukkuriChat from '@/components/chatpage/YukkuriChat';
import SignIn from '@/components/sign-in';

export default function Home() {
  return (
    <main>
      {/* <SignIn ServiceName="google" /> */}
      {/* <SignIn ServiceName="github" /> */}
      <Chatsupabase />
    </main>
  );
}
