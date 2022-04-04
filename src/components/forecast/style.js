import styled from "styled-components"

export const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width:100%;

    
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : "white"};
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;

    color: white; 
    .innerContainer{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,0.30);
        img{
            display: flex;
            width: 100px;
            height: 100px;
            margin: 0 auto;
        }
    }

    @media(min-width: 768px) {
        width:65%;
        border-radius: 0 2rem 2rem 0;
        .innerContainer{
            border-radius: 0 2rem 2rem 0;
        }
    }
`;
export const UpperContainer = styled.div`
    padding: 1rem 2rem;
    .location,.clock{
        font-size: 3.6rem;
        font-weight: 600;
        text-align: center;
        line-break: auto;
        word-break: break-all;
    }
    .clock{
        font-size: 4.0rem;
        font-weight: 600;
        text-align: center;
    }
`
export const LowerContainer = styled.div`
        background-color: rgba(20,23,37,0.75);
        
    hr{
        background-color: white;
        margin: 0 auto;
        width: 100%;
        max-width: 768px;
    }
    @media(min-width: 768px) {
        border-radius: 0 0 2rem 0;
    }
`

export const PrimaryDate = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    margin:0 auto;
    padding: 1rem 0;

    svg{
        font-size: 8rem;
    }
    .date-temp{
        display: flex;
        flex-direction: column;
        font-weight: 300;
        .date{
            font-size: 2rem;
            margin: 0 1rem;
            text-align: left;
            
        }
        .temp{
            font-size: 1.6rem;
            span{
                margin: 0 1rem;
            }
        }
    }
`
export const DatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 768px) {
        flex-direction: row;
    }

`
export const SecondaryDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    text-align: center;
    flex: 1 1 0;

    padding-bottom: 2rem;
    padding-top: 1rem;

    border-bottom: 1px solid rgba(255,255,255,0.35);

    .date{
        font-size: 1.6rem;
    }
    .icon-temp{
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 1.4rem;
        }
    }

    svg{
        font-size:4rem;
        }
    p{
     margin: 0 1rem;
    }

    @media(min-width: 768px) {
        display: block;
        .icon-temp{
            display: block;
        }

        border: none;
        svg{
        font-size:7vw;
        }
    }
        
    }
    @media(min-width: 1440px) {
        svg{
        font-size:6rem;
        }
        
    }
`

export const Message = styled.p`
    z-index: 1;
    text-align: center;
    margin: 2rem auto;
    height: 100%;
    font-weight: 600;
    span{
        margin-top: 1rem;
        font-size:.85rem ;
    }
    a{
        text-decoration: underline;
        color: white;
    }

    padding:0 1rem;
`;
