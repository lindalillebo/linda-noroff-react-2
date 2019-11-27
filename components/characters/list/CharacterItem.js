import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Name from "./Name";
import Image from "./Image";

export default function CharacterItem({ character }) {
    const { name, image, species, gender } = character;

    return (
        <Card species={species}>
            <Name>{name}</Name>
            <Image src={image} gender={gender} />
        </Card>
    );
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
};