import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Card, CardText, CardTitle } from 'material-ui/Card';

const NewsItemCell = ({tile}) => {
		return(
		<Link to={`/news/${tile.id}`} >
				<Card>
						<CardTitle title={tile.name}  subtitle={tile.category} />
						<CardText>
								{tile.description}
						</CardText>
				</Card>
		</Link>
		);
};

NewsItemCell.propTypes = {
		item: PropTypes.object
};

export default NewsItemCell;
