import React, { useState } from 'react';

import { Container, Item } from './styles';

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
  const [selected, setSelected] = useState('home');

  function handleClick(item: string) {
    setSelected(item);
  }

  return (
    <Container>
      <nav>
        <ul>
          {DATA.map(item => (
            <Item
              onClick={() => handleClick(item.name)}
              selected={selected === item.name}
              key={`${item.key}_${item.name}`}
            >
              <a
                href={`#${item.name
                  .toLowerCase()
                  .split(' ')
                  .join('-')}`}
              >
                {item.name}
              </a>
            </Item>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
