import jwt from 'jsonwebtoken';
export default function Home() {
  const token: any = process.browser && localStorage.getItem('token');
  console.log(token);
  const user: any = jwt.decode(token);
  console.log(user );
  return (
    <>
      <h1>hfghg</h1>
    </>
  );
}
