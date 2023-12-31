import Header from "@/components/Header";
// import logo from "@/images/logo.svg";

import AccountContent from "./components/AccountContent";

const Account = () => {
  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      
      <Header className="from-bg-neutral-900">
       <div className="mb-2 flex flex-col gap-y-6 items-center">
                 <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  )
}

export default Account;
