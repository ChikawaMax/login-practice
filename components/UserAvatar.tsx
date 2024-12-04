import { auth } from '@/auth';
import Chatsupabase from './chatpage/Chatsupabase';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  const GetName = session.user.name ?? '名無しちゃん';
  const GetImage = session.user.image ?? 'image/computer_error_bluescreen.png';

  return <Chatsupabase GetName={GetName} GetImage={GetImage} />;
}
