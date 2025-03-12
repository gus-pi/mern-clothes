import CommonForm from '@/components/common/CommonForm';
import { loginFormControls } from '@/config';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const initialState: Record<string, string> = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [formData, setFormData] =
    useState<Record<string, string>>(initialState);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Log in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={'Log In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LoginPage;
