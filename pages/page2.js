import Link from 'next/link';

function Page2() {
  return (
    <div>
      <h1>This is Page 2</h1>
      <p>This is the content of Page 2.</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Page2;