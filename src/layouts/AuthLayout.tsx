const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className=" flex items-center w-full h-full min-h-screen">
        <div className="flex items-center justify-center grow flex-col min-h-screen relative p-6 ">
          <div className="w-full max-w-[350px] relative">
            <div className="auth-bg ">
              <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-red-400 animate-[floating_7s_infinite]"></span>
              <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]"></span>
              <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_7s_infinite]"></span>
              <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-red-400 animate-[floating_9s_infinite]"></span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
