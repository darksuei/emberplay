import "../../../assets/css/index.css";
import { BellIcon, MoonIcon } from "@chakra-ui/icons";
import { Search } from "./Search";
import { IconButton } from "@chakra-ui/react";
import { PrimaryButton } from "../../ui";
import { useAuth0 } from "@auth0/auth0-react";
import { APP_NAME } from "../../../utils/constants";

export const Header = () => {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <header className='h-24 w-full px-14 py-5 border border-bottom flex flex-row items-center justify-between'>
      <h1 className='pacifico-regular text-3xl text-teal-600'>{APP_NAME}</h1>
      <Search />
      <div className='flex flex-row items-center'>
        <IconButton
          aria-label='Dark Mode'
          variant='outline'
          border={0}
          icon={<MoonIcon boxSize={6} color='teal.500' />}
        />
        {user ? (
          <>
            <IconButton
              aria-label='Notifications'
              variant='outline'
              border={0}
              icon={<BellIcon boxSize={8} color='teal.500' />}
            />
            <img src={user.picture} alt='User Image' className='rounded-full w-10 ml-3 cursor-pointer' />
          </>
        ) : (
          <PrimaryButton text='Sign In' className='ml-3' onClick={loginWithRedirect} />
        )}
      </div>
    </header>
  );
};
