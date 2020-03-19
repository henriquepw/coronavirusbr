import React from 'react';

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
  return (
    <Container>
      <nav>
        <ul>
          {DATA.map(item => (
            <li key={`${item.key}_${item.name}`}>
              <a
                href={`#${item.name
                  .toLowerCase()
                  .split(' ')
                  .join()}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
