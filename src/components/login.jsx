import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onNavigateToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Login Success token:', credentialResponse.credential);
    // You can process this JWT token or pass user context back to home here
    onNavigateToHome();
  };

  const handleGoogleError = () => {
    console.log('Google Sign-In failed');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0C2620] text-[#F7F2E8]">
      <button
        onClick={onNavigateToHome}
        aria-label="Back to home"
        className="absolute left-5 top-5 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#0C2620]/35 text-[#EDE1D0] shadow-lg backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:border-[#C9A05C] hover:text-[#ffb700] sm:left-7 sm:top-7"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <section className="grid min-h-screen lg:grid-cols-[56%_44%]">
        <div className="relative flex min-h-[46vh] items-end overflow-hidden px-6 pb-12 pt-28 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-20 xl:px-24">
          <img
            src="https://cdn.shopify.com/s/files/1/0550/1075/4765/files/tobyshome_sitting_room_w_dog.jpg?v=1685459793"
            alt="Warm modern living room with HearthWood furniture"
            className="absolute inset-0 h-full w-full object-cover object-center animate-[slowZoom_24s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,38,32,0.86)_0%,rgba(12,38,32,0.44)_46%,rgba(12,38,32,0.14)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(0deg,rgba(12,38,32,0.86)_0%,rgba(12,38,32,0)_100%)]" />

          <div className="relative z-10 max-w-[620px]">
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#EDE1D0] opacity-0 backdrop-blur-md animate-[fadeUp_0.8s_ease_0.15s_forwards]">
              Member access
            </p>
            <h1 className="font-serif text-[clamp(44px,7vw,88px)] font-medium leading-[0.98] text-white opacity-0 animate-[fadeUp_0.85s_ease_0.3s_forwards]">
              Welcome back.
            </h1>
            <p className="mt-5 max-w-[500px] text-base leading-7 text-[#F7F2E8]/82 opacity-0 animate-[fadeUp_0.85s_ease_0.45s_forwards] sm:text-lg">
              Sign in to continue curating warm woods, soft textures, and rooms that feel ready to live in.
            </p>
            <div className="mt-8 grid max-w-[420px] grid-cols-3 gap-3 opacity-0 animate-[fadeUp_0.85s_ease_0.6s_forwards]">
              {['Saved rooms', 'New arrivals', 'Private offers'].map((item) => (
                <div key={item} className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-[#121c13] px-5 py-12 sm:px-8 lg:min-h-screen lg:px-10">
          <div className="relative z-10 w-full max-w-[440px] opacity-0 animate-[loginCardIn_0.9s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]">
            <div className="mb-8">
              <span className="font-serif text-[35px] font-semibold text-[#ffffff]">
                Hearth<span className="text-[#009325]">Wood</span>
              </span>
              <p className="mt-2 text-[#c6ab00]">Log in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#0C2620]/10 bg-white p-6 shadow-[0_24px_70px_rgba(12,38,32,0.12)] sm:p-8">
              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0C2620]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#0C2620]/15 bg-[#F7F2E8]/55 px-4 py-3 text-[#0C2620] placeholder-[#0C2620]/38 transition duration-300 focus:border-[#C9A05C] focus:bg-white focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#0C2620]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[#0C2620]/15 bg-[#F7F2E8]/55 px-4 py-3 text-[#0C2620] placeholder-[#0C2620]/38 transition duration-300 focus:border-[#C9A05C] focus:bg-white focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="mb-6 flex items-center justify-between gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#0C2620]/20 bg-white text-[#C9A05C] focus:ring-[#C9A05C]"
                  />
                  <span className="ml-2 text-sm text-[#0C2620]/75">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#C9A05C] transition hover:text-[#ffb700]">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-[#C9A05C] py-3 font-semibold text-[#0C2620] shadow-[0_12px_30px_rgba(201,160,92,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffb700]"
              >
                Log In
              </button>

              <div className="my-5 flex items-center">
                <div className="flex-grow border-t border-[#0C2620]/10"></div>
                <span className="px-3 text-xs uppercase tracking-wider text-[#0C2620]/40">or</span>
                <div className="flex-grow border-t border-[#0C2620]/10"></div>
              </div>

              <div className="flex justify-center">             
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  theme="filled_blue"
                  shape="pill"
                  text="continue_with"
                  width="320"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-[#0C2620]/60">
                  Don't have an account?{' '}
                  <a href="#" className="font-medium text-[#C9A05C] transition hover:text-[#ffb700]">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
