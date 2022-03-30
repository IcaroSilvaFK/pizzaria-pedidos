import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	


	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body,#root{
		width: 100%;
		height: 100%;
	}	
	body,input,button,a{
		font-family: 'Poppins', sans-serif;

	}

	button{
		cursor: pointer;
	}
	input,button{
		border:none;
		outline: none;
	}
`;
