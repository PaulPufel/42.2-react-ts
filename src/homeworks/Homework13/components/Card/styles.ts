import styled from "@emotion/styled"

interface CardShowProps {
    isShowResult: boolean;
}

export const CardContainer = styled.div<CardShowProps>`
    display: ${({ isShowResult }) => isShowResult ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    width: auto;
    height: auto;
    border-radius: 10px;
    background-color: #3BF5C0;
`
export const CardName = styled.p`
    font-size: 24px;
` 