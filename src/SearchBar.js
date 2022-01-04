import React from 'react';

const SearchBar = ({
    bearNumber,
    setBearNumber,
    handleSearch,
    isUrlSearch,
    trustMarketUrl,
    setTrustMarketUrl,
}) => {
    const label = isUrlSearch ? 'Bear: ' : 'Bear #: ';
    const placeholder = isUrlSearch ? 'https://trust.market/nft/BEAR-97a7b6-0124' : '8782';
    const type = isUrlSearch ? 'url' : 'number';
    const value = isUrlSearch ? trustMarketUrl : bearNumber;
    const setFunc = isUrlSearch ? setTrustMarketUrl : setBearNumber;

    return (
        <form className='search-bar'>
            <label htmlFor='search'>{label}</label>
            <input
                id='search-field'
                name='search'
                placeholder={placeholder}
                autoFocus={true}
                type={type}
                onChange={e => setFunc(e.target.value)}
                value={value}
            />
            <input type='submit' onClick={handleSearch} value='Search' />
        </form>
    );
};

export default SearchBar;
