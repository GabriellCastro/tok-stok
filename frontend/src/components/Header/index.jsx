import Image from 'next/image';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div>
      <nav className="bg-gray-900 flex justify-around items-center flex-wrap p-4">
        <div className="">
          <Image src={logo} height="90px" width="150px" />
        </div>
        <div>
          <h1 className="font-semibold  text-3xl text-center text-white tracking-tight">Fornecedores</h1>
        </div>
        <div>
          <a href="https://github.com/GabriellCastro" target="_blank" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" rel="noreferrer">
            Github
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
