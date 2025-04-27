//SARAH
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
