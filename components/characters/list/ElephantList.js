import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ElephantItem from "./ElephantItem";

export default function ElephantList({ elephants }) {
	var items = elephants.map(elephant => {
		return (
			<Col sm={6} md={3} key={elephant._id}>
				<ElephantItem elephant={elephant} />
			</Col>
		);
	});

	return <Row>{items}</Row>;
}

ElephantList.propTypes = {
	elephants: PropTypes.arrayOf(PropTypes.object).isRequired
};
