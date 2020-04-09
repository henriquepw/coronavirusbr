import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import NavItem from './NavItem';

import { Container, Menu } from './styles';

const DATA = [
  {
    key: 1,
    name: 'Home',
  },
  {
    key: 2,
    name: 'Sintomas',
  },
  {
    key: 3,
    name: 'Cuidados',
  },
  {
    key: 4,
    name: 'Links Úteis',
  },
];

function Header() {
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(() => {
    const hash = window.location.hash.split('#')[1];

    if (
      !DATA.filter(item => item.name.split(' ')[0].toLowerCase() === hash)
        .length
    ) {
      return 'home';
    }

    window.location.hash = '';

    return hash;
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
        <ul>
          {DATA.map(item => (
            <NavItem
              key={`${item.key}_${item.name}`}
              onClick={handlerSelected}
              selected={selected}
              item={item}
            />
          ))}
        </ul>
      </Menu>
    </Container>
  );
}

export default Header;
