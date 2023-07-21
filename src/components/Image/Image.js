import React from 'react';
import { StyledImage } from './Styles';

const Image = ({src, alt, typeImg, cardView}) => {
 
    return(
        <StyledImage className={typeImg} src={src} alt={alt} cardView={cardView} />
    )
};

export default Image;