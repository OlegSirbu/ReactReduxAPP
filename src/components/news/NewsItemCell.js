import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Card, CardText, CardTitle } from 'material-ui/Card';

const NewsItemCell = ({tile, id}) => {
		const style = {
				titleColor: {'color': '#000', 'fontWeight': 'bold', 'fontSize': '22px'}
		};
		return(
		<Link to={`/news/${id}`} >
				<Card>
						<CardTitle
								title={tile.title}
								titleStyle={style.titleColor}
							 subtitle={tile.category}
						/>
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
