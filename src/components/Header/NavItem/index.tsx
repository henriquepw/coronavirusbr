import React, { FC, useMemo } from 'react';

import { Container } from './styles';

type Event<T> = React.MouseEvent<T, MouseEvent>;

interface Props {
  item: {
    key: number;
    name: string;
  };
  selected: string;
  onClick: (event: Event<HTMLLIElement>, name: string) => void;
}

const NavItem: FC<Props> = ({ item, selected, onClick }) => {
  const formattedName = useMemo(() => item.name.toLowerCase().split(' ')[0], [
    item.name,
  ]);

  function preventDefault(event: Event<HTMLAnchorElement>) {
    event.preventDefault();
  }

  return (
    <Container
      onClick={e => onClick(e, formattedName)}
      selected={selected === formattedName}
    >
      <a href={`#${formattedName}`} onClick={preventDefault}>
        {item.name}
      </a>
    </Container>
  );
};

export default NavItem;
