import { BsCartPlus } from 'react-icons/bs';
import {
  EmptyInfo,
  EmptyListWrapper,
  LinkToHome,
} from './ShoppingCartList.styled';

export const EmptyList = ({ info }) => {
  return (
    <EmptyListWrapper>
      <LinkToHome to="/">
        <BsCartPlus size="150px" />
      </LinkToHome>
      <EmptyInfo>{info}</EmptyInfo>
    </EmptyListWrapper>
  );
};
