import Chatsupabase from '@/components/chatpage/Chatsupabase';
import SignIn from '@/components/sign-in';

export default function Home() {
  return (
    <main>
      <div className="h-0">
        <SignIn ServiceName="google" />
        <SignIn ServiceName="github" />
      </div>
      <Chatsupabase GetName="ゲスト" GetImage="image/228.png" />
    </main>
  );
}
