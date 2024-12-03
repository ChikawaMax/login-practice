import { auth } from '@/auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  const GetImage = session.user.image ?? '/computer_error_bluescreen.png';

  return (
    <div>
      <h1>{session.user.name}</h1>
      <img src={GetImage} alt="User Avatar" />
    </div>
  );
}
