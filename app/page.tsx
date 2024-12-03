import YukkuriChat from '@/components/chat';
import GetData from '@/components/getData';
import SignIn from '@/components/sign-in';

export default function Home() {
  return (
    <main>
      {/* <SignIn ServiceName="google" /> */}
      {/* <SignIn ServiceName="github" /> */}
      <GetData />
    </main>
  );
}
