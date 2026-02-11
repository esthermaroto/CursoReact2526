import React, { useActionState } from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
  const formAction = async (
    _prev: { error: string | null },
    formData: FormData,
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
      return { error: "Email y passwor son requeridos" };
    }

    const success = await login({ email, password });
    if (!success) {
      return { error: "fallo iniciando sesión" };
    }
    return {
      error: null,
    };
  };

  const [state, handleSubmit, isPending] = useActionState(formAction, {
    error: null,
  });
  return (
    <div>
      <form
        action={handleSubmit}
        className="bg-white p-6 rounded shadow-amber-950 max-w-md mx-auto"
      >
        {/* Aquí los errores */}
        {state.error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {state.error}
          </div>
        )}
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input"
          />
        </div>
        <div className="felx gap-2 mt-5">
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
          >
            {isPending ? "Logging in ..." : "Login"}
          </button>
          <p>Demo: xxxxxxx/xxxx </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
