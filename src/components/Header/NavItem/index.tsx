import React, { FC } from 'react';

import { Link } from 'gatsby';

import { Container } from './styles';

type Event<T> = React.MouseEvent<T, MouseEvent>;

interface Props {
  item: {
    id: string;
    title: string;
    href: string;
  };
  selected: string;
  onClick: (event: Event<HTMLLIElement>, name: string) => void;
}

const NavItem: FC<Props> = ({ item, selected, onClick }) => (
  <Container
    onClick={e => onClick(e, item.href)}
    selected={selected === item.href}
  >
    <Link to={item.href}>{item.title}</Link>
  </Container>
);

export default NavItem;
