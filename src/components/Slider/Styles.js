import styled from 'styled-components';

export const StyledSlider = styled.div`
   
  width:${props => props.cardView === "horizontal" ? "auto" : "100%"};
  height:${props => props.cardView === "horizontal" ? "100%" : "auto"};
    
  @media (min-width:560px) {
    width:${props => props.cardView === "horizontal" ? "80%" : "100%"};
          
  }
    
`;