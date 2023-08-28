import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const token: any = process.browser && localStorage.getItem('token');
  const user: any = jwt.decode(token);
  if (!user) {
    process.browser && window.location.replace('/login');
  }
  return (
    <>
      <h1>hfghg</h1>
    </>
  );
}
