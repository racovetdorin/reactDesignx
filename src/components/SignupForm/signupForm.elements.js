import styled from 'styled-components';

export const MainDiv = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    background:#101522;
`;
export const Form = styled.form`
    background-color:#fff;
    opacity:1;
    border-radius:10px;
    width:450px;
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow: 15px 20px 30px rgba(0,0,0,0.3);
    @media screen and (max-width:700px){
    width:70%;
};

input{
    border:none;
    background-color:#fff;
    border-radius:5px;
    width:200px;
    height:40px;
    margin:0.5rem 0;
    box-sizing:border-box;
    }
    h2{
        color:black;
        padding-bottom:0.4em;
        padding-top:0.3em;
    }
`;
export const Submit = styled.button`
    background-color:gray;
    border:none;
    color:white;
    padding:10px 22px;
    text-align:center;
    text-decoration:none;
    display:inline-block;
    font-size:15px;
    border-radius:4px;
    &:hover{
    background-color:#A0A0A0;    
    }
`;