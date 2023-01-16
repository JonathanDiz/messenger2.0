import React from 'react';
import { getProviders, signIn } from "next-auth/react";

async function SignInPage() {
  const providers = await getProviders();
  
  return (
    <div>SignInPage</div>
  )
}

export default SignInPage;