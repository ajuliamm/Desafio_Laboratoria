import { styled } from "styled-components"

export const StyledButton = styled.button`
    &.theme{
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #555555;
        opacity: .8;
        color: #fff;
        font-size: 1.8rem;
        
    }
    &.cardView{
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        font-size: 2rem;
        margin-left: 7px;

        
        
    
    }
    &.more{
        width: 30px;
        height: 30px;
        border: none;
        background-color: rgb(165, 163, 163, 59%);
        border-radius: 50%;
        font-size: 2rem;
        margin-left: 7px;
        position:absolute;
        right: 3px;
        top: 5px;
        z-index: 1;
        opacity: .5;      
        box-shadow:0 2px 5px 0 ;
        @media (min-width:1180px) {
            display:  ${props => props.cardView === "horizontal" ? "block" : "none"};
            



        }
    
    }

    &.more.picture{
        left: -5px;
        opacity: 1;
        background-color: rgb(165, 163, 163, 99%);
        display: block;
        z-index: 2;
    }
    &.pages{
        margin: 10px;
        width: 100px;
        height: 20px;
        background-color: rgb(29,30,18,30%);
        border-radius: 3px;
        outline: none;
        border: 1px solid grey;

    }
    &.finan, &.contact{
        width: 100%;
        height: 25px;
        border-radius: 5px;
        outline: none;
        font-weight: 500;
        font-size: 1.1rem;
        @media (min-width: 440px){
                font-size: 1.4rem;
                height: 35px;
                border-radius: 10px;
                margin-top: 2px ;
        }
        &:hover{
            opacity: .5;
            
        }
        &:active{
            opacity: .8;
        }
    }


`;