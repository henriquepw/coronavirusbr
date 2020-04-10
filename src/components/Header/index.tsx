import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import NavItem from './NavItem';

import { Container, Menu } from './styles';

const menuList = [
  { id: 'menu1', title: 'Home', href: '/#home' },
  { id: 'menu2', title: 'O que é', href: '/#o-que-e' },
  { id: 'menu3', title: 'Sintomas', href: '/#sintomas' },
  { id: 'menu4', title: 'Cuidados', href: '/#cuidados' },
  { id: 'menu5', title: 'Links Úteis', href: '/#links' },
];

function Header() {
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(() => {
    const { pathname, hash } = window.location;

    return pathname === '/sobre' ? '/sobre' : hash;
  });

  function handlerSelected(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string
  ) {
    event.preventDefault();

    if (selected !== name) {
      setSelected(name);
      document.getElementById(name)?.scrollIntoView();
    }

    setPressed(false);
  }

  function togglePressed() {
    setPressed(!pressed);
  }

  return (
    <Container>
      <Menu pressed={pressed}>
        <FaBars size={32} onClick={togglePressed} />
        <nav>
          <ul>
            {menuList.map(item => (
              <NavItem
                key={item.id}
                onClick={handlerSelected}
                selected={selected}
                item={item}
              />
            ))}
          </ul>
        </nav>
      </Menu>
    </Container>
  );
}

export default Header;
