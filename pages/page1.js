import Link from 'next/link';

function Page1() {
  return (
    <div>
      <h1>This is Page 1</h1>
      <p>This is the content of Page 1.</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Page1;