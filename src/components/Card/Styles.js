import { styled } from "styled-components"

export const ContainerCard = styled.div`
    width:  ${props => props.cardView === "horizontal" ? "90vw" : "95vw"};
    border-radius: 20px;
    background-color: rgb(165, 163, 163, 29%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0px 10px 0 grey;
    position: relative;
    @media (min-width: 640px){
        width: ${props => props.cardView === "horizontal" ? "290px": "90vw"};
    }
    @media (min-width: 1226px){
        max-width: ${props => props.cardView === "horizontal" ? "290px": "1050px"};
    }
    &:hover{
        box-shadow: 0 0px 10px 0 #FDE535;
    }

`;

export const More = styled.div`
    width: 30px;
    height: 30px;
    border: none;
    background-color: rgb(165, 163, 163, 59%);
    border-radius: 50%;
   
    margin-left: 7px;
    position:absolute;
    left: -5px;
    top: 5px;
    i{
        font-size: 4rem;
    }
`;

export const Section = styled.div`
    &.img-infos{
        width: 100%;
        border-radius: 20px;

        display: flex;
        flex-direction: ${props => props.cardView === "horizontal" ? "column": "row"};

        @media (min-width: 640px){
            width: ${props => props.cardView === "horizontal" ? "290px": "90vw"};
            
        }

        
    }
    &.img{
        background-color: #FDE535;
        width: ${props => props.cardView === "horizontal" ? "100%" : "50%"};
        
        border-radius: 10px;
        @media (min-width: 640px){
            width: ${props => props.cardView === "horizontal" ? "100%" : "30%"};
        }
        @media (min-width: 800px){
            width: ${props => props.cardView === "horizontal" ? "100%" : "30%"};
            
            max-height: ${props => props.cardView === "horizontal" ? "100%" : "220px"} ;
            max-width:  ${props => props.cardView === "horizontal" ? "100%" : "266px"};
    
        }

    }
    &.info-cars{
        
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px 10px;
        justify-content: space-around;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (min-width: 640px){
            /* width: ${props => props.cardView === "horizontal" ? "100%" : "65%"}; */
        }
        

    }
    &.description{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 0;
    }

    &.city-like{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-top: 1px solid #8C8C88;
        align-items: center;

        p{
            font-size: 1.2rem;
        }
        i{
            font-size: 1.6rem;
            &:hover{
                color: red;
            }
        }
    }
    &.city{
        display: flex;
        gap: 5px;
        align-items: center;
    }
    &.acessorios{
        display: none;
        width: 277px;
        h4{
            margin: 10px 0 0 18px;
        }
        
        div{
            background-color: rgb(165, 163, 163, 29%);
            align-self: center;
            width: 80%;
            min-height: 60%;
            border-radius: 20px;
            padding: 15px;
            @media (min-width:1500px) {
                max-width: 250px;
            }


        }
            
        
        @media (min-width:1180px) {
            display:  ${props => props.cardView === "horizontal" ? "none" : "flex"};
            flex-direction: column;
            gap: 5px;


        }
        
    }
    &.acessorios-fullcard{
        background-color: rgb(165, 163, 163, 95%);
        
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;            
        width: 100%;
        height: 100%;
        position: absolute;
        visibility:${props => !props.moreBtn ? "hidden" : "visible"};;
        overflow-y: scroll;
        h4{
           
            font-size: 1.8rem;
        }
        p{
            font-size: 1.4rem;
            padding: 10px 20px;
            text-align: center;
        }             
        @media (min-width:1180px) {
            display:  ${props => props.cardView === "horizontal" ? "flex" : "none"};
            flex-direction: column;
            gap: 5px;


        }
        
    }
    &.pictures-fullcard{
        background-color: rgb(165, 163, 163, 95%);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;            
        width: 100%;
        height: 100%;
        position: absolute;
        visibility:${props => !props.openPictures ? "hidden" : "visible"};
        overflow-y: scroll;
             
        @media (min-width:1180px) {
            
            flex-direction: column;
            gap: 5px;


        }
        
    }

`;


export const Price = styled.h2`
    padding: 10px ;
    font-size: ${props => props.cardView === "horizontal" ? "2.2rem" : "1.6rem"};
    color: #000;
    @media (min-width: 520px){
        font-size: 2.2rem;
        
    }
    @media (min-width: 1200px){
        padding: 5px;
        
    }
`;
export const Marca = styled.h1`
    font-size:2.2rem;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;

export const Modelo = styled.h3`
    font-size: 1.6rem;
    color: #8C8C88;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
`;
export const DivInfo = styled.div`
    background-color: #7C7A6D;
    min-width:40%;
    min-height:20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1px;
    @media (min-width: 400px){
        min-width:40%;
        
    }
    @media (min-width: 500px){
        min-width:100px;
        padding: 0 5px;
    }
    
    
`;
export const Info = styled.p`
    color: #fff;
    font-weight:400;
    font-size: 1rem;
    @media (min-width: 640px){
        font-size: 1.2rem;
    }
`;
export const DivButton = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    
    
`;
