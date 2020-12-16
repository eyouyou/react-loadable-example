import styled from "styled-components";


interface GridLayoutBaseProps {
    margin?: string,
}

interface GridLayoutProps {
    justify?: string,// 主轴居中 
    align?: string,// 交叉轴居中 
    gap?: string,
}

export const LayoutBase = styled.div`
    margin: ${(props: GridLayoutBaseProps) => props.margin || "0rem 0rem 0rem 0rem"}
`;

export const GridLayout = styled(LayoutBase)`
　　display: grid; // 设置grid布局方式 
    grid-gap: ${(props: GridLayoutProps) => props.gap || "0rem 0rem"};
    justify-items: ${(props: GridLayoutProps) => props.justify || "center"};  
    align-items: ${props => props.align || "center"};  
`;
