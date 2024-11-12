import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/router';

const router = useRouter();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,  // Don't redirect automatically
    });

    // Handle response from signIn
    if (result?.error) {
      console.error(result.error);  // Handle the error (e.g., show an error message)
    } else {
      // Redirect to home page or dashboard after successful login
      router.push('/'); // Or use router.push() if using Next.js router
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
