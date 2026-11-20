import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <p className="text-lg text-muted-foreground">
          Get started by editing <code className="bg-muted px-2 py-1 rounded">app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}
