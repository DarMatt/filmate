import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { getUserDataSelector } from '../../selectors/selectors';
import allGenres from './allGenres';
import { GenerWrapperStyled, TitleStyled, ListOfGenresStyled, GenerItemStyled } from './styles';

export interface MatchParams {
  genre: string;
}

export const Genres: React.FC = () => {
  const [valueOption, setValueOption] = useState<string>('Popular');
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { params } = useRouteMatch<MatchParams>();
  const userData = useAppSelector(getUserDataSelector);
  const { t } = useTranslation(['common']);
  const url = useRouteMatch();
  console.log('url', url);
  useEffect(() => {
    const searchGenre = allGenres?.find((genre): { id: number; gener: string } | boolean => {
      return genre.id === +params.genre;
    });
    setValueOption(searchGenre?.gener! || 'Popular');
  }, [params.genre]);

  console.log(valueOption);

  const onGenre = (e: any) => {
    const { value } = e.target;
    setValueOption(value);
    const select = e.target;
    const id = select.children[select.selectedIndex].id;
    const isPopular = id === 'popular';
    !isPopular ? history.push(`/main-page/${id}`) : history.push('/main-page');
    isPopular
      ? dispatch(movieAsyncActions.setMoviesAction(null))
      : dispatch(movieAsyncActions.setMoviesGenre(id));
  };

  return (
    <GenerWrapperStyled>
      <TitleStyled>
        {t('sort_by')}:<span>{t(valueOption)}</span>
      </TitleStyled>
      <label htmlFor="">
        {t('genres')}:
        <ListOfGenresStyled value={valueOption} onChange={onGenre}>
          {allGenres.map((genre) => (
            <option id={genre.id} key={genre.gener} value={genre.gener}>
              {t(genre.gener)}
            </option>
          ))}
        </ListOfGenresStyled>
        <span className="icon-next-right-arrow"></span>
      </label>
    </GenerWrapperStyled>
  );
};
