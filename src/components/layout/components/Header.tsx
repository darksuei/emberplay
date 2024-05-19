import "../../../assets/css/index.css";
import { BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Search } from "./Search";
import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { PrimaryButton } from "../../ui";
import { useAuth0 } from "@auth0/auth0-react";
import { APP_NAME } from "../../../utils/constants";
import { capitalizeFirstLetter } from "../../../utils";
import { useDarkMode } from "../../../hooks/useDarkMode";

export const Header = () => {
  const { loginWithRedirect, user, logout } = useAuth0();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className='h-24 w-full px-14 py-5 border border-bottom flex flex-row items-center justify-between'>
      <h1 className='pacifico-regular text-3xl text-teal-600'>{APP_NAME}</h1>
      <Search />
      <div className='flex flex-row items-center'>
        <IconButton
          aria-label='Toggle Mode'
          variant='outline'
          border={0}
          icon={
            darkMode ? <SunIcon boxSize={6} color='teal.400' /> : <MoonIcon boxSize={6} color='teal.400' />
          }
          onClick={toggleDarkMode}
        />
        {user ? (
          <>
            <IconButton
              aria-label='Notifications'
              variant='outline'
              border={0}
              icon={<BellIcon boxSize={6} color='teal.400' />}
            />
            <Menu isLazy>
              <MenuButton>
                <img src={user.picture} alt='User Image' className='rounded-full w-10 ml-3 cursor-pointer' />
              </MenuButton>
              <MenuList>
                <div className='flex flex-col justify-center items-center p-4'>
                  <img
                    src={user.picture}
                    alt='User Image'
                    className='rounded-full w-16 cursor-pointer mb-4'
                  />
                  <p className='text-center'>
                    {capitalizeFirstLetter(user.given_name) + " " + capitalizeFirstLetter(user.family_name)}
                  </p>
                  <p className='mb-3'>@user_name</p>
                  <PrimaryButton text='Log Out' className='' onClick={logout} />
                </div>
              </MenuList>
            </Menu>
          </>
        ) : (
          <PrimaryButton text='Login' className='ml-3' onClick={loginWithRedirect} />
        )}
      </div>
    </header>
  );
};
