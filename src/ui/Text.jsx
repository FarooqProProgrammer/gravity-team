import styled from "styled-components";

// Styled component with dynamic max-width
const DescriptionItem = styled.p`
  /* Default max-width for smaller screens */
  max-width: ${(props) => props.maxWidth || '100%'};

  /* Media query for larger screens */
  @media (min-width: 992px) {
    max-width: ${(props) => props.maxWidthDesktop || props.maxWidth || '60%'};
  }
`;

export const Description = ({ children, maxWidth, maxWidthDesktop }) => {
  return (
    <DescriptionItem
      className="text-white text-center"
      maxWidth={maxWidth}
      maxWidthDesktop={maxWidthDesktop}
    >
      {children}
    </DescriptionItem>
  );
};
