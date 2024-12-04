import { signOut } from '@/auth';
import { Button } from './ui/button';

export function SignOut() {
  return (
    <form
      className="h-0 ml-3"
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <Button type="submit">ログアウト</Button>
    </form>
  );
}
