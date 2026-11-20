import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-400 p-6 md:p-10">
      <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden bg-background">
        <LoginForm />
      </div>
    </main>
  )
}