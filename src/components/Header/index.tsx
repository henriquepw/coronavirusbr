import React, { useState } from 'react';

import NavItem from './NavItem';

import { Container } from './styles';

const DATA = [
  {
    key: 1,
    name: 'Home',
  },
  {
    key: 2,
    name: 'Cuidados',
  },
  {
    key: 3,
    name: 'Links Úteis',
  },
];

function Header() {
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
  }

  return (
    <Container>
      <nav>
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
      </nav>
    </Container>
  );
}

export default Header;
