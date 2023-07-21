import React from "react";
import {StyledButton} from "./Styles"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Button = ({content, onClick, typeBtn, cardView}) => { 
      
    return(
        <StyledButton cardView={cardView} className={typeBtn} onClick={onClick}>
            {content}
        </StyledButton>
    )
}
export default Button;