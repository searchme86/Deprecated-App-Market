import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import MoonLoader from 'react-spinners/MoonLoader';
import axios from 'axios';
import SearchResult from './SearchResult';

import {
  SearchBarContainer,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  CloseIcon,
  LineSeperator,
  SearchContent,
  LoadingWrapper,
  WarningMessage,
  TvShowContainer,
} from './SearchBox.style';
import SearchDebounce from './SearchBounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { OffScreenSpan } from '../../Assets/Styles/Basic.style';

import { HeaderSearchBtn } from '../../Config/Styles/Button.style.js';

function SearchBox() {
  const containerTransition = { type: 'spring', damping: 22, stiffness: 150 };
  const containerVariants = {
    expanded: {
      width: '500px',
    },
    collapsed: {
      height: '3.8em',
    },
  };

  const searchInputRef = useRef(null);

  const [Expand, setExpand] = useState(false);
  // 검색바를 보여주고 사라지는 상태(height)
  const [height, setHeight] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const dataEmpty = !products || products.length === 0;

  const changeHandler = useCallback((e) => {
    e.preventDefault();
    if (e.target.value.trim() === '') setSearched(false);
    setHeight(true);
    setQuery(e.target.value);
  }, []);

  const showBoxUp = useCallback(() => {
    setExpand((value) => !value);
  }, []);

  const hideBoxDown = useCallback(() => {
    setExpand(false);
  }, []);

  useEffect(() => {
    const clearHistory = () => {
      setHeight(false);
      setQuery('');
      setLoading(false);
      setSearched(false);
      setProducts([]);
      if (searchInputRef.current) searchInputRef.current.value = '';
    };

    const checkInputNum = () => {
      if (!query.length === 0) {
        setExpand(true);
        setHeight(true);
        return;
      }
      clearHistory();
    };

    if (query.length === 0) {
      checkInputNum();
    }
  }, [query.length]);

  const sendQuery = useCallback((query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;
    return encodeURI(url);
  }, []);

  const findItem = useCallback(async () => {
    if (!query || query.trim() === '') return;

    setLoading(true);
    setSearched(false);

    const URL = sendQuery(query);

    const response = await axios.get(URL).catch((err) => {
      console.log('Error: ', err);
    });

    if (response) {
      console.log('Response: ', response.data);
      if (response.data && response.data.length === 0) setSearched(true);
      setProducts(response.data);
    }
    setLoading(false);
  }, [sendQuery, query]);

  SearchDebounce(query, 500, findItem);

  console.log('query', query.length);
  console.log('expand', Expand);
  console.log('height', height);

  return (
    <>
      <SearchBarContainer
        animate={Expand ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        transition={containerTransition}
        style={{ position: 'relative' }}
      >
        <SearchInputContainer>
          {Expand && (
            <>
              <SearchIcon style={{ display: 'block', marginRight: '10px' }}>
                <IoSearch />
              </SearchIcon>
              <SearchInput
                placeholder="어떤 상품을 검색해볼까요?"
                ref={searchInputRef}
                value={query}
                onChange={changeHandler}
              />
            </>
          )}
          <AnimatePresence>
            {Expand && (
              <CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={hideBoxDown}
                transition={{ duration: 0.2 }}
              >
                <IoClose />
              </CloseIcon>
            )}
          </AnimatePresence>
        </SearchInputContainer>
        {Expand && <LineSeperator />}
        {Expand ? (
          height ? (
            <SearchContent>
              {Loading && (
                <LoadingWrapper>
                  <MoonLoader loading color="#000" size={20} />
                </LoadingWrapper>
              )}
              {!Loading && dataEmpty && !searched && (
                <LoadingWrapper>
                  <WarningMessage>
                    검색하려는 상품명을 입력해주세요
                  </WarningMessage>
                </LoadingWrapper>
              )}
              {!Loading && searched && (
                <LoadingWrapper>
                  <WarningMessage>
                    해당 상품이 존재하지 않습니다.
                  </WarningMessage>
                </LoadingWrapper>
              )}
              {!Loading && !dataEmpty && (
                <>
                  <TvShowContainer>
                    {products.map(({ show }) => (
                      <SearchResult
                        key={show.id}
                        thumbanilSrc={show.image && show.image.medium}
                        name={show.name}
                        rating={show.rating && show.rating.average}
                      />
                    ))}
                  </TvShowContainer>
                </>
              )}
            </SearchContent>
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </SearchBarContainer>
      <HeaderSearchBtn type="button" onClick={showBoxUp}>
        <OffScreenSpan>상품검색 버튼</OffScreenSpan>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            fontSize: 20,
            color: '#000',
          }}
        />
      </HeaderSearchBtn>
    </>
  );
}

export default SearchBox;
