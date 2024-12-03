import { signIn } from '@/auth';

export default function SignIn({ ServiceName }: { ServiceName: string }) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(ServiceName, { redirectTo: '/dashboard' });
      }}
    >
      <button type="submit">
        Signin with <span className="capitalize">{ServiceName}</span>
      </button>
    </form>
  );
}
