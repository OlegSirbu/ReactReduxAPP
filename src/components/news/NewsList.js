import React from 'react';
import PropTypes from 'prop-types';
import {GridList} from 'material-ui/GridList';
import NewsItemCell from './NewsItemCell';

const NewsList = ({ news }) => {
		return (
			<GridList>
					{news.map((tile) => (
							<NewsItemCell tile={tile} key={tile.publishedAt+'_'+tile.url}/>
					))}
			</GridList>
		);
};

NewsList.propTypes =  {
		news: PropTypes.array
};

export default NewsList;
