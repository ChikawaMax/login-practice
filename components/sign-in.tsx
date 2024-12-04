import { signIn } from '@/auth';
import { Button } from './ui/button';

export default function SignIn({ ServiceName }: { ServiceName: string }) {
  return (
    <form
      className="ml-3 mb-3"
      action={async () => {
        'use server';
        await signIn(ServiceName, { redirectTo: '/dashboard' });
      }}
    >
      <Button type="submit">
        <span className="capitalize">{ServiceName}</span>でログイン
      </Button>
    </form>
  );
}
