import React from 'react';
import PropTypes from 'prop-types';
import {GridList} from 'material-ui/GridList';
import NewsItemCell from './NewsItemCell';

const NewsList = ({ news }) => {
		return (
			<GridList>
					{news.map((tile) => (
							<NewsItemCell id={tile.url.split("/").pop(-1)} tile={tile} key={tile.publishedAt+'_'+tile.url}/>
					))}
			</GridList>
		);
};

NewsList.propTypes =  {
		news: PropTypes.array
};

export default NewsList;
